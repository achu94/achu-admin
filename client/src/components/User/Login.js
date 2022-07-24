import { useState, useEffect, useContext } from "react";
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
import { isAuthContext } from "../util/isAuthContext";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  let userContext = useContext(isAuthContext);

  useEffect(() => {
    if (userContext.userData.isAuth) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userContext]);

  // if (userContext.userData.isAuth) {
  //   navigate("/");
  //   return;
  // }

  const onSubmitHandle = (event) => {
    setIsLoading((isLoading) => !isLoading);

    event.preventDefault();
    const { target } = event;

    const submitData = Object.fromEntries(new FormData(target));

    authService.Login(submitData).then((res) => {
      if(res.error){
        alert(res.error.message);
      }

      userContext.setUserData( prevState => ({
        ...prevState,
        isAuth: res.isAuth,
        id: res.id,
        eMail: res.email
      }));

      setIsLoading((isLoading) => !isLoading);
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
