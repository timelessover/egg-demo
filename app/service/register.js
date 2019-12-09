'use strict';

// 数据库操作，CURD

const Service = require('egg').Service;

class RegisterService extends Service {
  async register(user) {
    const { ctx } = this;
    let result;
    const hasSameUser = await ctx.model.User.findOne({ username: user.username });
    if (hasSameUser) {
      result = {
        status: 'fail',
      };
    } else {
      const save_user = new ctx.model.User(user);
      await save_user.save();
      result = {
        status: 'ok',
      };
    }
    return result;
  }
  async login(user) {
    const { ctx, app } = this;
    let result;
    const hasUser = await ctx.model.User.findOne({ username: user.username });
    const token = app.jwt.sign({ foo: 'bar' }, app.config.jwt.secret);
    if (hasUser) {
      if (hasUser.password === user.password) {
        result = {
          name: hasUser.username,
          status: '0',
          token,
        };

      } else {
        result = {
          status: '1',
        };
      }
    } else {
      result = {
        status: '2',
      };
    }
    return result;
  }
}

module.exports = RegisterService;
