/*使用Node.js原生HTTP模块和URL模块创建服务器并处理路由
 */
var http = require('http'),
    url =  require('url');

http.createServer(function(req, res){
    var pathname = url.parse(req.url).pathname;

    if(pathname == '/'){
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Home Page\n');
    }
    else if(pathname == '/about'){
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('About us');
    }
    else if(pathname == '/redirect'){
        res.writeHead(301, {//重定向至根目录
            'Location': '/'
        });
        res.end();
    }
    else{
        res.writeHead(404, {
            'Content-Type': 'text/plain'
        });
        res.end('Page not found\n');
    }
}).listen(3000);

console.log('Server running at localhost');

