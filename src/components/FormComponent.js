import React, { Fragment } from 'react';
import { Button, Form } from 'react-bootstrap';

const FormComponent = ({ formData, setFormData }) => {

  return (
    <Fragment>
      <Button variant="primary" size="sm" onClick={() => setFormData(true)}>
        Tambah
      </Button>

      {formData && (
        <Form className="mt-3">
          <Form.Group>
            <Form.Label>Judul</Form.Label>
            <Form.Control type="text" placeholder="Masukan judul todolist" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Deskripsi</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Masukan dekripsi"
            />
          </Form.Group>

          <Button variant="primary" size="sm">
            Simpan
          </Button>
          <Button variant="secondary" size="sm" className="ml-2" onClick={() => setFormData(false)}>
            Batal
          </Button>
        </Form>
      )}
    </Fragment>
  );
};

export default FormComponent;