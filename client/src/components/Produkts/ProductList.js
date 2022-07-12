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
        // das Object für neues Product anlegen wird entfernt.
        const newProductsArray = Object.values(products).filter(el => {
            if(el._id && el._id !== productArray._id){
                return el;
            }
        });

        // nur wenn neues Product geliefert wird.(productArray);
        if(productArray) {
            newProductsArray.push(productArray);
            setActiveItem(prevState => productArray.name);
        }
        else {
            setActiveItem("");
        }

        setProducts(newProductsArray);
        setIsNew(false);
    }

    const removeProduct = (productId) => {
        const newProductsArray = Object.values(products).filter(el => el._id !== productId);
        setProducts(newProductsArray);
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
                <Products name={activeItem} productsHandler={setProductsHandler} removeProduct={removeProduct} {...products} />
            </Grid.Column>
        </Grid>
    )
}

export default ProductList;