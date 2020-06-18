
//Pour les button suivant est precedant
    var arr = new  collection(["img/iris.png","img/1.png","img/2.png"])
    function collection(imgs) {
    this.imgs = imgs;
    this.i =0;
    this.next = function (element) {
        var img = document.getElementById(element);
        this.i++;
        if(this.i >= imgs.length){
            this.i=0;
        }
        img.src = imgs[this.i];
    }

    this.pre = function (element) {
        var img = document.getElementById(element);
        this.i--;
        if(this.i < 0){
            this.i= imgs.length - 1;
        }
        img.src = imgs[this.i];
    }
        
    this.next("imgslider");
        
    }