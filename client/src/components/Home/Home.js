import { useEffect, useState } from "react";

// import {
//   Button,
//   Form,
//   Grid,
//   Header,
//   Message,
//   Segment,
//   Input,
//   Label,
//   List,
// } from "semantic-ui-react";

import { Table, Icon } from "semantic-ui-react";

import "./Home.css";

function Home() {
  const [initialState, setInitialSate] = useState([]);

  useEffect(() => {
    fetch("/api/")
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((jsonResponse) => setInitialSate(jsonResponse.generalData[0]));
  }, []);

  console.log(initialState);

  return (
    <div>
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <h2>Allgemeine Informationen</h2>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell collapsing>
              <Icon size="large" name="address card" /> Straße
            </Table.Cell>
            <Table.Cell>{initialState.street}</Table.Cell>
            <Table.Cell collapsing textAlign="right">
              <Icon size="large" name="edit" />
              <Icon size="large" name="save" />
              <Icon size="large" name="undo alternate" />
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell collapsing>
              <Icon size="large" name="address card" /> PLZ
            </Table.Cell>
            <Table.Cell>{initialState.postalCode}</Table.Cell>
            <Table.Cell collapsing textAlign="right">
              <Icon size="large" name="edit" />
              <Icon size="large" name="save" />
              <Icon size="large" name="undo alternate" />
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell collapsing>
              <Icon size="large" name="address card" /> Stadt
            </Table.Cell>
            <Table.Cell>{initialState.city}</Table.Cell>
            <Table.Cell collapsing textAlign="right">
              <Icon size="large" name="edit" />
              <Icon size="large" name="save" />
              <Icon size="large" name="undo alternate" />
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell collapsing>
              <Icon size="large" name="address card" /> Land
            </Table.Cell>
            <Table.Cell>{initialState.country}</Table.Cell>
            <Table.Cell collapsing textAlign="right">
              <Icon size="large" name="edit" />
              <Icon size="large" name="save" />
              <Icon size="large" name="undo alternate" />
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell collapsing>
              <Icon size="large" name="phone" /> Telefon
            </Table.Cell>
            <Table.Cell>{initialState.telefon}</Table.Cell>
            <Table.Cell collapsing textAlign="right">
              <Icon size="large" name="edit" />
              <Icon size="large" name="save" />
              <Icon size="large" name="undo alternate" />
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell collapsing>
              <Icon size="large" name="at" /> E-Mailadresse
            </Table.Cell>
            <Table.Cell>{initialState.email}</Table.Cell>
            <Table.Cell collapsing textAlign="right">
              <Icon size="large" name="edit" />
              <Icon size="large" name="save" />
              <Icon size="large" name="undo alternate" />
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell collapsing>
              <Icon size="large" name="id card" /> SteuerID
            </Table.Cell>
            <Table.Cell>{initialState.steuerId}</Table.Cell>
            <Table.Cell collapsing textAlign="right">
              <Icon size="large" name="edit" />
              <Icon size="large" name="save" />
              <Icon size="large" name="undo alternate" />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}

export default Home;
