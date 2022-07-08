import {Grid, Menu, Button, Modal} from 'semantic-ui-react'
import Products from "./Products";
import { useState, useEffect } from "react";

import * as productServices from "../../services/productServices";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [activeItem, setActiveItem] = useState("");
    const [isNew, setIsNew] = useState(false);

    useEffect( () => {
        productServices.getProductList()
            .then((jsonResponse) => {
                setProducts(prevState => [...prevState, ...jsonResponse])
            });
    }, []);

    const addProductHandle = () => {
        if(isNew) return;

        const newProduct = {name: "new"};
        setProducts( prevState => ([...prevState, newProduct]));
        setIsNew(true);
        setActiveItem("new");
    };

    const setProductsHandler = (productArray) => {
        const newProductsArray = Object.values(products).filter(el => el._id );
        newProductsArray.push(productArray);

        setProducts(newProductsArray);
        setActiveItem(productArray.name);
        setIsNew(false);
    }

    return (
        <Grid>
            <Grid.Column width={4}>
                <Button disabled={isNew} positive onClick={addProductHandle}>Neu</Button>
                <Menu fluid vertical tabular>
                    {products ? products.map( (product) => {
                        if(!product) return;
                        if(!activeItem) setActiveItem(products[0].name)

                        const { name, _id, ueberschrift, allgemeintext} = product;

                        return <Menu.Item
                            name={name}
                            active={activeItem === name}
                            onClick={() => setActiveItem(name)}
                            key={_id ? _id : Math.random() * 2.5}
                        />;
                    }): ""}
                </Menu>
            </Grid.Column>
            <Grid.Column stretched width={12}>
                <Products name={activeItem} productsHandler={setProductsHandler} {...products} />
            </Grid.Column>
        </Grid>
    )
}

export default ProductList;