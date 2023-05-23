import React from 'react'
import styles from "../Components/FeaturedProducts.module.css";
import { FeaturedItems } from './HomePageArray';
export const FeaturedProducts = () => {
  return (
   <>
    <h1 className={`${styles.FeatHead}`}>Featured Products</h1>
   <section className={`${styles.MensProducts}`}>
    {FeaturedItems.map((item,index)=>{
        const {Company,Itemname,url,price,cart}=item;
        return (
            <article key={index} className={`${styles.Product}`}>
               <img src={url} alt="loading"  className={`${styles.Image}`}/>
               <h3 className={`${styles.Company}`}>{Company}</h3>
               <h4 className={`${styles.Item}`}>{Itemname}</h4>
               <p className={`${styles.PriceCart}`}>
                <span className={`${styles.price}`}>{price}  </span>
                <span className={`${styles.cart}`}>{cart}</span>
                </p>
            </article>
        )
    })}
   </section>
   </>
  )
}

