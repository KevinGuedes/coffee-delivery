import {
  ReactNode,
  createContext,
  useContext,
  useReducer,
  useEffect
} from 'react'
import { Coffee, coffeesData } from '../data/coffees'
import { extractCartData } from '../utils/extractCartData'
import { coffeesReducer } from '../reducers/coffees/reducer'
import { PurchaseFormData } from '../pages/Purchase'
import {
  addOneCoffeeUnitToCartAction,
  confirmPurchaseAction,
  removeCoffeeFromCartAction,
  removeOneCoffeeUnitFromCartAction
} from '../reducers/coffees/actions'
import superjson from 'superjson'

export type CoffeeOnCart = Pick<Coffee, 'id' | 'image' | 'name' | 'price'> & {
  units: number
}

interface CoffeesContextData {
  coffees: Coffee[]
  coffeesOnCart: CoffeeOnCart[]
  purchaseFormData: PurchaseFormData
  totalUnits?: number
  itemsPrice?: string
  totalPrice?: string
  deliveryPrice?: string
  isCartEmpty?: boolean
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
  const [coffeesState, dispatch] = useReducer(
    coffeesReducer,
    {
      coffees: coffeesData,
      coffeesOnCart: [],
      purchaseFormData: {} as PurchaseFormData
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:coffes-on-cart-v1.0.0'
      )

      if (storedStateAsJSON) {
        return {
          coffees: coffeesData,
          coffeesOnCart: superjson.parse<CoffeeOnCart[]>(storedStateAsJSON),
          purchaseFormData: {} as PurchaseFormData
        }
      }

      return {
        coffees: coffeesData,
        coffeesOnCart: [],
        purchaseFormData: {} as PurchaseFormData
      }
    }
  )

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
  const { itemsPrice, deliveryPrice, totalPrice, totalUnits, isCartEmpty } =
    extractCartData(coffeesOnCart)

  function getCoffeeUnitsByCoffeeId(coffeeId: number): number {
    const coffee = coffeesOnCart.find(coffee => coffee.id === coffeeId)
    return coffee !== undefined ? coffee.units : 0
  }

  useEffect(() => {
    const coffeesOnCartAsJSON = superjson.stringify(coffeesOnCart)
    localStorage.setItem(
      '@coffee-delivery:coffes-on-cart-v1.0.0',
      coffeesOnCartAsJSON
    )
  }, [coffeesOnCart])

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
        coffeesOnCart,
        totalUnits,
        itemsPrice,
        totalPrice,
        deliveryPrice,
        isCartEmpty,
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
