//Using Knockout libarary to orgnize Model/View/Viewmodel, make it easier to show UI changes based on data changed
/**
$(function(){
	// Overall viewmodel for this screen, along with initial state
	var catsVeiwModel = function() {
		var self = this;
	    self.cats = ko.observableArray([
	        {catName:'Suzy', count:0, src:'img/cat01.jpg', nickNames:['Grace', 'Cucci', 'Susan']},
			{catName:'Phobe',count:0, src:'img/cat01.jpg',nickNames:['Grace', 'Cucci', 'Susan']},
			{catName:'Cathy',count:0, src:'img/cat03.jpg',nickNames:['Grace', 'Cucci', 'Susan']},
			{catName:'Elsa',count:0, src:'img/cat04.jpg',nickNames:['Grace', 'Cucci', 'Susan']},
			{catName:'Michelle',count:0, src:'img/cat05.jpg',nickNames:['Grace', 'Cucci', 'Susan']}
	    ]);
	    //self.currentCat = ko.observable();

	    self.currentName = ko.observable('Suzy');
	    self.currentImg = ko.observable("img/cat01.jpg");
	    self.clickCount = ko.observable(0);
	    self.incrementClickCounters= function(){
	    	var previousCount = self.clickCount();
	    	self.clickCount(previousCount+1);
		
	    };
	   	//When clicking cat name, then load cat name, count and image.
	   	self.nickNames = ko.observableArray([]);
	   	self.loadCat = function(name){
	   		for(var i=0; i<self.cats().length;i++){
	   			if (self.cats()[i].catName == name){
	   				//self.currentCat(self.cats()[i]);
	   				self.currentName(self.cats()[i].catName);
	   				self.currentImg(self.cats()[i].src);
	   				self.clickCount(self.cats()[i].count);
	   				self.nickNames(self.cats()[i].nickNames);
	   				alert(self.nickNames());
	   				break;
	   			};
	   		};
	   	};
	}

ko.applyBindings(new catsVeiwModel());

});
*/
$(function(){
	var self = this;
	var initialCats = [
		{
			clickCount:0,
			name: 	"Suzy",
			imgSrc: "img/cat01.jpg",
			nickNames: ["Tabby", "Zzzzz", "Susan"]
		},
		{
			clickCount:0,
			name: 	"Phobe",
			imgSrc: "img/cat02.jpg",
			nickNames: ["Tacoo", "ohhhh", "bbbbb"]
		},
		{
			clickCount:0,
			name: 	"Elsa",
			imgSrc: "img/cat03.jpg",
			nickNames: ["dkdkdkk", "kkkk", "oppppo"]
		},
		{
			clickCount:0,
			name: 	"Michelle",
			imgSrc: "img/cat04.jpg",
			nickNames: ["gggeee", "huluhulu", "hahaha"]
		}
		];
	var Cat = function(data){
		this.clickCount = data.clickCount;
		this.name = data.name;
		this.imgSrc = data.imgSrc;
		this.nickNames = data.nickNames;

		this.title = ko.computed(function(){
			var title;
			var clicks = this.clickCount;
			if (clicks <10){
				title = 'Newborn';
			} else if(clicks <50){
				title = 'Infant';
			} else if(clicks < 100){
				title = 'Child';
			} else if (clicks < 200){
				title = 'Teen';
			} else if (clicks < 500){
				title = 'Adult';
			} else {
				title = 'Ninja';
			}
			return title;	
		}, this);

	}

	var ViewModel = function(){
		var self = this;
		this.catList = ko.observableArray([]);
		initialCats.forEach(function(item){
			self.catList.push( new Cat(item) );
		});
		this.currentCat = ko.observable( new Cat(this.catList()[0]) );
		this.incrementClickCounters = function(){
			var index;
			for(var i=0; i<self.catList().length;i++){
				if(self.catList()[i].name == self.currentCat().name){
					index = i;
					break;
				}
			}
			//var index = self.catList.indexOf(self.currentCat()); //sometimes it return -1, not 100% correct.
			var previousCount = self.catList()[index].clickCount;
			self.catList()[index].clickCount = previousCount+1;
			self.currentCat(new Cat(self.catList()[index]));
		}

		self.loadCat = function(cat){
			self.currentCat(cat);
		}
	}


	ko.applyBindings(new ViewModel());
});
