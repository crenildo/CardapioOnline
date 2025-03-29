import styles from "./styles/MenuItens.module.css"
import { tortas } from "../data/data";
import Image from "next/image";

export default function MenuItens(){
    return(
        <div className={styles.menuItens}>
            <div>
                <h1>Tortas Tradicionais</h1>
                {tortas.map((torta) => (
                    <div key={torta.id} className={styles.item}>
                        <div className={styles.nomeDescPreco}>
                            <h2 className={styles.itemNome}>{torta.nome}</h2> 
                            <p className={styles.itemDescricao}>{torta.descricao}</p>
                            <p className={styles.itemPreco}>R$ {torta.preco}</p>
                        </div>
                        <Image 
                            src={torta.imagem} 
                            alt={torta.nome} 
                            className={styles.menuItensImage} 
                        />
                    </div>
                ))}
            </div>

        </div>
    );
}