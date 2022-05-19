var fullName = (first, last) => {
    return first + " " + last;
}

console.log(fullName('Jordan', 'Hudgens'));

// Jordan Hudgens

var gradeGenerator = (grade:number):string => {
    // return "str"
    if (grade < 60) {
        return 'F';
    } else if (grade >= 60 && grade < 70) {
        return 'D';
    } else if (grade >= 70 && grade < 80) {
        return 'C';
    } else if (grade >= 80 && grade < 90) {
        return 'B';
    } else {
        return 'A';
    }
}

console.log(gradeGenerator(77));
console.log(gradeGenerator(96));
console.log(gradeGenerator(100));