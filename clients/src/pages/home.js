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
    console.log("oke");
    dispatch(fetchCategory());
  }, []);

  return (
    <section>
      <Container>
        <Row>
          <Col md="4" lg="4" xl="4" sm="4">
            {Categories.map((category) => {
              return (
                <List className="list" category={category} key={category._id} />
              );
            })}
          </Col>
          <Col md="8" lg="8" xl="8" sm="8">
            <MyTask />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
