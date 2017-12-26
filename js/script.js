function Fn(obj){
    this.obj = obj;
    this.btn = document.getElementById(this.obj.btn);
    this.box = document.getElementById(this.obj.box);
    this.Init();

}
Fn.prototype = {
    constructor:Fn,
    Init:function(){
        this.one();
    },
    one:function(){//弹出框
        var that = this;
        this.btn.onclick = function(){
            that.marka();
            that.box1.innerHTML = `<div class="min"><h3 id='p'>${that.obj.hh}</h3></div>`;
            that.left = document.createElement('span');
            that.right = document.createElement('span');
            that.left.innerHTML =that.obj.left;
            that.right.innerHTML = that.obj.right;
            that.box1.firstChild.appendChild(that.left)
            that.box1.firstChild.appendChild(that.right)
            that.left.onclick = function(){
                that.remove();
            }
            that.right.onclick = function(){
                that.remove();
            }
        }
    },
    marka:function(){//创建遮罩层
            this.box1 = document.createElement('div');
            this.box1.className = 'box1'
            this.box.appendChild(this.box1)
    },
    remove:function(){
        this.box.removeChild(this.box1);
    }
}
new Fn({
    btn:'btn',
    box:'box',
    hh:'欢迎进入我的空间！',
    left:'确定',
    right:'取消',
});