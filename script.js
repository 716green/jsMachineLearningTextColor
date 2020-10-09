// Create a neural network
const net = new brain.NeuralNetwork()
const diagram = document.getElementById('diagram')

// Train to do XOR operations (Exclusive OR, one thing is true and the other is not)
net.train([
  // Input and output must be arrays
  {
    input: [0,0],
    output: [0]
  },
  {
    input: [1,0],
    output: [1]
  },
  {
    input: [0,1],
    output: [1]
  },
  {
    input: [1,1],
    output: [0]
  },
])

diagram.innerHTML = brain.utilities.toSVG(net)