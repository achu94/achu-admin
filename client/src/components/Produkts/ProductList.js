import {Grid, Menu, Button} from 'semantic-ui-react'
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
        setIsNew(false);

        if(!productArray) {
            setActiveItem(prevState => (
                ""
            ));
            return;
        }

        const newProductsArray = Object.values(products).filter(el => {
            if(el._id && el._id !== productArray._id){
                return el;
            }
        });
        newProductsArray.push(productArray);
        setProducts(newProductsArray);
        setActiveItem(prevState => productArray.name);
    }

    const removeProduct = (productId) => {
        const newProductsArray = Object.values(products).filter(el => el._id !== productId);
        setActiveItem(_ => newProductsArray[0].name);
        setProducts(newProductsArray);
    }

    const newButtonHandler = () => {
        setIsNew(!isNew);
    }

    return (
        <Grid>
            <Grid.Column width={4}>
                <Button
                    color='teal'
                    icon='add'
                    disabled={isNew}
                    onClick={addProductHandle}
                />
                <Menu fluid vertical tabular>
                    {products ? products.map( (product) => {
                        if(!product) return;
                        if(!activeItem) setActiveItem(products[0].name)

                        const { name, _id} = product;

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
                <Products newButtonHandler={newButtonHandler} name={activeItem} productsHandler={setProductsHandler} removeProduct={removeProduct} {...products} />
            </Grid.Column>
        </Grid>
    )
}

export default ProductList;