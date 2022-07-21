/* eslint-disable max-len */
const request = require('supertest');
const expect = require('expect');
const server = require('../src/server');
const mock = require('./mockData');


describe('API test', () =>{
  it('should return a welcome message', (done) =>{
    request(server)
        .get('/api')
        .expect('Content-Type', /json/)
        .expect(200, {
          'message': 'welcome to studentAPI',
        })
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
  });
  it('should return  success when an user has been created', (done)=>{
    request(server)
        .post('/api/users/signup')
        .send(mock.validUser)
        .expect('Content-Type', /json/)
        .expect(201)
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
  });
  it('should return status code: 200 when user login successfully', (done)=>{
    request(server)
        .post('/api/users/login')
        .send(mock.loginCredentials)
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
  });
  it('should pass when course\'s data is valid', (done) => {
    request(server)
        .post('/api/courses/addCourse')
        .send(mock.validCourse)
        .expect('Content-Type', /json/)
        .expect(201)
        .end((err, res) => {
          if (err) return done(err);

          done();
        });
  });
  it('should pass when student\'s data is valid', (done) => {
    request(server)
        .post('/api/students/addStudent')
        .send(mock.validStudent)
        .expect('Content-Type', /json/)
        .expect(201)
        .end((err, res) => {
          if (err) return done(err);

          done();
        });
  });
  it('should fail when course\'s code is missing', (done) => {
    request(server)
        .post('/api/courses/addCourse')
        .send(mock.courseMissingCode)
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);

          done();
        });
  });
  it('should fail when course\'s name is missing', (done)=>{
    request(server)
        .post('/api/courses/addCourse')
        .send(mock.courseMissingName)
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);

          done();
        });
  });
  it('should fail when course\'s professor is missing', (done)=>{
    request(server)
        .post('/api/courses/addCourse')
        .send(mock.courseMissingProfessor)
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);

          done();
        });
  });
  it('should fail when course\'s program is missing', (done)=>{
    request(server)
        .post('/api/courses/addCourse')
        .send(mock.courseMissingProgram)
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);

          done();
        });
  });
  it('should fail when student\'s firstName is missing', (done)=>{
    request(server)
        .post('/api/students/addStudent')
        .send(mock.studentMissingFirstName)
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);

          done();
        });
  });
  it('should fail when student\'s lastName is missing', (done)=>{
    request(server)
        .post('/api/students/addStudent')
        .send(mock.studentMissingLastName)
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);

          done();
        });
  });
  it('should fail when student\'s email is missing', (done)=>{
    request(server)
        .post('/api/students/addStudent')
        .send(mock.studentMissingEmail)
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);

          done();
        });
  });
  it('should fail when student\'s email is not valid', (done)=>{
    request(server)
        .post('/api/students/addStudent')
        .send(mock.studentWithInvalidEmail)
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);

          done();
        });
  });
  it('should fail when student\'s phoneNumber is missing', (done)=>{
    request(server)
        .post('/api/students/addStudent')
        .send(mock.studentMissingPhoneNumber)
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);

          done();
        });
  });
  it('should fail when student\'s phoneNumber is not valid', (done)=>{
    request(server)
        .post('/api/students/addStudent')
        .send(mock.studentWithInvalidPhoneNumber)
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);

          done();
        });
  });
  it('should fail when student\'s program is missing', (done)=>{
    request(server)
        .post('/api/students/addStudent')
        .send(mock.studentMissingProgram)
        .expect('Content-Type', /json/)
        .expect(400)
        .end((err, res) => {
          if (err) return done(err);

          done();
        });
  });
  it('should return success when student take a course', (done)=>{
    request(server)
        .put('/api/students/VJ7T5S2QN/takeCourse/IPC144')
        .expect('Content-Type', /json/)
        .expect(202)
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
  });
  it('should return success when student take a course', (done)=>{
    request(server)
        .put('/api/students/VJ7T5S2QN/dropCourse/IPC144')
        .expect('Content-Type', /json/)
        .expect(202)
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
  });
  it('should return status code: 409 when an user has being created without an username', (done)=>{
    request(server)
        .post('/api/users/signup')
        .send(mock.userMissingUsername)
        .expect('Content-Type', /json/)
        .expect(409)
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
  });
  it('should return status code: 409 when an user has being created without an email', (done)=>{
    request(server)
        .post('/api/users/signup')
        .send(mock.userMissingEmail)
        .expect('Content-Type', /json/)
        .expect(409)
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
  });
  it('should return status code: 409 when an user has being created with a weak password', (done)=>{
    request(server)
        .post('/api/users/signup')
        .send(mock.user_with_bad_password)
        .expect('Content-Type', /json/)
        .expect(409)
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
  });
  it('should return status code: 409 when an user has being created with an existing username', (done)=>{
    request(server)
        .post('/api/users/signup')
        .send(mock.existingUser)
        .expect('Content-Type', /json/)
        .expect(409)
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
  });
  it('should return status code: 409 when an user has being created with an existing email', (done)=>{
    request(server)
        .post('/api/users/signup')
        .send(mock.existingEmail)
        .expect('Content-Type', /json/)
        .expect(409)
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
  });
  it('should delete an user', (done)=>{
    request(server)
        .delete('/api/users/dadedeji')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
  });
});
