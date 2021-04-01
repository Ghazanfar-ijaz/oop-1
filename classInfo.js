class Human {
  constructor(firstName, lastName, age, language) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.language = language
  }
  printInfo() {
    console.log(`first name: ${this.firstName}`)
    console.log(`last name: ${this.lastName}`)
    console.log(`age: ${this.age}`)
  }
}

canVote = () => {
  if (this.age >= 18) {
    return true;
  } else {
    return false;
  }
}

const mostSkilledDev = (person) => {
  if (this.language.length > person.language.length) {
    return this.firstName
  } else if (this.language.length < person.language.length) {
    return person.firstName
  } else {
    return 'draw'
  }
}

const alice = new Human('Alice', 'Liddell', 28, true, ['js', 'html', 'python'])
const bob = new Human('Bob', 'Lemon', 30, true, ['js', 'html', 'python'])
const charlie = new Human('Charlie', 'Charlot', 8, false, ['html'])

console.log(alice.firstName)
console.log(bob.firstName)
alice.printInfo()
bob.printInfo()
console.log(alice.mostSkilledDev(charlie))
console.log(alice.mostSkilledDev(bob))

