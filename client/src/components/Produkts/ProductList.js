import { Grid, Menu, Button } from 'semantic-ui-react'
import Products from "./Products";
import { useState, useEffect } from "react";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [activeItem, setActiveItem] = useState("");

    useEffect( () => {
        fetch("/api/productList")
            .then((res) => {
                if (res.ok) return res.json();
            })
            .then((jsonResponse) => setProducts(prevState => [...prevState, jsonResponse.productList]));
    }, []);

    if(products.length < 1) return <h1>Loading...</h1>;

    return (
        <Grid>
            <Grid.Column width={4}>
                <Menu fluid vertical tabular>
                    {products[0].map( (product) => {
                        const { name, _id} = product;

                        return <Menu.Item
                            name={name}
                            active={activeItem === name}
                            onClick={() => setActiveItem(name)}
                            key={_id}
                        />;
                    })}
                </Menu>
            </Grid.Column>
            <Grid.Column stretched width={12}>
                <Products name={activeItem} />
            </Grid.Column>
            <Grid.Column size="small">
                <Button positive>Neu</Button>
            </Grid.Column>
        </Grid>
    )
}

export default ProductList;