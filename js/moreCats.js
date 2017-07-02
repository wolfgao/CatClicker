$(function(){
    var model = {
    	//var cats = 0;
		init: function() {
			var cats=[
			{name:'Suzy', src:'img/cat01.jpg', count:0},
			{name:'Phobe', src:'img/cat02.jpg', count:0},
			{name:'Cathy', src:'img/cat03.jpg', count:0},
			{name:'Elsa', src:'img/cat04.jpg', count:0},
			{name:'Michelle', src:'img/cat05.jpg', count:0}];
			this.cats = cats;
		},
		getAllCats: function(){
			return this.cats;
		},
		getImage: function (name) {
			// body...
			//this.cats.forEach(function(cat){ //can't skip out the array by using array.forEach method, so change to for loop
			for (i=0; i<this.cats.length;i++) {
				cat = this.cats[i];
				if (cat.name == name){
					//alert(cat.src);
					return cat.src;
				}
			};
		},
		addClick: function(name){
			//this.cats.forEach(function(cat){ //can't skip out the array by using array.forEach method, so change to for loop
			for (i=0; i<this.cats.length;i++) {
				cat = this.cats[i];
				if (cat.name ==name){
					cat.count +=1;
					break;
				}
			};

		},
		getClick:function(name){
			//this.cats.forEach(function(cat){ //can't skip out the array by using array.forEach method, so change to for loop
			for (i=0; i<this.cats.length;i++) {
				cat = this.cats[i];
				if (cat.name ==name){
					return cat.count;
				}
			};
		}
	};

	var octopus = {
		//click the link of each cat name
		clickCatName: function(name){
			view.rendor(name);
			//octopus.clickImage(name);
		},

		clickImage: function(){
			$('#img').click(function(){
				var clickName = $('#catName').html();
				model.addClick(clickName);
				var count = model.getClick(clickName);
				view.rendorCountOnly(count);
			});
		}
	};

	var view = {
		init: function() {
			var cats = model.getAllCats();
			for (var i = 0; i<cats.length; i++) {
				var name = cats[i].name;
				var catNameElem = $('<ul style="width=30%;"><li><span id="'+name+'">'+name+'</span></li></ul>');
				$("#catlist").append(catNameElem);
				var catName = document.getElementById(name);
				catName.addEventListener('click', (function(nameCopy) {
					return function() {
				    	octopus.clickCatName(nameCopy);
					};
				})(name));
				
			};
		},
		rendor: function(name) {
			var imgSrc = model.getImage(name);
			//alert(name+"  "+imgSrc);
			var count = model.getClick(name);
			//$('#catName').empty();
			$('#catName').text(name);
			//$('#img').empty();
			$('#img').attr('src', imgSrc);
			//$('#clickCount').empty();
			$('#clickCount').text(count);

			octopus.clickImage();
		},
		rendorCountOnly: function(count){
			$('#clickCount').text(count);
		}
	};
	//Initialization model and view.
	model.init();
	view.init();
});
