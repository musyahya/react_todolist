import axios from "axios";
import React, { Fragment } from "react";
import { Pagination } from "react-bootstrap";

const PaginationComponent = ({ data, setData }) => {
//   console.log(data);

  function firstPage() {
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

  function nextPage() {
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

  function numberPage(number) {
    axios
      .get(data.path + "?page=" + number)
      .then(function (response) {
        setData(response.data);
        //    console.log(response);
      })
      .catch(function (error) {
        // console.log(error);
      });
  }

  function prevPage() {
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

  function lastPage() {
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

  let active = data.current_page;
  let items = [];
  if (data.last_page !== 1) {
    for (let number = 1; number <= data.last_page; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === active}
          onClick={() => numberPage(number)}
        >
          {number}
        </Pagination.Item>
      );
    }
  }

  return (
    <Pagination className="mt-4">
      {data.prev_page_url && (
        <Fragment>
          <Pagination.First onClick={firstPage} />
          <Pagination.Prev onClick={prevPage} />
        </Fragment>
      )}

      {data.last !== 1 && items}

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
