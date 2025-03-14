let users = [];           // [{ id, name, email, username, password }]
let products = [];        // [{ id, name, description, costPrice, markup, salesPrice, lowStockAlert, currentStock }]
let invoices = [];        // [{ id, items: [{productId, quantity}], total, customerWhatsApp, paid, date }]

const getUsers = () => users;
const addUser = (user) => users.push(user);

const getProducts = () => products;
const addProduct = (product) => products.push(product);

const getInvoices = () => invoices;
const addInvoice = (invoice) => invoices.push(invoice);

module.exports = {
  getUsers,
  addUser,
  getProducts,
  addProduct,
  getInvoices,
  addInvoice,
};
