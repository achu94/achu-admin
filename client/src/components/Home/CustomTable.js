import { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";

import TableRow from "./TableRow";

const CustomTable = () => {

  const [initialState, setInitialState] = useState([]);

  useEffect(() => {
    fetch("/api/")
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((jsonResponse) => setInitialState(jsonResponse.generalData[0]));
  }, []);

  const valueHandler = (key, value) => {
    // setInitialState({ [key]: parseInt(value)});

    setInitialState(prevState => ({
      ...prevState,
      [key] : value
    }));
  }

  return (
    <Table celled striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan="3">
            <h2>Allgemeine Informationen</h2>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <TableRow
          valueHandler={valueHandler}
          id={initialState._id}
          name="Straße"
          value={initialState.street}
          iconName="address card"
          dbKey="street"
        />
        <TableRow
          valueHandler={valueHandler}
          id={initialState._id}
          name="PLZ"
          value={initialState.postalCode}
          iconName="address card"
          dbKey="postalCode"
        />
        <TableRow
          valueHandler={valueHandler}
          id={initialState._id}
          name="Stadt"
          value={initialState.city}
          iconName="address card"
          dbKey="city"
        />
        <TableRow
          valueHandler={valueHandler}
          id={initialState._id}
          name="Land"
          value={initialState.country}
          iconName="address card"
          dbKey="country"
        />
        <TableRow valueHandler={valueHandler} id={initialState._id} name="Telefon" value={initialState.telefon} iconName="phone" dbKey="telefon" />
        <TableRow valueHandler={valueHandler} id={initialState._id} name="E-Mailadresse" value={initialState.email} iconName="at" dbKey="email"/>
        <TableRow
          id={initialState._id}
          name="SteuerID"
          value={initialState.steuerId}
          iconName="id card"
          dbKey="steuerId"
        />
        <TableRow
        valueHandler={valueHandler}
          id={initialState._id}
          name="Über Uns"
          value={initialState.aboutUs}
          iconName="id card"
          elType="textArea"
          dbKey="aboutUs"
        />
      </Table.Body>
    </Table>
  );
};

export default CustomTable;
