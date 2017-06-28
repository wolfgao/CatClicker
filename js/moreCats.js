
var $imgContainer = $("#img_container");
var catImg= ['img/cat01.jpg', 'img/cat02.jpg', 'img/cat03.jpg', 'img/cat04.jpg', 'img/cat05.jpg'];
var catName=['Suzy','Phobe', 'Cathy','Elsa','Michelle'];
$(document).ready(function(){
	for (var i = 0; i<catImg.length; i++) {
		alert(i);
		var catNameElem = $('<ul><li><span id="'+catName[i]+'">'+catName[i]+'</span></li></ul>');
		console.log($catNameElem);
		$("#catlist").append(catNameElem);
	}；
  
});
