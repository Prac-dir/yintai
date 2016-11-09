// var aa=function(a,b){
// 	var arr=[];        										// 定义标签数组arr//
// 	// var b=(b||document)                                   // 确定父元素//
// 	if(b.getElementsByClassName){                           // 判断浏览器是否兼容getElementsByClassName属性//
// 		return b.getElementsByClassName(a);                 // 兼容则返回正常输出//
// 	}else{                                                  // 不兼容的处理//
// 		var tagArr=document.getElementsByTagName("*")              // 定义一个所有包含当前范围所有标签的类数组tagArr//
// 		for(var i=0;i<tagArr.length;i++){                   // 循环穷举tagArr中的所有标签//
// 			if(tagArr[i].className==a){                     // 如果tagArr中某一个元素标签名==我需要的标签名//
// 				arr.push(tagArr[i])                         // 将这个标签加入开始时定义的arr中的末尾//
// 			}
// 		}
// 	}return arr;                                            // 返回arr数组
// }
// window.onload=function(){ var                                  
// 	alert(aa(box).length)
// }
	
// window.onload=function(){
// 	alert(document.getElementsByClassName('box'))
// }





// function aa(a,b){
// 	var arr=[];
// 	var b=b||document
// 	if(b.getElementsByClassName){
// 		return b.getElementsByClassName
// 	}else{
// 		var tagArr=b.getElementsByTagName("*")
// 		for(var i=0;i<tagArr.length;i++){
// 			if(tagArr[i]==a){
// 				arr.push(tagArr[i])
// 			}
// 		}
       
// 	 }return arr;
// }
// window.onload=function(){
// 	alert(aa(box).length)
// }
// window.onload=function(){
// 	var eve=document.getElementsByClassName('eve')[0]
// 	eve.onclick=function(){
//       console.log('鼠标单击')
// 	}
// 	eve.ondblclick=function(){
// 		console.log('鼠标双击')
// 	}
// 	eve.onmovedown=function(){
// 		console.log('鼠标按下')
// 	}
// 	eve.onmoveup=function(){
// 		console.log('鼠标抬起')
// 	}
// }
// window.onload=function(){
// 	document.onkeydown=function(e){
// 		console.log(e)
// 	}

// }
// window.onload=function(){
// 	var aa=document.getElementsByTagName('select')[0]
// 	console.log(aa.innerHTML）

// }
// function operateInner(a,val){
// 	if(val!="underfined"){
//       if(a.innerText){
// 			 a.innerText=val
// 		}else{
// 		 	a.textContent=val
// 		}
// 	}else{
// 		if(a.innerText){
// 			return a.innerText
// 		}else{
// 			return a.textContent
// 		}
// 	}
// }
// window.onload=function(){var aa=document.getElementsByClassName('div')[0]
// 	operateInner(aa.className,'')}
// window.onload=function(){
//   var a=document.getElementsByClassName('div')[0];
//   var b=a.className
//   a.onclick=function(){
//     a.className=b+" box"
//   }
//   a.onmouseout=function(){
//   	a.className=b
//   }
// document.getElementsByClassName('div')[0];
// // }
// window.onload=function(){
// 	var a=document.getElementsByClassName('div')[0];
// 	a.onmouseover=function(){
// 		a.style.
// 	}
// }
// 
// window.onload=function(){
//  var a=document.getElementsByClassName('top')
//  var g=document.getElementsByClassName('img')
//   for(var i=0;i<a.length;i++){
//      a[i].index=i; 
//      a[i].onmouseover=function(){
//          for(var h=0;h<a.length;h++){
//              a[h].className='top'
//              };this.className='top  active';
                
//          for(var i=0;i<g.length;i++){
//              g[i].className='img '
//              }
//              g[this.index].className='img  imgact';

//      }
//  }
// }



function getClass(classname,obj){
    var obj=obj||document;
    if(obj.getElementsByClassName){
        return obj.getElementsByClassName(classname);
        }else{
            var arr=[];
            var doms=obj.getElementsByTagName("*");
            for(var i=0;i<doms.length;i++){
                if(checkClass(classname,doms[i])){
                    arr.push(doms[i]);
                }
            }
        return arr;
    }
}
function checkClass(classname,obj){
	var classStr=obj.className;
	var classArr=classStr.split(" ");
	for(var i=0;i<classArr.length;i++){
		if(classArr[i]==classname){
            return true;
        }
	}return false;
}

