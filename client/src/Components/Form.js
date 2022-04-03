import React, { useState } from "react";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import { useHistory } from "react-router-dom";
import "./style.css";
function Form() {
  const [rowDetail, setRowDetail] = useState("");
  let history = useHistory();
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname); // result: '/secondpage'
    console.log(location.search); // result: '?query=abc'
    console.log(location.state.detail); // result: '?query=abc'
    // console.log(location.state.detail); // result: 'some_value'
    setRowDetail(location.state.detail);
  }, [location]);

  return (
    <div class="container rounded bg-white mt-5 mb-5">
      <div class="row">
        <div class="col-md-3 border-right">
          <div class="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              class="rounded-circle mt-5"
              width="150px"
              src={rowDetail.image}
            />
            <span class="font-weight-bold">{rowDetail.firstName}</span>
            <span class="text-black-50">{rowDetail.email}</span>
            <span> </span>
          </div>
        </div>
        <div class="col-md-5 border-right">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="text-right">Profile Details</h4>
            </div>
            <div class="row mt-2">
              <div class="col-md-6">
                <label class="labels">Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="first name"
                  value={rowDetail.firstName}
                />
              </div>
              <div class="col-md-6">
                <label class="labels">Surname</label>
                <input
                  type="text"
                  class="form-control"
                  value={rowDetail.lastName}
                  placeholder="surname"
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12">
                <label class="labels">Mobile Number</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter phone number"
                  value={rowDetail.phone}
                />
              </div>
              <div class="col-md-12">
                <label class="labels">Address</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter address line 1"
                  value={rowDetail.adress}
                />
              </div>
              <div class="col-md-12">
                <label class="labels">Job</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter address line 2"
                  value={rowDetail.job}
                />
              </div>
              <div class="col-md-12">
                <label class="labels">Ballot</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter address line 2"
                  value={rowDetail.ballot}
                />
              </div>

              <div class="col-md-12">
                <label class="labels">Email</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter email id"
                  value={rowDetail.email}
                />
              </div>
            </div>

            <div class="mt-5 text-center">
              <button
                onClick={(e) => {
                  e.preventDefault();

                  // history.push("/detail");
                  history.push({
                    pathname: "/",
                  });
                }}
                class="btn btn-primary profile-button"
                type="button"
              >
                Back to Home Page
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
