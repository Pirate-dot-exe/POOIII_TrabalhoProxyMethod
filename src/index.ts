//Principal caracteristica: Criação de objetos sob demanda

import ProxyImage from "./ImageAcess/ProxyImage";

//Para clientes com privilégio poderia ser disponibilizado um método de acesso direto ao servidor real
import RealImage from "./ImageAcess/RealImage";

//cria imagens teste
let imagem1 = new ProxyImage("../Images/teste.jpg");
let imagem2 =  new ProxyImage("../Images/abracadabra.png");
imagem1.exibicao();
console.log("\n");
imagem2.exibicao(); 