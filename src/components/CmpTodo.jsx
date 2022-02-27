import React from "react";

export const CmpTodo = (props) => {
  const { flag } = props;
  if (flag) {
    return (
      <div className="complete-area">
        <p className="title">完了したTODO</p>
        <ul></ul>
      </div>
    );
  } else {
    return <div></div>;
  }
};
