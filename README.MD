# Problema

Dado um mapa contendo os possíveis caminhos (arestas) para cada ponto (vértice), encontrar o menor caminho entre dois pontos e calcular o custo.

# Algoritmo de menor caminho

O Algoritmo de Dijkstra é um dos algoritmos que calcula o caminho de custo mínimo entre vértices de um grafo. Escolhido um vértice como raiz da busca, este algoritmo calcula o custo mínimo deste vértice para todos os demais vértices do grafo. Ele é bastante simples e com um bom nível de performance.

# Tecnologias

Para este problema foram utilizadas as seguintes tecnologias:
- Node.js
- MongoDB

Node.js para as requisições no formato REST. MongoDB para a persistência dos mapas.

# Run

Para executar o projeto é apenas necessário executar

<code>npm start</code>

O serviço disponibiliza duas urls, ambas via <code>POST</code>

**/rest/map**
recebe o mapa em JSON no seguinte formato

<code>{ "name" : "sp", "a" : { "b" : "1", "c" : "12" }, "b" : { "c" : "3", "a" : "1" } }</code>

**/rest/map/shortestPath**
recebe os parâmetro para calculo de rota em JSON no seguinte formato

<code>{"name" : "sp", "source" : "a", "destiny" : "c", "autonomy" : 6.5, "price" : 10}</code>

Existem duas possíveis respostas


<code>{"path":["a","b","c"],"cost":"6.15"}</code>
Para os casos onde existe um caminho


<code>{"path":"unreacheable","cost":-1}</code>
Para os casos em que não existe um caminho