let XOR = [
    [0,1,1],
    [1,0,1],
    [1,1,0],
    [0,0,0]
]

let w1 = [
    [0.1, 0.5],
    [-0.7, 0.3],
]

let w2 = [0.2, 0.4];

const CA = 0.25;

function sigmoid(x){
    return 1 / (1 + Math.exp(-(x)));
}

function derivedFromSigmoid(neuronOutput){
    return (neuronOutput * (1 - neuronOutput))
}

function realError(expectedOutput, obtainedOutput){
    return expectedOutput - obtainedOutput;
}

function deltaWeight(derivedFromSigmoid, error){
    return derivedFromSigmoid * error;
}

let x1, x2
let Z, Z1, Z2
let S1, S2
let SE, SO
let E
let delta,delta1, delta2
let index = 0;
let length = 4;
//Capa de entrada


    x1 = XOR[index][0]
    x2 = XOR[index][1]
    SE = XOR[index][2]
    //Capa Oculta
    //Neurona O1
    console.log("Neurona 1")
    Z1 = x1 * w1[0][0] + x2 * w1[1][0]
    S1 = sigmoid(Z1)
    console.log(x1+","+x2)
    console.log("Salida: ",S1);
    console.log("")

    //Neurona O2
    console.log("Neurona 2")
    Z2 = x1 * w1[0][1] + x2 * w1[1][1]
    S2 = sigmoid(Z2)
    console.log(x1+","+x2)
    console.log("Salida: ",S2);
    console.log("")

    //Capa de Salida
    console.log("CAPA DE SALIDA")
    Z = S1 * w2[0] + S2 * w2[1];
    SO = sigmoid(Z)
    console.log(Z1+","+Z2)
    console.log("Salida: " +SO);

    E = realError(SE, SO);
    //Propagación hacia atrás
    console.log("\nPROPAGACIÓN HACIA ATRÄS") 
    delta = deltaWeight(derivedFromSigmoid(SO),E);
    w2[0] = w2[0] + CA * S1 * delta;
    w2[1] = w2[1] + CA * S2 * delta;
    console.log("Variación General: "+delta)
    console.log("\nNUEVOS PESOS")
    console.log("Neurona 1: " + w2[0])
    console.log("Neurona 2: " + w2[1])

    //VARIACIONES
    delta1 = derivedFromSigmoid(S1)* w2[0] * delta;
    delta2 = derivedFromSigmoid(S2)* w2[1] * delta;

    console.log("\nNUEVOS PESOS PARA LAS ENTRADAS")
    console.log("\nENTRADA 1")

    console.log("Variación: ", delta1)
    w1[0][0] = w1[0][0] + CA * x1 * delta1;
    w1[0][1] = w1[0][1] + CA * x1 * delta2;
    console.log("Nuevos Pesos: ", [w1[0][0], w1[0][1]])


    console.log("\nENTRADA 2")
    console.log("Variación: ", delta2)
    w1[1][0] = w1[1][0] + CA * x1 * delta2;
    w1[1][1] = w1[1][1] + CA * x2 * delta2;
    console.log("Nuevos Pesos: ", [w1[1][0], w1[1][1]])
/*
    if(E !== 0) length = 4
    if(E === 0) length--
    index++;
    if(index === 4 ) index = 0;
    */