function $(val,obj){
    if(typeof val=="string"){
         var obj=obj||document;
            val.replace(/^\s*|\s*$/g,"");
        if(val.charAt(0)=="#"){
            return document.getElementById(val.slice(1));
        }else if(val.charAt(0)=="."){
            return getClass(val.slice(1),obj)
        }else if(/^[a-zA-Z][a-zA-Z0-9]{0,9}$/.test(val)){
            return obj.getElementsByTagName(val)
        } else if(/^<[a-zA-Z][a-zA-Z0-9]{0,9}>$/.test(val)){
            return createElement(val.slice(1.-1));
        } 
    }else if(typeof val=="function"){
        window.onload=function(){
            val();
        }
    }
  
}
function getStyle(obj,style){
    if(obj.currentStyle){
        return obj.currentStyle[style];
    }else if(getComputedStyle(obj,null)){
        return getComputedStyle(obj,null)[style];
    }
}
function getNext(obj,type){
    var type=type||"no";
    var next=obj.nextSibling;
    if(next===null){
        return false;
    }
    if(type='no'){
        while(next.nodeType=='8'||next.nodeType=='3'){
            next=next.nextSibling;
            if(next.nextSibling===null){
                return false;
            }
        }return next
    }
    if(type='yes'){
        while(next.nodeType=='3'&&!next.nodeValue.replace(/^s*|\s*$/g," ")||next.nodeType=='8'){
            next=next.nextSibling;
            if(next.nextSibling===null){
                return false;
            }
        }return next; 
    }
}

// $(function(){
//     var box=$('.box')[0];
//     var speedX=5;
//     var speedY=10;
//     var left=box.offsetLeft;
//     var top=box.offsetTop;
//     var Cheight=document.documentElement.clientHeight;
//     var Cwidth=document.documentElement.clientWidth;
//     var width=box.offsetWidth;
//     var height=box.offsetHeight;
//     var t=setInterval(function(){
//         left+=speedX;
//         top+=speedY;
//         if(left>Cwidth-width){
//             left=Cwidth-width;
//             speedX*=-1
//         }
//         if(top>Cheight-height){
//             top=Cheight-height;
//             speedY*=-1
//         }if(top<0){
//             top=0;
//             speedY*=-1
//         }if(left<0){
//             left=0;
//             speedX*=-1
//         }

//         box.style.left=left+'px';
//         box.style.top=top+'px';
//     },100)
// })
function getChilds(obj,type){
   var type=type||"no"
   var kids=obj.childNodes;
   var arr=[];
   for(var i=0;i<kids.length;i++){
    if(type=="no"){
        if(kids[i].nodeType=="1"){
            arr.push(kids[i]);
        }
    }else if(type=="yes"){
        if(kids[i].nodeType=="1"||kids[i].nodeType=="3"&&kids[i].nodeValue.replace(/^\s*|\*$/g,"")){
            arr.push(kids[i]);
        }
    }
   }
   return arr;  
}



 function getFirst(obj,type){
    var type=type||"no";
    return getChilds(obj,type)[0];
}

function getLast(obj,type){
    var type=type||"no";
  var childs=getChilds(obj,type);   
    var index=childs.length;
    return childs[index-1]
}
 function getN(obj,n,type){
    var type=type||"no";
  var childs=getChilds(obj,type)[0];
  if(n>childs.length||n<1){
    return false;
  }
        return childs[n-1];
 }

// 获取下一个兄弟节点
function getNext(obj,type){
    var type=type||"no"
    var next=obj.nextSibling;
    if(type==null){
        return false;
    }
    if(type=="no"){
        while(next.nodeType=='3'||next.nodeType=='8'){
            next=next.nextSibling;
            if(next=null){
                return false;
            }
        } 
        return next
    }else if(type=="yes"){
         while(next.nodeType=='3'&&next.nodeValue.replace(/^\s*\s*$/g,"")||next.nodeType=='8'){
            next=next.nextSibling;
            if(next==null){
                return false;
            }
        } 
        return next

    }
}
// 获取上一个兄弟节点
function getPrevious(obj,type){
    var type=type||"no"
    var previous=obj.previousSibling;
    if(type==null){
        return false;
    }
    if(type=="no"){
        while(previous.nodeType=="3"||previous.nodeType=="8"){
            previous=previous.previousSibling;
            if(previous==null){
                return false;
            }
        } 
        return previous
    }else if(type=="yes"){
         while(previous.nodeType==3&&previous.nodeValue.replace(/^\s*|\s*$/g,"")||previous.nodeType==8){
            previous=previous.previousSibling;
            if(previous==null){
                return false;
            }
        } 
        return previous

    }
}

