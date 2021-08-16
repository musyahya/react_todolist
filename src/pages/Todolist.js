import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import CardComponent from '../components/CardComponent';
import FormComponent from '../components/FormComponent';
import { Api_Url } from '../utility/Api_Url';

const Todolist = () => {

    const [todolist, setTodolist] = useState('');
    const [formData, setFormData] = useState(false);
    const [editData, setEditData] = useState(false);

    const [id, setId] = useState('');
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

    function showTodolist(id){
        axios
          .get(Api_Url + "todolist/" +id)
          .then(function (response) {
            setJudul(response.data.judul);
            setDeskripsi(response.data.deskripsi);
            setId(response.data.id);
            // console.log(response);
          })
          .catch(function (error) {
            // console.log(error);
          });
    }

    function updateTodolist(){
         axios
           .put(Api_Url + "todolist/" +id, {
             judul: judul,
             deskripsi: deskripsi,
           })
           .then(function (response) {
             setJudul("");
             setDeskripsi("");
             setId("");
             setFormData(false);
            setEditData(false);
             getTodolist();
            //  console.log(response);
           })
           .catch(function (error) {
            //  console.log(error);
           });
    }

    function deleteTodolist(id){
        axios
          .delete(Api_Url + "todolist/" + id)
          .then(function (response) {
            getTodolist();
             console.log(response);
          })
          .catch(function (error) {
             console.log(error);
          });
    }

    function showInsert(){
      setFormData(true);
      setEditData(false);
       setJudul("");
       setDeskripsi("");
       setId("");
    }

    function showUpdate(id){
        setFormData(true);
        setEditData(true);
        showTodolist(id);
    }

    function tutupForm(){
        setFormData(false);
        setEditData(false);
        setJudul('');
        setDeskripsi('');
        setId('');
    }

    // console.log(judul)

    return (
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <Button variant="primary" size="sm" onClick={showInsert}>
            Tambah
          </Button>

          <FormComponent
            formData={formData}
            tutupForm={tutupForm}
            judul={judul}
            setJudul={setJudul}
            deskripsi={deskripsi}
            setDeskripsi={setDeskripsi}
            postData={postTodolist}
            editData={editData}
            updateData={updateTodolist}
          />

          {todolist &&
            todolist.map((item) => (
              <CardComponent
                key={item.id}
                data={item}
                showUpdate={showUpdate}
                deleteData={deleteTodolist}
              />
            ))}
        </div>
      </div>
    );
};

export default Todolist;