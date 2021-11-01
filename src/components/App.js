import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventForm from './EventForm';
import reducer from '../reducers';
import Events from './Events';
import AppContext from '../contexts/AppContext';

const App = () => {
  const initialState = {
    events: [],
    operationLogs: [],
  };
  const [state, dispach] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispach }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
      </div>
    </AppContext.Provider>
  );
};

export default App;
