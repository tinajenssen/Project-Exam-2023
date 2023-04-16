import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, Button, Nav } from "react-bootstrap";
import { setLoginFormListener } from "../../js/handlers/login";

const schema = yup.object().shape({
  email: yup.string().required("Please enter an email address"),
  password: yup.string().required("Please enter your password"),
});

function LoginForm() {
  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function onSuccess(userName) {
    localStorage.setItem("user.name", userName);
    setIsLoggedIn(true);
  }

  useEffect(() => {
    setLoginFormListener(onSuccess);
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/posts");
      setIsLoggedIn(false);
    }
  }, [isLoggedIn, navigate]);

  console.log(errors);

  return (
    <>
      <div className="login__form">
        <h1>Login</h1>
        <Form id="loginForm">
          <Form.Group className="form-input mb-2">
            <Form.Label>Email</Form.Label>
            <Form.Control
              {...register("email")}
              type="email"
              name="email"
              placeholder="Email"
            ></Form.Control>
            <Form.Text>
              {errors.email && <div>{errors.email.message}</div>}
            </Form.Text>
          </Form.Group>

          <Form.Group className="form-input mb-2">
            <Form.Label>Password</Form.Label>
            <Form.Control
              {...register("password")}
              type="password"
              name="password"
              placeholder="Password"
            ></Form.Control>
            <Form.Text>
              {errors.password && <div>{errors.password.message}</div>}
            </Form.Text>
          </Form.Group>

          <Form.Group className="form-input mt-4">
            <Button type="submit">Login</Button>
            <Form.Text className="undertext">Not registred?</Form.Text>
            <Form.Text className="undertext">
              <Nav.Link href="/register" className="text-link">
                {" "}
                Register here
              </Nav.Link>
            </Form.Text>
          </Form.Group>
        </Form>
      </div>
    </>
  );
}

export default LoginForm;
