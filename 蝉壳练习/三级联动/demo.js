var chen = document.getElementById('chen'),
    shi = document.getElementById('shi'),
    xian = document.getElementById('xian');
Ochen();
Oshi();
Oxian();
//省
function Ochen(){
    var option;
    for(var i = 0;i<provinceList.length;i++){
         option +="<option>"+provinceList[i].name+"</option>"
    }
    chen.innerHTML = option;
}
chen.onchange = Oshi;
//市
function Oshi(){
    shi.options.length = 0;       
    var OAry = provinceList[chen.selectedIndex].cityList;
    console.log(OAry);
        for(var i = 0; i< OAry.length; i++){
          var shisum =new Option(OAry[i].name,OAry[i].name);
            shi.options.add(shisum);
            console.log(OAry[i].name);
        }   
        Oxian();
}
//区
shi.onchange = Oxian;
function Oxian(){
    var xiansum,
        OAry = provinceList[chen.selectedIndex].cityList[shi.selectedIndex].districtList;
        for(var i = 0; i< OAry.length; i++){
            xiansum += "<option>"+OAry[i]+"</option>";
        }
        xian.innerHTML = xiansum;
    }