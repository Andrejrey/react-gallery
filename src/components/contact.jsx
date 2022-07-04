import React, { useState } from "react";
import axios from "axios";
import "../contact.css";
import TitleBar from "./titleBar";

const Contact = () => {
  const [formData, setFormData] = useState({
    subject: "",
    email: "",
    mesagge: "",
    name: "",
    phone: "",
  });

  const SendContact = (e) => {
    e.stopPropagation();
    axios
      .post("http://127.0.0.1:8000/api/contact", formData)
      .then(function (response) {
        // handle success
        console.log("Axios response", response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  const ChangeFormData = (event) => {
    let data = {
      ...formData,
      [event.target.name]: event.target.value,
    };
    setFormData(data);
  };

  return (
    <>
      <TitleBar />
      <div className="contact-body">
        <div className="contact">
          <div className="contact-box">
            <div className="left"></div>
            <div className="right">
              <h2>Contact Us</h2>
              <input type="text" className="field" placeholder="Name" name="name" onChange={ChangeFormData}></input>
              <input type="text" className="field" placeholder="Phone" name="phone" onChange={ChangeFormData}></input>
              <input type="email" className="field" placeholder="Your E-mail" name="email" onChange={ChangeFormData}></input>
              <input type="text" className="field" placeholder="Subject" name="subject" onChange={ChangeFormData}></input>
              <textarea className="field area" placeholder="Message" name="message" onChange={ChangeFormData}></textarea>
              <button className="btn" onClick={SendContact}>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
