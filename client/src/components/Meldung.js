import React from 'react'
import { Message } from 'semantic-ui-react'

const Meldung = (props) => {
    return <Message negative>
        <Message.Header>{props.header}</Message.Header>
        <p>{props.text}</p>
    </Message>
}

export default Meldung;