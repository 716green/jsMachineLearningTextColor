// Create a neural network
const net = new brain.NeuralNetwork(
  // More hidden layers can provide better results but the default number is used when not specified
  // { hiddenLayers: [4,5,6] }
)

// Train to do XOR operations (Exclusive OR, one thing is true and the other is not)
 let trainingData =  [
  {
    // black bg color
    input: { r: 0, g: 0, b: 0 },
    // white text is ideal
    output: [1]
  },
  {
    // white bg color
    input: { r: 1, g: 1, b: 1 },
    // black text is ideal
    output: [0]
  }
]



net.train(trainingData)

const colorE1 = document.getElementById('color')
const guessE1 = document.getElementById('guess')
const whiteButton = document.getElementById('white-button')
const blackButton = document.getElementById('black-button')
const printButton = document.getElementById('print-button')
let color
setRandomColor()

whiteButton.addEventListener('click', () => {
  chooseColor(1)
})
blackButton.addEventListener('click', () => {
  chooseColor(0)
})

printButton.addEventListener('click', print)

function chooseColor(value) {
  trainingData.push({
    input: color,
    output: [value]
  })
  setRandomColor()
}

function print() {
  trainingData = trainingData
  console.log(JSON.stringify(trainingData))
  // fs.writeFile('./traingingData.json', JSON.stringify(trainingData), 'utf-8', function(err) {
	// if (err) throw err
	// console.log('Done!')
// })
}

function setRandomColor() {
  color = {
    r: Math.random(),
    g: Math.random(),
    b: Math.random()
  }
  const guess = net.run(color)[0]
  guessE1.style.color = guess > .5? '#FFF' : '#000'
  colorE1.style.backgroundColor =
    `rgba(${color.r * 255}, ${color.g * 255}, ${color.b * 255})`
}


// Create an SVG visual representation of the neural network
const diagram = document.getElementById('diagram')
diagram.innerHTML = brain.utilities.toSVG(net)


// Run AI
let results = net.run({r:1, g:1, b:0.5})[0]
results = (parseFloat(results).toFixed(4) * 100).toString()
results = results.concat('%')

// console.log(results)

let aiValue = document.getElementById('aiValue').innerHTML = results
// console.log(aiValue)



console.log(results)