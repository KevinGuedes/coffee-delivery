import produce from 'immer'
import { CoffeeOnCart } from '../../contexts/CoffeesContext'
import { Coffee } from '../../data/coffees'
import { CoffeeAction, CoffeeActionTypes } from './actions'

interface CoffeesState {
  coffees: Coffee[]
  coffeesOnCart: CoffeeOnCart[]
}

export function coffeesReducer(
  state: CoffeesState,
  action: CoffeeAction
): CoffeesState {
  const { type, payload } = action

  switch (type) {
    case CoffeeActionTypes.ADD_ONE_COFFEE_UNIT_TO_CART: {
      const existingCofeeOnCartIndex = state.coffeesOnCart.findIndex(
        coffeOnCart => coffeOnCart.id === payload.coffeeId
      )

      if (existingCofeeOnCartIndex < 0) {
        const coffeeToAdd = state.coffees.find(
          coffee => coffee.id === payload.coffeeId
        )

        const { id, image, name, price } = coffeeToAdd as Coffee
        return produce(state, draft => {
          draft.coffeesOnCart.push({
            id,
            image,
            name,
            price,
            units: 1
          })
        })
      } else {
        return produce(state, draft => {
          draft.coffeesOnCart[existingCofeeOnCartIndex].units++
        })
      }
    }
    case CoffeeActionTypes.REMOVE_ONE_COFFEE_UNIT_FROM_CART: {
      const existingCofeeOnCartIndex = state.coffeesOnCart.findIndex(
        coffeOnCart => coffeOnCart.id === payload.coffeeId
      )

      const currentUnits = state.coffeesOnCart[existingCofeeOnCartIndex].units

      if (currentUnits - 1 === 0) {
        return produce(state, draft => {
          draft.coffeesOnCart = draft.coffeesOnCart.filter(
            coffeeOnCart => coffeeOnCart.id !== payload.coffeeId
          )
        })
      } else {
        return produce(state, draft => {
          draft.coffeesOnCart[existingCofeeOnCartIndex].units--
        })
      }
    }
    case CoffeeActionTypes.REMOVE_COFFEE_FROM_CART:
      return produce(state, draft => {
        draft.coffeesOnCart = draft.coffeesOnCart.filter(
          coffeeOnCart => coffeeOnCart.id !== payload.coffeeId
        )
      })
    default:
      return state
  }
}
