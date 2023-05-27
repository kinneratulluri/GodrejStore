import React from "react";
import styles from "../Components/NavBar.module.css";
import { FaBars, FaShoppingCart, FaUser, FaHeart } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { Links } from "./Links";
import { Link, NavLink } from "react-router-dom";

import { useCart } from "../Contexts/Cart-Context";
export const NavBar = () => {
  const { quantity } = useCart();
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
            <div className={`${styles.user}`}>
              <FaUser className={`${styles.FontIcon}`} />
            </div>
            <div className={`${styles.wishlist}`}>
              <FaHeart className={`${styles.FontIcon}`} />
            </div>
            <div className={`${styles.CartBar}`}>
              <Link to="/cart">
                <FaShoppingCart className={`${styles.FontIcon}`} />
              </Link>
              <div className={`${styles.AmountContainer}`}>
                <p className={`${styles.Amount}`}>{quantity}</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
