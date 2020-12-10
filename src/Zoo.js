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
        for(let i = 0; this.cages.length; i++){
            if (this.cages[i].animal === null){
                this.cages[i].push(newAnimal)
            }
        }
    }
}

export default Zoo