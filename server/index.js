const send = require('koa-send');
const Koa = require('koa');
const Router = require('koa-router');
const path = require('path')
const swig = require('swig');
const router = new Router();
const app = new Koa();

const templateRoot = path.join(__dirname, "../dist/")

router.get('/', function(ctx, next){
    let template = swig.compileFile(path.resolve(templateRoot, "index.html"));
    ctx.body = template({})
});

router.get(/^\/static(?:\/|$)/, async (ctx) => {
     await send(ctx, ctx.path, {
         root: path.join(__dirname, "../dist")
     });
})

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);
console.log('listening on port 3000');