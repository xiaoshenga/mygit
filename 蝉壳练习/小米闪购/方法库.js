//滚动天滚动的距离
function getScrolloffset(){
	if(0&&window.pageXOffset){
		return{
			x:window.pageXOffset,
			y:window.pageYOffset
		}
	}else{
		return{
			x:document.body.scrollLeft+document.documentElement.scrollLeft,
			y:document.body.scrollTop+document.documentElement.scrollTop
		}
	}
}
//获取元素的尺寸
function getStyle(elem,prop){
	if(window.getComputedStyle){
		return window.getComputedStyle(elem,null)[prop];
	}else{
		return elem.currentStyle[prop];
	}
}


//圣杯模式
	function inherit(Target,Origin){
			function F(){}
			F.prototype=Origin.prototype;
			Target.prototype=new F();		
			Target.prototype.constuctor=Target;			
			Target.prototype.uber=Origin.prototype;   //查找继承的父亲
	}


//浅度克隆
	function kelong(Origin,Targin){
		var Targin=Targin||{};
			for(var prop in Origin){
				Targin[prop]=Origin[prop];
			}
			return Targin;
	}
//深度克隆
	function deepClone( origin,target){
		var target = target || {};
		toStr = Object.prototype.toString,
		arrStr = "[object Array]";
		for( var prop in origin){
			if(origin.hasOwnProperty(prop)){
				if(origin[prop] !=="null" && typeof(origin[prop])=="object"){
					if(toStr.call(origin[prop])==arrStr){
						target[prop] = [];
					}else{
						target[prop] = {};
					}
					deepClone(origin[prop],target[prop]);
				}else{
					target[prop] = origin[prop];
				}
			}
		}
		return target;
	}
//返回数据类型
	function type(target){
		obj = {
			"[object Object"] : "object - Object",
			"[object Array"] : "array - Object",
			"[object Number]" : "number - Object",
			"[object String]" : "string - Object",
			"[object Boolean]" : "boolean - Object"
		}
		if (target===null){
			return "null"
		}else if(typeof(target)=="object"){
				var str = Object.prototype.toString.call(target);
				return obj.str;
		}else{
			return typeof(target);
		}
	}

//数组去重
	Array.prototype.unqiue = function () {
		var temp = {},
			arr = [],
			len = this.length;
		for(var i = 0; i < len; i ++){
			if(!temp[this[i]]) {
				temp[this[i]] = "aaa";
				arr.push(this[i]);
			}
		}
		return arr;
	}