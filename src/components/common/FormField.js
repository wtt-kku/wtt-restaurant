import React from "react";

export default ({ input, label, type, required, meta: { error, touched } }) => {
  // console.log(meta);
  return (
    <div className="form-group">
      <label className="title">{label}</label>
      <input
        type={type}
        // nama={input.name}
        {...input}
        className="form-control"
        required={required}
      />
      {error && touched && (
        <div className="text-danger title mt-2">{error}</div>
      )}
    </div>
  );
};
