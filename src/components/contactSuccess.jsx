import React from "react";
import "../contactSuccess.css";
import TitleBar from "./titleBar";

const ContactSuccess = (props) => {
  return (
    <>
      <TitleBar />
      <div className="contact-body">
        <div className="contact">
          <div className="contact-box">
            <div className="left"></div>
            <div className="right">
              <h2>Contact Success</h2>
              <table>
                <tr>
                  <th>Name</th>
                  <td>{props.data.name}</td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td><a href="tel:{props.data.phone}">{props.data.phone}</a></td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td><a href="mailto:{props.data.email}">{props.data.email}</a></td>
                </tr>
                <tr>
                  <th>Subject</th>
                  <td>{props.data.subject}</td>
                </tr>
                <tr>
                  <th>Message</th>
                  <td>{props.data.message}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSuccess;
