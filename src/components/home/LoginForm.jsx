import React from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

const schema = yup.object().shape({
  email: yup.string().required("Please enter an email address"),
  password: yup.string().required("Please enter your password"),
});

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  console.log(errors);

  return (
    <>
      <div className="login-form">
        <h1>Login</h1>
        <Form onSubmit={handleSubmit(onSubmit)} id="loginForm">
          <Form.Group className="mb-2">
            <Form.Label>Email</Form.Label>
            <Form.Control
              {...register("email")}
              type="email"
              name="email"
              placeholder="Email"
            ></Form.Control>
            <Form.Text>
              {errors.email && <span>{errors.email.message}</span>}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Password</Form.Label>
            <Form.Control
              {...register("password")}
              type="password"
              name="password"
              placeholder="Password"
            ></Form.Control>
            <Form.Text>
              {errors.password && <span>{errors.password.message}</span>}
            </Form.Text>
          </Form.Group>

          <Form.Group className="form-input mt-4">
            <Button type="submit">Login</Button>
            <Form.Text className="undertext">Not registred?</Form.Text>
            <Form.Text className="undertext">
              <Nav.Link href="/" className="text-link">
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
