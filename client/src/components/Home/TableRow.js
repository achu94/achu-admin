import { useState } from "react";

import { Table, Icon, TextArea, Input, Segment } from "semantic-ui-react";

import * as generalServices from "./homeServices";

const TableRow = (props) => {

  let itemValueVariable = props.value;

  const [isHidden, setHidden] = useState(true);
  const [isEditing, setEditing] = useState("edit");
  const [isLoading, setLoading] = useState(false);
  const [itemValue, setItemValue] = useState(itemValueVariable);

  const id = props.id;

  const editHandle = () => {
    setHidden(false);
    setEditing("");
  };

  const saveData = (event) => {
    const inputKey = event.target.name;
    const inputValue = event.target.value;

    const inputData = {
      [inputKey]: inputValue,
    };

    if (inputValue == props.value || !inputValue) {
      setHidden(true);
      setEditing("edit");
      return;
    }

    setLoading(true);

    generalServices.updateItem(id, inputData).then( newValue => {
      setHidden(true);
      setEditing("edit");
      setLoading(false);
    });
  };

  const changeValue = (newValue) => {
    itemValueVariable = newValue;
    setItemValue(newValue);
    return;
  }

  return (
    <Table.Row>
      <Table.Cell collapsing>
        <Icon size="large" name={props.iconName} /> {props.name}
      </Table.Cell>
      <Table.Cell>
        <Segment compact className={!isHidden ? "segment_hidden" : ""}>
          {itemValueVariable}
        </Segment>
        {props.elType === "textArea" ? (
          <TextArea
            onBlur={saveData}
            loading={isLoading}
            placeholder={itemValueVariable}
            className={isHidden ? "input_hidden" : ""}
          />
        ) : (
          <Input
            onBlur={saveData}
            loading={isLoading}
            placeholder={itemValueVariable}
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
