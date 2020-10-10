// Create a neural network
const net = new brain.NeuralNetwork(
  // More hidden layers can provide better results but the default number is used when not specified
  // { hiddenLayers: [4,5,6] }
)

// Train to do XOR operations (Exclusive OR, one thing is true and the other is not)
net.train([
  // Input and output must be arrays or objects
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


// Create an SVG visual representation of the neural network
const diagram = document.getElementById('diagram')
diagram.innerHTML = brain.utilities.toSVG(net)

// Run AI
let results = net.run([1, 0])[0]
results = (parseFloat(results).toFixed(4) * 100).toString()
results = results.concat('%')

console.log(results)