<template>
  <div>
    {{ apiUrl }}
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-2" label="BR do pedido:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.order" placeholder="Digite o pedido" required
          autofocus="enable"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Impressora:" label-for="input-3">
        <b-form-select id="input-3" v-model="form.printer" :options="printers" required></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Imprimir</b-button>
      <b-button type="reset" variant="danger">Limpar</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        apiUrl: import.meta.env.VITE_API_URL,
        giftData: null,
        order: 'STGBR2023123731',
        printer: 'Samsung01'
      },
      printers: [
        { text: 'Samsung01', value: 'Samsung01' },
        { text: 'Samsung02', value: 'Samsung02' },
        { text: 'Samsung03', value: 'Samsung03' },
        { text: 'Samsung04', value: 'Samsung04' },
        { text: 'Samsung05', value: 'Samsung05' },
        { text: 'Samsung06', value: 'Samsung06' },
        { text: 'Samsung07', value: 'Samsung07' },
        { text: 'Samsung08', value: 'Samsung08' },
        { text: 'Samsung09', value: 'Samsung09' },
        { text: 'Samsung10', value: 'Samsung10' },
        { text: 'Samsung11', value: 'Samsung11' },
        { text: 'Samsung12', value: 'Samsung12' },
        { text: 'Samsung13', value: 'Samsung13' },
        { text: 'Samsung14', value: 'Samsung14' },
        { text: 'Samsung15', value: 'Samsung15' },
        { text: 'Samsung16', value: 'Samsung16' },
        { text: 'Samsung17', value: 'Samsung17' },
        { text: 'Samsung18', value: 'Samsung18' },
        { text: 'Samsung19', value: 'Samsung19' },
        { text: 'SamsungX', value: 'SamsungX' },
        { text: 'SamsungY', value: 'SamsungY' }
      ],
      show: true
    }
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault()
      const request = axios.create({
        baseURL: '/api',
        headers: {
          "Accept": "application/json, text/plain, */*",
          "Authorization": import.meta.env.VITE_MAGENTO_TOKEN,
          "sec-ch-ua-platform": `"Linux"`
        },
      });

      await request.get('/rest/V1/orders/', {
        params: this.defineParamas(this.form.order)
      })
      .then(response => {
        console.log('Response:', response.data), this.giftData = response.data.items[0].extension_attributes.gift_message;
      })
      .catch(error => {
        console.error('Error:', error.response?.data || error.message);
      });

      if(this.giftData) {
        alert(JSON.stringify(this.giftData))
      } else {
        alert('Pedido não é presente')
      }
      
    },
    defineParamas(order) {
      return {
          'searchCriteria[filter_groups][0][filters][0][field]': 'increment_id',
          'searchCriteria[filter_groups][0][filters][0][value]': order,
          'searchCriteria[filter_groups][0][filters][0][condition_type]': 'eq',
        }
    },
  },
  onReset(event) {
    event.preventDefault()
    // Reset our form values
    this.form.order = ''
    this.form.printer = null
    // Trick to reset/clear native browser form validation state
    this.show = false
    this.$nextTick(() => {
      this.show = true
    })
  }
}
</script>