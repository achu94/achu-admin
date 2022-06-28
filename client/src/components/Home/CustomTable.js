import { Table } from "semantic-ui-react";

import TableRow from "./TableRow";

const CustomTable = (props) => {
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
          id={props.data._id}
          name="Straße"
          value={props.data.street}
          iconName="address card"
          dbKey="street"
        />
        <TableRow
          id={props.data._id}
          name="PLZ"
          value={props.data.postalCode}
          iconName="address card"
          dbKey="postalCode"
        />
        <TableRow
          id={props.data._id}
          name="Stadt"
          value={props.data.city}
          iconName="address card"
          dbKey="city"
        />
        <TableRow
          id={props.data._id}
          name="Land"
          value={props.data.country}
          iconName="address card"
          dbKey="country"
        />
        <TableRow id={props.data._id} name="Telefon" value={props.data.telefon} iconName="phone" dbKey="telefon" />
        <TableRow id={props.data._id} name="E-Mailadresse" value={props.data.email} iconName="at" dbKey="email"/>
        <TableRow
          id={props.data._id}
          name="SteuerID"
          value={props.data.steuerId}
          iconName="id card"
          dbKey="steuerId"
        />
        <TableRow
          id={props.data._id}
          name="Über Uns"
          value={props.data.aboutUs}
          iconName="id card"
          elType="textArea"
          dbKey="aboutUs"
        />
      </Table.Body>
    </Table>
  );
};

export default CustomTable;
