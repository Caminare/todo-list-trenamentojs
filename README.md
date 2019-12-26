## Exercício aula 01
Com base nos exemplos de códigos gerados na aula 01, crie um ToDo List que possua as seguintes caracteristicas:
 - Formulário com input para envio de to do
 - Listagem de itens

A listagem dos itens deve apresentar os seguintes comportamentos:
 - O input de texto deve ser limpo após enviar
 - Inserir somente campos válidos (não permitir enviar campos sem valor)
 - Permitir que o item da lista seja marcado como concluído



## Exercício aula 02 - Entrega: 20/12
Com base no exercício entregue na aula 01, estilize o ToDo List para que ele fique similar à:

![](https://i.imgur.com/y1V6Vw6.png)


É necessário adicionar, além da opção de marcar como feito, a opção de marcar como favorito (estrela vermelha)
  - Utilizar a seguinte fonte: https://fonts.google.com/specimen/Lato
  - Utilizar bibloteca de ícones: https://material.io/resources/icons/?style=baseline
  - Utilizar CSS.

A listagem dos itens deve apresentar os seguintes comportamentos:
  - No hover do item da listagem, caso este não esteja favoritado, deve-se mostrar a estrela apagada.

**Pode utilizar Flex, mas não se deve utilizar nenhuma lib externa, além da lib de ícones indicada.**


## Exercício aula 02 - Entrega: 27/12

Com base nos conteúdos apresentados e nos exercícios anteriores, evolua o exercício 2, de forma que:
  - Utilize template literals para criar a lista (tanto de itens quanto de favoritos)
  - Desenvolva uma lógica onde o componente de favoritos renderize apenas os itens com fav true (dica: você pode criar duas listas, uma para dar push dos itens com fav true ou utilizar filter para filtrar os objetos com fav true)
  - O componente de favoritos pode ser uma pagina separada ou apenas uma nova sessão na mesma página
  
