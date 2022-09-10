export const getTimeFromString = (date) => {
    if(date){
        let hours = date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`;
        let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.date.getMinutes()}`;
        let date = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
        let month = date.getMonth() < 10 ? `0${date.getMonth()}` : `${date.getMonth()}`;
        return (
            <>
                <span>
                    <span className="timeCard">{hours}:{minutes}</span>
                    {date}-{month}-{date.getFullYear()}
                </span>
            </>
        );
    }else{
        return "";
    }
}