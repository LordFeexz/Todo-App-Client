import "../styles/my.css";
import { Form, Button, Col, Row, Container } from "react-bootstrap";

export default function MyTask() {
  return (
    <section>
      <h1 className="all">All Tasks</h1>
      <Form>
        <Container>
          <Row>
            <Col>
              <Form.Group className="mb-3 formTask">
                <Form.Control type="text" placeholder="Add a new Task" />
              </Form.Group>
            </Col>
            <Col>
              <Button variant="primary" type="submit" className="btnTask">
                Submit
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
      <Container>
        <Row>
          <Col md="2" lg="2" xl="2" sm="2">
            <div className="box-section">
              <div className="box checkList"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
            </div>
          </Col>
          <Col md="10" lg="10" xl="10" sm="10">
            <div className="text-section">
              <h3>Tes</h3>
              <h3>Tes</h3>
              <h3>Tes</h3>
              <h3>Tes</h3>
              <h3>Tes</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
