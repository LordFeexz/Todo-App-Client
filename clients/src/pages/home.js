import { Col, Row, Container } from "react-bootstrap";
import List from "../components/list";
import MyTask from "../components/myTask";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../actions/category";
import "../styles/List.css";
// import { fetchTodo } from "../actions/todo";

export default function Home() {
  const dispatch = useDispatch();
  // const { Todos } = useSelector((state) => state.todoReducer);
  const Categories = useSelector((state) => state.categoryReducer.Categories);

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  return (
    <section>
      <Container>
        <Row>
          <Col md="4" lg="4" xl="4" sm="4">
            <h1 className="task">All Task</h1>
            {Categories.map((category) => {
              return (
                <List className="list" category={category} key={category._id} />
              );
            })}
            <h4 className="new">+New Category</h4>
          </Col>
          <Col md="8" lg="8" xl="8" sm="8">
            <MyTask />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
