import { ReactNode, createContext, useContext, useReducer } from 'react'
import { Coffee, coffeesData } from '../data/coffees'
import { extractCartData } from '../utils/extractCartData'
import { coffeesReducer } from '../reducers/coffees/reducer'
import {
  addOneCoffeeUnitToCartAction,
  removeCoffeeFromCartAction,
  removeOneCoffeeUnitFromCartAction
} from '../reducers/coffees/actions'

export type CoffeeOnCart = Pick<Coffee, 'id' | 'image' | 'name' | 'price'> & {
  units: number
}

interface CoffeesContextData {
  coffees: Coffee[]
  coffeesOnCart: CoffeeOnCart[]
  totalUnits: number
  itemsPrice: string
  totalPrice: string
  deliveryPrice: string
  addOneCoffeeUnitToCart: (coffeeId: number) => void
  removeOneCoffeeUnitFromCart: (coffeeId: number) => void
  removeCoffeeFromCart: (coffeeId: number) => void
  getCoffeeUnitsByCoffeeId: (coffeeId: number) => number
}

const CoffeesContext = createContext({} as CoffeesContextData)

export function useCoffeesContext(): CoffeesContextData {
  return useContext(CoffeesContext)
}

interface CoffeesContextProps {
  children: ReactNode
}

export function CoffeesContextProvider({
  children
}: CoffeesContextProps): JSX.Element {
  const [coffeesState, dispatch] = useReducer(coffeesReducer, {
    coffees: coffeesData,
    coffeesOnCart: []
  })

  function addOneCoffeeUnitToCart(coffeeId: number): void {
    dispatch(addOneCoffeeUnitToCartAction(coffeeId))
  }

  function removeOneCoffeeUnitFromCart(coffeeId: number): void {
    dispatch(removeOneCoffeeUnitFromCartAction(coffeeId))
  }

  function removeCoffeeFromCart(coffeeId: number): void {
    dispatch(removeCoffeeFromCartAction(coffeeId))
  }

  const { coffees, coffeesOnCart } = coffeesState
  const { itemsPrice, deliveryPrice, totalPrice, totalUnits } =
    extractCartData(coffeesOnCart)

  function getCoffeeUnitsByCoffeeId(coffeeId: number): number {
    const coffee = coffeesOnCart.find(coffee => coffee.id === coffeeId)
    return coffee !== undefined ? coffee.units : 0
  }

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
        coffeesOnCart,
        totalUnits,
        itemsPrice,
        totalPrice,
        deliveryPrice,
        addOneCoffeeUnitToCart,
        removeOneCoffeeUnitFromCart,
        removeCoffeeFromCart,
        getCoffeeUnitsByCoffeeId
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
