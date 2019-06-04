var ul = document.getElementsByClassName('shangou-nav')[0].getElementsByTagName("ul")[0];
    li = ul.getElementsByTagName('li');
    mian = document.getElementsByClassName('shang-main'),
    text = document.getElementsByClassName('shou-box')[0],
    input = text.getElementsByTagName('input')[0];
    btn = document.getElementsByClassName('btn')[0];
    input.onfocus = function(){
        console.log('a');
        input.style.borderColor = 'red';
        btn.style.borderColor = 'red';
    }
    input.onblur = function (){
        input.style.borderColor = '#e0e0e0';
        btn.style.borderColor = '#e0e0e0';
    }
for(var i = 0; i < li.length; i++){
    (function (j){
        li[i].onclick = function (){
            for(var i = 0; i < li.length; i++){
                li[i].className = '';
                mian[i].className = 'shang-main';
            }
            console.log(j);
            li[j].className = 'active';
            mian[j].className = 'shang-main active2';
        }
    }(i))

}
var scroll = document.getElementById("scroll");
window.onscroll = function(){
    var sor = document.documentElement.scrollTop;
    if(sor >= 249){
        scroll.className = "shangou-nav shangou-fiex";
    }else{
        scroll.className = "shangou-nav";
    }
    console.log(sor);
}

