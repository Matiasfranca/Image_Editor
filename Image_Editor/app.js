const sharp = require('sharp');



let widht = Number(process.argv[2]);

sharp("papel de parede.jpg").resize(widht).toFormat('jpg', {progressive: true, quality: 90,}).toFile('./compressed/teste.jpg', 
err=>{
    if(err){console.log(err);}
    else{}
});
