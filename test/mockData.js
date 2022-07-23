const validCourse = {
  'code': 'IPC144',
  'name': 'Introduction to programming using C',
  'professor': 'Gray Cameron',
  'program': 'CPA',
};
const courseMissingCode = {
  'code': '',
  'name': 'Introduction to programming using C',
  'professor': 'Gray Cameron',
  'program': 'CPA',
};
const courseMissingName = {
  'code': 'IPC144',
  'name': '',
  'professor': 'Gray Cameron',
  'program': 'CPA',
};
const courseMissingProfessor = {
  'code': 'IPC144',
  'name': 'Introduction to programming using C',
  'professor': '',
  'program': 'CPA',
};
const courseMissingProgram = {
  'code': 'IPC144',
  'name': 'Introduction to programming using C',
  'professor': 'Gray Cameron',
  'program': '',
};
const validStudent = {
  'firstName': 'Daniel',
  'lastName': 'Adedeji',
  'email': 'dadedeji@myseneca.ca',
  'phone': '6476752021',
  'program': 'CPA',
  'startDate': '02/22/2022',
};
const studentMissingFirstName = {
  'firstName': '',
  'lastName': 'Adedeji',
  'email': 'dadedeji@myseneca.ca',
  'phone': '6476752021',
  'program': 'CPA',
  'startDate': '02/22/2022',
};
const studentMissingLastName = {
  'firstName': 'Daniel',
  'lastName': '',
  'email': 'dadedeji@myseneca.ca',
  'phone': '6476752021',
  'program': 'CPA',
  'startDate': '02/22/2022',
};
const studentMissingEmail = {
  'firstName': 'Daniel',
  'lastName': 'Adedeji',
  'email': '',
  'phone': '6476752021',
  'program': 'CPA',
  'startDate': '02/22/2022',
};
const studentWithInvalidEmail = {
  'firstName': 'Daniel',
  'lastName': 'Adedeji',
  'email': 'dadedeji',
  'phone': '6476752021',
  'program': 'CPA',
  'startDate': '02/22/2022',
};
const studentMissingPhoneNumber = {
  'firstName': 'Daniel',
  'lastName': 'Adedeji',
  'email': 'dadedeji@myseneca.ca',
  'phone': '',
  'program': 'CPA',
  'startDate': '02/22/2022',
};
const studentWithInvalidPhoneNumber = {
  'firstName': 'Daniel',
  'lastName': 'Adedeji',
  'email': 'dadedeji@myseneca.ca',
  'phone': '64767',
  'program': 'CPA',
  'startDate': '02/22/2022',
};
const studentMissingProgram = {
  'firstName': 'Daniel',
  'lastName': 'Adedeji',
  'email': 'dadedeji@myseneca.ca',
  'phone': '6476752021',
  'program': '',
  'startDate': '02/22/2022',
};
const validUser = {
  'username': 'dadedeji',
  'email': 'dadedji@stu.ca',
  'password': 'z@Q1w2e3r4',
  'rePassword': 'z@Q1w2e3r4',
};
const userMissingUsername = {
  'username': '',
  'email': 'xyz@cap.sa',
  'password': 'z@Q1w2e3r4',
  'rePassword': 'z@Q1w2e3r4',
};
const userMissingEmail = {
  'username': 'xyz',
  'email': '',
  'password': 'z@Q1w2e3r4',
  'rePassword': 'z@Q1w2e3r4',
};
const user_with_bad_password = {
  'username': 'Maraim96',
  'email': 'maraim96@hotmail.com',
  'password': 'pass1',
  'rePassword': 'pass1',
};
const existingUser = {
  'username': 'dadedeji',
  'email': 'dadedeji@stu.ca',
  'password': 'z@Q1w2e3r4',
  'rePassword': 'z@Q1w2e3r4',
};
const existingEmail = {
  'username': 'xyz',
  'email': 'dadedeji@stu.ca',
  'password': 'z@Q1w2e3r4',
  'rePassword': 'z@Q1w2e3r4',
};
const loginCredentials = {
  'username': 'dadedeji',
  'password': 'z@Q1w2e3r4',
};

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
  studentMissingProgram,
  validUser,
  userMissingUsername,
  userMissingEmail,
  user_with_bad_password,
  existingUser,
  loginCredentials,
  existingEmail,
};
