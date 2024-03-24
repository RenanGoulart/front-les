import styled from "styled-components";

export const Container = styled.label`
  width: 60px;
  height: 34px;

  position: relative;
  display: inline-block;

  border-radius: 34px;
`;

export const Slider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: ${({ theme }) => theme.colors.gray_cc};
  border-radius: 34px;

  transition: 0.4s;

  cursor: pointer;

  &:before {
    content: "";
    height: 26px;
    width: 26px;

    position: absolute;
    left: 4px;
    bottom: 4px;

    background-color: ${({ theme }) => theme.colors.white_ff};
    border-radius: 50%;

    transition: 0.4s;
  }
`;

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider} {
    background-color: ${({ theme }) => theme.colors.green_56};
  }

  &:focus + ${Slider} {
    box-shadow: 0 0 1px ${({ theme }) => theme.colors.green_56};
  }

  &:checked + ${Slider}:before {
    transform: translateX(26px);
  }
`;
