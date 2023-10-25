import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

export default function Modal({ title, open, onClose, children }) {
  const [show, setShow] = useState(open);

  useEffect(() => {
    if (open) {
      setShow(open);
      return;
    }
    setShow(false);
  }, [open]);

  if (!show) return null;

  return ReactDOM.createPortal(
    <section
      open={open}
      onClose={onClose}
      className="fixed left-0 top-0 right-0 bottom-0 bg-black/50 z-[1000]"
    >
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-5 rounded-md bg-white z-[1500] shadow-2xl">
        <div className="mb-6 flex items-center justify-between gap-7 border-b pb-2">
          <div className="title">
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          </div>
          <button color="" onClick={onClose}>
            <AiOutlineClose className="h-5 w-5 text-red-700" />
          </button>
        </div>
        <Fragment>{children}</Fragment>
      </div>
    </section>,
    document.getElementById("modal")
  );
}
