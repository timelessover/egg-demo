'use strict';

// 数据库操作，CURD

const Service = require('egg').Service;

class RegisterService extends Service {
  async register(user) {
    const { ctx } = this;
    const save_user = new ctx.model.User(user);
    const result = await save_user.save();
    ctx.cookies.set('token', JSON.stringify(result._id), { encrypt: true });
    return result;
  }
  async login() {
    const { ctx } = this;
    const id = JSON.parse(ctx.cookies.get('token', { encrypt: true }));
    const result = await ctx.model.User.findOne({ _id: id });
    return result;
  }
}

module.exports = RegisterService;
