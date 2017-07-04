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
		},
		update:function(newCat){
			var index = this.cats.indexOf(this.currentCat);
			//alert(index);
			this.cats[index] = newCat;
			this.currentCat = newCat;
			return this.cats;
		}
	};

	var octopus = {
		admin_is_show:false,
		init: function(){
			var cats = model.getAllCats();
			model.currentCat = cats[0];
			catlistView.init(cats);
			catView.init();
			adminView.init();
			if(!octopus.admin_is_show){
				adminView.hide();
			}
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
		},
		admin_confirm:function(cat){
			var newCats = model.update(cat);
			catlistView.init(newCats);
			catView.rendor();
			admin_is_show = false;
			adminView.hide();
		}
	};
	var catView = {
		init: function(name) {
			this.catNameElem = $('#catName');
			this.imgElem = $('#img');
			this.clickCountElem = $('#clickCount');
			this.admin_btn = $('#admin_btn');
			this.imgElem.click(function(){
				octopus.addClick();
			});
			this.admin_btn = $('#admin_btn');
			this.admin_btn.click(function(){
				model.admin_is_show=true;
				adminView.init();
				adminView.show();
			});
		},
		rendor: function(){
			var currentCat = octopus.getCurrentCat();
			this.catNameElem.text(currentCat.name);
			//$('#img').empty();
			this.imgElem.attr('src', currentCat.src);
			//$('#clickCount').empty();
			this.clickCountElem.text(currentCat.count);
			this.admin_btn.text("Admin");
		}
	};

	var catlistView = {
		init: function(cats) {
			this.catListElem = $('#catlist');
			this.catListElem.empty();
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

	var adminView = {
		init: function(){
			this.catNameInput = $('#catName_input');
			this.clickCount_input = $('#clickCount_input');
			this.url = $('#url');
			this.btn_confirm = $('#confirm');
			this.btn_cancel = $('#cancel');
			$('#confirm').click(function(){
				var newCat = octopus.getCurrentCat();
				newCat.name = $('#catName_input').val(); //click confirm skip init process, so can't get DOM definations.
				newCat.src = $('#url').val();
				newCat.count = $('#clickCount_input').val();
				octopus.admin_confirm(newCat);
			});
			$('#cancel').click(function(){
				adminView.hide();
			});
			this.rendor();
		},
		rendor:function(){
			var currentCat = octopus.getCurrentCat();
			this.catNameInput.val(currentCat.name);
			this.clickCount_input.val(currentCat.count);
			this.url.val(currentCat.src);
		},
		hide:function(){
			this.catNameInput.hide();
			this.clickCount_input.hide();
			this.url.hide();
			this.btn_confirm.hide();
			this.btn_cancel.hide();
		},
		show: function(){
			this.catNameInput.show();
			this.clickCount_input.show();
			this.url.show();
			this.btn_confirm.show();
			this.btn_cancel.show();
		}
	}

	//Initialization model and view.
	model.init();
	octopus.init();
});
