//Principal caracteristica: Criação de objetos sob demanda

import ProxyImage from "./ImageAcess/ProxyImage";

//Para clientes com privilégio poderia ser disponibilizado um método de acesso direto ao servidor real
import RealImage from "./ImageAcess/RealImage";

//cria imagens teste
let imagem1 = new ProxyImage("../Images/teste.jpg");
let imagem2 =  new ProxyImage("../Images/abracadabra.png");
//Acessa o arquivo real diretamente
let imagem3 = new RealImage("../Imagens/privilegio.jpg");
console.log("\n");
imagem1.exibicao();
console.log("\n");
imagem2.exibicao(); 
console.log("\n");
