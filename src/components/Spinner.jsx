import styled, { keyframes } from "styled-components";
import { BiLoaderAlt } from "react-icons/bi";

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;
const SpinnerMini = styled(BiLoaderAlt)`
  width: 3.5rem;
  height: 3.5rem;
  animation: ${rotate} 1.5s infinite linear;
`;

// Spinner
export default function Spinner() {
  return (
    <div className="flex justify-center mt-40">
      <SpinnerMini />
    </div>
  );
}
