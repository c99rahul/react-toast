import React, { useState } from "react";
import ToastList from "./components/ToastList/ToastList";
import {
  successMsgs,
  failureMsgs,
  warningMsgs,
  randomMsg,
} from "./toastMessages";
import "./App.css";

const App = () => {
  const [toasts, setToasts] = useState([]);
  const [autoClose, setAutoClose] = useState(true);
  const [autoCloseDuration, setAutoCloseDuration] = useState(5);
  const [position, setPosition] = useState("bottom-right");

  const positions = {
    "top-right": "Top-right",
    "top-left": "Top-left",
    "bottom-right": "Bottom-right",
    "bottom-left": "Bottom-left",
  };

  const showToast = (message, type) => {
    const toast = {
      id: Date.now(),
      message,
      type,
    };

    setToasts((prevToasts) => [...prevToasts, toast]);

    if (autoClose) {
      setTimeout(() => {
        removeToast(toast.id);
      }, autoCloseDuration * 1000);
    }
  };

  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const removeAllToasts = () => {
    setToasts([]);
  };

  const handleDurationChange = (event) => {
    setAutoCloseDuration(Number(event.target.value));
  };

  const handleAutoCloseChange = () => {
    setAutoClose((prevAutoClose) => !prevAutoClose);
    removeAllToasts();
  };

  const handlePositionChange = (event) => {
    setPosition(event.target.value);
  };

  return (
    <div className="app">
      <h1 className="app-title">React Toast Notifications</h1>

      <div className="app-row">
        <input
          id="toggleDuration"
          type="checkbox"
          checked={autoClose}
          onChange={handleAutoCloseChange}
        />
        <label htmlFor="toggleDuration">Auto-dismiss?</label>
      </div>

      <div className="app-row app-row--group">
        <div>
          <label htmlFor="duration">Duration (seconds)</label>
          <input
            id="duration"
            type="number"
            min="1"
            max="5"
            value={autoCloseDuration}
            onChange={handleDurationChange}
            disabled={!autoClose}
          />
        </div>
        <div>
          <label htmlFor="position">Position</label>
          <select
            id="position"
            value={position}
            onChange={handlePositionChange}
          >
            {Object.keys(positions).map((position) => (
              <option key={position} value={position}>
                {positions[position]}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="app-row app-row--group">
        <button onClick={() => showToast(randomMsg(successMsgs), "success")}>
          Show Success Toast
        </button>
        <button onClick={() => showToast(randomMsg(failureMsgs), "failure")}>
          Show Error Toast
        </button>
        <button onClick={() => showToast(randomMsg(warningMsgs), "warning")}>
          Show Warning Toast
        </button>
        <button onClick={removeAllToasts}>Clear Toasts</button>
      </div>

      <ToastList data={toasts} position={position} removeToast={removeToast} />
    </div>
  );
};

export default App;
