import React, { Fragment } from 'react';
import { Button, Form } from 'react-bootstrap';

const FormComponent = ({
  formData,
  tutupForm,
  judul,
  setJudul,
  deskripsi,
  setDeskripsi,
  postData,
  editData,
  updateData,
}) => {
  // console.log(deskripsi)

  return (
    <Fragment>
      {formData && (
        <Form className="mt-3">
          <Form.Group>
            <Form.Label>Judul</Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukan judul todolist"
              defaultValue={judul}
              onChange={(e) => setJudul(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Deskripsi</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Masukan dekripsi"
              defaultValue={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="success"
            size="sm"
            onClick={editData ? updateData : postData}
          >
            {editData ? "Update" : "Simpan"}
          </Button>
          <Button
            variant="secondary"
            size="sm"
            className="ml-2"
            onClick={tutupForm}
          >
            Batal
          </Button>
        </Form>
      )}
    </Fragment>
  );
};

export default FormComponent;