$(document).ready(function () {  
  
  let itemLength = $(".slider-image").length;
    
    for (let i=0; i<itemLength;i++){
        $(".container-dots").append('<div class="dot"><a></a></div>');
        $(".dot").eq(0).addClass("active");
    }

    const animateChange = (currentImg, changeImg) => {
      let current = currentImg.attr("alt");
      let after = changeImg.attr("alt");
      let m = (- after)*780;
      console.log({current,after});
      console.log(m);
      console.log(itemLength);
      $(".container").animate({
        left: m,
      }, 100, () => {
      changeImg.css("left","0").addClass("active");
      currentImg.removeClass("active");
      $(".container")
      .css(
        "left","m"
      );
      }
      );
      $(".dot").eq(current).removeClass("active");
      $(".dot").eq(after).addClass("active");
    };
    
    $(".dot").click(function() {
      let current = $(".slider-image").index($(".active"));
      let after = $(".dot").index(this);
      console.log(after);
      console.log(current);
      
      if (current > after) {
        for (let i = current; i > after; i--) {
          animateChange($(".slider-image").eq(i), $(".slider-image").eq(i-1));
        }
      }
      if (current < after) {
        for (let i = current; i < after; i++) {
          animateChange($(".slider-image").eq(i), $(".slider-image").eq(i + 1));
        }
      }
      if (current === after) return;
    });
  
    $(".next-button").click(function() {
      // let a = (($(".active").attr("alt"))%itemLength);
      // let b = (($(".active").attr("alt") + 2)%itemLength);
      // console.log(a);
      let a = ($(".active").attr("alt") + 1);
      
      // if (a >= itemLength){
      //   a = a%itemLength;
      //   // $(".container").append($(".wrapper .container div[alt = "+0+"]"));
      // }
      animateChange($(".active"), 
      $(".slider-image").eq(($(".active").attr("alt") + 1)%itemLength));
      console.log("a = ",a);
      
    });
  
    $(".prev-button").click(function () {
      let a = (($(".active").attr("alt") + itemLength - 1)%itemLength);
      
      animateChange($(".active"), 
      $(".slider-image").eq(a%itemLength));
      console.log("a = ",a);    
    });
});