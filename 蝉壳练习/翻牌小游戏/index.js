for (var i = 0; i < $(".wrapper div").length; i++) {
    $(".wrapper div")
        .eq(i)
        .css("order", parseInt(Math.random() * 10 + 1));
}
var num = 0;      //点击次数
var newData = "";  //第一张图片的索引
var lastData = "";  //第二张图片的索引
var arr = [];   // 被点击图片的索引集合
var key = false;    

$(".wrapper div").on("click", function () {
    if (key) return;
    var index = $(this).index();    
    arr.push(index);        //插入被点击图片的索引
    $(this).addClass("active");    //别点击的图片旋转
    num++;
    if (num > 2) {  //让点击的次数保持在 1~2次
        num = 1;
    }
    if (num == 1) { //第一次的时刻记录让newdata记录该元素的data值
        newData = $(this).data("name");
    }
    if (num == 2) { //第二次的时刻记录让lastdata记录该元素的data值
        key = true; 
        lastData = $(this).data("name");
        game();
    }
});
function game(){
    if (!(newData == lastData)) {   //判断第一次跟第二次记录的data值
        setTimeout(function () {
            for (var j = 0; j < arr.length; j++) {  //翻转回去；
                $(".wrapper div")
                    .eq(arr[j])
                    .removeClass("active");
            }
            arr.length = 0;     //清楚所有的索引，
            key = false;
        }, 1000);
    } else {
        setTimeout(function(){
            key = false;
            arr.length = 0;
        },1000)
    }
}