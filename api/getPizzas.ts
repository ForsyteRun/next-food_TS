//get preFetch all pizzas
export const getPizzas = async (key: any) => {
   const sortBy = +key.queryKey[1].sortByItem
   if(sortBy > 0) {
    return  await (await fetch(`http://localhost:3001/pizzas?category=${sortBy}`)).json()
   } else {
    return  await (await fetch('http://localhost:3001/pizzas')).json()
   }
} 