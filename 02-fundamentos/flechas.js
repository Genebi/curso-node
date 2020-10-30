let saludar = () => "hola mundo"


let capitanAmerica = {
    nombre: "Steve",
    apellido: "Rogers",
    poder: "Super fuerza",
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
}

console.log(capitanAmerica.getNombre())