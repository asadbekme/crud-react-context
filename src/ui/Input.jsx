import React from "react";

const Input = ({ label, type = "text", state, setState }) => {
  return (
    <div className="w-full mb-5">
      <label
        className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
        htmlFor={label.toLowerCase()}
      >
        {`${label} of employee`}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
        value={state}
        onChange={(e) => setState(e.target.value)}
        type={type}
        placeholder={`Enter ${label.toLowerCase()}`}
      />
    </div>
  );
};

export default Input;
