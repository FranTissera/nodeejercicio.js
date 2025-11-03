let producto = "Auriculares Bluetooth";
let precio = 4500;
let disponible = true;

console.log(`El ${producto} cuesta ${precio} y su disponibilidad es: ${disponible}`);








let numeros = [12, 45, 3, 67, 23];
let mayor = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
        mayor = numeros[i];
    }
}

console.log(`El número mayor es: ${mayor}`);



let productos = ["fideos", "arroz", "carne", "cebolla"];

for (let i = 0; i < productos.length; i++) {
  console.log(`¡amor no te olvides comprar ${productos[i]}!`);
}

