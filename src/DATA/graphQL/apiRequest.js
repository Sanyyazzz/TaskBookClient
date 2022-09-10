export const apiRequest = (query, variables) => {
    const url = 'https://localhost:7267/graphql';

    const response = fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({query, variables})
    }).then(r => r.json())

    return response;
}