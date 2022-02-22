import styled from "styled-components";
import { UserIcon } from "../Object/UserIcon";

export const Header = (props) => {
  const { user, teacher } = props;
  return (
    <SHeader>
      <div>
        <SMessage>ようこそ{user}さん</SMessage>
        <SMessage>{teacher}のゼミへ</SMessage>
      </div>
      <SIcon>
        <UserIcon
          size="100"
          image="https://source.unsplash.com/VepJDAuitQ4"
          name="未設定"
        />
      </SIcon>
    </SHeader>
  );
};

const SHeader = styled.header`
  background-color: #11999e;
  color: #fff;
  text-align: left;
  padding: 8px 0;
  display: flex;
  justify-content: space-between;
`;

const SMessage = styled.p`
  margin: 8px;
`;

const SIcon = styled.div``;
