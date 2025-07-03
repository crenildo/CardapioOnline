import hamburguer from "@/../../public/hamburguer.jpeg";
import sucoDeLaranja from "@/../../public/sucoDeLaranja.jpg";
import tortaMorango from "@/../../public/tortaMorango.jpeg"
import tortaChocolate from "@/../../public/tortaChocolate.jpg"
import sucoDeGoiaba from "@/../../public/sucoDeGoiaba.png"
import pastelCarne from "@/../../public/pastelCarne.jpeg"
import pastelQueijo from "@/../../public/pastelQueijo.jpg"

// Tipos de itens (categorias)
export const tipos = [
    { id: 1, nome: "Tortas Tradicionais" },
    { id: 2, nome: "Bolos Temáticos" },
    { id: 3, nome: "Sacolés Gourmet" },
    { id: 4, nome: "Bebidas em Geral" },
    { id: 5, nome: "Pastéis CrocCroc" }
];

// Itens (Produtos)
export const itens = [
    { id: 1, nome: "Torta Motango", descricao: "Uma torta de morango", preco: 29.90, tipoId: 1, imagem: tortaMorango },
    { id: 2, nome: "Torta Chocolate", descricao: "Uma torta de chocolate", preco: 25.90, tipoId: 1, imagem: tortaChocolate },
    { id: 3, nome: "Torta Motango", descricao: "Uma torta de morango", preco: 29.90, tipoId: 1, imagem: tortaMorango },
    { id: 4, nome: "Torta Chocolate", descricao: "Uma torta de chocolate", preco: 25.90, tipoId: 1, imagem: tortaChocolate },
    { id: 5, nome: "Torta Motango", descricao: "Uma torta de morango", preco: 29.90, tipoId: 1, imagem: tortaMorango },
    { id: 6, nome: "Torta Chocolate", descricao: "Uma torta de chocolate", preco: 25.90, tipoId: 1, imagem: tortaChocolate },
    { id: 7, nome: "Suco de Goiaba", descricao: "Um suco de goiaba gelado", preco: 14.90, tipoId: 4, imagem: sucoDeGoiaba },
    { id: 8, nome: "Suco de Laranja", descricao: "Um suco de Laranja gelado", preco: 14.90, tipoId: 4, imagem: sucoDeLaranja },
    { id: 9, nome: "Suco de Goiaba", descricao: "Um suco de goiaba gelado", preco: 14.90, tipoId: 4, imagem: sucoDeGoiaba },
    { id: 10, nome: "Suco de Laranja", descricao: "Um suco de Laranja gelado", preco: 14.90, tipoId: 4, imagem: sucoDeLaranja },
    { id: 11, nome: "Suco de Goiaba", descricao: "Um suco de goiaba gelado", preco: 14.90, tipoId: 4, imagem: sucoDeGoiaba },
    { id: 12, nome: "Suco de Laranja", descricao: "Um suco de Laranja gelado", preco: 14.90, tipoId: 4, imagem: sucoDeLaranja },
    { id: 13, nome: "Pastel de Carne", descricao: "Pastel de carne quente", preco: 14.90, tipoId: 5, imagem: pastelCarne },
    { id: 14, nome: "Pastel de Queijo", descricao: "Pastel de queijo quente", preco: 16.90, tipoId: 5, imagem: pastelQueijo },
    { id: 15, nome: "Pastel de Carne", descricao: "Pastel de carne quente", preco: 14.90, tipoId: 5, imagem: pastelCarne },
    { id: 16, nome: "Pastel de Queijo", descricao: "Pastel de queijo quente", preco: 16.90, tipoId: 5, imagem: pastelQueijo },
    { id: 17, nome: "Pastel de Carne", descricao: "Pastel de carne quente", preco: 14.90, tipoId: 5, imagem: pastelCarne },
    { id: 18, nome: "Pastel de Queijo", descricao: "Pastel de queijo quente", preco: 16.90, tipoId: 5, imagem: pastelQueijo }
];

export const maisPedidos = [
    { id: 1, nome: "X-TUDO", imagem: hamburguer },
    { id: 2, nome: "Suco de Laranja", imagem: sucoDeLaranja },
    { id: 3, nome: "X-TUDO", imagem: hamburguer },
    { id: 4, nome: "Suco de Laranja", imagem: sucoDeLaranja },
    { id: 5, nome: "X-TUDO", imagem: hamburguer },
    { id: 6, nome: "Suco de Laranja", imagem: sucoDeLaranja },
];

// Exemplo de como utilizar a função para filtrar itens de "Tortas"
const tortas = filtrarItens(1);
console.log(tortas); // Isso vai exibir as tortas (tipoId = 1)

export default function filtrarItens(n: number) {
    return itens.filter(item => item.tipoId === n)
}
