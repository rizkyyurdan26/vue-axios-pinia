<template>
  <div v-for="prod in daftarBarang" :key="prod.id">
    <ul>
      <li>
        {{ prod.name }} - {{ prod.price }} -
        <button @click="addCart(prod)">Add to cart</button>
      </li>
    </ul>
  </div>

  <!-- <p>{{ daftarBarang }}</p> -->

  <h3>Isi Keranjang:</h3>
  <div v-for="item in keranjang" :key="item.id">
    <ul>
      <li>
        {{ item.name }} - {{ item.quantity }}
        <button @click="plusItem(item)">+</button>
        <button @click="minusItem(item)">-</button>
        <button @click="removeItem(item)">Remove</button>
      </li>
    </ul>
  </div>

  <p>Total Barang: {{ totalQty }}</p>
  <p>Total Harga: {{ totalPrice }}</p>
  <p>Harga setelah diskon: {{ finalPrice }}</p>
  <button @click="checkout()">Chekout</button>

  <br />
  <div>
    <h3>Check Barang</h3>
    <input type="text" placeholder="Masukkan id barang" v-model="checkForm" />
    <button @click="handleCheck">Check</button>
    <p>{{ resCheck }}</p>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useBasicStore } from "./stores/basic.store";
import { ref } from "vue";

const checkForm = ref("");
const resCheck = ref('');

const store = useBasicStore();

const { daftarBarang, checkITem, keranjang, totalQty, totalPrice, finalPrice } =
  storeToRefs(store);

const { addCart, checkout, plusItem, minusItem, removeItem } = store;

const handleCheck = () => {
  resCheck.value = checkITem.value((checkForm.value.toLowerCase()));
  checkForm.value = ''
};
</script>
