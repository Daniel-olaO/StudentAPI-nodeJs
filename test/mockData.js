const validCourse = {
    "code":"IPC144",
    "name":"Introduction to programming using C",
    "professor":"Gray Cameron",
    "program":"CPA"
}
const courseMissingCode = {
    "code":"",
    "name":"Introduction to programming using C",
    "professor":"Gray Cameron",
    "program":"CPA"
}
const courseMissingName = {
    "code":"IPC144",
    "name":"",
    "professor":"Gray Cameron",
    "program":"CPA"
}
const courseMissingProfessor = {
    "code":"IPC144",
    "name":"Introduction to programming using C",
    "professor":"",
    "program":"CPA"
}
const courseMissingProgram = {
    "code":"IPC144",
    "name":"Introduction to programming using C",
    "professor":"Gray Cameron",
    "program":""
}
const validStudent = {
    "firstName":"Daniel",
    "lastName":"Adedeji",
    "email":"dadedeji@myseneca.ca",
    "phone":"6476752021",
    "program":"CPA",
    "startDate":"02/22/2022"
}
const studentMissingFirstName = {
    "firstName":"",
    "lastName":"Adedeji",
    "email":"dadedeji@myseneca.ca",
    "phone":"6476752021",
    "program":"CPA",
    "startDate":"02/22/2022"
}
const studentMissingLastName = {
    "firstName":"Daniel",
    "lastName":"",
    "email":"dadedeji@myseneca.ca",
    "phone":"6476752021",
    "program":"CPA",
    "startDate":"02/22/2022"
}
const studentMissingEmail = {
    "firstName":"Daniel",
    "lastName":"Adedeji",
    "email":"",
    "phone":"6476752021",
    "program":"CPA",
    "startDate":"02/22/2022"
}
const studentWithInvalidEmail = {
    "firstName":"Daniel",
    "lastName":"Adedeji",
    "email":"dadedeji",
    "phone":"6476752021",
    "program":"CPA",
    "startDate":"02/22/2022"
}
const studentMissingPhoneNumber = {
    "firstName":"Daniel",
    "lastName":"Adedeji",
    "email":"dadedeji@myseneca.ca",
    "phone":"",
    "program":"CPA",
    "startDate":"02/22/2022"
}
const studentWithInvalidPhoneNumber = {
    "firstName":"Daniel",
    "lastName":"Adedeji",
    "email":"dadedeji@myseneca.ca",
    "phone":"64767",
    "program":"CPA",
    "startDate":"02/22/2022"
}
const studentMissingProgram = {
    "firstName":"Daniel",
    "lastName":"Adedeji",
    "email":"dadedeji@myseneca.ca",
    "phone":"6476752021",
    "program":"",
    "startDate":"02/22/2022"
}

module.exports = {
    validStudent,
    validCourse,
    courseMissingCode,
    courseMissingName,
    courseMissingProfessor,
    courseMissingProgram,
    studentMissingFirstName,
    studentMissingLastName,
    studentMissingEmail,
    studentMissingPhoneNumber,
    studentWithInvalidEmail,
    studentWithInvalidPhoneNumber,
    studentMissingProgram
}