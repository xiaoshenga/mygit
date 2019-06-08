window.onload = function(){
	search();
	banner();
}
function search(){
	let sera = document.getElementsByClassName('jd_search_box')[0];
	let lb = document.getElementsByClassName('banner')[0];

	const height = lb.offsetWidth;

	window.onscroll = function(){
		let opcity = 0;
		let top = getScrollTop();
		if(top<height){
			opcity = top / height * 0.85;
		}else{
			opcity = 0.85;
		}
		sera.style.background = 'rgba(201,21,35,'+opcity+')';
	}
	function getScrollTop(){  
	    var scrollTop=0;  
	    if(document.documentElement&&document.documentElement.scrollTop){  
	        scrollTop=document.documentElement.scrollTop;  
	    }else if(document.body){  
	        scrollTop=document.body.scrollTop;  
	    }  
	    return scrollTop;  
	}
}
function banner(){

	let ul = document.getElementsByClassName('banner')[0].getElementsByTagName('ul')[0];
	let btn = document.getElementsByClassName('banner')[0].getElementsByTagName('ul')[1].getElementsByTagName('li');
	let li = ul.getElementsByTagName('li');
	let w = document.getElementsByClassName('banner')[0].offsetWidth;

	let NewLi = [...li];
	let Nbtn = [...btn];
	
	function addtransform (mun){
		ul.style.transform = `translateX(${mun}px)`;
		ul.style.webkitTransform = `translateX(${mun}px)`;
	}
	function removetransition(){
		ul.style.transition = 'none';
		ul.style.webkitTransition = 'none';		
	}
	function addtransition(){
		ul.style.transition = 'all .2s';
		ul.style.webkitTransition = 'all .2s';
	}

	// 自动无缝轮播
	let index = 1;
	let itmer = setInterval(zidong,2000);
	//定时器执行的函数
	function zidong(){
		index++;
		addtransition();
		addtransform(-index * w);
	}
	//添加动画过度结束后，触发的事件
	ul.addEventListener('transitionend',function(){
		if(index >=9){
			index = 1;
		}else if(index <= 0){
			index = 8;
		}
		removetransition();
		addtransform(-index * w);
		btnn(index-1);
	})
	// 点击按钮跳转对应图片
	Nbtn.forEach(function(item,inde){
		item.addEventListener('touchstart',function(){
			btnn(inde);
			index = inde+1;
			addtransform(-index * w);
					
		})
	})
	//添加按钮的样式
	function btnn(index){
			for(let i = 0; i< Nbtn.length; i++){
				Nbtn[i].style.background = 'transparent';
			}
			Nbtn[index].style.background = '#fff';
	}

	let x = 0 ;	//触摸开始的坐标
	let Nx = 0;//触摸移动的坐标
	//滑动效果
	ul.addEventListener('touchstart',function(e){
		clearInterval(itmer);
		x = e.targetTouches[0].clientX
	})
	ul.addEventListener('touchmove',function(e){
		Nx  = x - e.targetTouches[0].clientX;
		addtransform(-(index * w + Nx))
	})
	ul.addEventListener('touchend',function(e){
		if(Nx > w/3){//下一张
			index ++;
		}else if(Nx < -(w/3)){	//下一张
			index --;
		}
		addtransition();
		addtransform(-index * w);
		itmer = setInterval(zidong,2000);
		//重置数据
		x = 0;
		Nx = 0;
	})
}