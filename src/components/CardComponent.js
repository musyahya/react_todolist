import React from 'react';
import { Card } from 'react-bootstrap';

const CardComponent = ({data}) => {


    return (
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title>{data.judul}</Card.Title>
          <Card.Text>{data.deskripsi}</Card.Text>
        </Card.Body>
      </Card>
    );
};

export default CardComponent;