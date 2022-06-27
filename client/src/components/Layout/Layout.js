import { Container } from "semantic-ui-react";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function Layout(props) {
  return (
    <Container>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </Container>
  );
}

export default Layout;