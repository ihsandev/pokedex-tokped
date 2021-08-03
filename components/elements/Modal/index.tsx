import React from "react";
import { ModalWrapper, ModalContent, Close } from "./styled";

export interface PropsModal extends React.HTMLAttributes<HTMLDivElement> {
  visible: boolean;
  onClose: any;
}
const ModalView: React.FC<PropsModal> = ({
  visible,
  children,
  onClose,
  ...props
}) => {
  if (visible === true) {
    return (
      <ModalWrapper>
        <ModalContent {...props}>
          <Close onClick={onClose}>&times;</Close>
          {children}
        </ModalContent>
      </ModalWrapper>
    );
  } else {
    return null;
  }
};

export default ModalView;
