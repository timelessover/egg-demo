'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async main() {
    const { ctx } = this;
    ctx.body = 'hi,man';
  }
}

module.exports = HomeController;
