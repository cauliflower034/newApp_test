import { useMemo } from "react";

export const IncmpTodo = (props) => {
  const { flag } = props;
  if (!flag) {
    return (
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul></ul>
      </div>
    );
  } else {
    return <div></div>;
  }
};
