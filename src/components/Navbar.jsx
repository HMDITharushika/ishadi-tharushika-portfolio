import logo2 from "../assets/logo2.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo2} alt="" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/ishadi-tharushika/"
          target="_blank"
        >
          <FaLinkedin />
        </a>

        <a href="https://github.com/HMDITharushika" target="_blank">
          <FaGithub />
        </a>

        <a href="https://x.com/ishaditharushi3" target="_blank">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/ishadayy/" target="_blank">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
