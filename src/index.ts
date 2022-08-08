//Principal caracteristica: Criação de objetos sob demanda

import ProxyImage from "./ImageAcess/ProxyImage";
import RealImage from "./ImageAcess/RealImage";

//cria imagens teste
let imagem1 = new ProxyImage("teste.jpg");
let imagem2 =  new ProxyImage("abracadabra.png");
imagem1.exibicao();
console.log("\n");
imagem2.exibicao(); 