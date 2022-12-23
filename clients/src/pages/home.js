import { Col, Row, Container } from "react-bootstrap";
import List from "../components/list";
import MyTask from "../components/myTask";

export default function Home() {
  return (
    <section>
      <Container>
        <Row>
          <Col md="4" lg="4" xl="4" sm="4">
            <List />
          </Col>
          <Col md="8" lg="8" xl="8" sm="8">
            <MyTask />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
