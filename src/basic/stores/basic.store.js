import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useBasicStore = defineStore("basic", () => {
  // State
  const daftarBarang = ref([
    { id: 1, name: "Barang1", quantity: 1, price: 5 },
    { id: 2, name: "Barang2", quantity: 1, price: 20 },
  ]);

  const keranjang = ref([]);
  const diskon = ref(10)

  // Getters
  const totalQty = computed(() =>
    keranjang.value.reduce((total, item) => total + item.quantity, 0),
  );

  const totalPrice = computed(() =>
    keranjang.value.reduce((price, item) => price + item.price * item.quantity, 0),
  );

  const finalPrice = computed(() => Math.max(0, totalPrice.value - diskon.value))

  const checkITem = computed(() => {
    return (name) => {
      return keranjang.value.some(p => p.name.toLowerCase() === name.toLowerCase())
    }
  })

  


  // Action
  function addCart(prod) {
    const item = keranjang.value.find((p) => p.id === prod.id);

    if (item){
      item.quantity++
    }else {
      keranjang.value.push({...prod});
    }
  }

  function plusItem(item){
    const itemId = keranjang.value.find((p) => p.id === item.id)

    if (itemId){
      item.quantity++
    }
  }
  
  function minusItem(item){
    const itemId = keranjang.value.find((p) => p.id === item.id)

    if (itemId){
      if (item.quantity > 1){
        item.quantity--
      }
    }
  }

  function removeItem(item){
    keranjang.value = keranjang.value.filter(i => i.id !== item.id)
  }

  function checkout() {
    keranjang.value = [];
  }

  return { daftarBarang, keranjang, addCart, totalQty, checkout, totalPrice, plusItem, minusItem, removeItem, finalPrice, checkITem };
});
