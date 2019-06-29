var cui = document.getElementsByClassName("cui")[0],
    wra = document.getElementsByClassName("wrapper")[0],
    img = wra.getElementsByTagName('div'),
    feng = document.getElementsByClassName('feng')[0],
    shi = document.getElementsByClassName('shi')[0],
    start = document.getElementsByClassName('start')[0],
    end = document.getElementsByClassName('end')[0];
var ImgAry = [],
    index,
    key = 0;
    shijian = 60,
    fengshu = 0;
var itmer,
    itmer2;
//开始游戏
start.onclick = function(){
    fengshu = 0;
    feng.innerHTML = fengshu +'分';
    shijian = 60;
    chuxian();
    peng()
    console.log(this);
    this.innerHTML = '重新开始'
}
//暂停
end.onclick = function (){
    var ht = end.innerHTML;
    if(ht =='暂停'){
        clearInterval(itmer);
        clearInterval(itmer2);
        end.innerHTML = '继续';
    }else{
        chuxian();
        peng();
        end.innerHTML = '暂停';
    }

}
feng.innerHTML = fengshu + "分";
for(var i = 0; i< img.length; i++){
    ImgAry[i] = img[i].getElementsByTagName('img')[0];
}

cui.onmousedown = function (e){
    cui.src= 'imgs/hammer2.png'
    document.onmouseup = function (){
        cui.src= 'imgs/hammer1.png';
        // document.onmousemove = null;
    }
}
//锤子跟着鼠标进行移动
document.onmousemove = function (e){
    var Cx = e.clientX - cui.offsetWidth/2 - wra.offsetLeft ;
    var Cy = e.clientY - cui.offsetHeight/2 - wra.offsetTop;
    if(Cx <= 0){
        Cx = 0;
    }
    if(Cx >= wra.offsetWidth-cui.offsetWidth){
        Cx = wra.offsetWidth-cui.offsetWidth;
    }
    if(Cy <= 0){
        Cy = 0;
    }
    if(Cy >= wra.offsetHeight-cui.offsetHeight){
        Cy = wra.offsetHeight-cui.offsetHeight;
    }
    cui.style.left = Cx + 'px';
    cui.style.top = Cy + 'px';
}
//老鼠出现
function chuxian(){
    clearInterval(itmer);
    itmer = setInterval(chu,1000);
    function chu () {  
        var ran = parseInt(Math.random()*9);
        index = ran;
        ImgAry[ran].className = 'active';
            setTimeout(function(){
                key = 0;
                ImgAry[ran].className = '';
                ImgAry[ran].src = './imgs/mouse1.png';
            },1000)
    }
}
//碰撞
cui.onclick = function (e){
    // console.log(index);
    var Cx = e.clientX ;
    var Cy = e.clientY ;
    var L = ImgAry[index].getBoundingClientRect().left;
    var R = ImgAry[index].getBoundingClientRect().right;
    var T = ImgAry[index].getBoundingClientRect().top;
    var B = ImgAry[index].getBoundingClientRect().bottom;
    if(Cx > L && Cx < R && Cy > T && Cy < B){
        ImgAry[index].src = './imgs/mouse2.png';
        fengshu = key == 0 ? fengshu+1 : fengshu;
        key = 1;
        feng.innerHTML = fengshu + "分";
        console.log(key);
    }
    // console.log(T+","+R);
    // console.log(Cx+","+Cy);
}
//倒计时
function peng(){
    clearInterval(itmer2);
    itmer2 = setInterval(function(){
        shijian--;
        shi.innerHTML = shijian;
        if(shijian==0){
            clearInterval(itmer2);
            clearInterval(itmer);
            ImgAry[index].className = '';
            setTimeout(function(){
                alert('Game Over!!!')
                start.innerHTML = '再来一局';
            },500)         
        }
    },1000)
}
