const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/userDB');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
      name: { type: String },
      password: { type: String },
      job: { type: String }
    },
    { timestamps: true }
  );
   
  const User = mongoose.model('User', userSchema);

  const data = { name: 'Alice', password: 'ironhack2018', job: 'Architect' };

  User.create(data)
  .then(user => console.log('The user is saved and its value is: ', user))
  .catch(error => console.log('An error happened while saving a new user:', error));
























//mongoose.connect('mongodb://localhost/exampleApp');

// const Student = mongoose.model('Student', { firstName: String });
// const City = mongoose.model('City', { name: String });


// const promise1 = Student.insertMany([{ firstName: 'Alice' }, { firstName: 'Bob' }]);
// const promise2 = City.insertMany([{ name: 'Madrid' }, { name: 'Barcelona' }, { name: 'Paris' }]);
 
// Promise.all([promise1, promise2])
//   .then(values => {
//     console.log('students and cities have been inserted');
//     console.log(values);
//     /*
//     [ [ { _id: 5a4e462048841e65562c465a, firstName: 'Alice', __v: 0 },
//       { _id: 5a4e462048841e65562c465b, firstName: 'Bob', __v: 0 } ],
//     [ { _id: 5a4e462048841e65562c465c, name: 'Madrid', __v: 0 },
//       { _id: 5a4e462048841e65562c465d, name: 'Barcelona', __v: 0 },
//       { _id: 5a4e462048841e65562c465e, name: 'Paris', __v: 0 } ] ]
//     */
//     mongoose.connection.close();
//   })
//   .catch(err => console.error(err));






// // When successfully connected
// mongoose.connection.on('connected', () => console.log('Mongoose default connection open'));
 
// // If the connection throws an error
// mongoose.connection.on('error', err => console.log(`Mongoose default connection error: ${err}`));
 
// // When the connection is disconnected
// mongoose.connection.on('disconnected', () => console.log('Mongoose default connection disconnected'));
 
// // If the Node process ends, close the Mongoose connection
// process.on('SIGINT', () => {
//   mongoose.connection.close(() => {
//     console.log('Mongoose default connection disconnected through app termination');
//     process.exit(0);
//   });
// });





// const Cat = mongoose.model('Cat', { name: String });

// function addNewCat(catName) {
//   const kitty = new Cat({ name: catName });

//   kitty
//     .save()
//     .then(newCat => console.log(`A new cat is created: ${newCat}!`))
//     .catch(err => console.log(`Error while creating a new cat: ${err}`));
// }

// function showCats() {
//   console.log('All the CATS!');
//   Cat.find()
//     .then(catsFromDB => {
//       // catsFromDB is an array of Cat instances
//       catsFromDB.forEach(oneCat => console.log(` --> cat: ${oneCat.name}`));
//     })
//     .catch(err => console.log(`Error occurred during getting cats from DB: ${err}`));
// }

// function addTenCats() {
//   for (let i = 0; i < 10; i++) {
//     addNewCat(`Ironhacker ${i}`);
//   }
// }

// addTenCats();

// /* We have to wait for our cats to save before displaying them
//  Remember, it's async */
// setTimeout(showCats, 1500);
