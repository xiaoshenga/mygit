var bo = document.getElementsByClassName('bo')[0],
    Ospan = bo.getElementsByTagName('span')[0],
    audio = document.getElementsByTagName('audio')[0],
    st = document.getElementsByClassName('st')[0],
    ed = document.getElementsByClassName('ed')[0],
    bai = document.getElementsByClassName('bai')[0],
    hei = document.getElementsByClassName('hei')[0],
    wrap = document.getElementsByClassName('wrapper')[0],
    jdd = document.getElementsByClassName('jd-box')[0],
    qiu = document.getElementsByClassName('qiu')[0],
    laba = document.getElementsByClassName('zant')[0].getElementsByTagName('span')[0],
    bai2 = document.getElementsByClassName('ying-bai')[0],
    qiu2 = document.getElementsByClassName('radio-box')[0],
    yl = document.getElementsByClassName('laba-ht')[0],
    ying = document.getElementsByClassName('ying')[0],
    img = document.getElementsByClassName('main')[0],
    shang = document.getElementsByClassName('shang')[0],
    xia = document.getElementsByClassName('xia')[0],
    hei2 = document.getElementsByClassName('yellow')[0],
    posters = img.getElementsByTagName('img')[0];

var itmer,
    index = 0,      //播放歌曲的索引
    ImgItme = null; //图片定时器
var num = 0;    //图片旋转的度数
var arr = [['yanyuan.mp3', './imgs/2.jpeg'], ['第二.mp3', './imgs/3.jpg']];
// var ImgArr = ['./imgs/2.jpeg','./imgs/3.jpg']
//初始化播放器
audio.oncanplay = function () {
    st.innerHTML = zh(this.currentTime);
    ed.innerHTML = zh(this.duration);
    yl.innerHTML = parseInt(audio.volume * 100);
    bai.style.width = audio.currentTime / audio.duration * (hei.offsetWidth - 8) + 8 + 'px';
}
//鼠标抬起改变播放状态
bo.onmouseup = function () {
    if (audio.paused) {
        Myplay();
        itmer = setInterval(jd, 200);
    } else {
        Mypaused();
    }

}
//播放
function Myplay() {
    clearInterval(ImgItme);
    audio.play();
    Ospan.className = 'iconfont icon-zanting';
    Imgrotate();

}
//开始播放图片开始旋转
function Imgrotate() {
    ImgItme = setInterval(function () {
        num += 1;
        num %= 360;
        img.style.transform = 'rotate(' + num + 'deg)';
    }, 1000 / 60)
}
//暂停
function Mypaused() {
    audio.pause();
    Ospan.className = 'iconfont icon-play';
    clearInterval(itmer);
    clearInterval(ImgItme);
}
//换算时间
function zh(itme) {
    var feng = parseInt(itme / 60);
    var miao = parseInt(itme % 60);
    return '0' + feng + ':' + miao;
}
//进度条自动增加
function jd() {
    st.innerHTML = zh(audio.currentTime);
    bai.style.width = audio.currentTime / audio.duration * (hei.offsetWidth - 8) + 8 + 'px';
}
//播放结束继续播放
audio.onended = function () {
    clearInterval(itmer);
    index--;
    if (index < 0) {
        index = arr.length - 1;
    }
    itmer = setInterval(jd, 200);
    audio.src = arr[index][0];
    posters.src = arr[index][1];
    Myplay();
    console.log(index);
}
//手动拖动进度条
qiu.onmousedown = function () {
    var cur;
    document.onmousemove = function (e) {
        clearInterval(itmer);
        var My = e.clientX - jdd.getBoundingClientRect().left;
        if (My < 0) {
            My = 0;
        } else if (My > 240) {
            My = 240;
        }
        bai.style.width = My + 8 + 'px';
        cur = My / hei.offsetWidth * audio.duration;
        st.innerHTML = zh(cur);
        console.log('tuo');
    }
    qiu.onmouseup = function () {
        Myplay();
        itmer = setInterval(jd, 200);
        audio.currentTime = cur;
        document.onmousemove = null;
        // bo.onmouseup  = null;  
    }
    document.onmouseup = function () {
        document.onmousemove = null;
    }

}
//手动拖动音量进度条进度条
qiu2.onmousedown = function () {
    var vlo;
    document.onmousemove = function (e) {
        var h = hei2.getBoundingClientRect().top + hei2.offsetHeight - e.clientY;
        if (h < 0) {
            h = 0;
        } else if (h > 110) {
            h = 110;
        }
        bai2.style.height = h + 8 + 'px';
        vlo = h / (hei2.offsetHeight - 8) * 1;
        yl.innerHTML = parseInt(vlo * 100);
    }
    document.onmouseup = function () {
        document.onmousemove = null;
        audio.volume = vlo;

    }
    return false;
}
//点击喇叭让音量进度条显示，隐藏
laba.onclick = function () {
    console.log(hei2.offsetHeight);
    bai2.style.height = audio.volume / 1 * (118 - 8) + 8 + 'px';
    ying.style.display = ying.style.display == 'none' ? 'block' : 'none';

}
//上一首
shang.onclick = function () {
    click(1);
}
//下一首
xia.onclick = function () {
    click(-1);
}
function click(sum) {
    num = 0;
    clearInterval(itmer);
    index += sum;
    if (index < 0) {
        index = arr.length - 1;
    } else if (index > 1) {
        index = 0;
    }
    itmer = setInterval(jd, 200);
    audio.src = arr[index][0];
    posters.src = arr[index][1];
    Myplay();
    console.log(index);
}