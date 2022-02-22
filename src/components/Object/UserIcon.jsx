import styled from "styled-components";

export const UserIcon = (props) => {
  const { image, name, size } = props;
  return (
    <SContainer>
      <SImg height={size} width={size} src={image} alt="プロフィール" />
      <SName>{name}</SName>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
