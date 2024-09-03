const mark = {
    firstName: 'Mark',
    lastName: 'Ganea',
    weight: 78,
    height: 1.69,
    calcBMI: function() {
        this.BMI = (this.weight / this.height ** 2).toFixed(2);
    }
};

const vasile = {
    firstName: 'Vasile',
    lastName: 'Cibotaru',
    weight: 92,
    height: 1.95,
    calcBMI: function() {
        this.BMI = (this.weight / this.height ** 2).toFixed(2);
    }
};

mark.calcBMI();
vasile.calcBMI();

function compareBMI(person1, person2) {
    if (person1.BMI > person2.BMI) {
        console.log(`${person1.firstName} ${person1.lastName}'s BMI (${person1.BMI}) is higher than ${person2.firstName} ${person2.lastName}'s (${person2.BMI})!`);
    } else {
        console.log(`${person2.firstName} ${person2.lastName}'s BMI (${person2.BMI}) is higher than ${person1.firstName} ${person1.lastName}'s (${person1.BMI})!`);
    }
}

compareBMI(mark, vasile);
