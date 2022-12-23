import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/LoginForm.css";

export default function LoginForm() {
  return (
    <section className="body">
      <header>
        <h1 className="welcome">Welcome to TO DO LIST</h1>
        <h3 className="text">
          Please sign in to your account,and start manage further
        </h3>
      </header>
      <Form>
        <div>
          <h1 className="sign">Sign In</h1>
        </div>
        <Form.Group
          className="mb-3 usernameLabel"
          controlId="formBasicUsername"
        >
          <Form.Label>Username</Form.Label>
          <Form.Control type="email" placeholder="Your registered username" />
        </Form.Group>

        <Form.Group
          className="mb-3 passwordLabel"
          controlId="formBasicPassword"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
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
