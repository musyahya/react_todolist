import React from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationComponent = ({ data, setStep }) => {
  console.log(data);

  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <Pagination className="mt-4">
      <Pagination.First />
      <Pagination.Prev />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
};

export default PaginationComponent;