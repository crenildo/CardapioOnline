import Image from "next/image";
import compartilhar from "@/../../public/compartilhar.png";
import icone from "@/../../public/icone.png";
import styles from './styles/MenuSuperior.module.css';
import "./styles/reset.css";


export default function MenuSuperior(){
  return(
    <div>
      <div>
        <div className={styles.menuSuperior}>
          <div className={styles.nomeEicone}>
            <Image src={icone} alt="Ícone" width={40} height={40} className={styles.profileImage} />
            <p className={styles.nomeLoja}>Mcdonalds Produções e Pastéis</p>
          </div>
          <div className={styles.status}>
            <p>Aberto até 22h - pedido mínimo R$30</p>
          </div>
          <div>
            <Image src={compartilhar} alt="Compartilhar" width={24} height={24} className={styles.iconeCompartilhar} />
          </div>
        </div>
      </div>
    </div>
  );
}