import {filter, map, mergeMap} from "rxjs/operators";
import {
    changeProvider,
    changeProviderApiRequest,
    getProviderNameApiRequest,
    setProvider
} from "../reducers/providerSlice";
import {from} from "rxjs";
import {combineEpics} from "redux-observable";
import {changeProviderMutation} from "../graphQL/mutation/provider/changeProviderMutation";
import {getProviderNameQuery} from "../graphQL/query/provider/getProviderNameQuery";

const SetProviderNameEpic = action$ => {
    return action$.pipe(
        filter(getProviderNameApiRequest.match),
        mergeMap((action)=>{
            return from(getProviderNameQuery())
                .pipe(
                    map(data=>{
                        const provider = data.data.service.getProvider;
                        return setProvider(provider);
                    })
                );
        })
    )
}

const ChangeProviderEpic = action$ => {
    return action$.pipe(
        filter(changeProviderApiRequest.match),
        mergeMap((action)=>{
            return from(changeProviderMutation(action.payload))
                .pipe(
                    map(data=>{
                        const provider = data.data.service.changeProvider;
                        return changeProvider(provider);
                    })
                );
        })
    )
}

export const providerEpic = combineEpics(SetProviderNameEpic, ChangeProviderEpic);