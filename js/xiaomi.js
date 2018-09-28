   window.onload = function(){
   	//购物车下拉效果
   	let cart = document.querySelector('.cart');
   	let cartList = document.querySelector('.cartList');
   	console.log(cart,cartList);
   	cart.onmouseover = function(){
   		cartList.style.boxShadow = '0 10px 10px 0 rgba(0,0,0,0.2)';
   		cartList.style.height = '100px';
   		cartList.style.background = '#fff';
   		cartList.style.display = 'block';
   		cart.style.color = '#ff6700';
   		cart.style.background = '#fff';
   	}
   	cart.onmouseout = function(){
   		cartList.style.display = 'none';
   		cartList.style.height = '0';
   		cartList.style.boxShadow = '';
   		cart.style.background = '#424242';
   		cart.style.color = '#B0B0B0';
   	}
   	//导航栏下拉效果
   	let xiao = document.querySelectorAll('.navBottomCenter ul .first');
   	let pull = document.querySelectorAll('.navBottomCenter ul .first .pull');
   	let shadow = document.querySelectorAll('.navBottomCenter ul .first .pull');
   	let border = document.querySelectorAll('.navBottomCenter ul .first .pull');
   	console.log(xiao,pull);
   	for(let i= 0;i < xiao.length;i++){
	   	xiao[i].onmouseover = function(){
	   		xiao[i].style.color = '#FF6700';
	   		pull[i].style.height = '232px';
	   		shadow[i].style.boxShadow = '0 3px 3px rgba(0,0,0,0.3)';
	   		border[i].style.borderTop = '1px solid #E0E0E0';
	   	}
	   	xiao[i].onmouseout = function(){
	   		pull[i].style.height = 0;
	   		xiao[i].style.color = '#333333';
	   		shadow[i].style.boxShadow = '';
	   		border[i].style.borderTop = '';
	   	}
   	}
   	//侧拉选项卡
   	let list = document.querySelectorAll('.sortLeft ul li');
   	let leftList = document.querySelectorAll('.sortLeft ul li .kong');
   	console.log(list,leftList);
   	for(let i = 0;i < list.length;i++){
	   	list[i].onmouseover = function(){
	   		for(let j = 0;j < leftList.length;j++){
	   			leftList[j].style.display = 'none';
	   		}
	   		leftList[i].style.display = 'block';
	   	}
	   	list[i].onmouseout = function(){
	   		leftList[i].style.display = 'none';
	   	}
   	}
   	//轮播
   	let imgs = document.querySelectorAll('.sortRight img');
   	let circles = document.querySelectorAll('.sortRight .circle ul li');
   	let sortRight = document.querySelector('.sortRight');
   	let btnl = document.querySelector('.sortRight .left');
   	let btnr = document.querySelector('.sortRight .right');
   	console.log(imgs,circles);
   	imgs[0].style.opacity = 1;
   	circles[0].style.background = '#fff';
   	for(let i = 0;i < circles.length;i++){
   		circles[i].onmouseover = function(){
   			for(let j = 0;j < imgs.length;j++){
   				imgs[j].style.opacity = 0;
   				circles[j].style.background = '#757575';
   			}
   		imgs[i].style.opacity = 1;
   		circles[i].style.background = '#fff';
   		}  		
   	}
   	//自动轮播
   	let num = 0;
   	let t = setInterval(move,1500);
   	function move(){
   		num++;
   		if(num == 5){
   			num = 0;
   		}
   		for(let j = 0;j < imgs.length;j++){
   				imgs[j].style.zIndex = 1;
   				circles[j].style.background = '#757575';
   			}
   		imgs[num].style.zIndex = 2;
   		circles[num].style.background = '#fff';
   	}
   	sortRight.onmouseover = function(){
   		clearInterval(t);
   	}
   	sortRight.onmouseout = function(){
   		t = setInterval(move,1500);
   	}
   	//点击左箭头
   	btnl.onclick = function(){
   		moveL();
   	}
   	function moveL(){
   		num--;
   		if(num < 0){
   			num = 4;
   		}
   		for(let j = 0;j < imgs.length;j++){
   			imgs[j].style.zIndex = 1;
   			circles[j].style.background = '#757575';
   		}
   		imgs[num].style.zIndex = 2;
   		circles[num].style.backgroundColor = '#fff';
   	}
   	//点击右箭头
   	btnr.onclick = function(){
   		move();
   	}
   	//窗口失去焦点暂停时间函数
   	window.onblur = function(){
   		clearInterval(t);
   	}
   	window.onfocus = function(){
   		t=setInterval(move,1500);
   	}
   	//小米闪购
   	let backLeft = document.querySelector('.back .backLeft');
   	let backRight = document.querySelector('.back .backRight');
   	let con = document.querySelector('.shoppingBottom ul');
   	let width = parseInt(getComputedStyle(con,null).width)/3;
   	let Num = 0;
   	console.log(width);
   	backRight.onclick = function(){
   		Num++;
   		if(Num==3){
   			Num = 2;
   			return;
   		}
   		console.log(Num);
   		con.style.transform='translateX('+(-width*Num)+'px)';
   	}
   	backLeft.onclick = function(){
   		Num--;
   		if(Num == -1){
   			Num = 0;
   			return;
   		}
   		console.log(Num);
   		con.style.transform='translateX('+(-width*Num)+'px)';
   	}
   //家电下拉	
   	let buttom0 = document.querySelector('.electricBottom');
   	buttom0.style.display = 'block'; 
   	let word0 = document.querySelector('.electric .right ul .word');
   	word0.style.color = '#FF6700';
   	word0.style.borderBottom = '2px solid #ff6700';
   	let word = document.querySelectorAll('.electric .right ul .word');
   	let buttom = document.querySelectorAll('.electricBottom');
   	console.log(word,buttom);
   	for(let i = 0;i < word.length;i++){
   		word[i].onmouseover = function(){
   			for(let j = 0;j < buttom.length;j++){
   				buttom[i].style.display = 'none';
   				
   			}
   			buttom0.style.display = 'none';
   			word0.style.color = '#333';
   			word0.style.borderBottom = '';
			buttom[i].style.display = 'block';
			buttom[i].style.height = '614px';
			word[i].style.color = '#FF6700';			
			word[i].style.borderBottom = '2px solid #ff6700';
   		}
   		word[i].onmouseout = function(){
   			buttom[i].style.display = 'none';
   			word[i].style.color = '#333';
			word[i].style.borderBottom = '';
			buttom0.style.display = 'block';
			word0.style.color = '#FF6700';
   			word0.style.borderBottom = '2px solid #ff6700';
   		}
   	}
   	//内容点击
// 	//1.获取元素
// 	let oneinfo = document.querySelectorAll('.contentBottom ul li .oneinfo');
// 	let banner = document.querySelector('.contentBottom ul .first-f');
// 	let backleft = document.querySelector('.contentBottom ul li .back .left');
// 	let backright = document.querySelector('.contentBottom ul li .back .right');
// 	let circle = document.querySelectorAll('.circle .dot');
// 	let widths = parseInt(getComputedStyle(banner,null).width);
// 	let now = 0;
// 	let next = 0;
// 	console.log(oneinfo,backleft,backright,circle);
// 	//2.设置初始值
// 	oneinfo[0].style.left = 0;
// 	circle[0].classList.add('active');
// 	//3.鼠标移入移出
// 	for(let i = 0;i < circle.length;i++){
// 		circle[i].onmouseover = function(){
// 			for(let j = 0;j < circle.length;j++){
// 				oneinfo[j].style.left = -widths+'px';
// 				circle[j].classList.remove('active');
// 			}
// 			oneinfo[i].style.left = 0;
// 			circle[i].classList.add('active');
// 		}
// 	}
// 	//4.鼠标单击左箭头
// 	backleft.onclick = function(){
// 		moveLL();
// 	}
// 	function moveLL(){
// 		next--;
// 		if(next == -1){
// 			next=0;
// 			return;
// 		}
// 		oneinfo[now].style.left = 0;
// 		oneinfo[next].style.left = -widths+'px';
// 		animate(oneinfo[now],{left:widths},function(){
// 			circle[now].classList.remove('active');
// 		});
// 		animate(oneinfo[next],{left:0},function(){
// 			for(let j = 0;j < circle.length;j++){
// 				circle[j].classList.remove('active');
// 			}
// 			circle[next].classList.add('active');
// 		});
// 		now=next;
// 	}
// 	//鼠标单击右箭头
// 	backright.onclick = function(){
// 		moveR();
// 	}
// 	function moveR(){
// 		next++;
// 		if(next == oneinfo.length){
//// 			next=0;
// 		}
// 		oneinfo[now].style.left = 0;
// 		oneinfo[next].style.left = widths+'px';
// 		animate(oneinfo[now],{left:-widths},function(){
// 			circle[now].classList.remove('active');
// 		});
// 		animate(oneinfo[next],{left:0},function(){
// 			for(let j = 0;j < circle.length;j++){
// 				circle[j].classList.remove('active');
// 			}
// 			circle[next].classList.add('active');
// 		});
// 		now=next;
// 	}
   	let banner = document.querySelector(".component-container-down-info4");
	let box=document.querySelectorAll(".component-container-down-info4 li");
	let dot=document.querySelectorAll(".dot1");
	let leftBtn = document.querySelector(".component-buttonleft1");
	let rightBtn = document.querySelector(".component-buttonright1");
	
	let banner1 = document.querySelector(".component-container-down-info3");
	let box1=document.querySelectorAll(".component-container-down-info3 li");
	let dot1=document.querySelectorAll(".dot2");
	let leftBtn1 = document.querySelector(".component-buttonleft2");
	let rightBtn1 = document.querySelector(".component-buttonright2");
	
	let banner2 = document.querySelector(".component-container-down-info2");
	let box2=document.querySelectorAll(".component-container-down-info2 li");
	let dot2=document.querySelectorAll(".dot3");
	let leftBtn2 = document.querySelector(".component-buttonleft3");
	let rightBtn2 = document.querySelector(".component-buttonright3");
	
	let banner3 = document.querySelector(".component-container-down-info1");
	let box3=document.querySelectorAll(".component-container-down-info1 li");
	let dot3=document.querySelectorAll(".dot4");
	let leftBtn3 = document.querySelector(".component-buttonleft4");
	let rightBtn3 = document.querySelector(".component-buttonright4");	
	let widths = parseInt(getComputedStyle(banner,null).width);
	lunbo(box,dot,leftBtn,rightBtn,banner,widths);
	lunbo(box1,dot1,leftBtn1,rightBtn1,banner1,widths);
	lunbo(box2,dot2,leftBtn2,rightBtn2,banner2,widths);
	lunbo(box3,dot3,leftBtn3,rightBtn3,banner3,widths);	

	//为你推荐
	let backL = document.querySelector('.recommondTop .back .backLeft');
   	let backR = document.querySelector('.recommondTop .back .backRight');
   	let cont = document.querySelector('.recommondBottom ul');
   	let widthw = parseInt(getComputedStyle(cont,null).width)/2;
   	let NUM = 0;
   	backR.onclick = function(){
   		NUM++;
   		if(NUM==2){
   			NUM = 1;
   			return;
   		}
   		cont.style.transform='translateX('+(-width*NUM)+'px)';
   	}
   	backL.onclick = function(){
   		NUM--;
   		if(NUM == -1){
   			NUM = 0;
   			return;
   		}
   		console.log(NUM);
   		cont.style.transform='translateX('+(-width*NUM)+'px)';
   	}
	//返回顶部
//	let res = document.body.scrollTop||document.documentElement.scrollTop;
//	let backTop = document.querySelector('.backTop');
//	backTop.onclick = function(){
//		animate(document.body,{scrollTop:0});
//		animate(document.documentElement,{scroll:0});
//	}
	let res = document.body.scrollTop||document.documentElement.scrollTop;
	console.log(res);
	let back = document.querySelector('.backTop');
	back.onclick = function() {
		animate(document.body,{scrollTop:0});
		animate(document.documentElement,{scrollTop:0});
	}
   }