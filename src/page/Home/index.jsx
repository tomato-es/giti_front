import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

const Home = () => {
  const navigate = useNavigate();

  const Wrapper = styled.div`
    margin-top: 2rem;
  `;

  const Logo = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
  `;

  const SignIn = styled.h1`
    font-size: 1.8em;
    color: white;
    text-align: center;
    font-weight: 400;
  `;

  const Box = styled.div`
    font-size: 1.2em;
    margin: 0 auto;
    width: 90%;
    max-width: 308px;
    background: rgb(23, 27, 33);
    border-radius: 10px;
    text-align: center;
    padding: 16px;
    display: flex;
    justify-contents: center;
    flex-direction: column;
  `;

  const Desc = styled.label`
    color: #c9d1d9;
    display: block;
    text-align: left;
    width: 100%;
    font-size: 14px;
    padding: 8px 0;
  `;

  const Input = styled.input`
    background: rgb(14, 17, 22);
    border-radius: 5px;
    width: 100%;
    border: solid 1px #30363d;
    padding: 5px 12px;
    line-height: 20px;
    color: #c9d1d9;
    outline: none;
    margin-bottom: 16px;
  `;

  const SignInBtn = styled.button`
    display: block;
    width: 100%;
    border-radius: 6px;
    background: #238636;
    padding: 8px 0;
    box-sizing: border-box;
    border: none;
    outline: none;
    color: white;
  `;

  const onClick = () => {
    navigate("/result");
  };

  return (
    <>
      <Wrapper>
        <Logo>
          <svg
            height="48"
            aria-hidden="true"
            viewBox="0 0 16 16"
            version="1.1"
            width="48"
            data-view-component="true"
            class="octicon octicon-mark-github"
            fill="rgb(202,209,216)"
          >
            <path
              fill-rule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
        </Logo>

        <SignIn>Github x GITI</SignIn>
        <Box>
          <Desc>Input Github Username</Desc>
          <Input type="text" />
          <SignInBtn onClick={onClick}>분석</SignInBtn>
        </Box>
      </Wrapper>
    </>
  );
};

export default Home;
