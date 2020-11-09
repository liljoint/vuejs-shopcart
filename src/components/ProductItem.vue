<template>
  <b-card
    :title="product.name"
    :img-src="product.image"
    :img-alt="product.name"
    img-top
    style="max-width: 30rem;
     min-height: 30rem"
    class="mb-2"
  >
    <b-button block variant="warning" @click="$emit('add-to-cart', product)"
      >Agregar al Carro</b-button
    >
  </b-card>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>
