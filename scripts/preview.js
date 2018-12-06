const { getOneClientInvoice } = require('./requests')
const { preview } = require('./templates')

const init = () => {
  const container = document.querySelector('.preview.container')
  const items = document.querySelector('.service-details')
  const invoice = window.location.search.slice(1)
    .split('&').map(e => e.split('='))
    .reduce((i, e) => ({ ...i, [e[0]]: e[1] }), {})

  getOneClientInvoice(invoice.id)
    .then(response => {
      return container.innerHTML = preview(response.data.data, response.data.lineItems)
    })
    .catch(error => error)
}

module.exports = { init }