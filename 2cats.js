var cat01 = document.getElementById("cat01");
var cat02 = document.getElementById("cat02");
var cat01NameElem = document.getElementById("cat01Name");
var cat02NameElem = document.getElementById("cat02Name");

var cat01ClickNum = 0;
var cat02ClickNum = 0;
var bravoClick = 0;
var cat01Name = "Suzy";// cat01 name
var cat02Name = "Mow"; //cat02 name

var elemCat01Click = document.getElementById("cat01ClickNum");
var elemCat02Click = document.getElementById("cat02ClickNum");

cat01.onload = function(){
	cat01NameElem.innerHTML = cat01Name+": ";
};
cat02.onload = function(){
	cat02NameElem.innerHTML = cat02Name+": ";
};

var clickCat01 = function(){
  	//the element has been clicked... do stuff here
  	cat01ClickNum +=1;
  	elemCat01Click.innerHTML = cat01ClickNum;
};

var clickCat02 = function(){
	cat02ClickNum +=1;
	elemCat02Click.innerHTML = cat02ClickNum;
};


cat01.addEventListener('click', clickCat01, false);
cat02.addEventListener('click', clickCat02, false);

//Using jQuery method
var $commentsIcon = $('#commentsIcon');
$commentsIcon.click(function(e) {
  //the element has been clicked... do stuff here
  bravoClick +=1;
  $('#count').text(bravoClick);
});

