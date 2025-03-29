// components/MaisPedidos.tsx
"use client"; // Next.js App Router exige isso para `useState` e `useEffect`

import { useEffect, useRef, useState } from "react";
import { maisPedidos } from "@/app/data/data";
import Image from "next/image";
import styles from "@/app/components/styles/MaisPedidos.module.css"

export default function MaisPedidos() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [interacaoUsuario, setInteracaoUsuario] = useState(false);
  
  useEffect(() => {
    const container = containerRef.current;
    let animationFrame: number | null = null;
    const scrollSpeed = 1.0; 
    let isResetting = false;

    const animate = () => {
      if (!container || interacaoUsuario || isResetting) return;

      const currentScroll = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const newScroll = currentScroll + scrollSpeed;

      if (newScroll >= maxScroll - 2) {
        isResetting = true;
        container.style.scrollBehavior = "smooth";
        container.scrollLeft = 0;

        setTimeout(() => {
          container.style.scrollBehavior = "auto";
          isResetting = false;
          animationFrame = requestAnimationFrame(animate);
        }, 500);
      } else {
        container.scrollLeft = newScroll;
        animationFrame = requestAnimationFrame(animate);
      }
    };

    const handleInteractionStart = () => {
      setInteracaoUsuario(true);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };

    const handleInteractionEnd = () => {
      setTimeout(() => {
        setInteracaoUsuario(false);
        animationFrame = requestAnimationFrame(animate);
      }, 10000);
    };

    if (container) {
      container.addEventListener("mousedown", handleInteractionStart);
      container.addEventListener("touchstart", handleInteractionStart);
      container.addEventListener("mouseup", handleInteractionEnd);
      container.addEventListener("touchend", handleInteractionEnd);
    }

    animate();

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      if (container) {
        container.removeEventListener("mousedown", handleInteractionStart);
        container.removeEventListener("touchstart", handleInteractionStart);
        container.removeEventListener("mouseup", handleInteractionEnd);
        container.removeEventListener("touchend", handleInteractionEnd);
      }
    };
  }, [interacaoUsuario]);

  return (
    <div className={styles.maisPedidos} ref={containerRef}>
      {maisPedidos.map((pedido) => (
        <div key={pedido.id} className={styles.pedidoItem}>
          <Image src={pedido.imagem} alt={pedido.nome} width={100} height={100} className={styles.maisPedidosImage} draggable="false" />
          <p className={styles.pedidoNome}>{pedido.nome}</p>
        </div>
      ))}
    </div>
  );
}
