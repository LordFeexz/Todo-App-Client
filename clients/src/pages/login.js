import Font from "../components/font";
import LoginForm from "../components/loginForm";
import { Col, Row, Container } from "react-bootstrap";

export default function Login() {
  return (
    <div>
      <Container>
        <Row>
          <Col md="8">
            <Font />
          </Col>
          <Col md="4">
            <LoginForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
