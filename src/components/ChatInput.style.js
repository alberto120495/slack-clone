import styled from "styled-components";

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    outline: none;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
  }

  > form > button {
    display: none !important;
  }
`;

export { ChatInputContainer };
