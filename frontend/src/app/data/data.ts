import hamburguer from "@/../../public/hamburguer.jpeg";
import sucoDeLaranja from "@/../../public/sucoDeLaranja.jpg";
import tortaMorango from "@/../../public/tortaMorango.jpeg"
import tortaChocolate from "@/../../public/tortaChocolate.jpg"
import sucoDeGoiaba from "@/../../public/sucoDeGoiaba.png"
import pastelCarne from "@/../../public/pastelCarne.jpeg"
import pastelQueijo from "@/../../public/pastelQueijo.jpg"

export const opcoesItens = [
    { id: 1, nome: "Tortas Tradicionais" },
    { id: 2, nome: "Bolos Temáticos" },
    { id: 3, nome: "Sacolés Gourmet" },
    { id: 4, nome: "Bebidas em Geral" },
    { id: 5, nome: "Pastéis CrocCroc" },
];

export const maisPedidos = [
    { id: 1, nome: "X-TUDO", imagem: hamburguer },
    { id: 2, nome: "Suco de Laranja", imagem: sucoDeLaranja },
    { id: 3, nome: "X-TUDO", imagem: hamburguer },
    { id: 4, nome: "Suco de Laranja", imagem: sucoDeLaranja },
    { id: 5, nome: "X-TUDO", imagem: hamburguer },
    { id: 6, nome: "Suco de Laranja", imagem: sucoDeLaranja },
];

export const tortas = [
    { id: 1, nome: "Torta Motango", descricao: "Uma torta de morango", preco: 29.90, tipo: "torta", imagem: tortaMorango},
    { id: 2, nome: "Torta Chocolate", descricao: "Uma torta de chocolate", preco: 25.90, tipo: "torta", imagem: tortaChocolate},
    { id: 3, nome: "Torta Motango", descricao: "Uma torta de morango", preco: 29.90, tipo: "torta", imagem: tortaMorango},
    { id: 4, nome: "Torta Chocolate", descricao: "Uma torta de chocolate", preco: 25.90, tipo: "torta", imagem: tortaChocolate},
    ];

export const sucos = [
    { id: 1, nome: "Suco de Goiaba", descricao: "Um suco de goiaba gelado", preco: 14.90, tipo: "suco", imagem: sucoDeGoiaba},
    { id: 2, nome: "Suco de Laranja", descricao: "Um suco de Laranja gelado", preco: 14.90, tipo: "suco", imagem: sucoDeLaranja},
    { id: 3, nome: "Suco de Goiaba", descricao: "Um suco de goiaba gelado", preco: 14.90, tipo: "suco", imagem: sucoDeGoiaba},
    { id: 4, nome: "Suco de Laranja", descricao: "Um suco de Laranja gelado", preco: 14.90, tipo: "suco", imagem: sucoDeLaranja},
    { id: 5, nome: "Suco de Goiaba", descricao: "Um suco de goiaba gelado", preco: 14.90, tipo: "suco", imagem: sucoDeGoiaba},
    { id: 6, nome: "Suco de Laranja", descricao: "Um suco de Laranja gelado", preco: 14.90, tipo: "suco", imagem: sucoDeLaranja},
]

export const pastel = [
    { id: 1, nome: "Pastal de carne", descricao: "Pastel de carne quente", preco: 14.90, tipo: "pastel", imagem: pastelCarne},
    { id: 2, nome: "Pastal de queijo", descricao: "Pastel de queijo quente", preco: 16.90, tipo: "pastel", imagem: pastelQueijo},
    { id: 3, nome: "Pastal de carne", descricao: "Pastel de carne quente", preco: 14.90, tipo: "pastel", imagem: pastelCarne},
    { id: 4, nome: "Pastal de queijo", descricao: "Pastel de queijo quente", preco: 16.90, tipo: "pastel", imagem: pastelQueijo},
    { id: 5, nome: "Pastal de carne", descricao: "Pastel de carne quente", preco: 14.90, tipo: "pastel", imagem: pastelCarne},
    { id: 6, nome: "Pastal de queijo", descricao: "Pastel de queijo quente", preco: 16.90, tipo: "pastel", imagem: pastelQueijo},
]