var tabs = document.getElementById("tabs").getElementsByTagName("a");
// console.log(tabs);
var list = document.getElementById("list").getElementsByTagName("div");
// console.log(list);
for(var i = 0; i<tabs.length; i++){
    tabs[i].onmouseover = showlist;
}
//使用临时变量，将长度缓存起来，避免重复获取数组长度，当数组较大时优化效果才会比较明显。

function showlist(){
    for(var i = 0; i<tabs.length; i++){
        if(tabs[i]===this){
            tabs[i].className ="active";
            list[i].className = "active";
        }
        //this
        else{
            tabs[i].className = "";
            list[i].className = "";
        }
    }
}
var img =document.getElementById("img").getElementsByTagName("img");
console.log(img);
var li = document.getElementById("ul").getElementsByTagName("li");
console.log(li);
// console.log(li[i]);
for(var i =0;i<li.length;i++){
    li[i].onmousemove = showlist2;

}
function showlist2(){
    for(var i = 0; i<8; i++){
        if(li[i]==this){
            img[i].className = "show";
        }
        else{
            img[i].className= " ";
        }
    }
}