import React from 'react'
import styles from "../Components/FeaturedProducts.module.css";
import { FeaturedItems } from './HomePageArray';

import { useCart } from '../Contexts/Cart-Context';
export const FeaturedProducts = () => {
    const {addItem}=useCart();
  return (
   <>
   <div  className={`${styles.bg}`}>
   <h1 className={`${styles.FeatHead}`}>Featured Products</h1>
   <section className={`${styles.FeatProducts}`}>
    {FeaturedItems.map((item)=>{
        const {id,Company,Itemname,url,price,cart}=item;
        return (
            <article key={id} className={`${styles.Product}`}>
               <img src={url} alt={Company}  className={`${styles.Image}`}/>
               <h3 className={`${styles.Company}`}>{Company}</h3>
               <h4 className={`${styles.Item}`}>{Itemname}</h4>
               <p className={`${styles.PriceCart}`}>
                <span className={`${styles.price}`}>{price}  </span>
                <span className={`${styles.cart}`} onClick={()=>addItem(item)} >{cart}</span>
                </p>
            </article>
        )
    })}
   </section>
   </div>
    
   </>
  )
}

