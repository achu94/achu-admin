import React, { useEffect } from 'react'
import { Button, Modal } from 'semantic-ui-react'

function reducer(state, action) {
    switch (action.type) {
        case 'close':
            return { open: false}
        case 'open':
            return { open: true, size: action.size }
        default:
            throw new Error('Unsupported action...')
    }
}

const Meldung = (props) => {
    const [state, dispatch] = React.useReducer(reducer, {
        open: false,
        size: props.size,
    })
    const { open, size} = state

    useEffect( () => {
        if(props.open) dispatch({ type: 'open' })
    },[props.open]);

    const onYes = () => {
        dispatch({ type: 'close' });
        if(props.callBackTrue) props.callBackTrue(props.id, true);
    }
    
    const onNo = () => {
        dispatch({ type: 'close' });
        if(props.callBackTrue) props.callBackTrue(props.id, false);
    }
    
    return (
        <>
            <Modal
                size={size}
                open={open}
                onClose={() => onNo()}
            >
                <Modal.Header>{props.meldungHeader}</Modal.Header>
                <Modal.Content>
                    <p>{props.meldung}</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button negative onClick={() => onNo()}>
                        Nein
                    </Button>
                    <Button positive onClick={() => onYes()}>
                        Ja
                    </Button>
                </Modal.Actions>
            </Modal>
        </>
    )
}

export default Meldung;