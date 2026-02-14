import styles from "./list.module.css";
import { useState } from 'react';


export function Pokemon() {


    const [pokemon, setPokemon] = useState(null);
    const [type, setType] = useState(null);

    if (pokemon === null) {
        fetch("https://pokeapi.co/api/v2/pokemon/254")
            .then(response => response.json())
            .then(data => {
                setPokemon(data);
                setType(data.types[0].type.name)
                const typeName = data.types[0].type.name
            })
    }


    if (pokemon == null) {
        return (
            <h2 className={styles.Header}>Fetching data!</h2>
            
        )
    } else {

        return (
            <section className={styles.pokemon}>
                <h2 className={styles.name}>{pokemon.name}</h2>
                <img src={pokemon.sprites.front_default} />
                <h2 className={styles[type]}>{type}</h2>
            </section>
        )

    }


}
