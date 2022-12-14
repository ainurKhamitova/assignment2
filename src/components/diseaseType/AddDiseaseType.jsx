import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddDiseaseType(){
  const navigate =useNavigate();

  const [data, setData] = useState({
    id: "",
    description: "" 
  })

  

    let handleSubmit = async (e) => {

      e.preventDefault();
    
      const requestOptions = {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    fetch('https://assignment2-db.herokuapp.com/diseaseType/add', requestOptions)
        .then(res => res.text())
        .then(text => console.log(text))
        .then(data =>{
            navigate("/diseaseType")
        }).catch(err => console.log(err))

      }
   

    function handleChange(event) {
      const { name, value } = event.target;
 
      setData(prevValue => {
        return {...prevValue,
          [name]: value
        };
      });

    }
  
    return (<section className="vh-200 gradient-custom">
    <div className="container py-5 h-100">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-12 col-lg-9 col-xl-7">
          <div className="card shadow-2-strong card-registration">
            <div className="card-body p-4 p-md-5">
              <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Add Disease Type Form</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-4">

                      <div class="form-outline">
                        <input
                          id="id"
                          type="text"
                          value={data.id}
                          name ="id"
                          className="form-control form-control-lg" 
                          onChange={handleChange}
                        />
                        <label className="form-label" for="id">ID</label>
                      </div>
                    </div>
                
                    <div class="col-md-6 mb-4">

                      <div class="form-outline">
                        <input
                          id="description"
                          type="text"
                          value={data.description}
                          name ="description"
                          className="form-control form-control-lg" 
                          onChange={handleChange}
                        />
                        <label className="form-label" for="population">Description</label>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-2">
                    <input className="btn btn-primary btn-lg" type="submit" value="Submit" />
                  </div>
                </form>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
    );
  }
  
  export default AddDiseaseType;
