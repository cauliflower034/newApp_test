import React from "react";
import { ProgressBar } from "./Object/ProgressBar";

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

        <ProgressBar Value={Value} />

        <div id="change_area">
          <button id="change" onClick={ChangeClick}>
            change
          </button>
        </div>
      </div>
    </>
  );
};
