class lunBtns{
	constructor(selector) {
	    this.box = document.querySelector(selector);
		this.ol = this.box.querySelector("ol");
		this.ul = this.box.querySelector("ul");
		this.imgs = this.box.querySelectorAll("img");
		this.left = this.box.querySelector("#goPrev")
		this.right = this.box.querySelector("#goNext")
		this.btns=[];
		this.init();
		//点击下切换
		this.onleft();
		//点击上切换
		this.onright();
		//自动切换
		this.zhidong();
		//定时器
		this.timer;
		
		this.index = 0;
		this.agoindex = 0;
		// this.li = this.ol.querySelectorAll("li")
		console.log(this.btns)
		//渲染底部按钮
		//初始化left的宽度850
		this.initLeft = -500;
		//console.log(this.ol.innerHTML)
	}
	init(){
		//向ol里面添加li节点，li=ul.length;
		
		for(var i = 0 ; i < this.imgs.length-1 ; i++){
			var li = document.createElement("li")
			li.innerHTML = i+1;
			if(i === 0)li.className = "ac";
			this.ol.appendChild(li);
			this.btns.push(li);
			this.onbtns();
		}
	}
	//点击btns按钮切换图片
	onbtns(){
		for(let j = 0 ; j < this.btns.length ; j++){
			this.btns[j].onclick =()=>{
				this.ul.style.top = j*this.initLeft +"px";
				this.index = j;
				this.onclear();
				this.agoindex = this.index;
				
			}
		}
	}
	//单张切换按钮
	onleft(){
		this.left.onclick =()=>{
			this.index++
			this.ul.style.top = this.index * this.initLeft +"px";
			if(this.index === this.btns.length){
				this.index = 0;
			}
			this.onclear()
			this.agoindex = this.index;
		}
	}
	
	onright(){
		this.right.onclick =()=>{
			this.index--
			this.ul.style.top = this.index * this.initLeft +"px";
			if(this.index < 1){
				this.index = this.btns.length-1;
			}
			this.onclear()
			this.agoindex = this.index;
		}
		
	}
	//自动切换
	zhidong(){
		this.timer =setInterval(()=>{
			this.index++
			this.ul.style.top = this.index * this.initLeft +"px"
			if(this.index === this.btns.length){
				this.index = 0;
			}
			this.onclear()
			this.agoindex = this.index;
		},2000)
		this.onenter()
	}
	onenter(){
		this.box.onmouseenter =()=>{
			clearInterval(this.timer);
		}
		this.onleave()
	}
	onleave(){
		this.box.onmouseleave =()=>{
			this.zhidong()
		}
	}
	
	//记录当前清除上一记录
	onclear(){
		this.btns[this.agoindex].classList.remove("ac");
		this.btns[this.index].className= "ac";
		
	}
	
	
	
}

new lunBtns("#div1")