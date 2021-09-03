// https://leetcode.com/problems/number-of-students-unable-to-eat-lunch

/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
 var countStudents = function(students, sandwiches) {
    
    let sandi = 0;
    
    while(true){
        let new_row = [];
        for(let student of students){
            if(student == sandwiches[sandi]){
                sandi += 1;
            } else {
                new_row.push(student);
            }
        }
        
        if(new_row.length == students.length){
            students = new_row;
            break;
        } else {
            students = new_row;
        }
    }
    
    return students.length;
    
};