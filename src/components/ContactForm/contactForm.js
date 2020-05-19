import React from 'react';
import Input from "../Input/input";
import './contactForm.scss';

const ContactForm = ({onClose}) => {

  const onSubmitForm = () => {
    onClose();
  };

  return (
    <form className="card-box">
      <div className="row m-0">
        <div className="col-md-12 p-0">
          <div className="row m-0">
            <div className="col-md-6 col-sm-12">
              <Input
                label="Name"
                name="name"
                type="text"
                placeholder="Input your name"
                required
                autofocus
              />
            </div>
            <div className="col-md-6 col-sm-12">
              <Input
                label="Surname"
                name="surname"
                type="text"
                placeholder="Input your surname"
                autofocus
              />
            </div>
          </div>
          <div className="row m-0">
            <div className="col-md-6 col-sm-12">
              <Input
                label="Phone"
                name="phone"
                type="tel"
                placeholder="Input your phone"
                required
                autofocus
              />
            </div>
            <div className="col-md-6 col-sm-12">
              <Input
                label="Email"
                name="email"
                type="email"
                placeholder="Input your email"
                required
                autofocus
              />
            </div>
          </div>
          <div className="row m-0">
            <div className="col-md-12">
              <div className="form-input">
                    <label>
                      Describe your dream house
                    </label>
                <textarea name="message" cols="25" rows="10" placeholder="Your dreams"/>
              </div>
            </div>
          </div>
          <div className="row m-0">
            <div className="col-md-6">
              <div className="form-input">
                <a
                  href="#"
                  className="btn-pink"
                  onClick={() => onSubmitForm()}
                >
                  Send form
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
