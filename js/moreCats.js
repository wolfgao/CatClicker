$(function(){
    var model = {
    	currentCat:null,
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
		}
	};

	var octopus = {
		init: function(){
			var cats = model.getAllCats();
			model.currentCat = cats[0];
			catlistView.init(cats);
			catView.init();
		},
		//click the link of each cat name
		setCurrrentCat: function(cat){
			model.currentCat = cat;
		},

		getCurrentCat: function(){
			return model.currentCat;
		},
		addClick:function(){
			model.currentCat.count++;
			catView.rendor();
		}
	};
	var catView = {
		init: function(name) {
			this.catNameElem = $('#catName');
			this.imgElem = $('#img');
			this.clickCountElem = $('#clickCount');
			this.imgElem.click(function(){
				octopus.addClick();
			});
		},
		rendor: function(){
			var currentCat = octopus.getCurrentCat();
			this.catNameElem.text(currentCat.name);
			//$('#img').empty();
			this.imgElem.attr('src', currentCat.src);
			//$('#clickCount').empty();
			this.clickCountElem.text(currentCat.count);
		}
	};

	var catlistView = {
		init: function(cats) {
			this.catListElem = $('#catlist');
			for (var i = 0; i<cats.length; i++) {
				var cat = cats[i];
				var catNameElem = $('<ul style="width=30%;"><li><span id="'+cat.name+'">'+cat.name+'</span></li></ul>');
				this.catListElem.append(catNameElem);
				this.catName = document.getElementById(cat.name);
				this.catName.addEventListener('click', (function(catCopy) {
					return function() {
				    	octopus.setCurrrentCat(catCopy);
				    	catView.rendor();
					};
				})(cat));
				
			};
		}
	};

	//Initialization model and view.
	model.init();
	octopus.init();
});
