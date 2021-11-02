import React, { useState, useContext } from 'react';
import {
  CREATE_EVENT,
  DELETE_ALL_EVENTS,
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS,
} from '../actions';
import AppContext from '../contexts/AppContext';
import { timeCurrentIso8601 } from '../utils';

const EventForm = () => {
  const { state, dispach } = useContext(AppContext);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addEvent = (e) => {
    e.preventDefault();
    dispach({
      type: CREATE_EVENT,
      title,
      body,
    });

    dispach({
      type: ADD_OPERATION_LOG,
      description: 'イベントを作成しました。',
      operatedAt: timeCurrentIso8601(),
    });

    setTitle('');
    setBody('');
  };
  const deleteAllEvents = (e) => {
    e.preventDefault();
    const result = window.confirm(
      '全てのイベントを本当に削除しても良いですか？'
    );
    if (result) {
      dispach({ type: DELETE_ALL_EVENTS });
      dispach({
        type: ADD_OPERATION_LOG,
        description: '全てのイベントを削除しました',
        operatedAt: timeCurrentIso8601(),
      });
    }
  };

  const unCeratable = title === '' || body === '';

  const deleteAllOperationLogs = (e) => {
    e.preventDefault();
    const result = window.confirm(
      '全ての操作ログを本当に削除してもいいですか？'
    );
    if (result) {
      dispach({
        type: DELETE_ALL_OPERATION_LOGS,
      });
    }
  };
  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input
            className="form-control"
            id="formEventTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formEventTitle">ボディー</label>
          <textarea
            className="form-control"
            id="formEventTitle"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button
          className="btn btn-primary"
          onClick={addEvent}
          disabled={unCeratable}
        >
          イベントを作成する
        </button>
        <button
          className="btn btn-danger"
          onClick={deleteAllEvents}
          disabled={state.events.length === 0}
        >
          全てのイベントを削除する
        </button>
        <button
          className="btn btn-danger"
          onClick={deleteAllOperationLogs}
          disabled={state.operationLogs.length === 0}
        >
          全ての操作ログを削除する
        </button>
      </form>
    </>
  );
};
export default EventForm;
