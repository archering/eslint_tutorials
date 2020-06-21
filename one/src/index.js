(function(){

    var hello = {
        name:"job",
        show:function(){
            console.log(this.name);
        }
    }

    console.log(hello.name);

    var things = {
        init:function(a,b){
            this.a = +a;
            this.b = + b;
        },
        sum:function(){
            return this.a + this.b;
        },
        minus:function(){
            return this.a - this.b;
        }
    }

    things.init(21,10);
    console.log(things.sum());
    console.log(things.minus());
}());