import React, {useState} from 'react';
import logo from './logo.svg';
import './GenericCSS/input-output.css'
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput';

const App = props => {

  const[userNameState, setUserNameState] = useState({
    users:[
      {username: 'TravisEEng565'}
    ]
  })

  const userNameChangedHandler = (event) =>{
    setUserNameState({
      users:[
        {username: event.target.value}
      ]
    })
  }


  const style = {
    margin: "10px",
  }

  return (
    <div style={style} className="App">
      <UserInput  username={userNameState.users[0].username} changed={userNameChangedHandler}/>
      <UserOutput className="input-output"  username={userNameState.users[0].username}/>
    </div>
  );
}

export default App;
