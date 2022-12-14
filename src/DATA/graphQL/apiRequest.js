export const apiRequest = (query, variables) => {
    const url = 'https://taskbookapi.somee.com/graphql';

    const response = fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({query, variables})
    }).then(r => r.json())

    return response;
}
