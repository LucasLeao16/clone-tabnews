function status(request, response) {
  response.status(200).json({ chave: "testando a aplicação" });
}

export default status;
