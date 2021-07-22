import styled from 'styled-components';

// Input
export const InputBase = styled.input`
  padding: 0.5rem;
  margin: 0.5rem;
  outline: none;
  border: 2px solid #e5e5ea;
  border-radius: 8px;
  font-size: 16px;
  line-height: 20px;
  font-style: normal;
  font-weight: normal;
  color: #1b2437;
  width: 100%;

  &:focus {
    border: 2px solid #eda3b5;
  }

  &:invalid {
    border: 2px solid #f6436f;
  }
`;

// Loader
export const LoaderBase = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

// Button
export const ButtonBase = styled.button`
  font-size: 1rem;
  margin: 1rem;
  padding: 0.25rem 1rem;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  line-height: 25px;
  border: 2px solid #e5e5ea;
  /* border: 2px solid #eda3b5; */
  color: #1b2437;
  background: transparent;
  border-radius: 8px;
  &:hover {
    background: #eda3b5;
    color: #ffffff;
    border: 2px solid #eda3b5;
  }
`;

export const CustomCheckbox = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 24px;
  width: 24px;
  border: 2px solid #d1d1d6;
  border-radius: 2px;
  &::after {
    content: '';
    position: absolute;
    display: none;
  }
`;
export const InputCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  &:checked {
    display: block;
  }
`;

export const CheckboxControl = styled.label`
  display: block;
  position: relative;
  padding-left: 2rem;
  margin-left: 0.5rem;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  ${InputCheckbox}:checked ~ ${CustomCheckbox} {
    background-color: #eda3b5;
    border: none;
  }

  ${InputCheckbox}:disabled ~ ${CustomCheckbox} {
    opacity: 0.4;
    mix-blend-mode: normal;
  }

  ${InputCheckbox}:checked ~ ${CustomCheckbox}::after {
    display: block;
  }

  ${CustomCheckbox}::after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid #ffffff;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 0.5rem;
`;

export const Label = styled.label`
  display: inline-block;
  padding: 0.375rem 0.375rem;
`;
