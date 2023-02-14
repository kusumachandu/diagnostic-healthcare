import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Modal = ({ show, onClose, children, handleLogout }: any) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e: any) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <StyledModalOverlay>
      <StyledModal className="w-[250px]  md:w-[500px] lg:w-[500px]">
        <StyledModalHeader>
          <h1 className="dark:text-black">Logout</h1>
          <a href="#" onClick={handleCloseClick}>
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="duration-300 hover:rotate-180 dark:text-black"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </a>
        </StyledModalHeader>
        <hr className="h-[2px] bg-gray-900 mt-2" />
        <StyledModalBody className="dark:text-black">
          {children}
        </StyledModalBody>
        <div className="flex justify-between pt-6">
          <div></div>
          <div className="flex justify-between gap-2">
            <button
              onClick={onClose}
              className="border text-white font-bold bg-stone-600 rounded-lg px-3 py-2"
            >
              No
            </button>
            <button
              onClick={handleLogout}
              className="border text-white bg-red-600 rounded-lg px-3 py-2"
            >
              Logout
            </button>
          </div>
        </div>
      </StyledModal>
    </StyledModalOverlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")!
    );
  } else {
    return null;
  }
};

const StyledModalBody = styled.div`
  padding-top: 25px;
  font-size: 22px;
`;

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 25px;
`;

const StyledModal = styled.div`
  background: white;
  border-radius: 15px;
  padding: 15px;

`;
const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default Modal;
