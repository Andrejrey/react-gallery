import { BsFillPhoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import "../contact.css";
import TitleBar from "./titleBar";

const Contact = () => {
  return (
    <div>
      <TitleBar />
      <div className="contact">
        <div className="con">
          <h1>Contact</h1>
        </div>
        <div className="condata"></div>

        <h2 className="email">
          <IoMdMail className="mailicon" />
          {" " + "E-mail: hättest.du.wohl@gerne.de"}
        </h2>
        <h2 className="phone">
          <BsFillPhoneFill className="phoneicon" />
          {" " + "Phone: +12/34-56789"}
        </h2>
      </div>
    </div>
  );
};

export default Contact;
