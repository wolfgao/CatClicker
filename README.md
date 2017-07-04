# CatClicker
This is a JS project to practice parameter copy method
## Get started
###文件说明
1. 这个项目主要练习如何避免参数被外部定义导致最后参数的值不是希望的， 具体参考IIFE_test.html。
``` JS
for (var i = 0; i < nums.length; i++) {

			// 这是循环中当前的数字
			var num = nums[i];

			// 我们为这个数字创建一个DOM元素
			var elem = document.createElement('div');
			elem.textContent = num;

			// ... 然后当点击 (click) 的时候，使用 alert() 提示这个数字
			// 这个函数在点击测试时候发现，所有的元素都只会弹出相同的东西：最后一个数字3。为什么？
		    // 实际上num内部函数(指的是 addEventListener 中的匿名函数)的外面被定义。
		    // 每个内部函数都指向同一个 'num' 变量… 而 'num' 变量在每一次的迭代中都发生了变化，
		    // 在循环的最后它被定义为3。无论何时，点击事件调用的匿名函数都会引用同一个 'num' 变量(现在它等于3)
			elem.addEventListener('click', function() {
			    alert(num);
			});
			//num变量改变了，所以我们要想办法将它和我们的事件监听函数给绑起来。这儿有一种方法可以做到，首先请看代码，然后我会解释它是如何运行的。
			//function(numCopy)是外部函数。我们通过加上圆括号来使它立即被调用，并传入 num。这种包一个匿名函数并立即执行它的方法称为 IIFE(Immediately-Invoked Function Expression,立即执行函数表达式)。这就是我们使用的“魔法”。
			//我们将 num 值传入外部函数。在外部函数里面，这个值被命名为 numCopy --这个命名很合适，因为它就是 num 的拷贝。现在 num 在后面的代码中改变就不是问题了。我们已经把 num 的值作为 numCopy 存在我们的外部函数里面了。
			//最后，外部函数把内部函数返回 (return) 给事件监听函数。由于 JavaScript 的作用域，内部函数能够访问 numCopy。在之后，num会增加，但是这已经无关紧要了。内部函数指向的是numCopy，它将保持不变。
			elem.addEventListener('click', (function(numCopy) {
				return function() {
				    alert(numCopy)
				};

			})(num));


			// 最后，我们把这个 dom 元素插入到 document 中去。
			document.body.appendChild(elem);

		};
```
2. 同时我们练习了如何动态生产DOM元素，通过传统的JS和jQuery两种方法实现
``` JS
  var elem = document.createElement('div');
```
or
``` JS
  var catNameElem = $('<ul style="width=30%;"><li><span id="'+catName[i]+'">'+catName[i]+'</span></li></ul>');
  $("#catlist").append(catNameElem);
 ```
3. 在moreCats.html 和moreCats.js文件中我们联系了MVO模式开发，O是指Octopus，实际上也有叫做MVC，C是Controller，或者MVP，P是Prensenter. 无论如何，这样来组织代码，把View和Model分开，never talk使得我们的代码非常松耦合，很容易面对需求的变化，实现新功能。请仔细阅读一下moreCats.js仔细体会一下这样分开的妙处。

