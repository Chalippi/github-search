import React from "react";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Spinner,
  Button,
} from "react-bootstrap";
import { TiLocation } from "react-icons/ti";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { ImOffice } from "react-icons/im";
import { MdAdsClick, MdEmail } from "react-icons/md";
import moment from "moment";

const UserInfo = ({ user }) => {
  console.log(user);
  return (
    user && (
      <div>
        <Card style={{ width: "24rem", alignSelf: "end" }}>
          <Card.Body className="text-center">
            <Card.Title>{user.login}</Card.Title>
          </Card.Body>
          <Card.Img
            variant="top"
            src={user.avatar_url}
            alt={
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            }
          />
          <Card.Body>
            <Card.Text>{user.bio}</Card.Text>
          </Card.Body>
          <ListGroup>
            <ListGroupItem className="d-flex flex-row justify-content-between">
              <h5 className="bg-warning p-2 rounded ">
                {user.following} Following
              </h5>
              <h5 className="bg-success p-2 rounded text-white">
                {user.followers} Followers
              </h5>
            </ListGroupItem>
            {user.location && (
              <ListGroupItem className="d-flex flex-row justify-content-between">
                <TiLocation size={25} />
                <h5>{user.location}</h5>
              </ListGroupItem>
            )}
            {user.blog && (
              <ListGroupItem className="d-flex flex-row justify-content-between">
                <MdAdsClick size={25} />
                <Button size="sm" variant="white" href={user.blog}>
                  {user.blog}
                </Button>
              </ListGroupItem>
            )}
            {user.company && (
              <ListGroupItem className="d-flex flex-row justify-content-between">
                <ImOffice size={25} />
                <h5>{user.company}</h5>
              </ListGroupItem>
            )}
            {user.email && (
              <ListGroupItem className="d-flex flex-row justify-content-between">
                <MdEmail size={25} />
                <h5>{user.email}</h5>
              </ListGroupItem>
            )}
            {user.twitter && (
              <ListGroupItem className="d-flex flex-row justify-content-between">
                <FaTwitter size={25} />
                <h5>{user.twitter}</h5>
              </ListGroupItem>
            )}
          </ListGroup>
          <Card.Body className="d-flex flex-row justify-content-between align-items-center">
            <h6>Est. {moment(user.created_at).format("DD MMM YYYY")}</h6>
            <Button
              variant="secondary"
              className="align-self-end"
              href={user.html_url}
              size="sm"
            >
              See Profile on <FaGithub size={20} />
            </Button>
          </Card.Body>
        </Card>
      </div>
    )
  );
};

export default UserInfo;
