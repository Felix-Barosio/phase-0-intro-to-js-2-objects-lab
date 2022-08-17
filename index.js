// Write your solution in this file!
let employee = {}

function updateEmployeeWithKeyAndValue(employee, name, value){
    let emp = {...employee};
    emp[name] = value;
    return emp;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, value){
    employee[name] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    let myEmp = {...employee}
    delete myEmp[key];
    return myEmp;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}