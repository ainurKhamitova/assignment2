import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function EditSpecialize(props){
  const [data, setData] = useState({
  })

  const location = useLocation();
  const navigate =useNavigate();

  // get userId
  let key=location.state.userId;
  
   
  // Using useEffect for single rendering
  useEffect(() => {
      // Using fetch to fetch the api from 
      // flask server it will be redirected to proxy
      fetch("https://assignment2-db.herokuapp.com/specialize/get/"+key.id+"/"+key.email).then((res) =>
          res.json().then((data) => {
              // Setting a data from api
              setData(data)
              
          })
      );
  }, []);


  let handleSubmit = async (e) => {

    e.preventDefault();
  
    const requestOptions = {
      method: "POST",
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(data)
  }

  fetch('https://assignment2-db.herokuapp.com/specialize/update/'+key.id+"/"+key.email, requestOptions)
      .then(res => res.text())
      .then(text => console.log(text))
      .then(data =>{
          navigate("/specialize")
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

if(data == null){
  return <p>No data</p>
}
return (<section className="vh-200 gradient-custom">
<div className="container py-5 h-100">
  <div className="row justify-content-center align-items-center h-100">
    <div className="col-12 col-lg-9 col-xl-7">
      <div className="card shadow-2-strong card-registration">
        <div className="card-body p-4 p-md-5">
          <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Edit Country Form</h3>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-4">

                  <div class="form-outline">
                    <input
                      id="id"
                      type="id"
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
                      id="email"
                      type="text"
                      value={data.email}
                      name ="email"
                      className="form-control form-control-lg" 
                      onChange={handleChange}
                    />
                    <label className="form-label" for="email">Email</label>
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

 export default EditSpecialize; 
  

  
      