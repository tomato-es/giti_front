import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { user } from "../../recoil";

const Profile = styled.img`
  border-radius: 100px;
  width: 150px;
  height: 150px;
  margin: 16px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  border: solid #444c56 1px;
  max-width: 220px;
  width: 90%;
  padding: 16px;
  box-sizing: border-box;
  background: rgb(35, 39, 45);
  border-radius: 6px;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  width: 100%;
  font-size: 16px;
  color: #c9d1d9;
  margin-bottom: 6px;
  text-align: center;
`;

const Desc = styled.div`
  width: 100%;
  font-size: 14px;
  color: #768390;
  margin-bottom: 16px;
  text-align: center;
`;

const ExportButton = styled.button`
  display: block;
  width: 100%;
  border-radius: 6px;
  background: #373e47;
  padding: 8px 0;
  box-sizing: border-box;
  border: none;
  outline: none;
  color: #adbac7;
  cursor: pointer;
`;

const Result = () => {
  const user_info = useRecoilValue(user);

  useEffect(() => {
    console.log(user_info);
  }, []);

  return (
    <>
      <Wrapper>
        <Box>
          <Profile src="/image/ISTJ.jpeg"></Profile>
          <Title>
            {user_info.nickname} {user_info.githubId}
          </Title>
          <Desc>
            {user_info.giti} {user_info.githubId}
          </Desc>
          <ExportButton onClick={() => alert("구현중입니다.")}>
            공유하기
          </ExportButton>
        </Box>
      </Wrapper>
    </>
  );
};

export default Result;
