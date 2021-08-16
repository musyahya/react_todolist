import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { withRouter } from "react-router-dom";
import { Api_Url } from '../utility/Api_Url';

const Step = (props) => {

    const [step, setStep] = useState("");

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
               // console.log(response);
             })
             .catch(function (error) {
               // console.log(error);
             });
     }

    console.log(step);

    return (
        <div>
            <h1>Halaman step</h1>
        </div>
    );
};

export default withRouter(Step);