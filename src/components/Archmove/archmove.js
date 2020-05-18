import React, { useState } from 'react';
import './archmove.scss';
import Modal from "../Modal/Modal";
import ContactForm from "../ContactForm/contactForm";

const Archmove = () => {
  const [modal, setModal] = useState(false);
  const toggleClick = () => {
    setModal(!modal);
  }
  return (
    <div className="archmove">
      <h2 className="title">
        Build your needs with Archmove
      </h2>
      <div className="archmove-info">
        <div className="archmove-info__image">
          <img src="/assets/images/photo2.png" alt=""/>
        </div>
        <div className="archmove-info__text">
          <div className="archmove-item">
            <div className="archmove-item__icon"/>
            <div className="archmove-item__description">
              <span>100% guaranteed project completion</span>
              <p>Build safe, comfortable and transparent with a project management application with a joint account.</p>
            </div>
          </div>
          <div className="archmove-item">
            <div className="archmove-item__icon"/>
            <div className="archmove-item__description">
              <span>No additional fees</span>
              <p>There are no hidden costs. The value of the offer you get is the value you paid.</p>
            </div>
          </div>
          <div className="archmove-item">
            <div className="archmove-item__icon"/>
            <div className="archmove-item__description">
              <span>Get escort from the Team</span>
              <p>Monitor reports from the Arsitag team who check directly in the field.</p>
            </div>
          </div>
          <div>
            <a
              href="#"
              className="btn-pink"
              onClick={toggleClick}
            >
              FREE CONSULTATION
            </a>
          </div>
        </div>
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

export default Archmove;
