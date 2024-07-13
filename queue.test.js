const Queue = require('./queue')

describe('Queue', () => {
  it('Deve criar uma fila', () => {
    const queue = new Queue()
    expect(queue).toEqual({ elements: []})
  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    const queue = new Queue();
    queue.add('JavaScript');
    queue.add('Java');
    queue.add('Python');
    queue.add('C++');
    expect(queue.size()).toEqual(4);
  })

  it('Deve ser capaz de adicionar um item na fila', () => {
    const queue = new Queue();
    expect(queue.add('JavaScript')).toEqual(1);
  })

  it('Deve escolher o primeiro item da fila', () => {
    const queue = new Queue();
    queue.add('JavaScript');
    queue.add('Java');
    queue.add('Python');
    queue.add('C++');
    expect(queue.peek()).toEqual('JavaScript');
  })

  it('Deve remover o primeiro item da fila', () => {
    const queue = new Queue();
    queue.add('JavaScript');
    queue.add('Java');
    queue.add('Python');
    queue.add('C++');
    expect(queue.dequeue()).toEqual('C++');
  })
})



/*
size() Deve ser capaz de calcular o tamanho da fila
add(item) Deve ser capaz de adicionar um item na fila
peek() Deve escolher o primeiro item da fila
dequeue() Deve remover o primeiro item da fila
*/