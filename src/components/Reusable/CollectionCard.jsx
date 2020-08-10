import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { Link } from "react-router-dom";

const CollectionCard = ({ details }) => {
  return (
    <Link to={`/collection-${details.collection_id}`}>
      <div className="my-card">
        <Card>
          <img width="100%" src={details.image_url} alt="Card cap" />
          <CardBody>
            <CardTitle>{details.title}</CardTitle>
            <CardSubtitle>{details.res_count} Places</CardSubtitle>
          </CardBody>
        </Card>
      </div>
    </Link>
  );
};

export default CollectionCard;
