import Image from "next/image";
import styles from "./page.module.css";

import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Home</h1>
      <nav>
        <ul>
          <li><Link href="/about">Sobre</Link></li>
          <li><Link href="/contact">Contato</Link></li>
        </ul>
      </nav>
    </div>
  );
}
