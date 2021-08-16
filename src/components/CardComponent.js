import React, { Fragment, useState } from 'react';
import { Button, ButtonGroup, Card, Modal } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import "./CardComponent.css";

const CardComponent = ({ data, showUpdate, deleteTodolist }) => {

   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   
    const history = useHistory();

    function gotoStep(id) {
        history.push('/' +id);
    }

  return (
    <Fragment>
      <Card className="shadow-sm mt-3">
        <Card.Body>
          <Card.Title
            onClick={data.todolist_id ? "" : () => gotoStep(data.id)}
            className={data.todolist_id ? "" : "pointer"}
          >
            {data.judul}
          </Card.Title>
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
            <Button variant="danger" size="sm" onClick={handleShow}>
              Hapus
            </Button>
          </ButtonGroup>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Hapus data</Modal.Title>
        </Modal.Header>
        <Modal.Body>Anda yakin ingin menghapus data ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Batal
          </Button>
          <Button variant="danger" onClick={() => deleteTodolist(data.id)}>
            Hapus
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default CardComponent;