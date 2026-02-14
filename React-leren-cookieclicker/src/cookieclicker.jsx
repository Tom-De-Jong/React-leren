import styles from "./list.module.css";
import { useState } from 'react';


export function CookieClicker() {
    const [score, setScore] = useState(1);
    const [grandmas, setGrandmas] = useState(0);
    const [grandmaPrice, setGrandmaPrice] = useState(20);

    function cookieClick() {
        if (grandmas >= 1) {
            setScore(Math.ceil(score * (grandmas * 1.15)));
            console.log(score);
        } else {
            setScore(score + 1);
            console.log(score);
        }

    }

    function buyGrandma() {
        if (score > grandmaPrice) {
            setGrandmas(grandmas + 1);
            setScore(score - 20);
            console.log("Bought grandma")
            updateGrandmaPrice()
        }

        function updateGrandmaPrice() {
            setGrandmaPrice(grandmaPrice + 5);
            console.log(grandmaPrice)
        }
    }


    return (
        <section>
            <h2 className={styles.Header}>Cookie Clicker but shit</h2>
            <button className={styles.cookie} onClick={cookieClick}></button>
            <h2 className={styles.Header}>{score} Cookies</h2>

            <label htmlFor="button">Grandmas: {grandmas} </label>
            <button className={styles.upgrade} onClick={buyGrandma}>Buy grandma for {grandmaPrice}</button>

        </section>
    )
}
