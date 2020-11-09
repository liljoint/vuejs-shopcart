<template>
  <b-container>
    <h2>Listado de registros</h2>
    <div v-if="products.length">
      <paginate name="products" :list="products" :per="perPage">
        <b-card-group>
          <product-item
            @add-to-cart="addProductToCart"
            v-for="product in paginated('products')"
            :product="product"
            :key="product.id"
          >
          </product-item>
        </b-card-group>
      </paginate>
      <paginate-links
        for="products"
        :classes="{
          ul: 'pagination',
          li: 'page-item',
          'li > a': 'page-link'
        }"
      ></paginate-links>
    </div>
    <b-alert v-else show variant="info">
      No hay productos que mostrar
    </b-alert>
  </b-container>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import ProductItem from './ProductItem'
export default {
  mounted: function () {
    this.getProducts()
  },
  data () {
    return {
      paginate: ['products'],
      perPage: 3
    }
  },
  components: { ProductItem },
  computed: {
    ...mapState('products', ['products']),
    ...mapState('cart', ['cart'])
  },
  methods: {
    ...mapActions('products', ['getProducts']),
    ...mapMutations('cart', ['addToCart', 'deleteToCart']),
    addProductToCart (product) {
      this.addToCart(product)
    }
  }
}
</script>
