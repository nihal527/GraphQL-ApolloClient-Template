import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";
import { UPDATE_USER_MUTATION } from "../GraphQL/Mutations";
import { useMutation } from "@apollo/client";

import { useHistory } from "react-router-dom";
import { Table } from "reactstrap";

// const history = createBrowserHistory();
function GetUsers() {
  const { error, loading, data } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([]);

  const [updateUser, {}] = useMutation(UPDATE_USER_MUTATION);
  let history = useHistory();
  useEffect(() => {
    console.log(data);

    if (data) {
      setUsers(data.getAllUsers);
    }
  }, [data]);

  const handleRowClick = (e, rowValue) => {
    console.log(rowValue);
    // console.log(e);
    e.preventDefault();

    // history.push("/detail");
    history.push({
      pathname: "/detail",
      search: "?id=" + rowValue.id,
      state: { detail: rowValue },
    });
  };
  const updateUserBallot = (val) => {
    updateUser({
      variables: {
        id: val.id,
        firstName: val.firstName,
        lastName: val.lastName,
        email: val.email,
        image: val.image,
        adress: val.adress,
        job: val.job,
        phone: val.phone,
        password: val.password,
        ballot: val.ballot + 1,
      },
    });

    const sorted = users.slice().sort((a, b) => b.ballot - a.ballot);
    setUsers(sorted);
  };
  return (
    <div class="container rounded bg-white mt-5 mb-5">
      <div class="row">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h4 class="text-right">Users</h4>
        </div>
        <Table className="custom-table" striped={true}>
          <thead>
            <tr>
              <th>Image</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Oy Ver</th>
            </tr>
          </thead>
          <tbody>
            {users.map((val) => {
              return (
                <tr key={val.id} onClick={(e) => handleRowClick(e, val)}>
                  <th scope="row">
                    <img className="custom-images" src={val.image}></img>
                  </th>
                  <td>{val.firstName}</td>
                  <td>{val.lastName}</td>
                  <td onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => updateUserBallot(val)}
                      class="btn btn-primary profile-button"
                      type="button"
                    >
                      {val.ballot}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default GetUsers;
