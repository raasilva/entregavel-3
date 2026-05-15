const personagensNaruto = [
  {
    nome: "Naruto",
    sobrenome: "Uzumaki",
    idade: 17,
    chakra: 100,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Genin",
  },
  {
    nome: "Sasuke",
    sobrenome: "Uchiha",
    idade: 17,
    chakra: 85,
    ehDaFolha: false,
    possuiKekkeiGenkai: true,
    nivel: "Ninja Renegado",
  },
  {
    nome: "Sakura",
    sobrenome: "Haruno",
    idade: 17,
    chakra: 40,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Kakashi",
    sobrenome: "Hatake",
    idade: 31,
    chakra: 50,
    ehDaFolha: true,
    possuiKekkeiGenkai: true,
    nivel: "Jonin",
  },
  {
    nome: "Gaara",
    sobrenome: null,
    idade: 17,
    chakra: 90,
    ehDaFolha: false,
    possuiKekkeiGenkai: true,
    nivel: "Kazekage",
  },
  {
    nome: "Rock",
    sobrenome: "Lee",
    idade: 18,
    chakra: 20,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Hinata",
    sobrenome: "Hyuga",
    idade: 16,
    chakra: 45,
    ehDaFolha: true,
    possuiKekkeiGenkai: true,
    nivel: "Chunin",
  },
  {
    nome: "Shikamaru",
    sobrenome: "Nara",
    idade: 17,
    chakra: 35,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Tsunade",
    sobrenome: null,
    idade: 55,
    chakra: 95,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Hokage",
  },
  {
    nome: "Jiraiya",
    sobrenome: null,
    idade: 54,
    chakra: 88,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Sannin",
  },
  {
    nome: "Orochimaru",
    sobrenome: null,
    idade: 54,
    chakra: 92,
    ehDaFolha: false,
    possuiKekkeiGenkai: false,
    nivel: "Sannin",
  },
  {
    nome: "Itachi",
    sobrenome: "Uchiha",
    idade: 21,
    chakra: 60,
    ehDaFolha: false,
    possuiKekkeiGenkai: true,
    nivel: "Ninja Renegado",
  },
  {
    nome: "Neji",
    sobrenome: "Hyuga",
    idade: 18,
    chakra: 55,
    ehDaFolha: true,
    possuiKekkeiGenkai: true,
    nivel: "Jonin",
  },
  {
    nome: "Tenten",
    sobrenome: null,
    idade: 18,
    chakra: 30,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Ino",
    sobrenome: "Yamanaka",
    idade: 17,
    chakra: 40,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Choji",
    sobrenome: "Akimichi",
    idade: 17,
    chakra: 75,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Kiba",
    sobrenome: "Inuzuka",
    idade: 17,
    chakra: 45,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Shino",
    sobrenome: "Aburame",
    idade: 17,
    chakra: 65,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Chunin",
  },
  {
    nome: "Sai",
    sobrenome: null,
    idade: 17,
    chakra: 50,
    ehDaFolha: true,
    possuiKekkeiGenkai: false,
    nivel: "Anbu",
  },
  {
    nome: "Temari",
    sobrenome: null,
    idade: 20,
    chakra: 70,
    ehDaFolha: false,
    possuiKekkeiGenkai: false,
    nivel: "Jonin",
  },
];

//1. Selecione os personagens que possuem chakra estritamente maior que 80.
const ninjasPoderosos = personagensNaruto
  .filter((personagem) => personagem.chakra > 80)
  .map((personagem) => personagem.nome);
console.log(
  "Os personagens que possuem chakra maior que 80 são:",
  ninjasPoderosos,
);

//2. Liste o nome de todos os personagens que possuem Kekkei Genkai.
const listaKekkei = personagensNaruto
  .filter((personagem) => personagem.possuiKekkeiGenkai)
  .map((personagem) => personagem.nome);

console.log("Lista dos personagens que possuem Kekkei Genkai: ", listaKekkei);

//3. Obtenha o chakra de todos os personagens que são "Ninja Renegado".
const chakraForaDaLei = personagensNaruto
  .filter((personagem) => personagem.nivel === "Ninja Renegado")
  .map((personagem) => personagem.chakra);

console.log(
  "O chakra dos personagem que são Ninja Renegagado: ",
  chakraForaDaLei,
);

//4. Qual a soma total das idades de todos os personagens do vetor?
const somaIdades = personagensNaruto.reduce(
  (acc, personagem) => acc + personagem.idade,
  0,
);

