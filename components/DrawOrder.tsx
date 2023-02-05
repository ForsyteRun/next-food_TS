import React, { FC } from 'react'

export interface RootObject {
  items: Items
}

export interface Items {
  items: PizzasObj
  totalPrice: number
  totalCount: number
}

export interface PizzasObj {
  [key: number]: Pizzas[]
}

export interface Pizzas {
  id: number
  name: string
  price: number
  img: string
  size: number
  type: string
}

const DrawOrder: FC<RootObject> = ({items}) => {
  let data: Pizzas[] = Object.values(items.items).flat()
  
  return (
    <div>
      {data.map(el => el.id)}
    </div>
  )
}

export default DrawOrder
