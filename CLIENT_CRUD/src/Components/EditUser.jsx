import { useState, useEffect } from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

function EditUser() {
  const navigate = useNavigate();
  
  const [inputs, setInputs] = useState({});
 
  const {id} = useParams();

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers(){
      axios.get(`http://localhost:80/React+PHP/api/user/${id}`).then(function(response){
      console.log(response.data);
      setInputs(response.data);
    });
  }

  const handleChange = (ev) => {
    const name = ev.target.name;
    const value = ev.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();

    axios.put(`http://localhost:80/React+PHP/api/user/${id}/edit`, inputs).then(function(response){
      console.log(response.data);
      navigate('/');
    });
  };
  return (
    <div>
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <table cellSpacing={10}>
          <tbody>
            <tr>
              <th>
                <label>Name:</label>
              </th>
              <td>
                <input value= {inputs.name} type="text" name="name" onChange={handleChange} />
              </td>
            </tr>

            <tr>
              <th>
                <label>Email:</label>
              </th>
              <td>
                <input value= {inputs.email} type="text" name="email" onChange={handleChange} />
              </td>
            </tr>

            <tr>
              <th>
                <label>Mobile:</label>
              </th>
              <td>
                <input value={inputs.mobile} type="number" name="mobile" onChange={handleChange} />
              </td>
            </tr>

            <tr>
              <td colSpan="2" align="right">
                <button>Save</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default EditUser;
