import React from "react";

export const Progress = (props) => {
  const { Setpro, Value, ChangeClick, yourTheme } = props;
  Setpro();
  return (
    <>
      <div className="progress-area">
        <div className="themeArea">
          <p>テーマ : </p>
          <p id="themeName">{yourTheme}</p>
        </div>
        <p>進捗度 : {Value}%</p>
        <progress id="myProgress" value={Value} max="100">
          0%
        </progress>

        <div id="change_area">
          <button id="change" onClick={ChangeClick}>
            change
          </button>
        </div>
      </div>
    </>
  );
};
