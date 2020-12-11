import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#FF8300" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "13px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#01BF71")};
  }
`;

export const ResumeButton = styled.a`
  border-style: solid;
  border-width: 1px;
  border-radius: 4px;
  border-color: ${({ primary }) => (primary ? "#FF8300" : "#010606")};
  background-color: transparent;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "13px 48px" : "10px 15px")};
  color: ${({ dark }) => (dark ? "#FF8300" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  margin-top: 14px;
  margin-bottom: 10px;
  margin-left: 24px;
  text-decoration: none;
  text-align: center;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: rgba(255, 131, 0, 0.2);
  }
`;

export const EmailButton = styled.a`
  border-style: solid;
  border-width: 1px;
  border-radius: 40px;
  border-color: #FF8300;
  background-color: transparent;
  white-space: nowrap;
  padding: 10px 15px;
  color: #FF8300;
  font-size: 16px;
  margin-top: 14px;
  margin-bottom: 10px;
  margin-left: 24px;
  text-decoration: none;
  text-align: center;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #FF8300;
    color: white;
  }
`;
