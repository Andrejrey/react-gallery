import "../contact.css";
import TitleBar from "./titleBar";

const Contact = () => {
  return (
    <>
      <TitleBar />
      <div className="contact-body">
        <div className="contact">
          <div className="contact-box">
            <div className="left"></div>
            <div className="right">
              <h2>Contact Us</h2>
              <input type="email" className="field" placeholder="Your E-mail"></input>
              <input type="text" className="field" placeholder="Subject"></input>
              <textarea className="field area" placeholder="Message"></textarea>
              <button className="btn">Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
