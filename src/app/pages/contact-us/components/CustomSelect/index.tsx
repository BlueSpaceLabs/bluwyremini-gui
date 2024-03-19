import React from "react";

const CustomSelect = ({
  labelTitle,
  required,
  tooltip,
  inputName,
  inputValue,
  defaultOption,
  inputOptionsArray,
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

      <select
        className="form-select form-select-solid form-select-lg"
        value={inputValue}
        name={inputName}
        onChange={inputChange}
      >
        <option value="" selected disabled>
          {defaultOption}
        </option>
        {inputOptionsArray?.length > 0 &&
          inputOptionsArray.map((item: any) => {
            return (
              <option key={item.value} value={item.value}>
                {item.title}
              </option>
            );
          })}
      </select>

      {required && inputError && inputValue?.length < 2 && (
        <div className="fv-plugins-message-container">
          <div className="fv-help-block">{inputErrorMessage}</div>
        </div>
      )}
    </React.Fragment>
  );
};

export default CustomSelect;
