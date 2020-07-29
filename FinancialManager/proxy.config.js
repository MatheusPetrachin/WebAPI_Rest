const proxy = [{
    context: '/api',
    target: 'http://localhost:44320',
    pathRewrite: { '^/api': '' }
}];
module.exports = proxy;