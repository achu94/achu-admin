export const isAuth = (token) => {
    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include'
    };

    return fetch(`/api/`, requestOptions)
        .then(res => {
            if(!res.ok) return res.ok;
            return res.json();
        })
        .catch(function (error) {
            console.log('Looks like there was a problem: \n', error);
        });
};

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

export const Login = (loginData) => {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(loginData)
    };
    return fetch(`/api/login`, requestOptions)
        .then(res => res.json())
        .catch(function (error) {
            console.log('Looks like there was a problem: \n', error);
        });
};