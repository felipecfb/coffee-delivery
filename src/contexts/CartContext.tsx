import { createContext, ReactNode, useReducer, useState } from 'react'

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({})

export function CartProvider({ children }: CartProviderProps) {
  const [cart, useCart] = useState()

  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>
}
