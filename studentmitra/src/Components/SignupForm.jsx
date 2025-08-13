import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SignupForm = ({ onSignupSuccess, switchToLogin }) => {
  const [successMessage, setSuccessMessage] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      batch: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      mobile: Yup.string()
        .matches(/^\d{10}$/, "Mobile must be exactly 10 digits")
        .required("Mobile is required"),
      batch: Yup.string().required("Batch is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values, { setSubmitting, setErrors, resetForm }) => {
      try {
        await axios.post("http://localhost:8080/students/signup", values);
        setSuccessMessage("Signup successful! Please login.");
        resetForm();
        setTimeout(() => {
          setSuccessMessage(null);
          onSignupSuccess();
        }, 1200); // auto hide after 3 seconds and switch to login
      } catch (error) {
        setErrors({ submit: "Signup failed. Please try again." });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} noValidate className="container mt-4" style={{marginLeft:"300px" , width:"300px"}}>
      {successMessage && (
        <div className="alert alert-success" role="alert">
          {successMessage}
        </div>
      )}

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          className={`form-control ${
            formik.touched.name && formik.errors.name ? "is-invalid" : ""
          }`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && (
          <div className="invalid-feedback">{formik.errors.name}</div>
        )}
      </div>

      {/* Repeat same for other inputs... */}

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          className={`form-control ${
            formik.touched.email && formik.errors.email ? "is-invalid" : ""
          }`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="invalid-feedback">{formik.errors.email}</div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="mobile">Mobile</label>
        <input
          id="mobile"
          name="mobile"
          type="text"
          className={`form-control ${
            formik.touched.mobile && formik.errors.mobile ? "is-invalid" : ""
          }`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.mobile}
        />
        {formik.touched.mobile && formik.errors.mobile && (
          <div className="invalid-feedback">{formik.errors.mobile}</div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="batch">Batch</label>
        <input
          id="batch"
          name="batch"
          type="text"
          className={`form-control ${
            formik.touched.batch && formik.errors.batch ? "is-invalid" : ""
          }`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.batch}
        />
        {formik.touched.batch && formik.errors.batch && (
          <div className="invalid-feedback">{formik.errors.batch}</div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          className={`form-control ${
            formik.touched.password && formik.errors.password ? "is-invalid" : ""
          }`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <div className="invalid-feedback">{formik.errors.password}</div>
        )}
      </div>

      {formik.errors.submit && (
        <div className="alert alert-danger mt-3">{formik.errors.submit}</div>
      )}

      <button
        type="submit"
        className="btn btn-primary mt-3"
        disabled={formik.isSubmitting}
        style={{marginLeft:"85px"}}
      >
        Sign Up
      </button>

      <p className="mt-3">
        Already have an account?{" "}
        <button
          type="button"
          className="btn btn-link p-0"
          onClick={switchToLogin}
        >
          Login here
        </button>
      </p>
    </form>
  );
};

export default SignupForm;
