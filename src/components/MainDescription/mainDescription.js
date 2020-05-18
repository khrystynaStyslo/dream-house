import React, { useState } from 'react';
import Modal from "../Modal/Modal";
import './mainDescription.scss';
import ContactForm from "../ContactForm/contactForm";

const MainDescription = () => {
  const [modal, setModal] = useState(false);
  const toggleClick = () => {
    setModal(!modal);
  }
  return (
    <div className="main-description">
      <div className="main-description__text">
        <p>The first and most trusted marketplace of design & build house in The World. 100% guaranteed Build safe, comfortable and transparent with a project management for the best result</p>
        <a
          href="#"
          onClick={toggleClick}
          className="btn-pink"
        >
          Free Consultation
        </a>
      </div>
      <div className="main-description__image">
        <img src="assets/images/photo1.png" alt=""/>
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
  );
}

export default MainDescription;
