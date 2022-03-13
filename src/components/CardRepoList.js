import React from "react";
import { isEmptyArray } from "../utils/utils";
import ErrorMessage from "./ErrorMessage";
import { Card, Button } from "react-bootstrap";

const CardRepoList = ({ repos }) => {
  return !isEmptyArray(repos) ? (
    <div className="d-flex flex-row align-items-around justify-content-center flex-wrap">
      {repos.map((item) => [
        <Card key={item.id} style={{ width: "15%", height: "15%" }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>,
      ])}
    </div>
  ) : (
    <ErrorMessage error={repos.error} />
  );
};

export default CardRepoList;
