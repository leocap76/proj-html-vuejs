// var app = new Vue({
//     el: '#root',
//     data: {
//
//     },
//     methods: {
//       openMenu: function() {
//         this.list.push(this.newItem);
//         this.newItem = '';
//       },
//       closeMenu: function(index) {
//        this.list.splice(index,1);
//       },
//       updateHover: function(indexHover){
//         this.hoverToDo = indexHover;
//       }
//   }
// });

var hamburgerMenu = $(".hamburger");

hamburgerMenu.click(function() {
    $(".hamburger-menu").slideToggle(300);
    console.log('open');
  });

var closeMenu = $(".x_close");

closeMenu.click(function() {
    $(".hamburger-menu").slideUp(300);
    console.log('close');
  });
// _____________________________________________________
// _______________VUE___________________________________


  let app = new Vue({
   el: '#app',
   data: {
     links: [
       'Menu',
       'Meet The Brand',
       'Live Dates',
       'Latest News',
       'Fans'
     ],
   }
  });
