import React from 'react';
import { Button, ButtonGroup, Card } from 'react-bootstrap';

const CardComponent = ({ data, showUpdate, deleteTodolist }) => {
  return (
    <Card className="shadow-sm mt-3">
      <Card.Body>
        <Card.Title>{data.judul}</Card.Title>
        <Card.Text>{data.deskripsi}</Card.Text>
        <ButtonGroup className="float-right">
          <Button
            variant="info"
            size="sm"
            className="mr-2"
            onClick={() => showUpdate(data.id)}
          >
            Edit
          </Button>
          <Button
            variant="danger"
            size="sm"
            onClick={() => deleteTodolist(data.id)}
          >
            Hapus
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;