import React, { Component } from 'react'
import {
    Button,
    Form,
    Input,
    TextArea
} from 'semantic-ui-react'

import * as productServices from "../../services/productServices";

class NewProduct extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
        }

        this.onSubmitHandle = this.onSubmitHandle.bind(this);
    }

    onSubmitHandle(event){
        event.preventDefault();
        this.setState(prevState => prevState.isLoading = true);
        const {target} = event;

        const submitData = Object.fromEntries(new FormData(target));

        if(!submitData.name || submitData.name.length < 3){
            this.setState(prevState => prevState.isLoading = false);
            return;
        }

        if(!submitData.Galerie.name) delete submitData.Galerie;

        productServices.newProduct(submitData).then(res => {
            this.props.productsHandler(res);
        });
    }

    render() {
        return (
            <Form loading={this.state.isLoading} onSubmit={this.onSubmitHandle}>
                <Form.Group widths='equal'>
                    <Form.Field
                        control={Input}
                        label='Bezeichnung'
                        name="name"
                        placeholder='Bezeichnung'
                    />
                    <Form.Field
                        control={Input}
                        label='Kurz text'
                        name='ueberschrift'
                        placeholder='Kurz text'
                    />
                </Form.Group>
                <Form.Field
                    control={TextArea}
                    label='Text'
                    name='allgemeintext'
                    placeholder='Mehr über das Produkt'
                />

                <Form.Field
                    control={Input}
                    label='Galerie'
                    name='Galerie'
                    type="file"
                />
                <Form.Field control={Button}>Absenden</Form.Field>
            </Form>
        )
    }
}

export default NewProduct