import logo from "../../assets/images/log.svg";
import dark from "../../assets/images/dark.svg";
import Navbar from "./Navbar/Navbar";
import styles from "../../styles";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("lock-scroll");
  };

  return (
    <header
      className={`${styles.container} flex items-center justify-between py-[1.3125rem]`}
    >
      <a
        href="#main"
        className="absolute left-0 z-[100] m-3 -translate-x-[150%] bg-almost-black p-3 text-white transition focus:translate-x-0"
      >
        Skip to main content
      </a>
      <a href="#" className="mr-[3.875rem] flex items-center text-center">
        <img
          src={logo}
          alt="snap"
          width={200}
          className={`${styles.transition} dark:hidden mt-[0.3125rem] mr-4`}
        />
 <img
          src={dark}
          alt="snap"
          width={200}
          
          className={`${styles.transition} mt-[0.3125rem] mr-4  hidden dark:block`}
        />
        {/* <p className="">Nucleo</p>
        <p className="font-bold text-orange-500">Code</p> */}
      </a>

      <Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
    </header>
  );
};

export default Header;
