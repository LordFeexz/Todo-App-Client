import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../actions/user";
import "../styles/LoginForm.css";

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(login(input))
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <section className="body">
      <header>
        <h1 className="welcome">Welcome to TO DO LIST</h1>
        <h3 className="text">
          Please sign in to your account,and start manage further
        </h3>
      </header>
      <Form onSubmit={submit}>
        <div>
          <h1 className="sign">Sign In</h1>
        </div>
        <Form.Group
          className="mb-3 usernameLabel"
          controlId="formBasicUsername"
        >
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your registered username"
            value={input.username}
            onChange={onChangeHandler}
            name="username"
          />
        </Form.Group>

        <Form.Group
          className="mb-3 passwordLabel"
          controlId="formBasicPassword"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={input.password}
            onChange={onChangeHandler}
            name="password"
          />
        </Form.Group>
        <Button className="submit" variant="primary" type="submit">
          Sign In
        </Button>
      </Form>
      <div className="text-under">
        <h6>
          Don't have an account yet?
          <a href="/register" className="label">
            Sign Up
          </a>
        </h6>
      </div>
    </section>
  );
}
