const path = require('path');
const resolve = (filepath) => path.resolve(__dirname, filepath);
module.exports = {
  entry: {
    login: 'app/web/page/login/index.jsx',
    inspire: 'app/web/page/inspire/index.jsx',
    chart: 'app/web/page/chart/index.jsx',
    map: 'app/web/page/map/index.jsx',
    x6: 'app/web/page/x6/index.jsx',
    admin: 'app/web/page/admin/index.jsx'
  },
  resolve: {
    alias:{
      '@asset': resolve('app/web/asset'),
      '@framework': resolve('app/web/framework'),
      '@component': resolve('app/web/component')
    }
  },
  alias: {
    server: 'app/web/framework/vue/entry/server.js',
    client: 'app/web/framework/vue/entry/client.js',
    app: 'app/web/framework/vue/app.js',
    asset: 'app/web/asset',
    component: 'app/web/component',
    framework: 'app/web/framework',
    utils: 'app/web/utils',
    store: 'app/web/store'
  },
  plugins:[
    { imagemini: false }
  ]
};
