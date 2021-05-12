// Se declara el arreglo
const messages = [
    "Java",
    "React",
    "C++",
    "Phyton",
    "Node Js",
    "PHP",
    "JavaScript"
]

//Crear función para enviar aleatoriamente  los nombres del arreglo
const randomMsg = () => {
    const message = messages[Math.floor(Math.random()*messages.length)]
    console.log(message)
}

// Exportar como un módulo

module.exports = { randomMsg }