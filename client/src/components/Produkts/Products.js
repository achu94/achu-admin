import {useState, useEffect, useRef} from "react";
import {Segment, Image, Button, Item} from "semantic-ui-react";
import NewProduct from "./NewProduct";
import * as productServices from "../../services/productServices";
import MyDropzone from "../util/MyDropzone";
import Modal from '../util/Modal';

function Products(props) {
    const [edit, setEdit] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const {name} = props;
    const ref = useRef();

    useEffect( () => {
        if(props[0] && props[0]._id) ref.productId = Object.values(props).filter( el => el.name === name)[0]._id;
    });

    const productAnpassenHandler = (id) => {
        setEdit( prevState => prevState = id);
        props.newButtonHandler();
    }

    const productLoeschenHandler = (id, answer) => {
        setModalOpen( modalOpen => !modalOpen);

        if (!answer) return;

        productServices.removeProduct(id).then( res => {
            if(res.deletedCount) {
                if(res.deletedCount) props.removeProduct(id);
            }
        });
    }

    const productAbbruchHandler = () => {
        setEdit( prevState => prevState = null);
        props.newButtonHandler();
        if(props.name === 'new') props.productsHandler(Object.values(props).filter( el => typeof el === 'object'));
    }

    async function onUploadImage(imageObj){
        if(!imageObj.name) return;

        const formData = new FormData();
        formData.append('file', imageObj);
        formData.append('productId', ref.productId);

        return productServices.uploadImage(formData);
    }

    const editHandleExported = () => {
        setEdit( prevState => prevState = null);
    }

    if(props.name === "new" || edit){
        return <NewProduct productAbbruchHandler={productAbbruchHandler} editHandleExported={editHandleExported} editId={edit} {...props} productsHandler={props.productsHandler}/>
    }

    let product = {};
    if(props && props[0]){
        product = Object.values(props).filter( el => el.name === name)[0];
    }

    const src="https://react.semantic-ui.com/images/wireframe/image.png";

    if(product) return(
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
                            {product.allgemeintext}
                        </Item.Description>
                    </Item.Content>
                </Item>
            </Item.Group>
            <Segment>
                <MyDropzone onUploadImageHandler={onUploadImage} inputName={"Galerie"}/>
            </Segment>
            <Image.Group size={"small"}>
                { typeof product.bilderid === 'object' && product.bilderid && product.bilderid.length?
                    product.bilderid.map( link => {
                        return <Image as={"img"} key={link._id} src={"https://achu-admin.s3.amazonaws.com/" + link.key} />
                    }) : ""
                }
            </Image.Group>
            <Modal
                open={modalOpen}
                size={'small'}
                id={product._id}
                callBackTrue={productLoeschenHandler}
                meldungHeader={`${product.name} wird gelöscht`}
                meldung="Diese vorgang kann nicht rückgängig gemacht werden, Sind Sie sicher?"
            >

            </Modal>
        </>
    )

    return <Segment>

    </Segment>
}

export default Products;
