import { Col, Row, Container, Form, Button } from "react-bootstrap";
import List from "../components/list";
import MyTask from "../components/myTask";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory, addCategory } from "../actions/category";
import "../styles/List.css";
import "../styles/my.css";
import { addTodo, fetchTodo } from "../actions/todo";

export default function Home() {
  const dispatch = useDispatch();
  const { Todos } = useSelector((state) => state.todoReducer);
  const { Categories } = useSelector((state) => state.categoryReducer);
  const [input, setInput] = useState({
    name: "",
  });
  const [categoryInput, setCategoryInput] = useState({
    name: "",
  });
  const [inputToggle, setInputToggle] = useState(false);

  const changeInput = () => {
    inputToggle ? setInputToggle(false) : setInputToggle(true);
  };

  const onChangeCategoryHandler = (e) => {
    const { name, value } = e.target;
    setCategoryInput({
      ...categoryInput,
      [name]: value,
    });
  };

  const submitCategory = (e) => {
    e.preventDefault();
    categoryInput.name === ""
      ? changeInput()
      : dispatch(addCategory(categoryInput));
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
  };

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchTodo());
  }, []);

  return (
    <section>
      <Container>
        <Row>
          <Col md="4" lg="4" xl="4" sm="4">
            <Form onSubmit={submit}>
              <Container>
                <Row>
                  <Col>
                    <Form.Group className="mb-3 formTask">
                      <Form.Control
                        type="text"
                        placeholder="Add a new Task"
                        name="name"
                        onChange={onChangeHandler}
                      />
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
            <h1 className="task">All Category</h1>
            {Categories.map((category) => {
              return (
                <List className="list" category={category} key={category._id} />
              );
            })}
            {inputToggle ? (
              <Form onSubmit={submitCategory}>
                <Container>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="text"
                          placeholder="Add a new Category"
                          name="name"
                          onChange={onChangeCategoryHandler}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </Form>
            ) : (
              <h4 onClick={changeInput} className="new">
                +New Category
              </h4>
            )}
          </Col>
          <Col
            md="8"
            lg="8"
            xl="8"
            sm="8"
            className="container flex-wrap list-wrapper"
          >
            <h1 className="all">All Task</h1>
            {Todos.length > 0 ? (
              Todos.map((todo) => {
                return <MyTask todo={todo} key={todo._id} />;
              })
            ) : (
              <div
                style={{
                  position: "absolute",
                  left: "500px",
                  top: "250px",
                }}
              >
                <h1>No data,please input</h1>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
