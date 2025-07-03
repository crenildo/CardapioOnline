// components/MenuOpcoes.tsx
import { tipos } from "@/app/data/data";
import styles from "./styles/MenuOpcoes.module.css"

export default function MenuOpcoes() {
  return (
    <div className={styles.menuOpcoes}>
      {tipos.map((opcao) => (
        <div key={opcao.id} className={styles.menuItem}>
          {opcao.nome}
        </div>
      ))}
    </div>
  );
}
