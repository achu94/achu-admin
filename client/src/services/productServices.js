export const getProductList = () => {
    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    };

    return fetch(`/api/product/`, requestOptions)
        .then(res => res.json()).then( data => {
            return data;
        }).catch(function (error) {
            console.log('Looks like there was a problem: \n', error);
        });
}

export const newProduct = (prductData) => {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(prductData)
    };
    return fetch(`/api/product/new`, requestOptions)
        .then(res => res.json())
        .catch(function (error) {
            console.log('Looks like there was a problem: \n', error);
        });
};

export const removeProduct = (id) => {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
    };
    return fetch(`/api/product/${id}`, requestOptions)
        .then(res => res.json())
        .catch(function (error) {
            console.log('Looks like there was a problem: \n', error);
        });
}