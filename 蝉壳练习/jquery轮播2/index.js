var len = $('img').length;  
var center = 0;     //屏幕中间图片的索引值
init();
//初始页面
function init(){
    var zhongjian = parseInt(len/2);        //循环的次数
    for(var i = 0; i < zhongjian; i++){
        var left =center- i - 1;    //左边图片索引
        $('img').eq(left).css({
            transform:'translateX('+ -150 * (i + 1) +'px) translateZ('+ (200 - i * 100) +'px) rotateY(30deg)'
        })
        var right = center + i + 1; //右边图片的索引
        if(right > $('img').length -1){ //判断右边图片的临界值，
            right -= len;
        }
        $('img').eq(right).css({
            transform:'translateX('+ 150 * (i + 1) +'px) translateZ('+ (200 - i * 100) +'px) rotateY(-30deg)'
        })
    }
    $('img').eq(center).css({       //给中间图片设置样式
        transform:'translateZ(' + 300 + 'px)',
    })
}
//给每张图片绑定点击事件
$('img').on('click',function(){
    var index = $(this).index();
    if(!(index == center)){ //判断点击的图片是不是中间图片
        center = index;         
        init();
    }
}).hover(function(){    //鼠标移入
    clearInterval(itmer);
},function(){   //鼠标移开
    itmer = setInterval(move,2000);
})
var itmer = setInterval(move,2000)   
//自动轮播   
function move(){
    center++;
    center = center >= 5 ? 0 : center;
    init();
    console.log(center);}