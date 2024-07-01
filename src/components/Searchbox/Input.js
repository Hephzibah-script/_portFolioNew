import { useState } from "react";
import { users } from "../../data/users";
import Table from "../Table/Table";
import "./searchBox.css";

function Input() {
  const [query, setQuery] = useState("");

  const keys = ["firstName", "lastName", "id", "email"];
  console.log(users[0]["firsName"]);

  const search = (items) => {
    return items.filter((item) => {
      return keys.some((key) => {
        if (typeof item[key] === "string") {
          return item[key].toLocaleLowerCase().includes(query);
        } else if (typeof item[key] !== items) {
        } else {
          return false;
        }
      });
    });
  };

  return (
    <section className="searchTable">
      <input
        className="search-box"
        type="search"
        placeholder="search users"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table items={search(users)} />
    </section>
  );
}

export default Input;
