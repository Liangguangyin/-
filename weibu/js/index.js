class denlu{
	constructor(id){
		this.box = document.querySelector(id);
		this.btns = this.box.querySelector(".btns");
		this.text = this.box.querySelector(".text");
		this.ac = this.box.querySelector(".ac")
		this.textarea = this.box.querySelector("textarea")
		this.tijiao = this.box.querySelector(".tijiao")
		this.quxiao = this.box.querySelector(".quxiao")
		this.tuozhuai = this.box.querySelector("h3")
		this.li;
		this.onfabu();
		this.onquxiao()
		this.ontuozhuai()
	}
	//点击发布弹出ac样式
	onfabu(){
		this.btns.onclick =()=>{
			this.ac.style.display = "block";
		}
		this.ac.style.left=(this.box.clientWidth - 300) / 2 + "px",
		this.ac.style.top=(this.box.clientHeight - 300) / 2 + "px";
		this.ontijiao()
	}
	//提交
	ontijiao(){
		this.tijiao.onclick=()=>{
			this.li = document.createElement("li");
			this.text.appendChild(this.li);
			this.li.innerHTML = this.textarea.value;
			console.log(this.textarea.innerText)
			this.ac.style.display = "none";
		}
	}
	//取消
	onquxiao(){
		this.quxiao.onclick=()=>{
			this.ac.style.display = "none";
		}
	}
	拖拽
	ontuozhuai(){
		this.tuozhuai.onmousedown = e => {
			let x = e.offsetX, 
				y = e.offsetY;
				this.box.onmousemove =  e => {
					let _left = e.clientX - x-300,
						_top = e.clientY - y;
						this.ac.style.left= _left+"px";
						this.ac.style.top= _top+"px";
				this.box.onmouseup = ()=> {
					this.box.onmousemove = null;
				}
				return false;
			}
		}
	}
}
new denlu("#box")