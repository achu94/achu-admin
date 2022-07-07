import {Button, Modal} from "semantic-ui-react";

const modalInput = () => {
    const triggerButton = <Button positive>Neu</Button>;
    const inputField = <input></input>
    return (
        <Modal
            trigger={triggerButton}
            header='Produkt hinzufügen.'
            content="<input/>"
            actions={['Snooze', { key: 'done', content: 'Done', positive: true }]}
        />
    )
}