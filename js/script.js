
var slide = new Vue (
  {
    el: '.html',
    intervalToStop: '',
    created: function(){
      console.log("hello world");
      this.intervalToStop = setInterval(() => { this.toRight() }, 1500);
    },
    data: {
      index: 0,
      imgUrl: ['https://theculturetrip.com/wp-content/uploads/2017/12/34131593773_0fba25e24e_k.jpg', 'https://pix10.agoda.net/hotelImages/4888945/0/d1a3d1a932eba94dd2f2158aa66bf3ee.jpg?s=1024x768','https://cdn.getyourguide.com/img/location/5ca345852da87.jpeg/148.jpg', 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg']

    },
    methods: {
      toLeftAndBlock: function(){
        clearInterval(this.intervalToStop)
        this.toLeft()
      },
      toRightAndBlock: function(){
        clearInterval(this.intervalToStop)
        this.toRight()
      },
      toLeft: function (){
        // console.log("left");
        // console.log(this.imgUrl.length);
        this.index--;
        if (this.index == -1) {
          this.index = this.imgUrl.length - 1;
        }
      },
      toRight: function (){
        // console.log("right");
        this.index++;
        // console.log(this.index);
        if (this.index == this.imgUrl.length) {
          this.index = 0;
        };
      },

      pointerMoved: function (inde){
        clearInterval(this.intervalToStop)
        this.index = inde;
      }
    }
  }
);
