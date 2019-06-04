(function(){
    $('li').on('mousemove',function(e){
        var _this = $(this);    
        var obj = {
            //求出对应方向的数值
            fangxiang: function (e, ele) {
                            var Ow = ele.width();
                                Oh = ele.height();

                            var x =(e.offsetX - Ow/ 2) * (Ow > Oh ? Oh / Ow : 1);
                            var y = (e.offsetY - Oh/ 2) * (Oh > Ow ? Ow / Oh : 1);
                   
                            var d = (Math.round((Math.atan2(y, x) * (180 / Math.PI) + 180) / 90) + 3) % 4;
                            return d;
            },
            move: function(){
                var sd = this.fangxiang(e, _this);  //得到的方向值
                        var Op = $(_this).children('p');
                        console.log(sd);
                        //根据不同的方向设置不同的class
                        switch (sd) {
                            case 1:
                                Op.addClass('inRight');
                                break;
                            case 2:
                                 Op.addClass('inBottom');
                                break;
                            case 3:
                                 Op.addClass('inLeft');
                                break;
                        }
            },
            init : function(){
                    this.move();
            }
        }
        obj.init();
    })
    //鼠标移出让对应的p下去
    $('li').on('mouseout',function(){
        $(this).children('p').removeClass();
    })
    //执行打开页面的动画
    $(window).on('load',function(){
        $('ul').addClass('ul');
    })
}())