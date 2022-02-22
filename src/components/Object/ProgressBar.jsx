import styled from "styled-components";

export const ProgressBar = (props) => {
  const { Value } = props;
  return (
    <div>
      <p>進捗度 : {Value}%</p>
      <SProgress value={Value} max="100">
        0%
      </SProgress>
    </div>
  );
};

const SProgress = styled.progress`
  height: 2rem;
  width: 90%;
  margin-left: 10%;
`;
