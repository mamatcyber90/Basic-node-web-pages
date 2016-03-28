// http server that returms html files on request 


var http= require('http');
var fs=require('fs');
var path=require('path');

var hostname='localhost';
var port=3000;

var server=http.createServer(function(req,res){
	
  console.log('Request from '+ req.url +' by method '+ req.method);

  if(req.method=='GET')                          // only get method allowed
  {
  	 var fileurl;

  	 if(req.url=='/')
  	 	fileurl='/index.html';
  	 else
  	 	fileurl=req.url;

  	 var filepath= path.resolve('./public'+fileurl);
  	 var fileExt=path.extname(filepath);

  	 if(fileExt=='.html')                   // only html files
  	 {
  	 	fs.exists(filepath,function(exists){

  	 		if (!exists) {
        	res.writeHead(404, { 'Content-Type': 'text/html' });
        	res.end('<html><body><h1>Error 404: ' + fileurl + 
                        ' not found</h1></body></html>');
        	return;

        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
          fs.createReadStream(filepath).pipe(res);          // output the html file using filesystem


  	 	});

  	 }
  	  else {

        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<html><body><h1>Error 404: ' + fileurl + 
                ' not a HTML file</h1></body></html>');
    }
  }

  else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<html><body><h1>Error 404: ' + req.method + 
                ' not supported</h1></body></html>');
  }


});


server.listen(port,hostname,function(){
	console.log('Server running at http://'+hostname+':'+port+'/');
});