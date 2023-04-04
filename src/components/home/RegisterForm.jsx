import React, { useEffect } from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { setRegisterFormListener } from "../../js/handlers/register";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("This field is required. Please enter a user name")
    .matches(
      /^[\w]+$/,
      "User name must contain only letters, numbers and underscore (_) when creating a new user."
    )
    .max(20, "This user name is too long. Please choose a shorter username"),
  email: yup
    .string()
    .required("This field is required. Please enter your email address")
    .matches(
      /^[\w\-.]+@stud.noroff\.no$/,
      "Only @stud.noroff.no domains can register"
    )
    .email("Please enter a valid email address"),
  password: yup
    .string()
    .required("This field is required. Please enter a password")
    .min(8, "The password must contain at least 8 characters"),
});

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // nye variabler for å håndtere navigering
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState(false);

  // useEffect brukes for å sette opp en lytter som lytter etter events

  // Lytter etter at brukeren prøver å registrere seg
  useEffect(() => {
    // sender inn en funksjon som skal kjøres når brukeren har blitt registrert
    setRegisterFormListener(() => {
      setIsRegistered(true);
    });
  }, []);

  // Lytter etter at brukeren er registrert
  useEffect(() => {
    if (isRegistered) {
      // hvis brukeren er registrert naviger til login
      navigate("/login");
      setIsRegistered(false);
    }
  }, [isRegistered, navigate]);

  function onSubmit(data) {
    console.log(data);
  }

  console.log(errors);

  return (
    <>
      <div className="register-form">
        <h1>Create an account</h1>
        <h2>Join our inspiring network!</h2>
        <Form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-4"
          id="registerForm"
        >
          <Form.Group className="form-input mb-2">
            <Form.Label>Name</Form.Label>
            <Form.Control
              {...register("name")}
              type="text"
              name="name"
              placeholder="Name"
            ></Form.Control>
            <Form.Text>
              {errors.name && <div>{errors.name.message}</div>}
            </Form.Text>
          </Form.Group>

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

          <Form.Group className="form-input mb-2">
            <Form.Label>Banner</Form.Label>
            <Form.Control
              {...register("banner")}
              type="url"
              name="banner"
            ></Form.Control>
          </Form.Group>

          <Form.Group className="form-input mb-2">
            <Form.Label>Avatar</Form.Label>
            <Form.Control
              {...register("avatar")}
              type="url"
              name="avatar"
            ></Form.Control>
          </Form.Group>

          <Form.Group className="form-input mt-4">
            <Button type="submit">Register</Button>
            <Form.Text className="undertext">Already registred?</Form.Text>
            <Form.Text className="undertext">
              <Nav.Link href="/login" className="text-link">
                {" "}
                Login here
              </Nav.Link>
            </Form.Text>
          </Form.Group>
        </Form>
      </div>
    </>
  );
}

export default RegisterForm;
