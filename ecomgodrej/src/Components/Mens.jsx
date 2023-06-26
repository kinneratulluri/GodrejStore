import React from 'react'
import styles from "../Components/Mens.module.css";
import { MenAssets } from './MenItems';
import { useCart } from "../Contexts/Cart-Context";

 export const Mens = () => {
    const { addItem } = useCart();
   
  return (
    <>
    <h1 className={`${styles.MenHead}`}>Mens Products</h1>
   <section className={`${styles.MenProducts}`}>
    { MenAssets.map((item)=>{
        const {id,Company,Itemname,url,price,cart}=item;
        return (
            <article key={id} className={`${styles.Product}`}>
               <img src={url} alt={Company}  className={`${styles.Image}`}/>
               <h3 className={`${styles.Company}`}>{Company}</h3>
               <h4 className={`${styles.Item}`}>{Itemname}</h4>
               <p className={`${styles.PriceCart}`}>
                <span className={`${styles.price}`}>Rs.{price}  </span>
                <span
                      className={`${styles.cart}`}
                      onClick={() => addItem(item)}
                    >
                      {cart}
                    </span>
                </p>
            </article>
        )
    })}
   </section>
   </>
  )
}

