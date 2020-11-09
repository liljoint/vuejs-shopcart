<template>
  <div>
    <div v-if="cart.length">
      <b-table striped hover :items="cart" :fields="fields">
        <template v-slot:cell(actions)="cell">
          <b-button
            size="sm"
            variant="danger"
            @click.stop="deleteToCart(cell.item)"
          >
            Eliminar
          </b-button>
        </template>
      </b-table>
      <b-alert show variant="success" class="text-center">
        Coste total: {{ totalCost }}€
      </b-alert>
    </div>
    <b-alert v-else show variant="info">No hay productos en el carrito</b-alert>
  </div></template
>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
  data () {
    return {
      fields: ['name', 'qty', 'price', 'actions']
    }
  },
  computed: {
    ...mapState('cart', ['cart']),
    ...mapGetters('cart', ['totalCost'])
  },
  methods: {
    ...mapMutations('cart', ['deleteToCart'])
  }
}
</script>
