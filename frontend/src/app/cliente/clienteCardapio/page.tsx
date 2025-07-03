import Image from "next/image";
import styles from "@/app/resetGlobals.module.css"

import MenuSuperior from "@/app/components/MenuSuperior";
import MenuOpcoes from "@/app/components/MenuOpcoes";
import MaisPedidos from "@/app/components/MaisPedidos";
import MenuItens from "@/app/components/MenuItens";
import ScrollExample from "@/app/components/ScrollExample"; //Pagina de testes

export default function ClienteCardapio() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <MenuSuperior />
        <MenuOpcoes />
        <MaisPedidos />
        <MenuItens />
      </div>
    </div>
  );
}
