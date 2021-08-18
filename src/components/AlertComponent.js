import React from 'react';
import { Alert } from 'react-bootstrap';

const AlertComponent = ({  alert }) => {
  return (
    <Alert
      variant="success"
      className="mt-3"
    >
     {alert}
    </Alert>
  );
};

export default AlertComponent;