// 插入到某个对象之前
function insertBefore(obj,beforeobj){
     //var parent=beforeobj.parentNode;
     //parent.insertBefore(obj,beforeobj)
     var obj=obj;
     var fu=beforeobj.parentNode;
     fu.insertBefore(obj,beforeobj)   
}
// 插入到某个对象之后
function insertAfter(obj,afterobj){
   var parent=afterobj.parentNode;
   // 要文本选yes，获取下一个兄弟节点
   var next=getNext(afterobj,"yes")
   // 此处的!next=next==false
   if(!next){
     parent.appendChild(obj);
   }else{
     parent.insertBefore(obj,next);
   }
                                                                                                       
}

function addEvent(obj,event,fun){
  if(obj.attachEvent){
    obj.attachEvent('on'+event,fun)
  }else{
    obj.addEventListener(event,fun,false)
  }
}

function delEvent(obj,event,fun){
  if(obj.detachEvent){
    obj.detachEvent('on'+event,fun)
  }else{
    obj.removeEventListener(event,fun,false)
  }
}

function mouseWheel(obj,down,up){
  if(obj.attachEvent){
    obj.attachEvent('onmousewheel',scrollFun)
  }else{
    obj.addEventListener('mousewheel',scrollFun,false)
    obj.addEventListener('DOMMousewheel',scrollFun,false)
  }
  function scrollFun(e){
    var e=e||window.event;
    if(e.parentDefault){
      e.parentDefault
    }else{
      e.returnValue=false;
    }
    var nub=e.wheelDelta||e.detail;
    if(nub==120||nub==-3){
  //改变this指针，指向obj
       up.call(obj);
    }else if(nub==-120||nub==3){
      down.call(obj)
    }
  }
}


//15.hover
//判断某个元素是否包含有另外一个元素
function contains (parent,child) {
    if(parent.contains){
        return parent.contains(child) && parent!=child;
    }else{
        return (parent.compareDocumentPosition(child)===20);
    }
}

//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
function checkHover (e,target) {
    if(getEvent(e).type=="mouseover"){
        return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
            !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
    }else{
        return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
            !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
    }
}
//鼠标移入移出事件
/*
 obj   要操作的对象
 overfun   鼠标移入需要处理的函数
 outfun     鼠标移除需要处理的函数
 */
function hover (obj,overfun,outfun) {
    if(overfun){
        obj.onmouseover=function  (e) {
            if(checkHover(e,obj)){
                overfun.call(obj,[e]);
            }
        }
    }
    if(outfun){
        obj.onmouseout=function  (e) {
            if(checkHover(e,obj)){
                outfun.call(obj,[e]);
            }
        }
    }
}
function getEvent (e) {
    return e||window.event;
}
function ajax(obj){
//初始化所有属性
  var url=obj.url;
  var type=obj.type||"GET";
  var datatype=obj.datatype||"text";
  var success=obj.success;
  var asynch=obj.asynch==undefined? true:obj.asynch; //true为asynch=undefined是输出，不等于输出后面的
  var data="";
  //获取数据
  if(obj.data){
    for(var i in obj.data){
      data+=i+"="+obj.data[i]+"&";
    }
    data=data.slice(0,-1);
  }
  //创建ajax
  var ajax=window.XMLHttpRequest? new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
  //open打开请求get和post不一样
    if(type=="GET"){
      ajax.open("GET",url+"?"+data,asynch);
      ajax.send(null);
    }else if(type=="POST"){
      ajax.open("POST",url,asynch);
      ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
      ajax.send(data);
    }
  //添加监听事件
  ajax.onreadystatechange=function(){
    if(ajax.readyState==4){
      if(ajax.status==200){
        //如果有函数，执行以下
        if(success){
          if(datatype=="text"){
            success(ajax.responseText);
          }else if(datatype=="XML"){
            success(ajax.responseXML);
          }else if(datatype=="json"){
            //将“{}”这种形式通过eval转化成{}，但是得加括号，不然会报错
            success(eval("("+ajax.response+")"));
          }
        }
      }else if(ajax.status==404){
        alert("页面未找到");
      }else{
        alert("页面错误");
      }
    }
  }
}
