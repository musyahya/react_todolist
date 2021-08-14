import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Api_Url } from '../utility/Api_Url';

const Todolist = () => {

    const [todolist, setTodolist] = useState('');

    useEffect(() => {
        getTodolist()
    }, []);

    function getTodolist(){
        axios
          .get(Api_Url +'todolist')
          .then(function (response) {
            setTodolist(response.data);
            // console.log(response);
          })
          .catch(function (error) {
            // handle error
            // console.log(error);
          })
    }

    console.log(todolist);

    return (
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          {todolist &&
            todolist.map((item) => (
              <Card key={item.id} className="shadow-sm">
                <Card.Body>
                  <Card.Title>{item.judul}</Card.Title>
                  <Card.Text>{item.deskripsi}</Card.Text>
                </Card.Body>
              </Card>
            ))}
        </div>
      </div>
    );
};

export default Todolist;