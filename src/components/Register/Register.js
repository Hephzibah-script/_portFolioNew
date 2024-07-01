import React, { useState } from "react";
import { dataInputs } from "../../data/dataInput.js";
import FormInput from "./FormInput.js";
import "./reg.css";
import "../Button/btn.css";

const Register = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthplace: "",
    password: "",
    confirmPassword: "",
  });
  // const inputsData = dataInputs;
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  // console.log(dataInputs);
  return (
    <section className="regForm1">
      <form className="regForm" name="regForm" onSubmit={handleSubmit}>
        <h2>Register Here</h2>
        {dataInputs.map((dataInput) => (
          <>
            <FormInput
              key={dataInput.id}
              {...dataInput}
              value={values[dataInput.name]}
              onChange={onChange}
            />
          </>
        ))}
        <button type="submit" className="btn" navigate>
          Register
        </button>
      </form>
    </section>
  );
};

export default Register;
