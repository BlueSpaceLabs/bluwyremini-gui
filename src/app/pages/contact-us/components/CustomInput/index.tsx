import React from "react";

const CustomInput = ({
  labelTitle,
  required,
  tooltip,
  inputName,
  inputValue,
  inputChange,
  inputError,
  inputErrorMessage,
}: any) => {
  return (
    <React.Fragment>
      <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
        <span className={required}>{labelTitle}</span>
        {tooltip && (
          <i
            className="fas fa-exclamation-circle ms-2 fs-7"
            data-bs-toggle="tooltip"
            title={tooltip}
          ></i>
        )}
      </label>
      <input
        type="text"
        className="form-control form-control-lg form-control-solid"
        name={inputName}
        value={inputValue}
        onChange={inputChange}
      />
      {required && inputError && inputValue?.length < 2 && (
        <div className="fv-plugins-message-container">
          <div className="fv-help-block">{inputErrorMessage}</div>
        </div>
      )}
    </React.Fragment>
  );
};

export default CustomInput;
