//内容轮播函数
function lunbo(box,dot,leftBtn,rightBtn,banner,widths){
	let now = 0;
	let next = 0;
	box[0].style.left=0;
	dot[0].classList.add("active");
	for (let i = 0; i < dot.length; i++) {
		dot[i].onmouseover=function () {
			for(let j=0;j<dot.length;j++){
				dot[j].classList.remove("active");
				box[j].style.left = -widths+"px";
			}
			dot[i].classList.add("active");
			box[i].style.left = 0;
		}
	}
	rightBtn.onclick = function(){
		move();
	}
	function move(){
		next++;
		if(next == box.length){
			// next = 0;
			next=box.length-1;
			return;
		}
		box[now].style.left = 0;
		box[next].style.left = widths + "px";
		animate(box[now],{left:-widths},function(){
			for(let j=0;j<dot.length;j++){
				dot[j].classList.remove("active");
				flag = true;
			}
		});
		animate(box[next],{left:0},function(){
			dot[next].classList.add("active");
			flag = true;
		});
		now = next;
	}

	leftBtn.onclick = function(){
		moveL();
	}
	function moveL(){
		next--;
		if(next == -1){
			// next = box.length-1;
			next=0;
			return;
		}
		box[now].style.left = 0;
		box[next].style.left = -widths + "px";
		animate(box[now],{left:widths},function(){
			for(let j=0;j<dot.length;j++){
				dot[j].classList.remove("active");
				flag = true;
			}
		});
		animate(box[next],{left:0},function(){
			dot[next].classList.add("active");
			flag = true;
		});
		now = next;
	}
}
//小米闪购平移滑动效果
function xiaomichoose (leftB,rightB,con) {
	let widths = parseInt(getComputedStyle(con,null).width)/2;
	console.log(widths);
	let num=0;
	leftB.onclick=function () {
		num--;
		if (num==-1) {
			// leftB.style.background="red";
			num=0;
			return;
		}
        con.style.transform="translateX("+(-widths*num)+"px)";
	}
	rightB.onclick=function () {
		num++;
		if (num==2) {
			// rightB.style.background="red";
			num=1;
			return;
		}
		con.style.transform="translateX("+(-widths*num)+"px)";
	}
}
//banner轮播图
function bannerimg (dots,imgs,bannerLB,lbtn,rbtn) {
	//  轮播图
    //1、获取元素
	//2、初始状态：让第一张图片显示/层级提高
	imgs[0].style.zIndex=2;
	//对应的轮播点改变样式
	dots[0].style.background="#fff";
	//鼠标移入每一个轮播点
	for (let i=0;i<dots.length;i++) {
		dots[i].onmouseover=function(){
			//其余图片层级变回1/其余轮播点样式改变
			for (let j=0;j<imgs.length;j++) {
				imgs[j].style.zIndex=1;
				dots[j].style.background="#B0B0B0";
			}
			//对应的图片层级提高
			imgs[i].style.zIndex=2;
			//对应的轮播点改变样式
			dots[i].style.background="#fff";
			//当鼠标移走后，继续轮播
			num=i;
		}
	}
	//3、定义变量
	let num=0;
	//4、实现自动轮播
	let t=setInterval(move,1500);
	function move() {
		num++;
		if(num==5){
			num=0;
		}
		for(let j=0;j<imgs.length;j++){
			imgs[j].style.zIndex=1;
			dots[j].style.background="#B0B0B0";
		}
		imgs[num].style.zIndex=2;
		dots[num].style.background="#fff";
	}
	
	//5、鼠标移入banner，暂停时间间隔函数
	bannerLB.onmouseover=function(){
		clearInterval(t);
	}
	//6、鼠标移出banner，继续时间间隔函数
	bannerLB.onmouseout=function(){
		t=setInterval(move,1500);
	}	
	//7、点击右箭头
	rbtn.onclick=function(){
		move();
	}	
	//8、点击左箭头
	lbtn.onclick=function(){
		moveL();
	}
	function moveL() {
		num--;
		if(num<0){
			num=4;
		}
		for(let j=0;j<imgs.length;j++){
			imgs[j].style.zIndex=1;
			dots[j].style.background="#B0B0B0";
		}
		imgs[num].style.zIndex=2;
		dots[num].style.background="#fff";
	}
	//9、窗口失去焦点时，暂停时间间隔函数
	window.onblur=function(){
		clearInterval(t);
	}
	//10、窗口获得焦点时，继续时间间隔函数
	window.onfocus=function(){
		t=setInterval(move,1500);
	}
}
//家电应用等选项卡
function appliancespull (appliances,appliancesinfo) {	
	for (let i=0;i<appliances.length;i++) {
		appliances[i].onmouseover=function(){
			for (let j=0;j<appliancesinfo.length;j++) {
				appliancesinfo[j].style.display="none";					
			}
			appliances[i].style.color="#FF6700";	
			appliances[i].style.borderBottom="2px solid #FF6700";
			appliancesinfo[i].style.display="block";
		}
		appliances[i].onmouseout=function(){
			appliancesinfo[i].style.display="block";
			appliances[i].style.color="#333";
			appliances[i].style.borderBottom="";
		}
	}
}
//	左右箭头按钮效果
function button (buttonLeft,buttonRight) {
	buttonLeft.onmouseover=function(){
		buttonLeft.style.background="#333333";
		buttonLeft.style.background="rgba(0,0,0,0.6)";
		buttonLeft.style.color="white";
	}
	buttonLeft.onmouseout=function(){
		buttonLeft.style.background="";
		buttonLeft.style.color="#E0E0E0";
	}
	buttonRight.onmouseover=function(){
		buttonRight.style.background="#333333";
		buttonRight.style.background="rgba(0,0,0,0.6)";
		buttonRight.style.color="white";
	}
	buttonRight.onmouseout=function(){
		buttonRight.style.background="";
		buttonRight.style.color="#E0E0E0";
	}
}
//下拉选项卡
function pull (menu,menuinfo) {
	for (let i=0;i<menu.length;i++) {
		menu[i].onmouseover=function(){
			for (let j=0;j<menuinfo.length;j++) {
				menuinfo[j].style.display="none";					
			}
			menu[i].style.color="#FF6700";		
			menuinfo[i].style.display="block";
			menuinfo[i].style.height="230px";
		}
		menu[i].onmouseout=function(){
			menuinfo[i].style.display="none";
			menu[i].style.color="#333";
		}
	}
}
//侧拉选项卡
function sidepull (li,leftList) {
	for (let i=0;i<li.length;i++) {
		li[i].onmouseover=function(){
			for (let j=0;j<leftList.length;j++) {
				leftList[j].style.display="none";
			}
			leftList[i].style.display="block";
			li[i].style.background="#FF6700";
		}
		li[i].onmouseout=function(){
			leftList[i].style.display="none";
			li[i].style.background="";
		}
	}
}
//购物车下拉效果
function shopcart (cart,cartlist) {
	cart.onmouseover=function(){
		cartlist.style.display="block";
		cartlist.style.height="100px";
		cartlist.style.boxShadow="0 10px 10px 0 rgba(0,0,0,0.3)";
		cartlist.style.background="#fff";
		cart.style.background="#fff";
		cart.style.color="#ff6700";
	}
	cart.onmouseout=function(){
		cartlist.style.display="none";
		cartlist.style.height="0";
		cartlist.style.boxShadow="";
		cart.style.background="#424242";
		cart.style.color="#B0B0B0";
	}
}