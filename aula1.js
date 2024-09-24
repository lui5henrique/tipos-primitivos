
//TIPOS PRIMITIVOS

var name = "Luis Henrique"
var idade = 20
console.log("Olá, meu nome é " + name + " e tenho "+ idade +" anos.")

var name = "Luis Henrique"
var city = "Recife"
console.log("" + name + " é de "+ city +".")

var num1 = 50
var num2 = 100
var calc = num1 + num2
console.log("O resultado da SOMA é " + calc)

var num1 = 50
var num2 = 100
var calc = num1 - num2
console.log("O resultado da SUBTRAÇÃO é " + calc)

var num1 = 50
var num2 = 100
var calc = num1 * num2
console.log("O resultado da MULTIPLICAÇÃO é " + calc)

var num1 = 50
var num2 = 100
var calc = num1 / num2
console.log("O resultado da DIVISÃO é " + calc)

var base = 100
var altura = 20
var calc = base * altura
console.log("A área do triangulo é " + calc)

var nota1_Renato = 9.0
var nota2_Renato = 9.5
var nota3_Renato = 10
var calc = (nota1_Renato + nota2_Renato + nota3_Renato) / 3
console.log("O resultado da média é " + calc)

var preco_original = 50
var desconto = 0.50
var calc = preco_original * desconto
console.log("O preço com desconto ficará " + calc)

//IMPOSTO DE RENDA - não consegui fazer.

/*
Categoria 1 - até R$ 2112,00: insento
Categoria 2 - R$ 2112,01 até R$ 2826,65: 7.5%
Categoria 3 - R$ 2826,66 até R$ 3751,05: 15%
Categoria 4 - R$ 3751,06 até R$ 4664,68: 22.5%
Categoria 5 - R$ 4664,68 ou maior: 27.5% 
*/

var salario_bruto = 5000
var categoria_2
var categoria_3
var categoria_4
var categoria_5


var valor_real = 100
var cambio_dolar = 5.5
var conversao = valor_real * cambio_dolar
var valor_dolar = conversao
console.log("O valor é R$" + valor_real + ", multiplicado pela taxa " + cambio_dolar + ", gerou um valor final em dolar de $" + conversao)

var celsius = 29
var fahrenheit = (celsius * 9.5) + 32
console.log("O valor da temperatura conversido de Celsius para Fahrenheit é " + fahrenheit)

var peso = 90
var altura = 1.78
var imc = peso / (altura * altura)
console.log("O valor do IMC é " + imc)

