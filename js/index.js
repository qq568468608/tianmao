

var fdss=$(".fdss")[0];
		var flag=true;
		var flag2=true;
window.onscroll=function(){
	var tops=document.body.scrollTop || document.documentElement.scrollTop;
	if(tops>=800){
		if(flag2){
            animate(fdss,{top:0},300)
            flag2=false;
            flag=true;
		}
	}else{
		//fdss.style.top=-150+"px"
		if(flag){
			animate(fdss,{top:-150},300)
			flag=false;
			flag2=true;
		}
	}
}




var box=$(".sb-box")
var zhe=$(".zhe")
for(var i=0;i<box.length;i++){
	box[i].index=i;
	box[i].onmouseover=function(){
		zhe[this.index].style.display="block";
	}
	box[i].onmouseout=function(){
		zhe[this.index].style.display="none"
	}
} 





 



var bcdh=$(".bcdh")[0];
var pic=$(".pic");
var lc=$(".lc")
var color=["#dd2727","#f7a945","#19c8a9","#19c8a9","#64c333","#0aa6e8","#ea5f8d","#58b346","#ccc"]
document.onscroll=function(){
	var tops=document.body.scrollTop||document.documentElement.scrollTop;
	if(tops>=800){
		//bcdh.style.display="block"
		animate(bcdh,{display:"block"},500)
	}else{
		//bcdh.style.display="none"
		animate(bcdh,{display:"none"},500)
	}
	for(var i=0;i<pic.length;i++){
		if(pic[i].offsetTop<=tops+100){
			for(var j=0;j<pic.length;j++){
				lc[j].style.background="";
			}
			lc[i].style.background=color[i];
			a=i
		}
	}
}
var obj=document.body.scrollTop?document.body:document.documentElement;
var a;
for(var i=0;i<lc.length;i++){
	lc[i].index=i;
	lc[i].onclick=function(){
		a=this.index;
    //obj.scrollTop=pic[this.index].offsetTop-100
    animate(obj,{scrollTop:pic[this.index].offsetTop-100},200)
	}
	lc[i].onmouseover=function(){
		for(var j=0;j<lc.length;j++){
			if(j!=a){
				lc[j].style.background="#626262"
			}
		}
		lc[this.index].style.background=color[this.index]
	}
	lc[i].onmouseout=function(){
		if(this.index!=a){
			this.style.background="#626262"
		}
	}
}







var banner=$(".midbannerpic1")[0];
var as=banner.getElementsByTagName("a");
var btn=$(".btn");
var num=0;
var bannerbox=$(".bannerbox")[0];
var colorw=["#ff3495","#142155","#e8e8e8","#e8e8e8","#ff731c"];
function move(){
	num++;
	if(num==5){
		num=0
	}
	for (var i = 0; i < as.length; i++) {
		as[i].style.zIndex=-1;
		//as[i].style.opacity=0;
		btn[i].style.background="#a2a2a2"
		bannerbox.style.background="none"

	}
	 	animate(as[num],{zIndex:0},200,Tween.Linear,function(){
  			
  	})
          /*animate(as[num],{opacity:1},200,Tween.Linear,function(){
  		
  	})*/
	 	
	 	btn[num].style.background="white"
	 	bannerbox.style.background=colorw[num];
}
var t=setInterval(move,2000)

banner.onmouseover=function(){
		clearInterval(t);
		
	}

banner.onmouseout=function(){
		t=setInterval(move,2000);
		
	}

for (var i = 0; i < btn.length; i++) {
	btn[i].index=i;
	btn[i].onmouseover=function(){
		for (var j = 0; j < btn.length; j++) {
			btn[j].style.background="#a2a2a2";
			as[j].style.zIndex=-1;
			//as[j].style.opacity=0
		};
		btn[this.index].style.background="white";
		as[this.index].style.zIndex=0;
		//as[this.index].style.opacity=1;
		bannerbox.style.background=colorw[this.index];
		num=this.index
	}
};


var kuai=$(".kuai");
var wdtb=$(".wdtb");
for(var i=0;i<wdtb.length;i++){
	wdtb[i].aa=i;
	wdtb[i].onmouseover=function(){
		kuai[this.aa].style.display="block";
	}
	wdtb[i].onmouseout=function(){
		kuai[this.aa].style.display="none";
	}
} 

var spfllb=$(".spfllb");
var kuai2=$(".kuai2");
for(var i=0;i<spfllb.length;i++){
	spfllb[i].aa=i;
	spfllb[i].onmouseover=function(){
		kuai2[this.aa].style.display="block";
	}
	spfllb[i].onmouseout=function(){
		kuai2[this.aa].style.display="none";
	}
}


var ssk=$(".ssk")[0];
ssk.onfocus=function(){
			if(this.value=="百搭T恤 女神衣橱必备"){
				this.value=""
			}
		};
		ssk.onblur=function(){
			if(this.value==""){
				this.value="百搭T恤 女神衣橱必备"
			}
		}

var fdssk=$(".fdssk")[0];
	
fdssk.onfocus=function(){
			if(this.value=="百搭T恤 女神衣橱必备"){
				this.value=""
			}
		};
fdssk.onblur=function(){
			if(this.value==""){
				this.value="百搭T恤 女神衣橱必备"
			}
		}



var mbarouter=$(".mbar-outer")[0];
var dingwei=$(".dingwei",mbarouter);
var tishi=$(".tishi",mbarouter);
var dingweia=$(".dingweia",mbarouter)[0];
var tishia=$(".tishia",mbarouter)[0];
hover(dingweia,function(){
	tishia.style.opacity=1;
	tishia.style.display="block";
	// animate(tishia,{opacity:1},300);
	animate(tishia,{left:-150},300);
},function(){
	tishia.style.opacity=0;
	tishia.style.display="none";
	// animate(tishia,{opacity:0},300);
	animate(tishia,{left:-200},300);
})
for(var i=0;i<tishi.length;i++){
	dingwei[i].index=i;
	hover(dingwei[i],function(){
		tishi[this.index].style.display="block";
		tishi[this.index].style.opacity=1;
		// animate(tishi[this.index],{opacity:1},300);
		animate(tishi[this.index],{left:-90},300)
	},function(){
		tishi[this.index].style.display="none";
		tishi[this.index].style.opacity=0;
		// animate(tishi[this.index],{opacity:0},300);
		animate(tishi[this.index],{left:-140},300)
	})
}