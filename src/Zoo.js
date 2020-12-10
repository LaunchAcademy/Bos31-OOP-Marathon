import Cage from './Cage.js'

class Zoo {
  constructor(name) {
    this.name = name
    this.employees = []
    this.cages = []
    
    for (let i = 0; i < 10; i++) {
        this.cages.push(new Cage())
    }
  }

  addEmployee(employeeObj) {
    this.employees.push(employeeObj)
  }

  addAnimal(newAnimal){
    // Solution 1
    for (let i = 0; i < this.cages.length; i++) {
      if (this.cages[i].isEmpty()) {
        this.cages[i].animal = newAnimal
        return
      }
    }
    return "All of the cages are full!"

    // Solution 2
    // let firstEmptyCage = this.cages.find((cage) => {
    //   if (cage.isEmpty()) {
    //     return cage
    //   }
    // })

    // if (firstEmptyCage) {
    //   firstEmptyCage.animal = newAnimal
    // } else {
    //   return 'All of the cages are full!'
    // }
  }

  visit() {
    let output = ""
    this.cages.forEach((cage) => {
      if (!cage.isEmpty()) {
        output += `${cage.animal.speak()}\n`
      }
    })

    this.employees.forEach((employee) => {
      output += `${employee.greet()}\n`
    })

    return output
  }
}

export default Zoo