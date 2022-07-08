import { Segment, Input } from "semantic-ui-react";
import NewProduct from "./NewProduct";

function Products(props) {
    const {name} = props;

    if(props.name === "new"){
        return <NewProduct productsHandler={props.productsHandler}/>
    }


    let product = {};
    if(props && props[0]){
        product = Object.values(props).filter( el => el.name === name)[0];
    }

    if(product) return (
        <Segment>
            <h1>{name}</h1>
            <h2>{product.ueberschrift}</h2>
            <h4>{product.allgemeintext}</h4>
        </Segment>
    )

    return <Segment>

    </Segment>


}

export default Products;
