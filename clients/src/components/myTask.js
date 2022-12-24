import "../styles/my.css";
import { Col, Row, Container } from "react-bootstrap";
import { completeTodo } from "../actions/todo";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function MyTask({ todo }) {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const clickHandler = async () => {
    setLoading(true);
    dispatch(completeTodo(todo._id))
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  };
  if (loading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }
  return (
    <>
      <Container>
        <Row>
          <Col md="2" lg="2" xl="2" sm="2" className="box-section">
            {todo.complete ? (
              <div className="box checkList"></div>
            ) : (
              <button onClick={clickHandler} className="box"></button>
            )}
          </Col>
          <Col md="10" lg="10" xl="10" sm="10">
            <Container>
              <Row>
                <Col md="12">
                  <h3>{todo.name}</h3>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}
