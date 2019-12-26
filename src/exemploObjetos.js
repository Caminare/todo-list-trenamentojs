var itens = [
  {id: 1, name: 'tomar café', done: false},
  {id: 2, name: 'estudar js', done: false},
  {id: 3, name: 'apontamentos', done: false},
  {id: 4, name: 'voltar a trabalhar', done: false},
]

function trocaNome(id, text){
  for (var i = 0; i < itens.length; i++) {
    if(itens[i].id == id)
      itens[i].name = text
    console.log(itens[i])
  }
}

function addItem(obj) {
  itens.push(obj)
}

function marcarComoConcluido(id) {
  for (var i = 0; i < itens.length; i++) {
    if(itens[i].id == id)
      itens[i].done = true
    console.log(itens[i])
  }
}

addItem({id: 5, name: 'conversar com os amigos', done: false})

marcarComoConcluido(2);

trocaNome(4, 'intervalar')
