var wrap = document.getElementsByClassName('wrapper')[0];
    cui = document.getElementsByClassName('cui')[0];
var  speed  = 15;
var chengji = 0;
wrap.onmousedown = function (){
    cui.src = 'imgs/hammer2.png';
}
wrap.onmouseup = function (){
    cui.src = 'imgs/hammer1.png';
}
wrap.onmousemove = function (e){
    var x = e.clientX;
    var y = e.clientY;
    cui.style.top = y+'px';
    cui.style.left = x+'px';
}
var itme;
// var itme = setInterval(zhuan,speed);
var intnd = 102;
var end = 0;
var max = 500;
var min = 0;
//让老鼠出现和消失
function zhuan(){
    if(intnd > end){
        intnd -=4;
    }
    if(intnd <end){
        intnd = end;   
    }
    if(intnd == end){
        if(min < max){
            min +=speed;
        }
        if(min>=max){
            intnd= 102; 
            laoAry[index].src = 'imgs/mouse1.png';
            clearInterval(itme);
            key = 0;
        } 
    }
    laoAry[index].style.top = intnd+'px';
    // console.log(min);
}
var feng = document.getElementsByClassName('feng')[0];
//判断锤子和老鼠的碰撞

var key = 0;
wrap.onclick = function (e){
    var x = e.clientX;
    var y = e.clientY;
    var x1 = laoAry[index].offsetLeft+divArt[index].offsetLeft;
    var x2 = x1+laoAry[index].offsetWidth;
    var y1 = laoAry[index].offsetTop+divArt[index].offsetTop;
    var y2 = y1+laoAry[index].offsetHeight;
    if(x>x1 && x<x2 && y>y1 && y<y2){
       
        laoAry[index].src='imgs/mouse2.png';
        chengji= key==0 ? chengji+=1 : chengji;
        key = 1;
    }
    console.log(chengji);
    feng.innerHTML = chengji+'分';
    // console.log(x+','+y+','+x1+','+y1+','+x2+','+y2);
}

feng.innerHTML = chengji+'分';
var divArt = [];
var laoAry = [] ;

for(var i = 0 ;i < 9; i++){
    divArt[i] = document.getElementsByClassName('lao'+(i+1))[0];
    laoAry[i] = divArt[i].getElementsByTagName('img')[0];
}
var index = 0;
//自动出现老鼠
var itme2= setInterval(function(){
        min = 0;
        index = Math.floor(Math.random()*9);       
        itme = setInterval(zhuan,speed);          
           
    },1000)
//技时
var shi = document.getElementsByClassName('shi')[0];
var shijian = 60;
var itme3 = setInterval(function(){
    shijian--;
    shi.innerHTML = shijian;
    if(shijian<=0){
        shijian= 0
        console.log(22);
    }
    if(shijian ==0){
        clearInterval(itme2);
        shijian=60;
        clearInterval(itme3);
        alert('游戏结束');
    }

    
},100)