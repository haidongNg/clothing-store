import styled from 'styled-components';

// Control Input
export const InputBase = styled.input.attrs((props) => ({
  type: props.type ? props.type : 'text',
}))`
  padding: 0.5rem;
  margin: 0.375rem;
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

// Control Checkbox
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

export const InputCheckbox = styled.input.attrs((props) => ({
  type: 'checkbox',
}))`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const CheckboxControl = styled.label`
  left: 0%;
  right: 8.33%;
  top: 8.33%;
  bottom: 8.33%;
  border-radius: 2px;
  display: block;
  position: relative;
  margin-left: 0.375rem;
  padding-left: 2.3rem;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover ${InputCheckbox} ~ ${CustomCheckbox} {
    background-color: #d1d1d6;
  }

  ${InputCheckbox}:checked ~ ${CustomCheckbox} {
    background-color: #eda3b5;
    border: 2px solid transparent;
  }

  ${InputCheckbox}:disabled ~ ${CustomCheckbox} {
    opacity: 0.4;
    mix-blend-mode: normal;
  }

  ${InputCheckbox}:checked ~ ${CustomCheckbox}::after {
    display: block;
  }

  ${CustomCheckbox}::after {
    left: 31.17%;
    right: 29.17%;
    top: 21.34%;
    bottom: 33.33%;
    width: 5px;
    height: 10px;
    border: solid #ffffff;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

// Control Radio
export const CustomRadio = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 24px;
  width: 24px;
  background-color: #ffffff;
  border: 2px solid #d1d1d6;
  border-radius: 50%;
  &::after {
    content: '';
    position: absolute;
    display: none;
  }
`;

export const InputRadio = styled.input.attrs((props) => ({
  type: 'radio',
}))`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const RadioControl = styled.label`
  left: 0%;
  right: 8.33%;
  top: 8.33%;
  bottom: 8.33%;
  display: block;
  position: relative;
  margin-left: 0.375rem;
  padding-left: 2.3rem;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover ${InputRadio} ~ ${CustomRadio} {
    background-color: #d1d1d6;
  }

  ${InputRadio}:checked ~ ${CustomRadio} {
    border: 2px solid #eda3b5;
  }
  ${InputRadio}:disabled ~ ${CustomRadio} {
    mix-blend-mode: normal;
    opacity: 0.4;
  }

  ${InputRadio}:checked ~ ${CustomRadio}::after {
    display: block;
  }

  ${CustomRadio}::after {
    left: 29.17%;
    right: 29.17%;
    top: 29.17%;
    bottom: 29.17%;
    background: #eda3b5;
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
`;

// Form group
export const FormGroup = styled.div`
  position: relative;
  margin-bottom: 0.5rem;
`;

// Label
export const Label = styled.label`
  display: inline-block;
  padding: 0.375rem 0.375rem;
`;

// Grid
export const Column = styled.div`
  float: left;
  width: 23%;
  padding: 0 10px;
`;

export const Row = styled.div`
  &::after {
    content: '';
    display: table;
    clear: both;
  }

  @media screen and (max-width: 600px) {
    ${Column} {
      width: 100%;
      display: block;
      margin-bottom: 20px;
    }
  }
`;

// Control Select
export const Select = styled.select`
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  padding: 1rem 1.5rem;
  background-color: #ffffff;
  border: 2px solid #e5e5ea;
  border-radius: 8px;
`;
export const Option = styled.option``;
export const SelectWrapper = styled.div`
  position: relative;
  left: 0%;
  right: 0%;
  top: 38.89%;
  bottom: 0%;
  border: 2px solid #e5e5ea;
  box-sizing: border-box;
  border-radius: 8px;
`;
