import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const UserInfo = ({ user }) => {
  return (
    user && (
      <div>
        <Card style={{ width: "18rem", alignSelf: "end" }}>
          <Card.Img variant="top" src={user.avatar_url} />
          <Card.Body>
            <Card.Title>{user.login}</Card.Title>
            <Card.Text>{user.bio}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            {/*follows*/}
            {/*location*/}
            {/*blog*/}
            {/*company*/}
            {/*email*/}
            {/*twitter*/}
            <ListGroupItem>Cras justo odio</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href={user.html_url}>See more</Card.Link>
          </Card.Body>
        </Card>
      </div>
    )
  );
};

export default UserInfo;
