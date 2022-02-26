import React from 'react';
import { useState } from "react";
import './App.css';


export default function Api() {
  const [Data, Details] = useState([]);
  const load = async () => {
    const api = await fetch("https://reqres.in/api/users?page=1");
    const jsonResponse = await api.json();
    Details(jsonResponse.data);
  };
  return (
    <div className="Api">
      <div className="user">
        
        <input type="button" onClick={load} value="Get Users" className="btn" />
      </div>
      <div className="layout">
        {Data.map((fetchData) => (
          <div className="sublayout">
            <img src={fetchData.avatar} alt="avatar" />
            <p className="nameDetails">
              {" "}
              {fetchData.first_name} {fetchData.last_name}
            </p>
            <p className="emailDetails"> {fetchData.email} </p>
          </div>
        ))}
      </div>
    </div>
  );
}