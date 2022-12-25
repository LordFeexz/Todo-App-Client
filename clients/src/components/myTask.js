import "../styles/my.css";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import { completeTodo } from "../actions/todo";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTodoCategory } from "../actions/todo";

export default function MyTask({ todo }) {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const [inputToggle, setInputToggle] = useState(false);
  const { Categories } = useSelector((state) => state.categoryReducer);
  const categoryName = Categories.find((el) => {
    if (todo.CategoryId && el._id == todo.CategoryId) return el.name;
    else return false;
  });
  const onChangeHandler = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const changeInput = () => {
    inputToggle ? setInputToggle(false) : setInputToggle(true);
  };

  const submit = (e) => {
    e.preventDefault();
    input === "" ? changeInput() : setLoading(true);
    dispatch(addTodoCategory(todo._id, input))
      .then(() => {
        setLoading(false);
        setInput("");
      })
      .catch((err) => console.log(err));
  };

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
          <Col md="2" lg="2" xl="2" sm="2">
            {todo.complete ? (
              <div>
                <div
                  className="box checkList"
                  style={{
                    margin: "20px",
                    padding: "20px",
                  }}
                ></div>
              </div>
            ) : (
              <button
                style={{
                  margin: "20px",
                  padding: "20px",
                }}
                onClick={clickHandler}
                className="box"
              ></button>
            )}
          </Col>
          <Col md="10" lg="10" xl="10" sm="10">
            <Container>
              <Row>
                <Col
                  md="12"
                  lg="12"
                  xl="12"
                  sm="12"
                  style={{
                    margin: "20px",
                    padding: "20px",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Container>
                    <Row>
                      <Col md="9" sm="9" lg="9" xl="9">
                        {todo.complete ? (
                          <h3 className="todo-checklist">{todo.name}</h3>
                        ) : (
                          <h3>{todo.name}</h3>
                        )}
                      </Col>
                      <Col md="3" sm="3" lg="3" xl="3">
                        {todo.CategoryId ? (
                          <div>{categoryName ? categoryName.name : ""}</div>
                        ) : (
                          <div>
                            {inputToggle ? (
                              <Form onSubmit={submit}>
                                <Form.Select
                                  size="sm"
                                  value={input}
                                  onChange={onChangeHandler}
                                >
                                  <option disabled selected>
                                    --Select Category--
                                  </option>
                                  {Categories.map((category) => {
                                    return (
                                      <option value={category._id}>
                                        {category.name}
                                      </option>
                                    );
                                  })}
                                </Form.Select>
                                <Button
                                  className="submitCategory"
                                  variant="primary"
                                  type="submit"
                                >
                                  Add
                                </Button>
                              </Form>
                            ) : (
                              <h1
                                onClick={changeInput}
                                className="new-category"
                              >
                                Add Category
                              </h1>
                            )}
                          </div>
                        )}
                      </Col>
                    </Row>
                  </Container>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}
