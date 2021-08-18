import axios from 'axios';
import React from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationComponent = ({ data, setData }) => {
//   console.log(data.first_page_url);

  function firstPage(){
       axios
         .get(data.first_page_url)
         .then(function (response) {
           setData(response.data);
        //    console.log(response);
         })
         .catch(function (error) {
        //    console.log(error);
         });
  }

  function lastPage(){
       axios
         .get(data.last_page_url)
         .then(function (response) {
           setData(response.data);
           console.log(response);
         })
         .catch(function (error) {
           console.log(error);
         });
  }

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
      <Pagination.First onClick={firstPage} />
      <Pagination.Prev />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Next />
      <Pagination.Last onClick={lastPage} />
    </Pagination>
  );
};

export default PaginationComponent;