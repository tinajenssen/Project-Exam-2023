import React from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter your name")
    .matches(/^[\w]+$/, "skriv feilmelding her")
    .max(20, "use a shorter name"),
  email: yup
    .string()
    .required("Please enter an email address")
    .matches(/^[\w\-.]+@(stud\.)?noroff\.no$/, "feilmelding: må være noroff")
    .email("Please enter a valid email address"),
  password: yup
    .string()
    .required("Please enter your password")
    .min(8, "The password must contain at least 8 characters"),
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
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              {...register("name")}
              type="text"
              name="name"
              placeholder="Name"
            ></Form.Control>
            <Form.Text>
              {errors.name && <span>{errors.name.message}</span>}
            </Form.Text>
          </Form.Group>

          <Form.Group>
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

          <Form.Group>
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
