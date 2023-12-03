import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const CreateUser = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  const handleChange = (ev) => {
    const name = ev.target.name;
    const value = ev.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();

    axios.post('http://localhost:80/React+PHP/api/users/save', inputs).then(function(response){
      console.log(response.data);
      navigate('/');
    });
  };
  return (
    <div>
      <h1>Create Users</h1>
      <form onSubmit={handleSubmit}>
        <table cellSpacing={10}>
          <tbody>
            <tr>
              <th>
                <label>Name:</label>
              </th>
              <td>
                <input type="text" name="name" onChange={handleChange} />
              </td>
            </tr>

            <tr>
              <th>
                <label>Email:</label>
              </th>
              <td>
                <input type="text" name="email" onChange={handleChange} />
              </td>
            </tr>

            <tr>
              <th>
                <label>Mobile:</label>
              </th>
              <td>
                <input type="number" name="mobile" onChange={handleChange} />
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

export default CreateUser;
