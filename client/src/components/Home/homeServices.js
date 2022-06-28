export const updateItem = (id, itemData) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(itemData)
    };

    return fetch(`/api/${id}/updateItem`, requestOptions)
        .then( res => res.json())
        .catch(function(error) {
            console.log('Looks like there was a problem: \n', error);
        });
}