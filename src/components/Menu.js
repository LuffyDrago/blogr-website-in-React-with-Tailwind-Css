import open from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";
const Menu = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        {isOpen ? (
          <img src={close} alt="open-close" />
        ) : (
          <img src={open} alt="open-close" />
        )}
      </button>
    </>
  );
};

export default Menu;
