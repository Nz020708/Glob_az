import "./Header.scss";
import phone from "./phone.svg";
import logo from "./logo.png";
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header">
      <div className="topHeader">
        <div className="headerTopLeft">
          <select className="langOpt" id="lang">
            <option value="AZ">AZ</option>
            <option value="RU">RU</option>
            <option value="ENG">ENG</option>
          </select>
          <div className="header-phone">
            <img src={phone} alt="" />
            <a href="tel:+994 12 525 9001" title="">
              +994 12 525 9001
            </a>
            <a href="tel:+994 50 833 9010" title="">
              +994 50 833 9010
            </a>
            <a href="tel:+994 99 833 9010" title="">
              +994 99 833 9010
            </a>
          </div>
        </div>
        <div className="header-top-right">
          <a href="#signin" className="inline cboxElement" title="">
            Daxil ol
          </a>
          <span className="random">/</span>
          <a href="/az/signup.html" title="">
            Qeydiyyat
          </a>
        </div>
      </div>
      <div className="bottomHeader">
        <link href="#">
          <img src={logo} alt="" />
        </link>
        <div className="headerMenu">
          <link rel="stylesheet" href="" />
        </div>
      </div>
      
    </header>
  );
};