import { Segment, Input } from "semantic-ui-react";
import NewProduct from "./NewProduct";

function Products(props) {
    const {name} = props;

    if(props.name === "new"){
        return <NewProduct />
    }

    return<Segment>
        <h1>{name}</h1>
        This is an stretched grid column. This segment will always match the
        tab height
    </Segment>
}

export default Products;
