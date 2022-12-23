import Font from "../components/font";
import { Col, Row, Container } from "react-bootstrap";
import RegisterForm from "../components/registerForm";
import "../styles/Register.css";

export default function Register() {
  return (
    <section className="register">
      <Container>
        <Row>
          <Col md="8" lg="8" sm="12" xl="8" className="font">
            <Font />
          </Col>
          <Col md="4" lg="4" sm="12" xl="4">
            <RegisterForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
