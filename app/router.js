
module.exports = app => {
  app.get('/login', app.controller.admin.login);
  app.get('/inspire', app.controller.admin.inspire);
  app.get('/chart', app.controller.admin.chart);
  app.get('/map', app.controller.admin.map);
  app.get('/x6', app.controller.admin.x6);
  app.get('/ava', app.controller.admin.ava);
  app.get('/(.*?)', app.controller.admin.render);
};
