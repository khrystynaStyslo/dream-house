import React, { useState } from 'react';
import './realize.scss';
import Modal from "../Modal/Modal";
import ContactForm from "../ContactForm/contactForm";

const Realize = () => {
  const [modal, setModal] = useState(false);
  const toggleClick = () => {
    setModal(!modal);
  }
  return (
    <div className="realize">
      <div className="realize-image"/>
      <div className="realize-text">
        <p>Realize your dream <br/> project with <span>Archmove</span></p>
        <a
          href="#"
          onClick={toggleClick}
          className="btn-pink"
        >
          FREE CONSULTATION
        </a>
      </div>
      {modal && (
        <Modal
          id="modal"
          isOpen={modal}
          onClose={toggleClick}
          class="my-class"
        >
          <div className="box-body">
            <ContactForm onClose={toggleClick}/>
          </div>
        </Modal>
      )}
    </div>
  )
};

export default Realize;
