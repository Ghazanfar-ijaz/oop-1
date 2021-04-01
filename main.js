// Importation des classes

const { Point } = require('./point')
const { Human } = require('./classInfo')

// Création des instances
// point.js
const p1 = new Point(1, 2)
const p2 = new Point(10, 11)

// classInfo.js
const alice = new Human('Alice', 'Liddell', 28, true, ['js', 'html', 'python'])
const bob = new Human('Bob', 'Lemon', 30, true, ['js', 'html', 'python'])
const charlie = new Human('Charlie', 'Charlot', 8, false, ['html'])
