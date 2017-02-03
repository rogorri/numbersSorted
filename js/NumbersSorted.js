function NumbersSorted (){
  this.position = this.numbersArray64();
  this.numbers = this.sortArray(this.numbersArray10());
  this.counter = 0;
  this.pointer = 0;
  this.finalScore = 0;
}


NumbersSorted.prototype.random10 = function (){
  return Math.floor(Math.random() * 10) + 1;
};

NumbersSorted.prototype.random64 = function(){
  return Math.floor(Math.random() * 64) + 1;
};

NumbersSorted.prototype.sortArray = function (array) {
  return  array.sort(function(a, b){return a - b;});
};

NumbersSorted.prototype.numbersArray10 = function () {
  var array3=[];
  var arr=[];
    for (var i=1; i<=4; i++) {
      array3.push(this.random10());
      arr = array3.filter( function( item, index, inputArray ) {
      return inputArray.indexOf(item) == index;
      });
          }
          if (arr.length<array3.length){
          return this.numbersArray10();
          }
      return array3;
};


NumbersSorted.prototype.numbersArray64 = function () {
  var array2=[];
  var arr=[];
    for (var i=1; i<=4; i++) {
      array2.push(this.random64());
      arr = array2.filter( function( item, index, inputArray ) {
      return inputArray.indexOf(item) == index;
      });
        }
          if (arr.length<array2.length){
          return this.numbersArray64();
          }
      return array2;
};



NumbersSorted.prototype.paintshuffle = function () {
  $("#"+this.position[0]).addClass("empty");
  $("#"+this.position[1]).addClass("empty");
  $("#"+this.position[2]).addClass("empty");
  $("#"+this.position[3]).addClass("empty");
  $("#"+this.position[0]).html("<span id='text'>"+this.numbers[0]+"</span>");
  $("#"+this.position[1]).html("<span id='text'>"+this.numbers[1]+"</span>");
  $("#"+this.position[2]).html("<span id='text'>"+this.numbers[2]+"</span>");
  $("#"+this.position[3]).html("<span id='text'>"+this.numbers[3]+"</span>");
};


NumbersSorted.prototype.completing = function () {
  var self = this;

    $(".empty").click(function(event) {
      $(".empty").removeClass("red");
        if($(this).text() == self.numbers[self.counter]) {

          $(this).removeClass("empty");
          $(this).removeClass("red");
           $(this).addClass("green");
           self.counter ++;
           if (self.counter >= 4) {
             $(".board").html("");
             $(".board").removeClass("green","red","empty");
            self.counter = 0;
            self.position = [];
            self.numbers = [];
            self.position = self.numbersArray64();
            self.numbers = self.sortArray(self.numbersArray10());
            self.pointer += 15;
            document.getElementById("pointer").innerHTML = self.pointer;
            self.paintshuffle();
            self.completing();
           }
         }
         else if ($(this).hasClass("green")){
           $(this).removeClass("red");
         }
        else {
          if ($(this).hasClass("empty")) {
            $(this).addClass("red");
          }
      }
    });
  };

NumbersSorted.prototype.close = function () {
this.finalScore = this.pointer;
document.getElementById("myNav").style.width = "100%";
document.getElementById("totalscore").innerHTML = this.finalScore;
   };


var newgame =new NumbersSorted();
  newgame.paintshuffle();
  newgame.completing();

  var seconds = 60;
  var intervalId = setInterval(function() {
    if (seconds > 0) {
      document.getElementById("counter").innerHTML = seconds;
    } else {
      document.getElementById("counter").innerHTML = "Game Over";
      clearInterval(intervalId);
      newgame.close();
    }
  	seconds--;
  }, 1000);
