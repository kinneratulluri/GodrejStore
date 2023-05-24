import React from "react";
import styles from "../Components/NavBar.module.css";
import { FaBars, FaShoppingCart,FaUser,FaHeart} from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { Links } from "./Links";
import { NavLink } from "react-router-dom";
export const NavBar = () => {
  const [showlinks, setshowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linkRef = useRef(null);
  useEffect(() => {
    const linksHeight = linkRef.current.getBoundingClientRect().height;
    if (showlinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showlinks]);
  return (
    <>
      <nav>
        <div className={`${styles.NavContainer}`}>
          <div className={`${styles.NavLogo}`}>
            <img
              src="images/NavBar/LogoImg.webp"
              alt="Logo"
              className={`${styles.Logo}`}
            />
            <button
              className={`${styles.ToggleBtn}`}
              onClick={() => setshowLinks(!showlinks)}
            >
              {<FaBars />}
            </button>
          </div>
          <div className={`${styles.LinksContainer}`} ref={linksContainerRef}>
            <ul className={`${styles.Links}`} ref={linkRef}>
              {Links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <NavLink
                      to={url}
                      className={({ isActive }) =>
                        isActive ? "active EachLink" : "EachLink"
                      }
                    >
                      {text}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={`${styles.ThreeLinks}`}>
            <div>
              <FaUser className={`${styles.FontIcon}`} />
              
            </div>
            <div>
           <FaHeart className={`${styles.FontIcon}`}/>
           
            </div>
            <div>
              <FaShoppingCart className={`${styles.FontIcon}`} />
             
            </div>
            
            
          </div>
        </div>
      </nav>
    </>
  );
};
