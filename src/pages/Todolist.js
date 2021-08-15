import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardComponent from '../components/CardComponent';
import FormComponent from '../components/FormComponent';
import { Api_Url } from '../utility/Api_Url';

const Todolist = () => {

    const [todolist, setTodolist] = useState('');
    const [formData, setFormData] = useState(false);

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
            // console.log(error);
          })
    }

    return (
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <FormComponent formData={formData} setFormData={setFormData} />

          {todolist &&
            todolist.map((item) => <CardComponent key={item.id} data={item} />)}
        </div>
      </div>
    );
};

export default Todolist;