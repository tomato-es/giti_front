import GithubGif from "../../asset/git_loading.gif";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const LoadingGif = styled.img`
  width: auto;
  height: 100px;
  margin: 0 auto;
`;

const Loading = () => {
  return (
    <>
      <Layout>
        <LoadingGif src={GithubGif} alt="" />
      </Layout>
    </>
  );
};

export default Loading;
