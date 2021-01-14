// var app = new Vue({
//     el: '#root',
//     data: {
//
//     },
//     methods: {
//       addList: function() {
//         this.list.push(this.newItem);
//         this.newItem = '';
//       },
//       removeList: function(index) {
//        this.list.splice(index,1);
//       },
//       updateHover: function(indexHover){
//         this.hoverToDo = indexHover;
//       }
//   }
// });

var hamburgerMenu = $("img/hamburger-menu.png");

hamburgerMenu.click(function() {
    $(".hamburger-menu").show(300);
  });

var closeMenu = $(".fa-times");

closeMenu.click(function() {
    $(".hamburger-menu").hide(300);
  });
