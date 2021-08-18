import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import AlertComponent from '../components/AlertComponent';
import CardComponent from '../components/CardComponent';
import FormComponent from '../components/FormComponent';
import PaginationComponent from '../components/PaginationComponent';
import { Api_Url } from '../utility/Api_Url';

const Todolist = () => {

    const [todolist, setTodolist] = useState('');
    const [formData, setFormData] = useState(false);
    const [editData, setEditData] = useState(false);
    const [alert, setAlert] = useState(false);

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
              setAlert('Data berhasil ditambahkan');
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
            setAlert("Data berhasil diubah");
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
              setAlert("Data berhasil dihapus");
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

          {alert && <AlertComponent alert={alert} />}

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

          {todolist.data &&
            todolist.data.map((item) => (
              <CardComponent
                key={item.id}
                data={item}
                showUpdate={showUpdate}
                deleteData={deleteTodolist}
              />
            ))}

          {todolist.total > 0 && (
            <PaginationComponent data={todolist} setData={setTodolist} />
          )}

          {todolist.total === 0 && (
            <p className="text-center text-danger mt-4">
              <strong>Tidak memiliki data</strong>
            </p>
          )}
        </div>
      </div>
    );
};

export default Todolist;