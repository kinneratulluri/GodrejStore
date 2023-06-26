import React from 'react'
import styles from "../Components/Women.module.css";
// import { WomenAssets } from './WomenItems';
import { useFilter } from '../Contexts/Filter-context';
import { useCart } from '../Contexts/Cart-Context';
import { Link } from 'react-router-dom';
 export const Women = () => {
    const {tempcart}=useFilter();
    const { addItem } = useCart();
  return (
    <>
    <h1 className={`${styles.WomenHead}`}>Women Products</h1>
   <section className={`${styles.WomenProducts}`}>
    {tempcart.map((item)=>{
        const {id,Company,Itemname,url,price,cart}=item;
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
                <span className={`${styles.price}`}>RS.{price}  </span>
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

