import styled from "styled-components";
import { PrimaryButton } from "./Object/Button/PrimaryButton";
import { ProgressBar } from "./Object/ProgressBar";

export const Progress = (props) => {
  const { Setpro, Value, ChangeClick, yourTheme } = props;
  Setpro();
  return (
    <>
      <SProgressArea>
        <div className="themeArea">
          <p>テーマ : </p>
          <p id="themeName">{yourTheme}</p>
        </div>

        <ProgressBar Value={Value} />

        <SChange>
          <PrimaryButton onClick={ChangeClick}>change</PrimaryButton>
        </SChange>
      </SProgressArea>
    </>
  );
};

const SChange = styled.div`
  float: right;
`;

const SProgressArea = styled.div`
  background-color: aqua;
  width: 90%;
  height: 200px;
  padding: 8px;
  margin: 8px;
  border-radius: 8px;
`;
