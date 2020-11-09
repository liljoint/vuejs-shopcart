import { find, filter } from 'lodash'
export function addToCart (state, product) {
  const productExists = find(state.cart, { id: product.id })
  if (!productExists) {
    const copy = Object.assign({}, product)
    copy.qty = 1
    state.cart.push(copy)
  } else {
    productExists.qty += 1
  }
}

export function deleteToCart (state, product) {
  state.cart = filter(state.cart, ({ id }) => id !== product.id)
}
