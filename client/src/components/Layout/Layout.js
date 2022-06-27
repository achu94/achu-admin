import { Container } from "semantic-ui-react";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function Layout(props) {
  return (
    <Container alignItems="center">
      <Header />
      <main>{props.children}</main>
      <Footer />
    </Container>
  );
}

export default Layout;