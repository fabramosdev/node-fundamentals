import http from "node:http";

/**
 * GET => Buscar um recurso
 * POST => Criar um recurso
 * PUT => Editar/atualizar um recurso
 * PATCH => Atualizar uma única informação de um recurso
 * DELETE => Excluir um recurso do backend
 */

const users = [
  { name: "Fabiano", age: 23, mail: "fabiano@mail.com" },
  { name: "Fabiano", age: 23, mail: "fabiano@mail.com" },
];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/users") {
    return res
      .setHeader("Content-type", "application/json")
      .end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    users.push({
      id: 1,
      name: "Helena",
      email: "helena@mail.com",
    });

    return res.writeHead(201).end();
  }

  return res.writeHead(404).end();
});

server.listen(3333);
