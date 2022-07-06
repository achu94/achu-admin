export const updateTime = (id, timeData) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(timeData)
    };
    return fetch(`/api/time/${id}/updateTime`, requestOptions)
        .then( res => res.json())
        .catch(function(error) {
            console.log('Looks like there was a problem: \n', error);
        });
}