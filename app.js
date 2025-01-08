const httpSample = require('http');

/*function requestListerner(request,response)
{
console.log(request);
}*/
const server = httpSample.createServer((request,response)=>{
    /*console.log(request.url);
    console.log(request.method);
    console.log(request.headers);*/
    const url = request.url;
    if(url==='/')
    {
        response.setHeader('content-type','text/html');
        response.write('<html>')
        response.write('<head><title>Enter form details</title></head>')
        response.write('<body><form action="/message" methood="POST"><input type="text" name="message"><input type="submit" value="send"></form></body>')
        response.write('</html>')
        return response.end();
    }
    response.setHeader('content-type','text/html');
    response.write('<html>')
    response.write('<head><title>Learn</title></head>')
    response.write('<body><h1>Practice until succeed</h1></body>')
    response.write('</html>')
    response.end();
});
server.listen(4000);
