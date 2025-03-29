import Image from "next/image";
import styles from "./page.module.css";

import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Home</h1>
      <nav>
        <ul>
          <li><Link href="/cliente/clienteCardapio">Cliente Cardapio</Link></li>
          <li><Link href="/vendedor/vendedorLogin">Vendedor Login</Link></li>
        </ul>
      </nav>
    </div>
  );
}
