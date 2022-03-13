import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { DiGithubFull } from "react-icons/di";
import { FaGithub, FaSearch } from "react-icons/fa";
const SearchUser = ({ onChangeUser }) => {
  const [user, setUser] = useState("");

  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container  align-items-center">
          <h5 className="text-white text-center">
            {" "}
            <FaGithub size={75} />
            <DiGithubFull size={200} /> Search
          </h5>
          <p className="lead text-white text-center">
            Simplify your public repo search.
          </p>
        </div>
      </div>
      <Form
        className="d-flex flex-row align-items-center text-center justify-content-center mt-3"
        onSubmit={(e) => {
          e.preventDefault();
          onChangeUser(user);
        }}
      >
        <Form.Control
          style={{ maxWidth: "40%", marginRight: 5 }}
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="GitHub Username"
        />
        <Button
          className="left-2"
          variant="success"
          onClick={() => {
            onChangeUser(user);
          }}
        >
          Search <FaSearch />
        </Button>
      </Form>
    </div>
  );
};

export default SearchUser;
