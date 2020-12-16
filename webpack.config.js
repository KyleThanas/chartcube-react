const path = require('path');
module.exports = {
  entry: {
    login: 'app/web/page/login/index.jsx',
    inspire: 'app/web/page/inspire/index.jsx',
    chart: 'app/web/page/chart/index.jsx',
    map: 'app/web/page/map/index.jsx',
    x6: 'app/web/page/x6/index.jsx',
    ava: 'app/web/page/ava/index.jsx',
    admin: 'app/web/page/admin/index.jsx'
  },
  resolve: {
    alias: {
      '@asset': path.resolve(__dirname, 'app/web/asset/'),
      '@framework': path.resolve(__dirname, 'app/web/framework/'),
      '@component': path.resolve(__dirname, 'app/web/component/')
    }
  },
  use: {
    loader: 'babel-loader',
    options: {
      plugins: ['@babel/plugin-transform-runtime']
    }
  },
  plugins:[
    { imagemini: false }
  ]
};
