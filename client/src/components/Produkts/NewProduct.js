import React, { Component } from 'react'
import {
    Button,
    Checkbox,
    Form,
    Input,
    Radio,
    Select,
    TextArea,
} from 'semantic-ui-react'

class NewProduct extends Component {
    state = {}

    handleChange = (e, { value }) => this.setState({ value })

    render() {
        const { value } = this.state
        return (
            <Form>
                <Form.Group widths='equal'>
                    <Form.Field
                        control={Input}
                        label='Bezeichnung'
                        placeholder='Bezeichnung'
                    />
                    <Form.Field
                        control={Input}
                        label='Kurz text'
                        placeholder='Kurz text'
                    />
                </Form.Group>
                <Form.Field
                    control={TextArea}
                    label='Text'
                    placeholder='Mehr über das Produkt'
                />

                <Form.Field
                    control={Input}
                    label='Galerie'
                    type="file"
                />
                <Form.Field control={Button}>Absenden</Form.Field>
            </Form>
        )
    }
}

export default NewProduct