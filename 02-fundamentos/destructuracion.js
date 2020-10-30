let capitanAmerica = {
    nombre: "Steve",
    apellido: "Rogers",
    poder: "Super fuerza",
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
}

let { nombre: x, apellido: y, poder: z } = capitanAmerica;

console.log(x, y, z)