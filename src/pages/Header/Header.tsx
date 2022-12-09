import "./Header.scss";
import phone from "./phone.svg";
import logo from "./logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header header-inside">
      <div className="topHeader">
        <div className="container">
          <div className="header-top-inside">
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
              <Link to={"account-page"}>Daxil ol</Link>
              </a>
              <span className="random">/</span>
              <a href="/az/signup.html" title="">
                Qeydiyyat
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bottomHeader">
        <div className="container">
          <div className="header-btm-inside">
            <div className="header-logo">
              <a href="#/">
                <img src={logo} alt="" />
              </a>
            </div>
            <div className="headerMenu desktopOnly">
              <ul className="headerList">
                <li>
                  <Link to={"tarifler"}>Tarfiler</Link>
                
                </li>
                <li>
                  <a href="/store.html" title="">
                    Mağazalar
                  </a>
                </li>
                <li>
                  <a href="/faq.html" title="">
                    Faq
                  </a>
                </li>
                <li>
                  <a href="/contact.html" title="">
                    Əlaqə
                  </a>
                </li>
                <li>
                  <a href="/az/menu/maxfilik-32.html" title="">
                    Məxfilik
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
