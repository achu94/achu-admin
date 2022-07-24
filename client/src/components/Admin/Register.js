import { useState } from "react";
import { Form, Button, Checkbox, Container, Segment } from "semantic-ui-react";
import * as authService from "../../services/authServices";

const Admin = () => {

  const [isLoading, setIsLoading] = useState(false);


  const onSubmitHandle = (event) => {
    setIsLoading(isLoading => !isLoading);

    event.preventDefault();
    const {target} = event;
  
    const submitData = Object.fromEntries(new FormData(target));
  
    console.log(submitData);

    authService.newUser(submitData).then( res => {
      console.log(res);
      setIsLoading(isLoading => !isLoading);
    });
  }

  return (
    <Container>
      <Segment>
        <h1>Kunde anlegen</h1>
        <Form loading={isLoading} onSubmit={onSubmitHandle}>
          <Form.Field>
            <label>Firmen Name</label>
            <input placeholder="Firma Name" name="firmenName" />
          </Form.Field>
          <Form.Field>
            <label>Kunde Name</label>
            <input placeholder="Kunde Name" name="name" />
          </Form.Field>
          <Form.Field>
            <label>Kunde Vorname</label>
            <input placeholder="Kunde Vorname" name="vorname" />
          </Form.Field>
          <Form.Field>
            <label>E-Mailaddresse</label>
            <input type="email" placeholder="Email address" name="email" />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input type="password" name="password"/>
          </Form.Field>
          <Form.Field>
            <label>Nachmal Password</label>
            <input type="password" name="repPassowrd" />
          </Form.Field>
          <Form.Field>
            <Checkbox label="I agree to the Terms and Conditions" />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </Segment>
    </Container>
  );
};

export default Admin;
