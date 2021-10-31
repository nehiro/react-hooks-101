import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventForm from './EventForm';
import reducer from '../reducers';
import Events from './Events';
import AppContext from '../contexts/AppContext';

const App = () => {
  const [state, dispach] = useReducer(reducer, []);

  return (
    <AppContext.Provider value={'Hello iam a p'}>
      <div className="container-fluid">
        <EventForm state={state} dispach={dispach} />
        <Events state={state} dispach={dispach} />
      </div>
    </AppContext.Provider>
  );
};

export default App;
