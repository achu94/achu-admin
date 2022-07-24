import { useState, useEffect } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";
import * as authService from "../../services/authServices";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, [loggedIn]);

  const onSubmitHandle = (event) => {
    setIsLoading((isLoading) => !isLoading);

    event.preventDefault();
    const { target } = event;

    const submitData = Object.fromEntries(new FormData(target));

    console.log(submitData);

    authService.Login(submitData).then((res) => {
      console.log(res);
      setIsLoading((isLoading) => !isLoading);
      setLoggedIn((isLoggedIn) => !isLoggedIn);
    });
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          <Image src="https://react.semantic-ui.com/logo.png" /> Bitte melden
          sie Sich ein
        </Header>
        <Form loading={isLoading} onSubmit={onSubmitHandle} size="large">
          <Segment stacked>
            <Form.Input
              type="email"
              name="email"
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              name="password"
            />

            <Button color="teal" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          Password vergessen? <a href="#">Jetzt zurücksetzen</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
