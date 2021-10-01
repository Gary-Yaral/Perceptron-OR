let x = [ //Entradas
    [1,1,1],
    [1,0,1],
    [0,1,1],
    [0,0,0]
]

let w = [0.25, 0.5, 0.6] //Pesos y Umbral
console.log(w) // Mostramos pesos iniciales

let Z = 0; //Suma ponderada
let CA = 0.25  //Coeficiente de aprendizaje
let index = 0; // Índice inicial del aprendizaje
let SE; //Salida esperada
let SO; //Salida obtenida
let E; //Error obtenido
let length = x.length; // Número de entradas

while(length > 0){
    SE = x[index][2];
    Z = x[index][0] * w[0] + x[index][1] * w[1] - w[2];
    if(Z > 0) SO = 1;
    if(Z <= 0) SO = 0;
    E = SE - SO; //Calculamos el Error

    // Reajustamos los pesos
    w[0] = w[0] + (CA * E * x[index][0])
    w[1] = w[1] + (CA * E * x[index][1])
    w[2] = w[2] - (CA * E)
/*
    console.log("tamaño: "+length)
    console.log("Indice: "+index)
    console.log("Esperado: "+SE)
    console.log("Obtenido: "+SO)
    console.log(w)
    console.log(Z)
    console.log(E)
    console.log("\n")

*/
if(E !== 0) length = 4
    if(E === 0) length--
    index++;
    if(index === 4 ) index = 0;
    
}
// Mostramos los pesos finales que usaremos para reajustar 
console.log(w)


let x1 = 1;
let x2 = 0;

Z = x1 * w[0] + x2 * w[1] - w[2];
if(Z > 0) SO = 1;
if(Z <= 0) SO = 0;

console.log("%cPreceptron NOR\n", "color: purple;");
console.log("Entradas \n");
console.log("x1: " + x1+  "\nx2: " + x2 +"\n");
console.log("Salida: " + SO + "\n");