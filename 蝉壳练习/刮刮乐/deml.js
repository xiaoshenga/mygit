var Mycanvas = document.getElementById('canvas');
var ctx = Mycanvas.getContext('2d');
var img = new Image();
var obj = {};
init();
var w = Mycanvas.width;
var h = Mycanvas.height;
//初始化界面
function init() {
    if (Math.random() < 0.1) {      
        img.src = './imgs/1.png';
    } else {
        img.src = './imgs/2.jpeg';
    }
    img.onload = function () {
        Mycanvas.style.backgroundImage = 'url(' + img.src + ')';
        Mycanvas.style.backgroundRepeat = 'no-repeat';
        Mycanvas.style.backgroundPosition = 'center';
        Mycanvas.style.backgroundSize = '100% 100%';
    }
    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 0, 400, 400);
    ctx.globalCompositeOperation = "destination-out";
}
//刮开蒙层
Mycanvas.onmousedown = function (e) {
    ctx.beginPath();
    obj.x = e.clientX - Mycanvas.offsetLeft;
    obj.y = e.clientY - Mycanvas.offsetTop;
    ctx.arc(obj.x, obj.y, 20, 0, Math.PI * 2);
    // ctx.closePath();
    ctx.fill();
    document.onmousemove = function (e) {
        ctx.beginPath();
        var x = e.clientX - Mycanvas.offsetLeft;
        var y = e.clientY - Mycanvas.offsetTop;
        ctx.moveTo(obj.x, obj.y);
        ctx.lineTo(x, y);
        ctx.lineWidth = 40;
        ctx.lineCap = 'round';
        ctx.stroke();
        obj.x = x;
        obj.y = y;
    }
    document.onmouseup = function () {
        document.onmousemove = null;
        clear();
    }
}
var sum = 0;
//清除画布
function clear() {
    var ImagDate = ctx.getImageData(0, 0, w, h);
    var len = ImagDate.data.length;
    for (var i = 0; i < len; i += 4) {
        if (ImagDate.data[i] == 0) {
            sum++;
        }
        if (sum > len * 0.3) {
            ctx.clearRect(0, 0, w, h);
            return;
        }
    }
}
