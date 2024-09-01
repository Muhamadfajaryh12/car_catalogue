import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import React from "react";

const ModalContent = ({ setIsOpen, isOpen, content }) => {
  function close() {
    setIsOpen(false);
  }
  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={close}
    >
      {content}
    </Dialog>
  );
};

export default ModalContent;
