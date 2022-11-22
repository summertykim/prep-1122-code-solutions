var person = {
  firstName: 'Summer',
  lastName: 'Kim',
  hobby: 'Climbing'
};
console.log(person);
var fullName = person.firstName + ' ' + person.lastName;
console.log('The person\'s name is:', fullName);
person.job = 'Account Manager';
console.log('The person\'s current job is:', person.job);
person.previousJob = 'Assitant AE';
console.log('The person\'s previous job is:', person.previousJob);
console.log('The complete person object:', person);
