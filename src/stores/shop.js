import { defineStore } from 'pinia'

export const useShopStore = defineStore('shop', {
  state: () => {
    return {
      products: [
        {
          id: 1,
          name: 'Iphone 12',
          price: 700,
          image: 'https://cdn.pixabay.com/photo/2016/11/20/08/33/camera-1842202__480.jpg'
        },
        {
          id: 2,
          name: 'Samsung s10',
          price: 400,
          image: 'https://cdn.pixabay.com/photo/2016/03/27/19/43/samsung-1283938__340.jpg'
        },
        {
          id: 3,
          name: 'Samsung Tv',
          price: 1200,
          image: 'https://cdn.pixabay.com/photo/2019/06/30/18/19/tv-4308538__480.jpg'
        },
        {
          id: 4,
          name: 'Huwawei Mate',
          price: 900,
          image: 'https://cdn.pixabay.com/photo/2017/08/11/14/19/honor-2631271__340.jpg'
        }
      ],
      cartItems: []
    }
  },
  actions: {
    addToCart(item) {
      let newItem = JSON.parse(JSON.stringify(item))
      let index = this.cartItems.findIndex((product) => product.id === newItem.id)
      if (index !== -1) {
        this.products[index].quantity += 1
      } else {
        item.quantity = 1
        this.cartItems.push(item)
      }
    },
    removeFromCart(item) {
      let newItem = JSON.parse(JSON.stringify(item))
      this.cartItems = this.cartItems.filter((product) => product.id !== newItem.id)
    }
  },
  getters: {
    getCartItems() {
      return this.cartItems
    }
  }
})
