import React, { Component, } from 'react'
import {
    Button,
    Form,
    Segment,
} from 'semantic-ui-react'
import MyDropzone from "../util/MyDropzone";
import * as productServices from "../../services/productServices";
import {uploadImage} from "../../services/productServices";

class NewProduct extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            uploadImages: [],
            itemValues: {
                name: this.props.name,
                ueberschrift: this.props.ueberschrift,
                allgemeintext: this.props.allgemeintext,
                itemId : this.props.editId
            }
        }

        this.onSubmitHandle = this.onSubmitHandle.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);

        this.src="https://react.semantic-ui.com/images/wireframe/image.png";
    }

    componentDidMount() {

        if(this.props.editId){
            const productData = Object.values(this.props).filter( el => el._id === this.props.editId)[0];

            this.setState( prevState => (
                prevState.itemValues  = productData
            ));
        }
    }

    onSubmitHandle(event){
        event.preventDefault();
        const {target} = event;

        // Wenn abgebrochen wird.
        if(target.type === 'button') return this.props.productsHandler();

        this.setState(prevState => prevState.isLoading = true);
        const submitData = Object.fromEntries(new FormData(target));

        if(!submitData.name || submitData.name.length < 3){
            this.setState(prevState => prevState.isLoading = false);
            return;
        }

        productServices.newProduct(submitData).then(res => {
            this.props.productsHandler(res);
        });
    }

    handleUserInput(e){
        this.setState( prevState => (
            prevState.itemValues[e.target.name] = e.target.value
        ));
    }

    render() {
        return (
            <Form loading={this.state.isLoading} onSubmit={this.onSubmitHandle} encType="multipart/form-data">
                <Form.Group widths='equal'>
                    <Form.Field>
                        <label>Bezeichnung</label>
                        <input type="text"
                               name="name"
                               placeholder='Bezeichnung'
                               autoFocus={true}
                               defaultValue={this.state.itemValues.name && this.state.itemValues.name !== 'new' ? this.state.itemValues.name : ""}
                               onChange={this.handleUserInput}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Kurz Bezeichnung</label>
                        <input type="text"
                               name="ueberschrift"
                               placeholder='Kurz Bezeichnung über das Produkt.'
                               defaultValue={this.state.itemValues.ueberschrift}
                        />
                    </Form.Field>
                </Form.Group>
                <Form.Field>
                    <label>Text</label>
                    <textarea
                           name="allgemeintext"
                           placeholder='Mehr über das Produkt.'
                           defaultValue={this.state.itemValues.allgemeintext}
                    />
                </Form.Field>
                <Form.Group>
                    <Form.Field positive control={Button}>Absenden</Form.Field>
                    <Form.Field floated='right' onClick={this.onSubmitHandle} type="button" negative control={Button}>Abbrechen</Form.Field>
                </Form.Group>
            </Form>
        )
    }
}

export default NewProduct