import { useState, useRef } from "react";


import { Table, Icon, TextArea, Input, Segment } from "semantic-ui-react";

const TableRow = (props) => {
  const [isHidden, setHidden] = useState(true);
  const [isEditing, setEditing] = useState("edit");
  const [isLoading, setLoading] = useState(false);
  const [isFocus, setFocus] = useState(false);


  const editField = useRef();
  const segmentField = useRef();

  const editHandle = () => {
    setHidden(false);
    setEditing("");
    setFocus(true);
  };

  const saveData = (event) => {
    const inputData = {
      [event.target.name] : event.target.value
    }

    console.log(inputData);

    setLoading(true);

    setTimeout( () => {
      setHidden(true);
      setEditing("edit");
      setFocus(false);
    }, 2000)
  }

  return (
    <Table.Row>
      <Table.Cell collapsing>
        <Icon size="large" name={props.iconName} /> {props.name}
      </Table.Cell>
      <Table.Cell>
        <Segment compact className={!isHidden ? "segment_hidden": ""}>{props.value}</Segment>
        {props.elType === "textArea" ? (
          <TextArea
            focus={isFocus}
            onBlur={saveData}
            loading={isLoading}
            placeholder={props.value}
            className={isHidden ? "input_hidden" : ""}
          />
        ) : (
          <Input
            focus={isFocus}
            onBlur={saveData}
            loading={isLoading}
            placeholder={props.value}
            className={isHidden ? "input_hidden" : ""}
            name={props.dbKey}
          />
        )}
      </Table.Cell>
      <Table.Cell collapsing textAlign="right">
        <Icon size="large" name={isEditing} onClick={editHandle} />
      </Table.Cell>
    </Table.Row>
  );
};

export default TableRow;
