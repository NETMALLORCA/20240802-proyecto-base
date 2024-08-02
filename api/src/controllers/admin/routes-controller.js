exports.findAll = (req, res) => {
  const routes = {
    '/admin/usuarios': 'users.html',
    '/admin/clientes': 'customers.html',
  }

  res.status(200).send(routes)
}
