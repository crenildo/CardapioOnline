// components/MenuOpcoes.tsx
import { opcoesItens } from "@/app/data/data";
import styles from "./styles/MenuOpcoes.module.css"

export default function MenuOpcoes() {
  return (
    <div className={styles.menuOpcoes}>
      {opcoesItens.map((opcao) => (
        <div key={opcao.id} className={styles.menuItem}>
          {opcao.nome}
        </div>
      ))}
    </div>
  );
}
