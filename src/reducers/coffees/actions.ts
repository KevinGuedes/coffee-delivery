export enum CoffeeActionTypes {
  ADD_ONE_COFFEE_UNIT_TO_CART = 'ADD_ONE_COFFEE_UNIT_TO_CART',
  REMOVE_ONE_COFFEE_UNIT_FROM_CART = 'REMOVE_ONE_COFFEE_UNIT_FROM_CART',
  REMOVE_COFFEE_FROM_CART = 'REMOVE_COFFEE_FROM_CART',
  CONFIRM_PURCHASE = 'CONFIRM_PURCHASE'
}

export interface CoffeeAction {
  type: CoffeeActionTypes
  payload?: any
}

export function addOneCoffeeUnitToCartAction(coffeeId: number): CoffeeAction {
  return {
    type: CoffeeActionTypes.ADD_ONE_COFFEE_UNIT_TO_CART,
    payload: {
      coffeeId
    }
  }
}

export function removeOneCoffeeUnitFromCartAction(
  coffeeId: number
): CoffeeAction {
  return {
    type: CoffeeActionTypes.REMOVE_ONE_COFFEE_UNIT_FROM_CART,
    payload: {
      coffeeId
    }
  }
}

export function removeCoffeeFromCartAction(coffeeId: number): CoffeeAction {
  return {
    type: CoffeeActionTypes.REMOVE_COFFEE_FROM_CART,
    payload: {
      coffeeId
    }
  }
}
