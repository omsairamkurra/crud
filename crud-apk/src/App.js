import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3030/users')
      .then((res) => {
        setColumns(Object.keys(res.data[0]));
        setRecords(res.data);
      });
  }, []);

  return (
    <div className="App">
      <div className="header">
        <h1>Users Table</h1>
      </div>
      <table className='table'>
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th key={i}>{c}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {records.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>up/de</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
