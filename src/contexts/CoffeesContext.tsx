import { ReactNode, createContext, useContext, useReducer } from 'react'
import { Coffee, coffeesData } from '../data/coffees'
import { extractCartData } from '../utils/extractCartData'
import { coffeesReducer } from '../reducers/coffees/reducer'
import { PurchaseFormData } from '../pages/Purchase/components/PurcahseForm'
import {
  addOneCoffeeUnitToCartAction,
  confirmPurchaseAction,
  removeCoffeeFromCartAction,
  removeOneCoffeeUnitFromCartAction
} from '../reducers/coffees/actions'

export type CoffeeOnCart = Pick<Coffee, 'id' | 'image' | 'name' | 'price'> & {
  units: number
}

interface CoffeesContextData {
  coffees: Coffee[]
  coffeesOnCart: CoffeeOnCart[]
  purchaseFormData: PurchaseFormData
  totalUnits: number
  itemsPrice: string
  totalPrice: string
  deliveryPrice: string
  addOneCoffeeUnitToCart: (coffeeId: number) => void
  removeOneCoffeeUnitFromCart: (coffeeId: number) => void
  removeCoffeeFromCart: (coffeeId: number) => void
  getCoffeeUnitsByCoffeeId: (coffeeId: number) => number
  onSubmitPurchase: (purchaseFormData: PurchaseFormData) => void
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
    coffeesOnCart: [],
    purchaseFormData: {} as PurchaseFormData
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

  function onSubmitPurchase(purchaseFormData: PurchaseFormData): void {
    dispatch(confirmPurchaseAction(purchaseFormData))
  }

  const { coffees, coffeesOnCart, purchaseFormData } = coffeesState
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
        purchaseFormData,
        addOneCoffeeUnitToCart,
        removeOneCoffeeUnitFromCart,
        removeCoffeeFromCart,
        getCoffeeUnitsByCoffeeId,
        onSubmitPurchase
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
