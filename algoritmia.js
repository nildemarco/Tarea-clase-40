//Mostrar en consola la suma parcial de todos los números que van desde 0 hasta 1000 (debe mostrar 500500)

let acumuladora = 0

for (i = 0; i <= 1000; i++) {
   console.log(` ${acumuladora = i + acumuladora}`)   
}

//Mostrar en consola la suma parcial de todos los números impares que van desde 0 hasta 1000 (debe mostrar 250000)

let acumuladora2 = 0

for (i = 0; i < 1000; i++) {
    if (i % 2 != 0)  {
        console.log(`${acumuladora2 = i + acumuladora2}`);
    }
} 

//Mostrar en consola el siguiente dibujo

let acumuladora3 = ""

for (i = 0; i < 13; i++) {
    console.log(`${acumuladora3 = acumuladora3 + "*"}`)

}

// Ejercicio 8

let acumuladora4 = ""


for (i = 0; i < 14; i++) {
    acumuladora4 = acumuladora4 + "*"
    if (i % 2 == 0) {
        console.log(acumuladora4)
    }
}