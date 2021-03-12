db.voos.findOne({
  $and: [
    { litrosCombustivel: { $not: { $gt: 600 } } },
    { litrosCombustivel: { $exists: true } },
    { "empresa.nome": { $ne: "GOL" } },
    { "empresa.nome": { $ne: "GOL" } },
  ],
}, {
  _id: 0,
  vooId: 1,
  "empresa.nome": 1,
  litrosCombustivel: 1,
});
