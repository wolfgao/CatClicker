var catImg= ['img/cat01.jpg', 'img/cat02.jpg', 'img/cat03.jpg', 'img/cat04.jpg', 'img/cat05.jpg'];
var catName=['Suzy','Phobe', 'Cathy','Elsa','Michelle'];
$(document).ready(function(){
	for (var i = 0; i<catName.length; i++) {
		//alert(i);
		var catNameElem = $('<ul style="width=30%;"><li><span id="'+catName[i]+'">'+catName[i]+'</span></li></ul>');
		$("#catlist").append(catNameElem);
		var name = catName[i];
		var num = i;
		catNameElem.add('click', clickName(name, num));
	};
});

//for loop to load img and count the click times.
var count =0;
var clickName = function(nameCopy, numCopy){
	//for (var i = 0; i<catImg.length; i++) {
		//var name = catName[i];
		//var num = i;
		//var imgSrc = ;
		//alert(nameCopy+'  '+numCopy);
		
		
		var name = nameCopy;
		var num = numCopy;
		var count = 0;
		var nameElem = document.getElementById(name);
		var $catImgElem =$('<img style="width=60%;" class="img" onclick="imgClick('+count+')" src="'+catImg[num]+'">'+'</img>');
		var $catIntro = $('<span style="width=60%;" align="center" id="catIntro">'+"I am "+name+'. If you like me, please just click me.</span>');
		var $counts = $('<span align="center" id="clickCount"> Counts: '+count+'</span>');
		nameElem.addEventListener('click', (function() {
		//$('"#'+name+'"').click(function (numCopy) {
			// body...
			newCount = 0;
			$("#img_container").empty();
			$("#img_container").append($catIntro);
			$("#img_container").append($counts);
			$("#img_container").append($catImgElem);
		}));
}

// Method for image click
var newCount =0;
var imgClick = function(){
	newCount +=1;
	alert(newCount);
	$('#clickCount').text(' Counts: ' +newCount);
	count = newCount;
}