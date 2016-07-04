var express=require("express");
var multer=require('multer');

var upload = multer();
var app=express();

var port=process.env.PORT||3000;


app.use('/', express.static('./public'));

app.post('/uploads', upload.single('file'), function (req, res) {
  
  var name=req.file.originalname;
  var size=req.file.size + ' bytes'

  res.json({name,size})
})


app.listen(port,function(){
  console.log("Express server listening on port "+port);
})