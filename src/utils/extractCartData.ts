import { CoffeeOnCart } from '../contexts/CoffeesContext'

interface CartData {
  itemsPrice: string
  deliveryPrice: string
  totalPrice: string
  totalUnits: number
}

export function extractCartData(coffeesOnCart: CoffeeOnCart[]): CartData {
  const currencyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  let itemsPrice = 0
  let totalUnits = 0

  for (const coffeeOnCart of coffeesOnCart) {
    totalUnits += coffeeOnCart.units
    itemsPrice += coffeeOnCart.units * coffeeOnCart.price
  }

  const deliveryPrice = getDeliveryPriceByItemsPrice(itemsPrice)
  const totalPrice = deliveryPrice + itemsPrice

  return {
    itemsPrice: currencyFormatter.format(itemsPrice),
    deliveryPrice: currencyFormatter.format(deliveryPrice),
    totalPrice: currencyFormatter.format(totalPrice),
    totalUnits
  }
}

function getDeliveryPriceByItemsPrice(itemsPrice: number): number {
  const deliveryTaxes = {
    big: 0.14,
    average: 0.1,
    low: 0.05
  }

  if (itemsPrice < 30) {
    return itemsPrice * deliveryTaxes.big
  } else if (itemsPrice >= 30 && itemsPrice < 70) {
    return itemsPrice * deliveryTaxes.average
  } else {
    return itemsPrice * deliveryTaxes.low
  }
}
