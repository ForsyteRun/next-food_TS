import axios from "axios"

export const getPizzas = async (key: any) => {
   const sortBy = key.queryKey[1]?.sortByItem
   const tabItemsBy = key.queryKey[1]?.tabItems
   return await 
   axios.get(`http://localhost:3001/pizzas?${tabItemsBy !==null ? `category=${tabItemsBy}` : ''}&_sort=${sortBy}&_order=asc`)
   .then(res => res.data)
} 
