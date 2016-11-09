$(function(){
	// var cW=document.documentElement.clientWidth;

	// var banner=$('.banner')[0];
	// var bW=banner.offsetWidth
	// banner.style.left=(cW-bW)/2+'px';
		var banner=$(".banner")[0];
	var imgs=$(".banner-pic");
	var back=$(".back-1");
	var left=$(".banner-left")[0];
	var right=$(".banner-right")[0];
	var rec=$(".rectangle-li");
	var rightbanner=$(".right-banner")[0];
	var t=setInterval(move,3000);
	var n=0;
	var next=0;
	var flag=true;
	function move(){
		next=n+1;
		if(next>=imgs.length){
			next=0;
		}
		    animate(imgs[n],{opacity:0},600);
            rec[n].style.background="#211616";
			animate(back[n],{opacity:0},600);
		  animate(imgs[next],{opacity:1},600);
		  rec[next].style.background="#E5004F";
		  animate(back[next],{opacity:1},600);
		 n=next;
	}
	banner.onmouseover=function(){
		clearInterval(t)
		left.style.display="block";
		right.style.display="block";
	}
	banner.onmouseout=function(){
		t=setInterval(move,3000);
		left.style.display="none";
		right.style.display="none";
	}
	rightbanner.onmouseover=function(){
		animate(rightbanner,{left:980},1000)
	}
	rightbanner.onmouseout=function(){
		animate(rightbanner,{left:1000},1000)
	}
	left.onclick=function(){
		next=n-1;
		if(next<0){
			next=imgs.length-1;
		}
		    animate(imgs[n],{opacity:0},600);
            rec[n].style.background="#211616";
			animate(back[n],{opacity:0},600);
		  animate(imgs[next],{opacity:1},600);
		  rec[next].style.background="#E5004F";
		  animate(back[next],{opacity:1},600);
		 n=next;
	}
	right.onclick=function(){
		move();
	}
	for(var i=0;i<rec.length;i++){
		rec[i].index=i;
				rec[i].onmouseover=function(){
			for(var j=0;j<rec.length;j++){
			    
				animate(imgs[j],{opacity:0},600);
	            rec[j].style.background="#211616";
				animate(back[j],{opacity:0},600);
			}
			  animate(imgs[this.index],{opacity:1},600);
			  rec[this.index].style.background="#E5004F";
			  animate(back[this.index],{opacity:1},600);
			  n=this.index;next=this.index
		}
	}
    var picture=$(".things-pic")
    for(var i=0;i<picture.length;i++){
	 	picture[i].index=i;
	 	picture[i].onmouseover=function(){
	 		picture[this.index].style.border="1px solid #000";
	 	}
	 	picture[i].onmouseout=function(){
	 		picture[this.index].style.border="1px solid #eeeeee";
	 	}
	 }
	 	var select=$(".select");
	for(var i=0;i<select.length;i++){
		hover(select[i],function(){
			var selectLis=$(".select-lis",this);
			for(var i=0;i<selectLis.length;i++){
				selectLis[i].style.display="block";
			}
		},function(){
			var selectLis=$(".select-lis",this);
			for(var i=0;i<selectLis.length;i++){
				selectLis[i].style.display="none";
			}
		})
	}
	var lefts=$(".chang");
	var rights=$(".banner-more");
	for(var i=0;i<lefts.length;i++){
		lefts[i].index=i;
		hover(lefts[i],function(){
			that=this;
			for(var i=0;i<rights.length;i++){
				this.style.background='red'
				rights[that.index].style.display="block";
			}
		},function(){
			that=this;
			for(var i=0;i<rights.length;i++){
				rights[that.index].style.display="none";
				this.style.background='#333333'
			}
		})
		that=this;
		hover(rights[i],function(){
			for(var i=0;i<rights.length;i++){
				rights[that.index].style.display="block";
			}
		},function(){
			for(var i=0;i<rights.length;i++){
				rights[that.index].style.display="none";
			}
		})
	}
	 var box=getClass('sellingleft')
  var top=getClass('sellinglefttop')
  var sellinglefttop1=getClass('sellinglefttop1')
  var sellingleftbottomz1=getClass('sellingleftbottomz1')
  for(var i=0;i<sellinglefttop1.length;i++){
    sellinglefttop1[i].index=i;
    sellinglefttop1[i].onclick=function(){
    for(var j=0;j<sellinglefttop1.length;j++){
      sellinglefttop1[j].style.cssText='border-bottom:5px solid #333333';
      }
        this.style.cssText='border-bottom:5px solid #E5004F';

        for(var x=0;x<sellingleftbottomz1.length;x++){
          sellingleftbottomz1[x].style.display='none';
        }
        sellingleftbottomz1[this.index].style.display='block';
       
       }
    }
    var sellingleftbottom1=$(".sellingleftbottom1")


for(var i=0;i<sellingleftbottom1.length;i++){sellingleftbottom1[i].index=i;
  hover(sellingleftbottom1[i],function(){
    var sh=this.offsetHeight
    var sw=this.offsetWidth
    var top1=$(".top1")

    var bottom1=$(".bottom1")
    var left1=$(".left1")
    var right1=$(".right1")
    animate(top1[this.index],{width:sw},500)
    animate(bottom1[this.index],{width:sw},500)
    animate(left1[this.index],{height:sh},500)
    animate(right1[this.index],{height:sh},500)
    top1[this.index].style.height=1+'px'
    bottom1[this.index].style.height=1+'px'
    left1[this.index].style.width=1+'px'
    right1[this.index].style.width=1+'px'
  },function(){
    var top1=$(".top1")
    var right1=$(".right1")
    var bottom1=$(".bottom1")
    var left1=$(".left1")
    animate(top1[this.index],{width:0},500)
    animate(bottom1[this.index],{width:0},500)
    animate(left1[this.index],{height:0},500)
    animate(right1[this.index],{height:0},500)
  })
}
var divmo=$('.divmo');
var divmo1=$('.divmo')[0]
var moleft=$('.moleft');
var moright=$('.moright');
var motop=$('.motop');
var mobottom=$('.mobottom');
var divW=divmo1.offsetWidth;
var divH=divmo1.offsetHeight;

for(var i=0;i<divmo.length;i++){divmo[i].index=i;
	hover(divmo[i],function(){
		animate(moleft[this.index],{height:divH},500)
		animate(moright[this.index],{height:divH},500)
	 	animate(motop[this.index],{width:divW},500)
    	animate(mobottom[this.index],{width:divW},500)

	},function(){
		animate(moleft[this.index],{height:0,},500)
		animate(moright[this.index],{height:0},500)
	 	animate(motop[this.index],{width:0},500)
    	animate(mobottom[this.index],{width:0},500)
	})
}


function aa(){
	var midmov=$('.midmov',left2in[i])
	var midlef=$('.midlef',left2in[i])
	var midrig=$('.midrig',left2in[i])
	var midmov1=midmov[0];
	var midmov2=midmov[1];
	
	var midlef1=midlef[0];
	var midrig1=midrig[0];
	var midcir=$('.midcir',left2in[i])

	midmov2.style.left=390+'px';
	hover(left2in[i],function(){
		animate(midlef1,{left:1},500)
		animate(midrig1,{right:1},500)
	},function(){
		animate(midlef1,{left:-30},500)
		animate(midrig1,{right:-30},500)
	})
	midrig1.onclick=function(){
		animate(midmov1,{left:-390},600);
		animate(midmov2,{left:0},600)
		midcir[1].style.background='red';
		midcir[0].style.background='pink'
	}
	midlef1.onclick=function(){
		animate(midmov1,{left:0},600);
		animate(midmov2,{left:390},600)
		midcir[0].style.background='red';
		midcir[1].style.background='pink'
	}
	midcir[0].onclick=function(){
		animate(midmov1,{left:0},600);
		animate(midmov2,{left:390},600)
		this.style.background='red';
		midcir[1].style.background='pink'
	}
	midcir[1].onclick=function(){
		animate(midmov1,{left:-390},600);
		animate(midmov2,{left:0},600);
		this.style.background='red';
		midcir[0].style.background='pink'
	}

  }
var left2in=$('.lef2in');
for (var i=0;i<left2in.length;i++){
	aa()
}




var gray=$('.grayimg')
for(var i=0;i<gray.length;i++){
	hover(gray[i],function(){
		this.style.opacity=0.8
	},function(){
		this.style.opacity=1
	})
	}
var side_guding=$(".side-guding")[0];
	var best=$(".store")[0].offsetTop;
	var fashiont=$(".lux")
	var side_gddw=$(".side-gddw")
	var gd_pic=$(".side-gd-pic")
	var now;
	var side_two=$(".side-gddw-two")
	var returnTop=$(".returntop")[0]
	for(var i=0;i<fashiont.length;i++){
		fashiont[i].h=fashiont[i].offsetTop

	}
	window.onscroll=function(){
    	var obj=document.body.scrollTop?document.body:document.documentElement;
			var t=obj.scrollTop 			
			if(best<=t){
				side_guding.style.display="block"
			}
			if(best>t){
				side_guding.style.display="none"
			}
			for(var i=0;i<fashiont.length;i++){
		        	if(t>=fashiont[i].h){
		        		for(var j=0;j<side_two.length;j++){
		        			gd_pic[j].style.display="block"
		        			side_two[j].style.display="none"
		        		}
		        		gd_pic[i].style.display="none"
		        		side_two[i].style.display="block"
		        		now=i;
		        		
		        		
		        	}
		    }	
		    for(var i=0;i<side_gddw.length;i++){
		        	side_gddw[i].index=i;
		        	side_gddw[i].onclick=function(){
                        animate(document.documentElement,{scrollTop:fashiont[this.index].h},400)
                        now=this.index;
                        animate(document.body,{scrollTop:fashiont[this.index].h},400)
                        now=this.index;
		        	}		        	
		        	side_gddw[i].onmouseover=function(){
		        		gd_pic[this.index].style.display="none"
		        		side_two[this.index].style.display="block"	        	
		        	}
		        	side_gddw[i].onmouseout=function(){
		        		if(this.index==now ){
		        			return ;
		        		}
		        		gd_pic[this.index].style.display="block"
		        		side_two[this.index].style.display="none"
		        	}
		        	


		        }
		        returnTop.onclick=function(){
		        	animate(document.body,{scrollTop:0},400)
		        	animate(document.documentElement,{scrollTop:0},400)

		        }
			
	}
	var logpart=$('.storeBotRigP2Lef1')
	var shoppart1=$('.storeBotRigP3')[0]
	var shoppart2=$('.storeBotRigP32')[0]
	logpart[0].nomouseover=function(){
		shoppart1.style.display='block'
		shoppart2.style.display='none'
	}
	logpart[0].onmouseout=function(){
		shoppart1.style.display='block'
		shoppart2.style.display='none'
	}

	logpart[1].onmouseover=function(){
		shoppart2.style.display='block'
		shoppart1.style.display='none'
	}
	logpart[1].onmouseout=function(){
		shoppart2.style.display='block'
		shoppart1.style.display='none'
	}

	var luxs=$('.lux')
	

	
function cc(){
	var luxBox=$('.luxBotlef1Par2',luxs[i])[0]

	var outLeftMark=$('.outLeftMark',luxBox)[0]
	var outRightMark=$('.outRightMark',luxBox)[0]
	
	var sjsmo=$('.sjsmo',luxBox)
	var n5=0;
	var next5=0

	outRightMark.onclick=function(){
		next5=n5+1
		
		if (next5==sjsmo.length){
			next5=0
		}
			
		sjsmo[next5].style.left=165+'px'
		animate(sjsmo[n5],{left:-165},1000)
		animate(sjsmo[next5],{left:0},1000)
		n5=next5

	}
	outLeftMark.onclick=function(){
		next5=n5-1
		
		if (next5==-1){
			next5=sjsmo.length-1
		}
			
		sjsmo[next5].style.left=-165+'px'
		animate(sjsmo[n5],{left:165},1000)
		animate(sjsmo[next5],{left:0},1000)
		n5=next5

	}

}
for(var i=0;i<9;i++){cc()}


})