export const newUser = (userData) => {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userData)
    };
    return fetch(`/api/admin/register`, requestOptions)
        .then(res => res.json())
        .catch(function (error) {
            console.log('Looks like there was a problem: \n', error);
        });
};