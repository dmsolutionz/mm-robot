import styled from "styled-components";

export const CommandsFlex = styled.div`
  form {
    display: flex;
    padding: 3em;
  }
`;

export const CommandsForm = styled.div`
  flex: 0 0 50%;

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    padding: 0.5em;
    background: white;
    border: 1px solid black;
    border-radius: 3px;
    display: block;
    margin-bottom: 10px;
  }
`;

export const CommandsFormButton = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

export const CommandsOutputWrapper = styled.div`
  flex: 0 0 50%;
`;

export const CommandsOutput: any = styled.pre`
  background: #001628;
  padding-top: 20px;
  color: #f5d67b;
  clear: both;
  position: relative;
  line-height: 28px;
  border-radius: 8px;
  min-width: 300px;
  overflow: hidden;
  tab-size: 2;
  margin: 0 0 1rem;

  &:before {
    color: #ff8a00;
    font-weight: 700;
    font-size: 12px;
    content: attr(rel);
    position: absolute;
    top: 0.33rem;
    left: 0.52rem;
    width: 100%;
    padding: 0;
  }

  code {
    font-size: 16px;
    line-height: 1.75;
    background: 0 0;
    padding: 30px;
    white-space: pre;
    -webkit-overflow-scrolling: touch;
    display: block;
    overflow-x: scroll;
    max-width: 100%;
    min-width: 100px;
    scrollbar-color: #666;
    scrollbar-width: 0.5em;
  }
`;
