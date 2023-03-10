import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../actions/user";
import "../styles/RegisterForm.css";

export default function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    role: "",
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
    setLoading(true);
    dispatch(register(input))
      .then(() => navigate("/login"))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  if (loading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  return (
    <section className="body-regis-form">
      <header>
        <h1 className="welcome-regis-form">Welcome to TO DO LIST</h1>
        <h3 className="text-regis-form">
          Please sign in to your account,and start manage further
        </h3>
      </header>
      <Form onSubmit={submit}>
        <div>
          <h1 className="sign-regis-form">Sign In</h1>
          <Form.Group className="nameLabel-regis" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              value={input.name}
              onChange={onChangeHandler}
              name="name"
            />
          </Form.Group>

          <Form.Group
            className="usernameLabel-regis"
            controlId="formBasicUsername"
          >
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              value={input.username}
              onChange={onChangeHandler}
              name="username"
            />
          </Form.Group>

          <Form.Group className="emailLabel-regis" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              value={input.email}
              onChange={onChangeHandler}
              name="email"
            />
          </Form.Group>

          <Form.Group
            className=" passwordLabel-regis"
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
          <Form.Select
            className=" selectLabel-regis"
            value={input.role}
            onChange={onChangeHandler}
            name="role"
          >
            <option disabled selected>
              Roles
            </option>
            <option value="admin">admin</option>
            <option value="user">user</option>
          </Form.Select>
          <Button className="submitRegis" variant="primary" type="submit">
            Sign In
          </Button>
        </div>
      </Form>
    </section>
  );
}
