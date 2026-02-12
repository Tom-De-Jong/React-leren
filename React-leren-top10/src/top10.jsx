import styles from "./list.module.css";

export function Top10(props){



    return(
        // <li className={styles.list}>{props.title}</li>

        <li>
            <h1 className={styles.list}>{props.title}</h1>
            <p className={styles.list}>{props.desc}</p>
        </li>
    )
}