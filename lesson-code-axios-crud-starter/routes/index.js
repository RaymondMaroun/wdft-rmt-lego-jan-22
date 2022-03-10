module.exports = app => {
  app.use('/', require('./base.routes'));
  app.use('/characters', require('./characters.routes')); // add this!
};
