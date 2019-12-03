'use strict';

// 处理请求参数，纯如数据库返回信息

const Controller = require('egg').Controller;

class RegisterController extends Controller {
  async register() {
    const { ctx } = this;
    const user = { userName: ctx.query.name, password: ctx.query.password };
    const result = await ctx.service.register.register(user);
    ctx.body = result;
  }
  async login() {
    const { ctx } = this;
    const result = await ctx.service.register.login();
    ctx.body = result;
  }
}

module.exports = RegisterController;
