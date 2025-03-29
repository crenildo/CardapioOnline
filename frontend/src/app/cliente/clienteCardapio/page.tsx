import Image from "next/image";
import styles from "../../page.module.css";

import MenuSuperior from "@/app/components/MenuSuperior";
import MenuOpcoes from "@/app/components/MenuOpcoes";
import MaisPedidos from "@/app/components/MaisPedidos";
import MenuItens from "@/app/components/MenuItens";
import ScrollExample from "@/app/components/ScrollExample"; //Pagina de testes

export default function ClienteCardapio() {
  return (
    <div className="body">
      <div className="container">
        <MenuSuperior />
        <MenuOpcoes />
        <MaisPedidos />
        <MenuItens />
      </div>
    </div>
  );
}
