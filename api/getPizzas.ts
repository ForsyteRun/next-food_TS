//get preFetch all pizzas
export const getPizzas = async () => await (await fetch('http://localhost:3001/pizzas')).json()