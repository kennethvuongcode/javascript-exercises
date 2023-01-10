const findTheOldest = function(people) {

    let oldest = people.reduce(compareAge);
    return oldest;
};

function compareAge(previous, challenger) {
    let previous_age = findAge(previous);
    let challenger_age = findAge(challenger)

    if (previous_age >= challenger_age)
        return previous;
    
    if (previous_age < challenger_age)
        return challenger;
}

function findAge(person){
    if (person?.yearOfDeath == undefined) {
        let currentYear = new Date();
        person.yearOfDeath = currentYear.getFullYear();
    } 
    return person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
