import Font from "../components/font";
import LoginForm from "../components/loginForm";
import { Col, Row, Container } from "react-bootstrap";
import "../styles/Login.css";

export default function Login() {
  return (
    <section className="login">
      <Container>
        <Row>
          <Col md="8" lg="8" sm="12" xl="8" className="font">
            <Font />
          </Col>
          <Col md="4" lg="4" sm="12" xl="4">
            <LoginForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
