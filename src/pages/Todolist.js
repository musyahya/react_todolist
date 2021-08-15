import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardComponent from '../components/CardComponent';
import FormComponent from '../components/FormComponent';
import { Api_Url } from '../utility/Api_Url';

const Todolist = () => {

    const [todolist, setTodolist] = useState('');
    const [formData, setFormData] = useState(false);

    const [judul, setJudul] = useState('');
    const [deskripsi, setDeskripsi] = useState('');

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

    function postTodolist(){
        axios
          .post(Api_Url +"todolist", {
            judul: judul,
            deskripsi: deskripsi,
          })
          .then(function (response) {
              setJudul('');
              setDeskripsi('');
              setFormData(false);
              getTodolist();
              // console.log(response);
          })
          .catch(function (error) {
            // console.log(error);
          });
    }

    return (
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <FormComponent
            formData={formData}
            setFormData={setFormData}
            judul={judul}
            setJudul={setJudul}
            deskripsi={deskripsi}
            setDeskripsi={setDeskripsi}
            postTodolist={postTodolist}
          />

          {todolist &&
            todolist.map((item) => <CardComponent key={item.id} data={item} />)}
        </div>
      </div>
    );
};

export default Todolist;