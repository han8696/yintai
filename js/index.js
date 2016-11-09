$(function(){
  //wechat
  //JS
 /* var wechat=$(".wechat");
	var tanchuchat=$(".tanchuchat");
  var wechetCnoe=$(".wechetCnoe")
	for(var i=0;i<wechat.length;i++){
	   wechat[i].index=i;
	   wechat[i].onmouseover=function(){
	          tanchuchat[this.index].style.display="block";
            wechetCnoe[this.index].style.display="block";
	   }
	   wechat[i].onmouseout=function(){
	          tanchuchat[this.index].style.display="none";
            wechetCnoe[this.index].style.display="none";
	   }
	}*/
  //JQ
  $(".wechat").mouseover(function(){
    var index=$(this).index();
    $(".tanchuchat").css("display","none").eq(index-2).css("display","block");
    $(".wechetCnoe").css("display","none").eq(index-2).css("display","block");
  }).mouseout(function(){
    $(".tanchuchat").css("display","none");
    $(".wechetCnoe").css("display","none");
  })
   //wechat
 //iphone
  //  JS  
	/*var iphone=$(".iphone");
	var shaoma=$(".shaoma");
  var iphonecone=$(".iphonecone");
	for(var i=0;i<iphone.length;i++){
	   iphone[i].index=i;
	   iphone[i].onmouseover=function(){
	          shaoma[this.index].style.display="block";
            shaoma[this.index].style.zIndex=500;
            iphonecone[this.index].style.display="block";
            iphonecone[this.index].style.zIndex=600;
	   }
	   iphone[i].onmouseout=function(){
	          shaoma[this.index].style.display="none";
            iphonecone[this.index].style.display="none";
	   }
	}*/
  //JQ
  $(".iphone").mouseover(function(){
    var index=$(this).index();
    $(".shaoma").css("display","none").eq(index-4).css({"display":"block",zIndex:500});
    $(".iphonecone").css("display","none").eq(index-4).css({"display":"block",zIndex:600});
  }).mouseout(function(){
    $(".shaoma").css("display","none");
    $(".iphonecone").css("display","none");
  })
//my_yintai
  //JS  
 /* var my_yintai=$(".my-yintai");
  var one=$(".one");
  var MYcone=$(".MYcone");
  for(var i=0;i<my_yintai.length;i++){
     my_yintai[i].index=i;
    my_yintai[i].onmouseover=function(){
            one[this.index].style.display="block";
            one[this.index].style.zIndex=500;
            MYcone[this.index].style.display="block";
            MYcone[this.index].style.zIndex=600;
     }
     my_yintai[i].onmouseout=function(){
            one[this.index].style.display="none";
            MYcone[this.index].style.display="none";
     }
  }*/
   //JQ
      //method1
  /*$(".my-yintai").mouseover(function(){
    var index=$(this).index();
    console.log(index)
    $(".one").css("display","none").eq(index-6).css({"display":"block",zIndex:500});
    $(".MYcone").css("display","none").eq(index-6).css({"display":"block",zIndex:600});
  }).mouseout(function(){
    $(".one").css("display","none");
    $(".MYcone").css("display","none");
  })*/
     //method2
    $(".my-yintai").hover(
       function(){
	    var index=$(this).index();
	    $(".one").css("display","none").eq(index-6).css({"display":"block",zIndex:500});
	    $(".MYcone").css("display","none").eq(index-6).css({"display":"block",zIndex:600});
  },
       function(){
	    $(".one").css("display","none");
	    $(".MYcone").css("display","none");
  }
    	);
//bannerleft
  //JS
 /* var bannerleft1=$(".bannerleft1");
  var xuanxiangka=$(".xuanxiangka");
  for(var i=0;i<bannerleft1.length;i++){
     bannerleft1[i].index=i;
     bannerleft1[i].onmouseover=function(){
         xuanxiangka[this.index].style.display="block";
         
     }
     bannerleft1[i].onmouseout=function(){
         xuanxiangka[this.index].style.display="none";
     }
  }*/
  //JQ
  $(".bannerleft1").mouseover(function(){
    var index=$(this).index();
    $(".xuanxiangka").css("display","none").eq(index).css("display","block");
  }).mouseout(function(){
    $(".xuanxiangka").css("display","none");
  })
//轮播图
  //JS
/*	//选项卡
  var imgs=$("a",$(".imgbox")[0]);	
	var list=$(".circle",$("dianji")[0]);
	var imgbox=$(".imgbox")[0];
	var btnl=$(".btnl")[0];
	var btnr=$(".btnr")[0];
      imgs[0].style.zIndex=10;
	    list[0].classList.add("hot");  
      var now=0;//记录当前窗口中图片的下标
//点击按钮变图片
     for(var i=0;i<list.length;i++){
     	 list[i].index=i;
     	 list[i].onclick=function(){
     	 	now=this.index;
     	 	for(var i=0;i<imgs.length;i++){
     	 		imgs[i].style.zIndex=5;
     	 		list[i].classList.remove("hot");
          		imgs[i].style.opacity="0.6";
     	 	}
     	 	imgs[this.index].style.zIndex=10;
     	 	list[this.index].classList.add("hot");
        	animate(imgs[this.index],{opacity:1},1000)
     	 }
     }

//左右按钮
banner.onmouseover=function(){
      btnl.style.display="block";
      btnr.style.display="block";
   }
   banner.onmouseout=function(){
      btnl.style.display="none";
      btnr.style.display="none";
   }
btnr.onclick=function(){
	  now++;
	  if(now>=imgs.length){
	  	now=0;
	  }
	for(var i=0;i<imgs.length;i++){
     	  imgs[i].style.zIndex=5;
     	 	list[i].classList.remove("hot");
        imgs[i].style.opacity="0.6";
     	}
     	 	imgs[now].style.zIndex=10;
     	 	list[now].classList.add("hot");
        animate(imgs[now],{opacity:1},1000)
}

btnl.onclick=function(){
	  now--;
	  if(now<0){
	  	now=imgs.length-1;
	  }
	for(var i=0;i<imgs.length;i++){
     	 imgs[i].style.zIndex=5;
      list[i].classList.remove("hot");
      imgs[i].style.opacity="0.6";
     	}
     	 	imgs[now].style.zIndex=10;
     	 	list[now].classList.add("hot");
         animate(imgs[now],{opacity:1},1000)
}*/
  //JQ
    $("a:eq(0)",$(".imgbox")[0]).css("zIndex",10)
	$(".circle:eq(0)",$("dianji")[0]).addClass("hot"); 
    $(".circle",$("dianji")[0]).click(
         function(){
            var index=$(this).index();
         	$("a",$(".imgbox")[0]).css("zIndex",5).animate({opacity:0.6},1000).eq(index).css({zIndex:10}).animate({opacity:1},1000);
            $(".circle",$("dianji")[0]).removeClass("hot").eq(index).addClass("hot");
         }
    	);
    $(".imgbox",$("#banner")).hover(
    	function(){
    		$(".btnl:first").css("display","block");
    		$(".btnr:first").css("display","block");
    	},
        function(){
    		$(".btnl:first").css("display","none");
    		$(".btnr:first").css("display","none");
    	}
    	)
    var now=0;
    var next=0;
    $(".btnr:first").click(function(){
         next=now+1;
         if(next>=$("a",$(".imgbox")[0]).length){
           next=0;
         }
         $("a",$(".imgbox")[0]).animate({opacity:0.6},1000).css({zIndex:5}).eq(next).animate({opacity:1},1000).css("zIndex",10);
         $(".circle",$("dianji")[0]).removeClass("hot").eq(next).addClass("hot");
         now=next;
    })
     $(".btnl:first").click(function(){
         next=now-1;
         if(next<0){
           next=$("a",$(".imgbox")[0]).length-1;
         }
         $("a",$(".imgbox")[0]).animate({opacity:0.6},1000).css({zIndex:5}).eq(next).animate({opacity:1},1000).css({zIndex:10});
         $(".circle",$("dianji")[0]).removeClass("hot").eq(next).addClass("hot");
         now=next;
    })
/*brand-content*/
//JS
  /* var  items=$(".two",$(".top")[0]);
   var  middle=$(".middle");
   var jiao=$(".jiao");
   for(var i=0;i<items.length;i++){
   	  items[i].index=i;
   	  items[i].onmouseover=function(){
   	   	 for(var i=0;i<middle.length;i++){
   	   	 	  items[i].style.fontWeight="normal";	
            items[i].style.borderBottom="5px solid #333";
            middle[i].style.display="none";
            jiao[i].style.borderBottom="5px solid #333";
   	   	  }
   	        items[this.index].style.fontWeight="bold";
   	   	    items[this.index].style.borderBottom="5px solid #e70050";
   	        middle[this.index].style.display="block";
            jiao[this.index].style.borderBottom="5px solid #e70050";
   	  }
   	   
   }*/
//JQ   blod在JQ中不能用
 
     $(".top>a").mouseover(function(){
        var index=$(this).index();
        $(".middle").css("display","none").eq(index).css("display","block");
        $(".top>a>.two").css({fontWeight:"normal","borderBottom":"5px solid #333"}).eq(index).css({fontWeight:"700","borderBottom":"5px solid #e70050"});
        $(".jiao").css("border-bottom","5px solid #333").eq(index).css("border-bottom","5px solid #e70050");
  })

/*brand-content*/
/*银泰百货专柜同款*/
  /* var xuan102=$(".xuan102");
   var liutu=$(".liutu");
   var Xfirst_two=$(".Xfirst-two")[0];
   var twojiao=$(".twojiao");
   for(var i=0;i<xuan102.length;i++){
       xuan102[i].index=i;
       xuan102[i].onmouseover=function(){
        for(var i=0;i<liutu.length;i++){
         liutu[i].style.display="none";
         xuan102[i].style.fontWeight="normal";
         xuan102[i].style.borderBottom="3px solid #333";
        twojiao[i].style.borderBottom="4px solid #333";
        }
         liutu[this.index].style.display="block";
         xuan102[this.index].style.fontWeight="bold";
         xuan102[this.index].style.borderBottom="3px solid #e70050";
         twojiao[this.index].style.borderBottom="4px solid #e70050";
       }
   }*/
   $(".xuan102").mouseover(function(){
        var index=$(this).index();
         $(".liutu").css("display","none").eq(index).css("display","block");
        $(".xuan102").css({"fontWeight":"normal","borderBottom":"3px solid #333"}).eq(index).css({"fontWeight":"700","borderBottom":"3px solid #e70050"});
        $(".twojiao").css("border-bottom","4px solid #333").eq(index).css("border-bottom","4px solid #e70050");
  })
/*银泰百货专柜同款*/
/*时尚名品*/
 //img:图片集合
 //btnl2，btnr2：左右按钮
 //circle2:按钮集合
 //width:图片宽度
//ninecenter_box:大盒子
//js
  /*var ninecenter=$(".ninecenter")[0];
  var img=$(".img-list-nine",ninecenter);
  var btnl2=$(".btnl2",ninecenter)[0];
  var btnr2=$(".btnr2",ninecenter)[0];
  var circle2=$(".circle2",ninecenter);*/
  //jq
  for(var i=0;i<$(".ninecenter").length;i++){
    var ninecenter=$(".ninecenter").eq(i);
    var img=$(".img-list-nine",ninecenter);
    var btnl2=$(".btnl2:first",ninecenter);
    var btnr2=$(".btnr2:first",ninecenter);
    var circle2=$(".circle2",ninecenter);
    lunbo(img,btnl2,btnr2,circle2,ninecenter);
  }
  function lunbo(img,btnl2,btnr2,circle2,ninecenter){
    //JQ
     var now=0;
     var next=0;
     var flag=true;
     var width=$(".ninecenter-box").eq(0).width();
      ninecenter.hover(function(){
         btnr2.css("display","block");
         btnl2.css("display","block");
      },
        function(){
           btnr2.css("display","none");
           btnl2.css("display","none");
        }
      )
     function move2(){
        next=now+1;
        if(next>=img.length){
          next=0;
        }
        img.eq(next).css("left",width).end().eq(now).animate({"left":-width},500).end().eq(next).animate({"left":0},500,function(){flag=true});
        circle2.css("background","#666").eq(next).css("background","#e5004f");
        now=next;
     }
      btnr2.click(function(){
        if(flag){
          move2();
        }
        flag=false;
      })
      btnl2.click(function(){
        if(flag){
          next=now-1;
        if(next<0){
          next=img.length-1;
        }
        img.eq(next).css("left",-width).end().eq(now).animate({"left":width},500).end().eq(next).animate({"left":0},500,function(){flag=true});
        circle2.css("background","#666").eq(next).css("background","#e5004f");
        now=next;
        }
        flag=false;
      })
      circle2.click(function(){
        var index=$(this).index();
        if(now<index){
             img.eq(index).css("left",width).end().eq(now).animate({"left":-width},500).end().eq(index).animate({"left":0},500);
             circle2.css("background","#666").eq(index).css("background","#e5004f");
        }else if(now>index){
             img.eq(index).css("left",-width).end().eq(now).animate({"left":width},500).end().eq(index).animate({"left":0},500);
             circle2.css("background","#666").eq(index).css("background","#e5004f");
        }
        now=index;
      })
    //JS
 /* var width=parseInt(getStyle($(".ninecenter-box")[0],"width"));
  var now=0;
  var next=0;
  var flag=true;
     function move2(){
      next=now+1;
       if(next>=img.length){
           next=0;
      }
      img[next].style.left=width+"px";
      animate(img[now],{left:-width},500)
      animate(img[next],{left:0},500,function(){
        flag=true;
      })
      for(var i=0;i<circle2.length;i++){
        circle2[i].style.background="#666";
      }
      circle2[next].style.background="#e5004f"; 
      now=next;      
    }
    function movel2(){
      next=now-1;
      if(next<0){
         next=img.length-1;
    }
    img[next].style.left=-width+"px";
      animate(img[now],{left:width},500)
      animate(img[next],{left:0},500,function(){
        flag=true;
      })
      for(var i=0;i<circle2.length;i++){
        circle2[i].style.background="#666";
      }
      circle2[next].style.background="#e5004f";
      now=next;       
    }
    ninecenter.onmouseover=function(){
           btnr2.style.display="block";
           btnl2.style.display="block";
    }
     ninecenter.onmouseout=function(){
           btnr2.style.display="none";
           btnl2.style.display="none";
    }
    btnr2.onclick=function(){
       if(flag){
        move2()
       }
       flag=false;
    }
    btnl2.onclick=function(){
      if(flag){
        movel2()
       }
       flag=false;
    }*/
  }
    //原点按钮点击
 /* for(var i=0;i<circle2.length;i++){
    var width=parseInt(getStyle($(".ninecenter-box")[0],"width"));
      circle2[i].index=i;
      circle2[i].onclick=function(){
        if(this.index>now){
          img[this.index].style.left=width+"px";
            animate(img[now],{left:-width},500);
            animate(img[this.index],{left:0},500);
            for(var i=0;i<circle2.length;i++){
          circle2[i].style.background="#666";
        }
           circle2[this.index].style.background="#e5004f";
         now=this.index;
         next=this.index;
       }else if(this.index<now){
          img[this.index].style.left=-width+"px";
            animate(img[now],{left:width},500);
            animate(img[this.index],{left:0},500);
            for(var i=0;i<circle2.length;i++){
          circle2[i].style.background="#666";
        }
           circle2[this.index].style.background="#e5004f";
         now=this.index;
         next=this.index;
     }
     }
  }*/
/*时尚名品*/
/*楼层跳转*/
//js
/*var listT=$(".floor-list");
var floorNine=$(".floorNine");
var gundong=$(".gundong")[0];
var imgL=$("img",gundong);
var floorFirst=floorNine[0].offsetTop;
var now=0;
var cHeight=document.documentElement.clientHeight;//获取浏览器高度
 for(var i=0;i<floorNine.length;i++){
         floorNine[i].h=floorNine[i].offsetTop;
 }
 window.onscroll=function(){
   var top=document.body.scrollTop?document.body.scrollTop:document.documentElement.scrollTop;
   if(top>floorFirst-400){
        gundong.style.display="block";
        var Height=gundong.offsetHeight;
        gundong.style.top=(cHeight-Height)/2+"px";
   }
   if(top<floorFirst-400){
    gundong.style.display="none";
   }
   for(var i=0;i<floorNine.length;i++){
      if(top>floorNine[i].h-400){
        for(var j=0;j<imgL.length;j++){
            imgL[j].style.opacity=1;
        }
          imgL[i].style.opacity=0;
         now=i;
      }
   }
   for(var i=0;i<listT.length;i++){
        listT[i].index=i;
        listT[i].onmouseover=function(){
            imgL[this.index].style.opacity=0;
        }
         listT[i].onmouseout=function(){
            imgL[this.index].style.opacity=1;
        }
   }
 }*/
 //jq
     var floorFirst=$(".floorNine").eq(0).offset().top;
    $(window).scroll(function(){
      var top=$(document).scrollTop();
      if(top>floorFirst-400){
          $(".gundong").eq(0).css({"display":"block"});
         
      }else if(top<floorFirst-400){
          $(".gundong").eq(0).css("display","none");
          
      }
      for(var i=0;i<$(".floorNine").length;i++){
         if(top>$(".floorNine").eq(i).offset().top-400){
            $("img",$(".gundong").eq(0)).css("opacity",1).eq(i).css("opacity",0);
         }
      }
    })
       $(".floor-list").hover(function(){
         var index=$(this).index();
            $("img",$(".gundong")).css("opacity",1).eq(index).css("opacity",0);
       })
    
/*楼层跳转*/
// /*精品男装*/
//   var ninecenter_f3=$(".ninecenter")[2];
//   var img_f3=$(".img-list-nine",ninecenter_f3);
//   var btnl2_f3=$(".btnl2",ninecenter_f3)[0];
//   var btnr2_f3=$(".btnr2",ninecenter_f3)[0];
//   var circle2_f3=$(".circle2",ninecenter_f3);
//   lunbo(img_f3,btnl2_f3,btnr2_f3,circle2_f3,ninecenter_f3);
//   /*精品男装*/
//   /*时尚鞋靴*/
//   var ninecenter_f4=$(".ninecenter")[3];
//   var img_f4=$(".img-list-nine",ninecenter_f4);
//   var btnl2_f4=$(".btnl2",ninecenter_f4)[0];
//   var btnr2_f4=$(".btnr2",ninecenter_f4)[0];
//   var circle2_f4=$(".circle2",ninecenter_f4);
  
//   lunbo(img_f4,btnl2_f4,btnr2_f4,circle2_f4,ninecenter_f4);
//     /*时尚鞋靴*/
//      /*美容护肤*/
//   var ninecenter_f6=$(".ninecenter")[5];
//   var img_f6=$(".img-list-nine",ninecenter_f6);
//   var btnl2_f6=$(".btnl2",ninecenter_f6)[0];
//   var btnr2_f6=$(".btnr2",ninecenter_f6)[0];
//   var circle2_f6=$(".circle2",ninecenter_f6);
  
//   lunbo(img_f6,btnl2_f6,btnr2_f6,circle2_f6,ninecenter_f6);
//     /*美容护肤*/
//       /*运动户外*/
//   var ninecenter_f7=$(".ninecenter")[6];
//   var img_f7=$(".img-list-nine",ninecenter_f7);
//   var btnl2_f7=$(".btnl2",ninecenter_f7)[0];
//   var btnr2_f7=$(".btnr2",ninecenter_f7)[0];
//   var circle2_f7=$(".circle2",ninecenter_f7);
  
//   lunbo(img_f7,btnl2_f7,btnr2_f7,circle2_f7,ninecenter_f7);
//     /*运动户外*/
//         /*内衣配饰*/
//   var ninecenter_f8=$(".ninecenter")[7];
//   var img_f8=$(".img-list-nine",ninecenter_f8);
//   var btnl2_f8=$(".btnl2",ninecenter_f8)[0];
//   var btnr2_f8=$(".btnr2",ninecenter_f8)[0];
//   var circle2_f8=$(".circle2",ninecenter_f8);
  
//   lunbo(img_f8,btnl2_f8,btnr2_f8,circle2_f8,ninecenter_f8);
//     /*内衣配饰*/
    /*small-lunbo*/
    //JS
    /*for(var i=0;i<$(".xia").length;i++){
      var xia=$(".xia")[i];
      var small_btnl=$(".small-btnl")[i];
      var small_btnr=$(".small-btnr")[i];
      var imgbox_F=$(".imgbox_F")[i];
      var imgone=$(".inbox");
     nodeLunbo(xia,small_btnl,small_btnr,imgbox_F,imgone)
    }
    function nodeLunbo(obj,left,right,imgBox,imgone){
    var lunbo=obj;
    var left=left;
    var right=right;
    var imgBox=imgBox;
    var width=parseInt(getStyle(imgone[0],"width"));
    var n=1;
    var flag=true;
    function move(){
      animate(imgBox,{left:-width*n},600,function(){
        for(var i=1;i<n;i++){
          var imgFirst=getFirst(imgBox);
          imgBox.appendChild(imgFirst);
        }
        imgBox.style.left="0px";
        flag=true;
       }   
      );
    }
    left.onclick=function(){
      if(flag){
        for(var i=1;i<=n;i++){
        var last=getLast(imgBox);
        var First=getFirst(imgBox);
        imgBox.insertBefore(last,First);
      }
      imgBox.style.left=-width*n+"px";
      animate(imgBox,{left:0},600,function(){
        flag=true;
      })
      }
       flag=false;
    }
    right.onclick=function(){
      if(flag){
          move();
      }
        flag=false;
    }
  }*/
  //JQ
   for(var i=0;i< $(".imgbox_F").length;i++){
      var small_btnl=$(".small-btnl").eq(i);
      var small_btnr=$(".small-btnr").eq(i);
      var imgbox_F=$(".imgbox_F").eq(i);
      var imgone=$(".inbox",imgbox_F);
     nodeLunbo(small_btnl,small_btnr,imgbox_F,imgone)
    }
  function nodeLunbo(small_btnl,small_btnr,imgBox,imgone){
    var width2=imgone.eq(0).width();
    var flag=true;
    function move2 () {
      imgBox.animate({left:-width2},600,function(){
            imgBox.append(imgone.eq(0)).css("left",0);
          flag=true;
      })
    }
     function movel2 () {
       if(flag){
          $(".inbox:last").insertBefore($(".inbox:first"));
              imgBox.css("left",-width2).animate({"left":0},600,function(){
           flag=true;
        })
       }
            flag=false;
    }
      $(".small-btnr").click(function(){
       if(flag){
       move2();
     }
     flag=false;
    })
    $(".small-btnl").click(function(){
       movel2();
    })
  };
  //边框变化
  //bordertent 
    //js
   /*var tu1=$(".tu1");
   for(var i=0;i<tu1.length;i++){
       var AF1=$(".tu1")[i];
       var Atop1=$(".brandMtop")[i];
       var Aleft1=$(".brandMleft")[i];
       var Aright1=$(".brandMright")[i];
       var Abottom1=$(".brandMbottom")[i];
       borderA(AF1,Atop1,Aleft1,Aright1,Abottom1);
   }
   
  function borderA(borderimg,borderTop,borderLeft,borderRight,borderBottom){
   borderimg.onmouseover=function(){
        animate(borderTop,{width:220},300)
        animate(borderLeft,{height:260},300)
        animate(borderBottom,{left:0},300)
        animate(borderRight,{top:0},300)
   }
   borderimg.onmouseout=function(){
        animate(borderTop,{width:0},500)
        animate(borderLeft,{height:0},500)
        animate(borderBottom,{left:220},500)
        animate(borderRight,{top:260},500)
   }
  };  */
   //JQ
   for(var i=0;i<$(".tu1").length;i++){
       var AF1=$(".tu1").eq(i);
       var Atop1=$(".brandMtop").eq(i);
       var Aleft1=$(".brandMleft").eq(i);
       var Aright1=$(".brandMright").eq(i);
       var Abottom1=$(".brandMbottom").eq(i);
       borderA(AF1,Atop1,Aleft1,Aright1,Abottom1);
   }
       function borderA(borderimg,borderTop,borderLeft,borderRight,borderBottom){
            borderimg.hover(function(){
              borderTop.animate({width:220},300);
              borderLeft.animate({height:260},300);
              borderBottom.animate({left:0},300);
              borderRight.animate({top:0},300);
            },
            function(){
              borderTop.animate({width:0},500);
              borderLeft.animate({height:0},500);
              borderBottom.animate({left:220},500);
              borderRight.animate({top:260},500);
            })
           }
    //border8 边框变化
   function borderB(borderimg,borderTop,borderLeft,borderRight,borderBottom){
   borderimg.onmouseover=function(){
        animate(borderTop,{width:198},300)
        animate(borderLeft,{height:248},300)
        animate(borderBottom,{left:0},300)
        animate(borderRight,{top:0},300)
   }
   borderimg.onmouseout=function(){
        animate(borderTop,{width:0},500)
        animate(borderLeft,{height:0},500)
        animate(borderBottom,{left:198},500)
        animate(borderRight,{top:248},500)
   }
  };  
  var BorderF1=$(".Border8");
   for(var i=0;i<BorderF1.length;i++){
       var BF1=$(".Border8")[i];
       var Btop1=$(".top8")[i];
       var Bleft1=$(".left8")[i];
       var Bright1=$(".right8")[i];
       var Bbottom1=$(".bottom8")[i];
       borderB(BF1,Btop1,Bleft1,Bright1,Bbottom1);
   }
 //border8 边框变化

   function borderC(borderimg,borderTop,borderLeft,borderRight,borderBottom){
   borderimg.onmouseover=function(){
        animate(borderTop,{width:270},300)
        animate(borderLeft,{height:180},300)
        animate(borderBottom,{left:0},300)
        animate(borderRight,{top:0},300)
   }
   borderimg.onmouseout=function(){
        animate(borderTop,{width:0},500)
        animate(borderLeft,{height:0},500)
        animate(borderBottom,{left:270},500)
        animate(borderRight,{top:180},500)
   }
 }
   var cc=$(".borderimg");
   for(var i=0;i<cc.length;i++){
       var cF1=$(".borderimg")[i];
       var ctop1=$(".borderTop")[i];
       var cleft1=$(".borderLeft")[i];
       var cright1=$(".borderRight")[i];
       var cbottom1=$(".borderBottom")[i];
       borderC(cF1,ctop1,cleft1,cright1,cbottom1);
   }
 
  //lazy图片加载
  $("img.lazy").lazyload({
    // event:"sporty",
    effect:"fadeIn"
    // threshold:1000
  })
});
  // $(window).bind("load",function(){
  //   var timeout=setTimeout(function(){$("img.lazy").trigger("sporty")},5000)
  // })

   