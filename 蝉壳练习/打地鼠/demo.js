var cui = document.getElementsByClassName('cui')[0];
var wrap = document.getElementsByClassName('wrapper')[0];
var img = document.getElementsByTagName('img');
var x,
    y;
    document.onmousemove = function(e){
       
         x = e.clientX-cui.offsetWidth/2;
         y = e.clientY-cui.offsetHeight/2;
        if(x>wrap.offsetWidth-cui.offsetWidth){
            x = wrap.offsetWidth-cui.offsetWidth;
        }else if(x<0){
            x = 0;
        }
        if(y>wrap.offsetHeight-cui.offsetHeight){
            y = wrap.offsetHeight-cui.offsetHeight;
        }else if(y<0){
            y = 0;
        }
        // console.log(x+','+y);
        cui.style.top = y+'px';
        cui.style.left = x+'px';
        
    } 
wrap.onmousemove = function(e){
    this.onmousedown= function(){
        cui.src = 'imgs/hammer2.png';    
    }
    this.onmouseup = function(){
        cui.src = 'imgs/hammer1.png';
    }
}
itme = setInterval(bolck,2000);
function bolck(){
    // for(var i = 0; i< img.length; i++){
    //     img[i].className= '';
    // }
    var ran = Math.floor(Math.random()*9);
    img[ran].className = 'active';
    
}
wrap.onclick = function (e){
    var x = e.clientX,
         y = e.clientY;
         console.log(e.target);

}