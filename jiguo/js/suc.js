(function(){
    //选项卡切换
   var span = $('.new span');
   span.on('click',function(){
    var index = $(this).index();
        span.eq(index).addClass('active').siblings().removeClass('active');
       $('main .box').eq(index).addClass('active').siblings().removeClass('active');
   })
   

   //滚动条滚动到一定位置发送请求
   var arr = [0,0,0]    //  对应选项卡发送请求的数据的索引
   $(window).scroll(function(){
       var num = $('main .active').index();
       var url = null;  //发送请求的url
       //设置对应选项卡请求jsop的url
       switch (num) {
           case 0:
               url = './json/data.js';
               break;
           case 1:
               url = './json/js.js';
               break;
           case 2:
               url = './json/sq.js';
               break;
           case 3:
               url = './json/sy.js';
               break;
        }
       var bo = $('body').height(); 
       var win =$(window).height();
       var foo = $('footer').innerHeight(); //底部部分的高度
       if($(window).scrollTop()  >= bo - win -foo){
            $.ajax({
                type: 'get',
                url: url,
                dataType: 'json',
                success: function(data){
                    if(arr[num] >= data.length) return;     
                    var str = '';
                    data[arr[num]].forEach(function(ele,index){
                        str += '<li>\
                            <img src = "'+ ele.img +'" width = "220" height = "130" alt = "" >\
                                <div class="info">\
                                    <p class="name">'+ ele.text +'</p>\
                                    <p class="fiex">\
                                        <span class="left">'+ ele.price+'</span>\
                                        <div class="right">\
                                            <span class="one">1</span>\
                                            <span class="two">1</span>\
                                        </div>\
                                    </p>\
                                </div>\
                                  </li > ';
                    })
                    $('main .active ul').append(str);
                    arr[num]++;
                    //判断数据的临界值
                    if(arr[num] >= data.length){
                        $('.playtMore').html('<span>没有跟多啦！！</span>')
                    }
                }
            })
       }
       
   })

}())