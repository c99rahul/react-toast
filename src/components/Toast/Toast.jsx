import React from "react";
import PropTypes from "prop-types";
import "./Toast.css";

import {
  SuccessIcon,
  FailureIcon,
  WarningIcon,
  CloseIcon,
} from "../Icons/Icons";

const Toast = ({ message, type, onClose }) => {
  const iconMap = {
    success: <SuccessIcon />,
    failure: <FailureIcon />,
    warning: <WarningIcon />,
  };

  const toastIcon = iconMap[type] || null;

  return (
    <div className={`toast toast--${type}`} role="alert">
      <div className="toast-message">
        {toastIcon && (
          <div className="icon icon--lg icon--thumb">{toastIcon}</div>
        )}
        <p>{message}</p>
      </div>
      <button className="toast-close-btn" onClick={onClose}>
        <span className="icon">
          <CloseIcon />
        </span>
      </button>
    </div>
  );
};

Toast.defaultProps = {
  type: "success",
  message: "Add a meaningful toast message here.",
};

Toast.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Toast;
