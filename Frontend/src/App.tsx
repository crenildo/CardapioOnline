import { useEffect, useState, useRef } from 'react'
import icone from './assets/icone.png'
import compartilhar from './assets/compartilhar.png'
import hamburguer from './assets/hamburguer.jpeg'
import suco from './assets/suco.jpg'

import viteLogo from '/vite.svg'
import './App.css'
import "./index.css"

function App() {
  const [count, setCount] = useState(0)

  const opcoesItens = [
    {
      id: 1, nome: "Tortas Tradicionais" 
    },
    {
      id: 2, nome: "Bolos Tematicos"
    },
    {
      id: 3, nome: "Sacolés Gourmet"
    },
    {
      id: 4, nome: "Bebidas Em Geral"
    },
    {
      id: 5, nome: "Pasteis CrocCroc"
    }
  ];

  const maisPedidos = [
    {id: 1, nome: "X-TUDO", imagem: hamburguer},
    {id: 2, nome: "Suco de Laranja", imagem: suco},
    {id: 3, nome: "X-TUDO", imagem: hamburguer},
    {id: 4, nome: "Suco de Laranja", imagem: suco},
    {id: 5, nome: "X-TUDO", imagem: hamburguer},
    {id: 6, nome: "Suco de Laranja", imagem: suco},

  ];

  /* SCROLL maisPedidos */
  
  const containerRef = useRef<HTMLDivElement>(null); // Adicione o tipo HTMLDivElement
  
  const [interacaoUsuario, setInteracaoUsuario] = useState(false);
  
  let scrollIntervalo = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let animationFrame: number | null = null;
    const scrollSpeed = 1.0; // Velocidade ajustada
    let isResetting = false; // Controle de estado de reset
  
    const animate = () => {
      if (!container || interacaoUsuario || isResetting) return;
  
      const currentScroll = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const newScroll = currentScroll + scrollSpeed;
  
      // Verifica se está próximo do final (com margem de 2px)
      if (newScroll >= maxScroll - 2) {
        isResetting = true;
        
        // Suaviza o reset com transição
        container.style.scrollBehavior = 'smooth';
        container.scrollLeft = 0;
        
        // Aguarda a transição completar
        setTimeout(() => {
          container.style.scrollBehavior = 'auto';
          isResetting = false;
          animationFrame = requestAnimationFrame(animate);
        }, 500); // Tempo igual à duração da transição
      } else {
        container.scrollLeft = newScroll;
        animationFrame = requestAnimationFrame(animate);
      }
    };
  
    // Event handlers
    const handleInteractionStart = () => {
      setInteracaoUsuario(true);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  
    const handleInteractionEnd = () => {
      setTimeout(() => {
        setInteracaoUsuario(false);
        animationFrame = requestAnimationFrame(animate);
      }, 10000);
    };
  
    // Adiciona listeners
    if (container) {
      container.addEventListener('mousedown', handleInteractionStart);
      container.addEventListener('touchstart', handleInteractionStart);
      container.addEventListener('mouseup', handleInteractionEnd);
      container.addEventListener('touchend', handleInteractionEnd);
    }
  
    // Inicia animação
    animate();
  
    // Cleanup
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      if (container) {
        container.removeEventListener('mousedown', handleInteractionStart);
        container.removeEventListener('touchstart', handleInteractionStart);
        container.removeEventListener('mouseup', handleInteractionEnd);
        container.removeEventListener('touchend', handleInteractionEnd);
      }
    };
  }, [interacaoUsuario]);

  /* SCROLL maisPedidos */

  return (
    <div className='body'>
      <div className="container">
        
        {/* Menu superior com icone e status */}
        <div className='menuSuperior'> 
          
          {/* Icone + nome */}
          <div className='nomeEicone'>
            <img src={icone} className="profile-image"></img>
            <p className='nomeLoja'> Mcdonalds Produções e Pasteis </p>
          </div>
          
          {/* Status da loja */}
          <div className='status'>
            <p> Aberto até 22h - pedido minimo R$30</p>
          </div>

          {/* iconeCompartilhar */}
          <div >
            <img src={compartilhar} className="iconeCompartilhar"></img>
          </div>

        </div>

        <div className='menuOpcoes'>
          
          {opcoesItens.map((opcaoItem) => (
            <div key={opcaoItem.id} className="menuItem">
              {opcaoItem.nome}
            </div>
          ))}

        </div>
        
        <div 
          className='maisPedidos'
          ref={containerRef}
        >
          {maisPedidos.map((pedidos) => (
            <div key={pedidos.id} className="pedido-item">
              <img 
                src={pedidos.imagem} 
                alt={pedidos.nome} 
                className='maisPedidosImage'
                draggable="false" // Melhora a experiência em mobile
              />
              <p className="pedido-nome">{pedidos.nome}</p>
            </div>
          ))}
        </div>
        
        <div className='menuItens'> menuItens </div>
        
        <div className='footer'> footer </div>
      </div>
    </div>
  )
}

export default App
