import React from 'react';
import Event from './Event';

const Events = ({ state, dispach }) => {
  return (
    <>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>title</th>
            <th>boby</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.map((event, index) => (
            <Event key={index} event={event} dispach={dispach} />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Events;
