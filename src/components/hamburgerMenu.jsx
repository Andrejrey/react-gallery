import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const HamburgerMenu = () => {
  return (
    <>
      <input type="checkbox" id="check" />
      <div className="btn_one">
        <label htmlFor="check">
          <i>
            <GiHamburgerMenu />
          </i>
        </label>
      </div>
      <div className="btn_two">
        <label htmlFor="check">
          <i>
            <MdClose />
          </i>
        </label>
      </div>
    </>
  );
};

export default HamburgerMenu;
