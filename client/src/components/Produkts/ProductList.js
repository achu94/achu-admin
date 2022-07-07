import {Grid, Menu, Button, Modal} from 'semantic-ui-react'
import Products from "./Products";
import { useState, useEffect } from "react";

import PopUP from "../PopUP";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [activeItem, setActiveItem] = useState("");
    const [isNew, setIsNew] = useState(false);

    useEffect( () => {
        fetch("/api/product")
            .then((res) => {
                if (res.ok) return res.json();
            })
            .then((jsonResponse) => setProducts(prevState => [...prevState, jsonResponse]));
    }, []);

    const addProductHandle = () => {
        if(isNew) return;

        const newProduct = {name: "new"};
        setProducts( prevState => ([...prevState, newProduct]));
        setIsNew(true);
    };

    return (
        <Grid>
            <Grid.Column width={4}>
                <Button disabled={isNew} positive onClick={addProductHandle}>Neu</Button>
                <Menu fluid vertical tabular>
                    {products ? products.map( (product) => {
                        if(!product) return;

                        const { name, _id} = product;

                        return <Menu.Item
                            name={name}
                            active={activeItem === name}
                            onClick={() => setActiveItem(name)}
                            key={_id}
                        />;
                    }): ""}
                </Menu>
            </Grid.Column>
            <Grid.Column stretched width={12}>
                <Products name={activeItem} />
            </Grid.Column>
        </Grid>
    )
}

export default ProductList;