//Criar um programa com uma condicional composta para avaliar o desempenho escolar entre "Excelente", "otimo", "bom", "regular" e "ruim" dependendo da nota
let nota = 85
if (nota >= 90 && nota <= 100){
    console.log("Excelente")
} else if (nota >= 80 && nota < 90){
    console.log("Ótimo")
} else if (nota >= 70 && nota < 80){
    console.log("Bom")
} else if (nota >= 60 && nota < 70){
    console.log("Regular")
} else {
    console.log("Ruim")
}