console.log("A soma das idades dos personagens são: ", somaIdades);

//5. Crie um vetor com o nome dos personagens que possuem mais de 50 de chakra E são da Folha.
const eliteFolha = personagensNaruto
  .filter((personagem) => personagem.chakra > 50 && personagem.ehDaFolha)
  .map((personagem) => personagem.nome);

console.log(
  "O nome dos personagens que possuem mais de 50 de chakra e são da Folha são: ",
  eliteFolha,
);

//6. Nome do personagem com a maior e com a menor razão chakra-idade.
const razoes = personagensNaruto.map((personagem) => ({
  nome: personagem.nome,
  razao: personagem.chakra / personagem.idade,
}));

const maiorRazao = razoes.reduce((max, personagem) =>
  personagem.razao > max.razao ? personagem : max,
);
const menorRazao = razoes.reduce((min, p) => (p.razao < min.razao ? p : min));
console.log("Maior razão chakra/idade:", maiorRazao.nome);
console.log("Menor razão chakra/idade:", menorRazao.nome);

//7. Crie um vetor com os personagens que possuem nível "Sannin".
const nivelSannin = personagensNaruto
  .filter((personagem) => personagem.nivel === "Sannin")
  .map((personagem) => personagem.nome);

console.log("Personagens com nível Sannin: ", nivelSannin);

//8.Filtre todos os personagens que NÃO são da Vila da Folha.
const naoVilaFolha = personagensNaruto
  .filter((personagem) => personagem.ehDaFolha === false)
  .map((personagem) => personagem.nome);

console.log("Os personagens que não são da Folha são: ", naoVilaFolha);

//9. Encontre todos os personagens que possuem sobrenome registrado.
const comSobrenome = personagensNaruto
  .filter((personagem) => personagem.sobrenome !== null)
  .map((personagem) => personagem.nome);
console.log(
  "Os personagens que possuem sobrenome registrado são: ",
  comSobrenome,
);

//10.Filtre os personagens que têm exatamente 17 anos.
const idade17 = personagensNaruto
  .filter((personagem) => personagem.idade === 17)
  .map((personagem) => personagem.nome);
console.log("Os personagens com 17 anos são: ", idade17);

//11. Crie um vetor apenas com as idades dos personagens.
const idadePersonagens = personagensNaruto
  .filter((personagem) => personagem.idade)
  .map((personagem) => personagem.idade);
console.log("As idades dos personagens são: ", idadePersonagens);

//12. Gere um vetor de strings no formato: "Nome - Nível".
const listannPersonagens = personagensNaruto
  .filter((personagem) => personagem.nome && personagem.nivel)
  .map((personagem) => `${personagem.nome} - ${personagem.nivel}`);
console.log("Nome - Nível dos personagens:");
console.log(listannPersonagens.join("\n"));

//13. Crie um vetor de objetos contendo apenas nome e chakra de cada ninja.
const nomechakraPersonagens = personagensNaruto
  .filter((personagem) => personagem.nome && personagem.chakra)
  .map((personagem) => `${personagem.nome} - ${personagem.chakra}`);
console.log("Nome - Chakra dos personagens:");
console.log(nomechakraPersonagens.join("\n"));

//14. Gere um vetor com o "poder total" (chakra multiplicado pela idade) de cada personagem.
const poderTotal = personagensNaruto
  .filter(
    (personagem) => personagem.nome && personagem.chakra && personagem.idade,
  )
  .map((personagem) => {
    const total = personagem.chakra * personagem.idade;
    return `${personagem.nome} - Poder total: ${total}`;
  });
console.log("Nome - Poder total dos personagens:");
console.log(poderTotal.join("\n"));

//15. Crie um vetor de nomes de personagens (cuidado com os sem sobrenome).
const nomesPersonagens = personagensNaruto
  .filter((personagem) => personagem.nome && personagem.sobrenome)
  .map((personagem) => `${personagem.nome} - ${personagem.sobrenome}`);
console.log("Nome - Sobrenome dos personagens: ");
console.log(nomesPersonagens.join("\n"));

//16. Crie um vetor somente com os personagens da Folha que são menores de idade ( < 18).
const menorIdade = personagensNaruto
  .filter(
    (personagem) => personagem.ehDaFolha === true && personagem.idade < 18,
  )
  .map((personagem) => `${personagem.idade} - ${personagem.nome}`);
console.log("Personagens menores de idade que moram na folha:");
console.log(menorIdade.join("\n"));
