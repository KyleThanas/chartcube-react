
module.exports = app => {
  return class AdminController extends app.Controller {
    async login() {
      const { ctx } = this;
      await ctx.renderClient('login.js', {});
    }

    async render(ctx) {
      const list = ctx.service.article.getList();
      if (ctx.query.mode === 'ssr') {
        await ctx.render('admin.js', { url: ctx.url, list });
      } else {
        await ctx.renderClient('admin.js', { url: ctx.url, list });
      }
    }

    async inspire() {
      const { ctx } = this;
      await ctx.renderClient('inspire.js', {});
    }

    async chart() {
      const { ctx } = this;
      await ctx.renderClient('chart.js', {});
    }

    async map() {
      const { ctx } = this;
      await ctx.renderClient('map.js', {});
    }

    async x6() {
      const { ctx } = this;
      await ctx.renderClient('x6.js', {});
    }
  };
};
