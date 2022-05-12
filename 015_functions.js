// basic function
function fullName(first, last) {
    return first + " " + last;
}
// console.log(fullName("Jordan", "Hudgens"));
function gradeGenerator(grade) {
    // return "str"
    if (grade < 60) {
        return 'F';
    }
    else if (grade >= 60 && grade < 70) {
        return 'D';
    }
    else if (grade >= 70 && grade < 80) {
        return 'C';
    }
    else if (grade >= 80 && grade < 90) {
        return 'B';
    }
    else {
        return 'A';
    }
}
console.log(gradeGenerator(77));
console.log(gradeGenerator(96));
console.log(gradeGenerator(100));
//# sourceMappingURL=015_functions.js.map