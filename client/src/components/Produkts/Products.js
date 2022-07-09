import {Segment, Image, Button, Item} from "semantic-ui-react";
import NewProduct from "./NewProduct";
import * as productServices from "../../services/productServices";

function Products(props) {
    const {name} = props;

    const productAnpassenHandler = (id) => {
        alert('Anpassung:' + props.name, id);
    }

    const productLoeschenHandler = (id) => {
        productServices.removeProduct(id).then( res => {
            if(res.deletedCount) {
                if(res.deletedCount) props.removeProduct(id);
            }
        });
    }

    if(props.name === "new"){
        return <NewProduct productsHandler={props.productsHandler}/>
    }

    let product = {};
    if(props && props[0]){
        product = Object.values(props).filter( el => el.name === name)[0];
    }

    const loremText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

    const src="https://react.semantic-ui.com/images/wireframe/image.png";

    if(product) return (
        <>
            <Button.Group>
                <Button onClick={() => productAnpassenHandler(product._id)} color={"yellow"}>Anpassen</Button>
                <Button.Or />
                <Button onClick={() => productLoeschenHandler(product._id)} negative>Löschen</Button>
            </Button.Group>
            <Item.Group>
                <Item>
                    <Item.Image size={"tiny"} src={src} />
                    <Item.Content>
                        <Item.Header>{product.name}</Item.Header>
                        <Item.Meta>{product.ueberschrift}</Item.Meta>
                        <Item.Description>
                            {loremText}
                        </Item.Description>
                    </Item.Content>
                </Item>
            </Item.Group>
            <Image.Group size='tiny' spaced={true}>
                <Image src={src} />
                <Image src={src} />
                <Image src={src} />
                <Image src={src} />
                <Image src={src} />
                <Image src={src} /><Image src={src} /><Image src={src} /><Image src={src} /><Image src={src} /><Image src={src} />
            </Image.Group>
        </>
    )

    return <Segment>

    </Segment>


}

export default Products;
