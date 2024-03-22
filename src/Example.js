import React from "react";

export default function Example(props) {
  if (props.example) {
    return (
      <p className="Example">
        <strong>Example:</strong> {""}
        <em>{props.example}</em>
      </p>
    );
  } else {
    return null;
  }
}
