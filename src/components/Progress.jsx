import React from "react";

export const Progress = (props) => {
  const { Setpro, Value, ChangeClick } = props;
  Setpro();
  return (
    <>
      <div className="progress-area">
        進捗度:
        <progress id="myProgress" value={Value} max="100">
          0%
        </progress>
        {Value}%
      </div>

      <div id="change_area">
        <button id="change" onClick={ChangeClick}>
          change
        </button>
      </div>
    </>
  );
};
