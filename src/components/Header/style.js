import styled from "styled-components";

export const HEADER_WRAPPER = styled.header`
  padding: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5ba13;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
`;

export const HEADER_CONTAINER = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 625px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const SUB_HEADER = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 1.5px;
  font-size: 16px;
  color: #ffffff;
  display: flex;

  justify-content: space-between;
  align-items: center;

  & h1 {
    color: #fff;
    font-family: "McLaren", cursive;
    font-weight: 800;
    font-size: 2rem;
    letter-spacing: 1.8px;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 450px) {
    & h1 {
      color: #fff;
      font-family: "McLaren", cursive;
      font-weight: 800;
      font-size: 1.2rem;
      margin-bottom: 10px;
    }

    & h6 {
      color: #fff;
      font-family: "McLaren", cursive;
      font-size: 10px;
      text-align: center;
      margin-bottom: 10px;
    }
  }
`;

export const GITHUB_STAT = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px 2px;

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-weight: 800;
    color: #5d5a52;
    font-size: 15px;
    background-color: #fbfbfb;
    margin: 5px;
    padding: 7px 7px;
    border-radius: 4px;
    cursor: pointer;
  }

  & a:hover {
    background-color: #ececec;
    color: #494845;
  }
`;
