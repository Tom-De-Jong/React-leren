import styles from "./list.module.css";

export function Top10(props){
    return(
        <li className={styles.list}>{props.title}</li>
    )
}