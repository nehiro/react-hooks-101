import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventForm from './EventForm';
import reducer from '../reducers';
import Events from './Events';

const App = () => {
  const [state, dispach] = useReducer(reducer, []);

  return (
    <div className="container-fluid">
      <EventForm state={state} dispach={dispach} />
      <Events state={state} dispach={dispach} />
    </div>
  );
};

export default App;
