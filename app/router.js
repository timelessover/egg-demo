'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/register', controller.register.register);
  router.post('/login', app.jwt, controller.register.login);
};
