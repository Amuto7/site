import React from "react";

export default function Alart(props) {
    let upper = (word) => {
        let upper = word
        return upper.charAt(0).toUpperCase() + upper.slice(1)
    }
  return (
    props.alart && <div
      className={`alert alert-${props.alart.ty} alert-dismissible fade show`}
      role="alert"
    >
      <strong>{upper(props.alart.ty)}!</strong> {props.alart.msg}
      {/* <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button> */}
    </div>
  );
}
