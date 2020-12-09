console.log("hello world");

var slide = new Vue (
  {
    el: '.html',
    data: {
      imgUrl: ['https://theculturetrip.com/wp-content/uploads/2017/12/34131593773_0fba25e24e_k.jpg', 'https://pix10.agoda.net/hotelImages/4888945/0/d1a3d1a932eba94dd2f2158aa66bf3ee.jpg?s=1024x768','https://cdn.getyourguide.com/img/location/5ca345852da87.jpeg/148.jpg', 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg'],
    },
    methods: {
      toLeft: function (){
        console.log("left");
      },
      toRight: function (){
        console.log("right");
      }
    }
  }
);
