import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import _ from 'lodash';

import * as testSagaAction from './states/sagaActions/testAction';
import * as utilSagaAction from './states/sagaActions/utilAction';

global.testSagaAction = testSagaAction;
global.utilSagaAction = utilSagaAction;

function App() {

  const history = useHistory();
  const dispatch = useDispatch();

  const test = useSelector(state => state.Test);

  useEffect(() => {
    console.log(test);
  });

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');


  const submit = (e) => {
    e.preventDefault();
    
    if(_.isEmpty(email) || _.isEmpty(password)) {
      
    }

    console.log('view dispatch');

    dispatch(global.testSagaAction.HandleTestDispatcher({
      email,
      password
    }));

  };

  return (
    <div className="App">

      <form onSubmit={(e) => submit(e)} style={{ marginTop: 300 }}>
        Email:
        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <br/>
        密碼：
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <input type="submit" value="submit" />
      </form>

    </div>
  );
}

export default App;
