import axios from 'axios';
import React, { Fragment } from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationComponent = ({ data, setData }) => {
  console.log(data);

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

  function nextPage(){
       axios
         .get(data.next_page_url)
         .then(function (response) {
           setData(response.data);
            //   console.log(response);
         })
         .catch(function (error) {
           //    console.log(error);
         });
  }
  
  function prevPage(){
       axios
         .get(data.prev_page_url)
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
        //    console.log(response);
         })
         .catch(function (error) {
        //    console.log(error);
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
      {data.prev_page_url && (
        <Fragment>
          <Pagination.First onClick={firstPage} />
          <Pagination.Prev onClick={prevPage} />
        </Fragment>
      )}

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>
      {data.next_page_url && (
        <Fragment>
          <Pagination.Next onClick={nextPage} />
          <Pagination.Last onClick={lastPage} />
        </Fragment>
      )}
    </Pagination>
  );
};

export default PaginationComponent;