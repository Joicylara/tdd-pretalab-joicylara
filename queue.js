class Queue {
  elements
  constructor(){
    this.elements = []
  }
  
  size(){
    return this.elements.length;
  }

  add(item){
    return this.elements.push(item);
  }
  
  peek(){
    return this.elements[0];
  }

  dequeue(){
    return this.elements.pop();
  }

}

module.exports = Queue


/*
size() Deve ser capaz de calcular o tamanho da fila
add(item) Deve ser capaz de adicionar um item na fila
peek() Deve escolher o primeiro item da fila
dequeue() Deve remover o primeiro item da fila
*/