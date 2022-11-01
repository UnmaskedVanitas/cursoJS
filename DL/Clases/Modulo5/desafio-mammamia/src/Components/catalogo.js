async function mostrarGaleria() {
    const endpoint = "/pizzas.json";
    const response = await fetch(endpoint)
    const data = await  response.json()
    setGaleria(data.photos)
}