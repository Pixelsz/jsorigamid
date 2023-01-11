// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 22;
var idadeFamilia = 33;

if (minhaIdade > idadeFamilia) console.log("Minha idade é maior");
if (minhaIdade < idadeFamilia) console.log("Minha idade é menor");
if (minhaIdade === idadeFamilia) console.log("Nossa idade é igual");

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2; //3, ele retorna o último verdadeiro, nesse exemplo todos são verdadeiros

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre";
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;
console.log(
  !!nome,
  !!idade,
  !!possuiDoutorado,
  !!empregoFuturo,
  !!dinheiroNaConta
);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
if (china > brasil) console.log("A China tem mais habitantes");
else console.log("o Brasil tem menos habitantes");

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso"); //false pois um começa com letra maiúscula e o outro com leta minúscula
}

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso"); // Cão pois é o último valor verdadeiro
}
