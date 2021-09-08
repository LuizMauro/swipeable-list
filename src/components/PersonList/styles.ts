import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ButtonReload = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
`;

export const ContainerEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ButtonDelete = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0px;
  width: 100%;
  padding: 20px;
  cursor: pointer;
  background: ${colors.danger};
  color: ${colors.bg};
  border: none;
`;
