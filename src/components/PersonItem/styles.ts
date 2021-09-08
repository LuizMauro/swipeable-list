import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 400px;
  height: 50px;
  margin-top: 10px;

  border-radius: 20px;
  background: ${colors.bgCards};
  cursor: pointer;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
`;

export const NameUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
  margin: 10px;
`;

export const ButtonDelete = styled.div`
  display: flex;
  align-items: center;

  height: 100%;
  margin: 10px;
`;

export const ContentView = styled.div`
  height: 100%;
  width: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.green};
  color: #fff;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  cursor: pointer;
`;

export const ContentDelete = styled.div`
  height: 100%;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.danger};
  color: #fff;

  cursor: pointer;
`;
