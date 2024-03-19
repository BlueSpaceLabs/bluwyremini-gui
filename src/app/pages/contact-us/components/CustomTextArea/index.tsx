import React from "react";

const CustomTextArea = ({
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
      <textarea
        className="form-control form-control-lg form-control-solid"
        rows={3}
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

export default CustomTextArea;
