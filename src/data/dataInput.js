export const dataInputs = [
  {
    id: 1,
    name: "username",
    type: "text",
    placeholder: "Username",
    errmessage:
      "Username should be 8 characters and should not include special character",
    label: "Username",
    pattern: "^[A-Za-z0-9]{8}$",
  },
  {
    id: 2,
    name: "email",
    type: "email",
    placeholder: "Email",
    errmessage: "Invalid email address",
    label: "Email",
  },
  {
    id: 3,
    name: "birthday",
    type: "date",
    placeholder: "Birthday",
    label: "Birthday",
  },
  {
    id: 4,
    name: "password",
    type: "password",
    placeholder: "Password",
    errmessage:
      "Password should be 8-12 characters and include at least 1 letter, number, and special character",
    label: "Password",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,120}$`,
  },
  {
    id: 5,
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm Password",
    errmessage: "Password don't match!",
    label: "Confirm Password",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,120}$`,
  },
];
