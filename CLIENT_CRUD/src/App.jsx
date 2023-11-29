// import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ListUser from './Components/ListUser';
import CreateUser from './Components/CreateUser';
import EditUser from './Components/EditUser';

function App() {
  return (
    <div className="App">
      <h1>React CRUD operations using php api and mysql</h1>
      <BrowserRouter>
        <nav>
          <ul>
            <Link to="/"> List User </Link>
          </ul>
          <ul>
            <Link to="user/create">Create User</Link>
          </ul>
        </nav>
        <Routes>
          <Route index element={<ListUser />}></Route>
          <Route path="user/create" element={<CreateUser />}></Route>
          <Route path="user/:id/edit" element={<EditUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
