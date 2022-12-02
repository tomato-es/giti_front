import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { getGITI } from "../../api";
import GithubLoading from "../../component/GithubLoading";
import { user, userName } from "../../recoil";

const Loading = () => {
  const navigate = useNavigate();

  const username = useRecoilValue(userName);
  const [userInfo, setUserInfo] = useRecoilState(user);

  useEffect(() => {
    setTimeout(() => {
      getGITI(username).then((res) => {
        setUserInfo(res);
        navigate("/result");
      });
    }, 3000);
  }, []);

  return (
    <>
      <GithubLoading></GithubLoading>
    </>
  );
};

export default Loading;
