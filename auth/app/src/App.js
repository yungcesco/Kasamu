import logo from './logo.svg';
import './App.css';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react';
import { updateUser } from './graphql/mutations';
import awsExports from './aws-exports'

Amplify.configure(awsconfig);
Amplify.configure(awsExports);

const formState = {first_name:'', middle_name:'', last_name:''};

function updateFormState(key, value) {
  formState[key] = value;
}

function updateName() {
  const data = {
    body: {
      first_name: formState.first_name,
      middle_name: formState.middle_name,
      last_name: formState.last_name
    }
  };
  console.log(data);
  const userData = API.graphql(graphqlOperation(updateUser,{input: data}));
  console.log(userData);
  alert('account updated');
}
function App() {
  return (

    <div className="App">
      <header className="App-header">
        <h2>My App Content </h2>
        <form>
          <div>
            <label for="first_name">First Name :</label>
            <input type="text" onChange={e => updateFormState('first_name',e.target.value)}></input>
          </div>
          <div>
            <label for="middle_name">Middle Name :</label>
            <input type="text" onChange={e => updateFormState('middle_name',e.target.value)}></input>
          </div>
          <div>
            <label for="last_name">Last Name :</label>
            <input type="text" onChange={e => updateFormState('last_name',e.target.value)}></input>
          </div>
          <div>
            <button onClick={updateName}>Update</button>
          </div>  
        </form>
        <AmplifySignOut />
      </header>
    </div>
  );
}

export default withAuthenticator(App);
