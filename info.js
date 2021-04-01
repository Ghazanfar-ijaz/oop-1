const alice = {
  firstName: 'Alice',
  lastName: 'Liddell',
  age: 28,
  language: ['js', 'html', 'python'],
}

const bob = {
  firstName: 'Bob',
  lastName: 'Lemon',
  age: 30,
  language: ['js', 'html', 'css'],
}

const charlie = {
  firstName: 'Charlie',
  lastName: 'Charlot',
  age: 8,
  language: ['html'],
}

const printInfo = (person) => {
  console.log(`first name: ${person.firstName}`)
  console.log(`last name: ${person.lastName}`)
  console.log(`age: ${person.age}`)
}

//printInfo(alice)
//printInfo(bob)
//printInfo(charlie)

const canVote = (person) => {
  if (person.age >= 18) {
    return true;
  } else {
    return false;
  }
}

//console.log(canVote(alice))
//console.log(canVote(charlie))

const mostSkilledDev = (p1, p2) => {
  if (p1.language.length > p2.language.length) {
    return p1.firstName
  } else if (p1.language.length < p2.language.length) {
    return p2.firstName
  } else {
    return 'draw'
  }
}

console.log(mostSkilledDev(alice, charlie))
console.log(mostSkilledDev(alice, bob))
