import React from "react";
import styles from "../Components/FeaturedProducts.module.css";
// import { FeaturedItems } from './HomePageArray';
import { Link } from "react-router-dom";
import { useCart } from "../Contexts/Cart-Context";
import { MainFilter } from "./MainFilter";
import { useMainFilter } from "../Contexts/MainFilterContext";

export const FeaturedProducts = () => {
  const { addItem } = useCart();
  let { tempcart,originalcart } = useMainFilter();
  if(tempcart.length===0){
    tempcart=originalcart.filter((item)=>item.id<=15);
  }
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.Filter}`}>
          <MainFilter />
        </div>

        <div className={`${styles.bg}`}>
          <h1 className={`${styles.FeatHead}`}>Featured Products</h1>
          <section className={`${styles.FeatProducts}`}>
            {tempcart.map((item) => {
              const { id, Company, Itemname, url, price, cart } = item;
              return (
                <article key={id} className={`${styles.Product}`}>
                  <Link to={`/singleitem/${id}`} item={item}>
                    <img
                      src={url}
                      alt={Company}
                      className={`${styles.Image}`}
                    />
                  </Link>
                  <h3 className={`${styles.Company}`}>{Company}<span> <Link to={`/singleitem/${id}`} ><button className={`${styles.viewit}`}>View Details</button></Link></span></h3>
                  
                  <h4 className={`${styles.Item}`}>{Itemname}</h4>
                  <p className={`${styles.PriceCart}`}>
                    <span className={`${styles.price}`}>Rs.{price} </span>
                    <span
                      className={`${styles.cart}`}
                      onClick={() => addItem(item)}
                    >
                      {cart}
                    </span>
                  </p>
                </article>
              );
            })}
          </section>
        </div>
      </div>
    </>
  );
};
