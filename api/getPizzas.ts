import axios from "axios"
// //get preFetch all pizzas
export const getPizzas = async (key: any) => {
   const sortBy = +key.queryKey[1]?.sortByItem
   if(sortBy > 0) {
      return await axios.get(`http://localhost:3001/pizzas?category=${sortBy}`).then(res => res.data)
   } else {
    return await axios.get('http://localhost:3001/pizzas').then(res => res.data)
   }
} 

// export const getPizzas = async () => {
//    return await axios.get('http://localhost:3001/pizzas').then(res => res.data)
// } 