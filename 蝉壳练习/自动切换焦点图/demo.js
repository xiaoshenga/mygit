var left = document.getElementsByClassName('left')[0];
var index = document.getElementsByClassName('left')[0].getElementsByTagName('img');
var index2 = document.getElementsByClassName('right')[0].getElementsByTagName('img');
var logo = document.getElementsByClassName('logo')[0];
var count = 0,
    itmer = null;
for(var i = 0; i<index.length; i++){
    index[i].onmousemove = yidon(i);
    index[i].onmouseout = function(){
        itmer = setInterval(zidong,1000);  
    }
}
//手动切换
function yidon(i){
    return function (){
        clearInterval(itmer);
        for(var j = 0; j<index2.length; j++){
            index2[j].className = '';
        }
        logo.style.top = 80*i+10+'px';
        index2[i].className = 'active';    
    }
}
itmer = setInterval(zidong,1000);
//自动切换
function zidong(){
    count++;
    count %=3;
    for(var j = 0; j<index2.length; j++){
        index2[j].className = '';
    }
    logo.style.top = 80*count+10+'px';
    index2[count].className = 'active';    
}