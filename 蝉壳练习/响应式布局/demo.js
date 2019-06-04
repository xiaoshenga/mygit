var dj = document.getElementsByClassName('dianji')[0],
    ul = document.getElementsByClassName('ul2')[0];
    dj.onclick = function (){
        if(document.getElementsByClassName('aaa')[0]){
            ul.classList.remove('aaa');
        }else{
            ul.classList.add('aaa');
        }
    }