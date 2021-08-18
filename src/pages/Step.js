import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, withRouter } from "react-router-dom";
import CardComponent from '../components/CardComponent';
import FormComponent from '../components/FormComponent';
import PaginationComponent from '../components/PaginationComponent';
import { Api_Url } from '../utility/Api_Url';

const Step = (props) => {

    const [step, setStep] = useState("");
     const [formData, setFormData] = useState(false);
     const [editData, setEditData] = useState(false);

     const [id, setId] = useState("");
     const [judul, setJudul] = useState("");
     const [deskripsi, setDeskripsi] = useState("");

     useEffect(() => {
       getByTodolistId();
     }, []);

     function getByTodolistId(){
           axios
             .get(
               Api_Url + "step/" + props.match.params.id + "/getByTodolistId"
             )
             .then(function (response) {
               setStep(response.data);
              //  console.log(response);
             })
             .catch(function (error) {
               // console.log(error);
             });
     }

     function postStep(){
           axios
             .post(Api_Url + "step", {
               judul: judul,
               deskripsi: deskripsi,
               todolist_id: props.match.params.id,
             })
             .then(function (response) {
               setJudul("");
               setDeskripsi("");
               setFormData(false);
               getByTodolistId();
            //    console.log(response);
             })
             .catch(function (error) {
            //    console.log(error);
             });
     }

       function showStep(id) {
         axios
           .get(Api_Url + "step/" + id)
           .then(function (response) {
             setJudul(response.data.judul);
             setDeskripsi(response.data.deskripsi);
             setId(response.data.id);
            //  console.log(response);
           })
           .catch(function (error) {
            //  console.log(error);
           });
       }

     
     function updateStep() {
            axios
              .put(Api_Url + "step/" + id, {
                judul: judul,
                deskripsi: deskripsi,
              })
              .then(function (response) {
                setJudul("");
                setDeskripsi("");
                setId("");
                setFormData(false);
                setEditData(false);
                getByTodolistId();
                //  console.log(response);
              })
              .catch(function (error) {
                //  console.log(error);
              });
     }

        function deleteStep(id) {
          axios
            .delete(Api_Url + "step/" + id)
            .then(function (response) {
              getByTodolistId();
              // console.log(response);
            })
            .catch(function (error) {
              // console.log(error);
            });
        }

      function showInsert() {
        setFormData(true);
        setEditData(false);
        setJudul("");
        setDeskripsi("");
        setId("");
      }

        function showUpdate(id) {
          setFormData(true);
          setEditData(true);
          showStep(id);
        }

       function tutupForm() {
         setFormData(false);
         setEditData(false);
         setJudul("");
         setDeskripsi("");
         setId("");
       }

    // console.log(step);

    return (
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <Button variant="primary" size="sm" onClick={showInsert}>
            Tambah
          </Button>

          <Button
            variant="secondary"
            className="ml-3"
            size="sm"
            as={Link}
            to="/"
          >
            Kembali
          </Button>

          <FormComponent
            formData={formData}
            setFormData={setFormData}
            tutupForm={tutupForm}
            judul={judul}
            setJudul={setJudul}
            deskripsi={deskripsi}
            setDeskripsi={setDeskripsi}
            postData={postStep}
            editData={editData}
            updateData={updateStep}
          />

          {step.data &&
            step.data.map((item) => (
              <CardComponent
                key={item.id}
                data={item}
                showUpdate={showUpdate}
                deleteData={deleteStep}
              />
            ))}

          {step.total > 0 && <PaginationComponent data={step} setData={setStep} />}

          {step.total === 0 && (
            <p className="text-center text-danger mt-4">
              <strong>Todolist tidak memiliki step</strong>
            </p>
          )}
        </div>
      </div>
    );
};

export default withRouter(Step);