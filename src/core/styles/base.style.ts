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
  font-size: 20px;
  font-style: normal;
  line-height: 25px;
  border: 2px solid #eda3b5;
  color: #eda3b5;
  background: transparent;
  border-radius: 8px;
  &:hover {
    background: #eda3b5;
    color: white;
  }
`;
