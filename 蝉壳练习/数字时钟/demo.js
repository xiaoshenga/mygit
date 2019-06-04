var box = document.getElementsByClassName('box')[0],
    ul = box.getElementsByTagName('ul')[0],
    shi = document.getElementsByClassName('shi')[0],
    feng = document.getElementsByClassName('feng')[0],
    miao = document.getElementsByClassName('miao')[0];
var Mli = '';
for(var i = 1; i<= 12; i++){
    Mli += '<li style=" transform: rotatez('+i*30+'deg)"><span style=" transform: rotatez('+i*-30+'deg)">'+i+'</span></li>';
}
ul.innerHTML = Mli;

setInterval(function(){
    var d = new Date();
    var miao3 = d.getUTCSeconds();
    var miao2 = d.getUTCMilliseconds();
    miao.style.transform = 'rotatez('+(miao2/1000+miao3)*6+'deg)';
    var feng2 = d.getUTCMinutes();
    feng.style.transform = 'rotatez('+feng2*6+'deg)';
    var shi2 = d.getHours();
    shi.style.transform = 'rotatez('+shi2*30+'deg)';
    console.log(miao2/1000*6);
},1000/60)