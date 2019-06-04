var wra = document.getElementsByClassName('wrapper')[0],
    fei = wra.getElementsByClassName('fei')[0],
    btn = wra.getElementsByClassName('strat')[0];
    var cont = 100;
    btn.onclick = function(){
        wra.style.background = 'url("./image/background_1.png")';
        fei.style.display = 'block';
        btn.style.display = 'none';
        set();
    }


    document.onmousemove = function(e){
        var x = e.clientX - wra.offsetLeft;
        var y = e.clientY - wra.offsetTop -40;
        if(x<0+33){
            x = 33;
        }else if(x>wra.offsetWidth-33){
            x = wra.offsetWidth-33;
        }
        if(y<0){
            y = 0;
        }else if(y>wra.offsetHeight-80){
            y = wra.offsetHeight-80;
        }
            fei.style.left = x +'px';
            fei.style.top = y +'px';
        
    }
    // zidan()
    function zidan(){
        this.zi = document.createElement('div');
        wra.appendChild(this.zi);
        this.top = fei.offsetTop-20;
        this.left = fei.offsetLeft+30;
        this.right = this.left+6;
    }
    function diji(){
        this.di = document.createElement('div');
        wra.appendChild(this.di);
        this.left = parseInt(Math.random()*286);
        this.top = 0;
        this.di.className = 'di';
        this.z = this.left;
        this.s = 0;
        this.y = this.z+this.di.offsetWidth;
        this.x = this.di.offsetHeight;
    }

    function set(){
        var itmer2 = setInterval(function(){
            var z = new zidan();
            z.zi.className = 'zi';
             z.zi.style.left= z.left+'px';
             z.zi.style.top = z.top+'px';   
             console.log(z.right);
          
                var di = new diji();
                // di.di.className = 'di';
                di.di.style.top = di.top + 'px';
                di.di.style.left = di.left + 'px';
                console.log(di.x+','+di.z+','+di.y);
            

             dong(z,di);
             cont++;
        },100);
    }
    
    function dong (d,di){
        
       itmer3 = setInterval(function(){
            d.top-=20;
            d.zi.style.top = d.top+'px';
            
                if(d.top >=di.x && d.left>= di.z && d.right <= di.y){
                    console.log('peng');
                    di.di.style.background = 'url("./image/小飞机爆炸.gif")';
                    setTimeout(function(){
                        di.di.style.display = 'none';
                    },2000)
                }
            

            if(d.top <= 0){
                // wra.removeChild(d.zi);
                d.zi.remove()
                // clearInterval(itmer3);
                console.log( d.top);
                d.top = -120;
            }

            // console.log(d.top+','+d.left+','+d.right);
        },100)
    }
