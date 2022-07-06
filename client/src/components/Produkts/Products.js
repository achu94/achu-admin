import { Segment } from "semantic-ui-react";

function Products(props) {
    const {name} = props;

    return<Segment>
        <h1>{name}</h1>
        This is an stretched grid column. This segment will always match the
        tab height
    </Segment>
}

export default Products;
