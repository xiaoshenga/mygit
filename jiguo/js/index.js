$(function () {
    var ul = $('.lunbo ul');
    //上一张
    $('.prev').on('click', function () {
        move();
    })
    //下一张
    $('.next').on('click', function () {
        ul.children().last().prependTo(ul); //把最后一张插入到别的第一张
        ul.css('left', -1000);   //应为把最后一张插入到ul的第一张，当前展示的就变成第二张，所以把left改成-1000，对应到当前第二张的left值
        ul.animate({
            left: 0,
        }, 800, function () {
            ul.stop(true, true);
        });
    })
    // var itmer = setInterval(move, 2000);
    //上一张点击按钮执行的函数
    function move() {
        ul.animate({
            left: -1000,    //left移动
        }, 800, function () {   //动画执行完成狗执行的函数
            ul.append(ul.children().first());    //把第一张插入到ul的最后一张
            ul.css('left', 0);   //应为把第一张插入到最后一张后，当前展示的就变成第一张，所以得把left变成0
            ul.stop(true, true); //取消队列，避免多次点击造成糟糕的用户体验
        })
    }
    //鼠标移入清楚定时器
    ul.on('mouseover',function(){
        console.log('a');
       clearInterval(itmer);
       console.log(itmer);
    })
    //鼠标移出设置定时器
    // ul.on('mouseout',function(){
    //     itmer = setInterval(move,2000);
    // })
    //请求数据
    var index = 0;
    $('.more-btn').on('click', function () {
        $(this).removeClass('jz').addClass('wc');
        var _this = $(this);
        $.ajax({
            type: 'get',
            url: 'https://xiaoshenga.github.io/mygit/jiguo/js/json.js',
            dataType: 'json',
            success: function (data) {
                var str = '';
                data[index].forEach(function (ele, index) {
                    str += ' <li>\
                                <img src="'+ ele.img + '" alt="" width="220" height="130" >\
                                <div class="info">\
                                    <p class="name">'+ ele.text + '</p>\
                                    <p class="fiex">\
                                        <span class="left">'+ ele.price + '</span>\
                                        <div class="right">\
                                            <span class="one">3</span>\
                                            <span class="two">3</span>\
                                        </div>\
                                    </p>\
                                </div>\
                            </li>';
                })
                $('.cool').append(str);
                index++;
                _this.removeClass('wc').addClass('jz');
                if (index == 4) {
                    _this.parent().html('<span>没有更多内容啦！！</span>');
                }
            },
        })
    })
    //按钮插件封装
    $.fn.extend({
        back: function (option) {
            console.log('执行');
            var obj = {
                key: false,     //是否显示按钮
                offset: 'left', //靠左还是靠右
                jianju: 0,  //离中间内容的间距
                width: 1000,    //中间内容的宽度
                speed: 500,      //滚动到的顶部的事件
                num: 100,   //滚动条滚动多少距离按钮出现
            }
            var ops = $.extend(obj, option);    //把传的形参替换到初始化的值
            var $win = $(window);
            var _this = $(this);    //  保存当前点击的指针

            var opr = {          //功能对象
                setPosition: function () {     //求出left值
                    var l;
                    var dw = $win.width();
                    var w = _this.width();
                    if (ops.offset == 'left') {
                        l = (dw - ops.width) / 2 + ops.width + ops.jianju;
                    } else if (ops.offset == 'right') {
                        l = (dw - ops.width) / 2 - w - ops.jianju;
                    }
                    return l;
                },
                click: function () {   //点击事件触发的
                    $('html,body').animate({
                        scrollTop: 0,
                    }, ops.speed)
                },
                init: function () {
                    var l = this.setPosition();
                    if (ops.key) {
                        _this.css({
                            display: 'block',
                        })
                    } else {
                        _this.css({
                            display: 'none',
                        })
                    }
                    _this.css({
                        left: l + 'px',
                    })
                }
            }
            opr.init();
            //窗口滚动条发生变化触发的事件
            $win.scroll(function () {
                ops.key = $(window).scrollTop() > ops.num ? true : false;
                opr.init();
            })
            //窗口大小发生变化触发的事件
            $(window).resize(function () {
                opr.init();

            })
            //滚动条到顶部
            _this.on('click', function () {
                opr.click();
            });
        }
    })
    $('#back').back({
        offset: 'right'
    });

    
    $('header .nav li a').click(function(){
        console.log($(this));
    })
})

