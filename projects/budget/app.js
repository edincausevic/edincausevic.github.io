
// strings and selection
var domSelections = (function(){

	var domStrings = {
		thisMonth: '.budget__title--month',
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value',
		addBtn: '.add__btn',
		incomeList: '.income__list',
		expensesList: '.expenses__list',
		incomeDomEl: '.budget__income--value',
		expensesDomEl: '.budget__expenses--value',
		expProcentage: '.budget__expenses--percentage',
		budget: '.budget__value',
		listsContainer: '.container',
		removeIcon: '.ion-ios-close-outline'
	}

	return {
		// {} return all selection el strings
		getDomStrings: function() {
			return domStrings;
		},
		// {} return dom Month element
		getDomMonthEl: function() {
			return {
				thisMonth: document.querySelector(domStrings.thisMonth)
			}
		},
		// {} return all inputs elms and btn
		getDomInputFields: function() {
			return {
				type: document.querySelector(domStrings.inputType),
				description: document.querySelector(domStrings.inputDescription),
				value: document.querySelector(domStrings.inputValue),
				addBtn: document.querySelector(domStrings.addBtn)
			}
		},
		// {} get list contailer elements and delete byn
		getListItems: function() {
			return {
				incomeList: document.querySelector(domStrings.incomeList),
				expensesList: document.querySelector(domStrings.expensesList)
			}
		},
		// {} get budget menu elements
		getBudgetElm: function() {
			return {
				income: document.querySelector(domStrings.incomeDomEl),
				expenses: document.querySelector(domStrings.expensesDomEl),
				expProcentage: document.querySelector(domStrings.expProcentage),
				budget: document.querySelector(domStrings.budget)
			}
		},
		// {} return delte buton after you add item
		listsContainer: function() {
			return {
				container: document.querySelector(domStrings.listsContainer),
				removeIc: document.querySelectorAll(domStrings.removeIcon)
			}
		}
	}
}());









// user interface
var UIcontroller = (function(dom){

	var today = new Date();
	var date = {
		year: today.getFullYear(),
		month: today.getMonth(),
		day: today.getDate(),
		fullTime: today.toLocaleTimeString() 
	}
	
	

	return {
		// {} return date object
		date: function() {
					return date;
		},
		// take a month number and replace it with month name
		// return month name
		thisMonth: function() {
					var selection, thisMonth, monthNames;

					thisMonth = date.month;
					monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
					return monthNames[thisMonth]; 
		}, 
		// check if input is empty
		// if it is empty, make border red
		// if not return default color
		// and return true if all imputs are full, false if not
		checkInputs: function() {
					var state;

					function checkInputValue(el) {
						if ( el.value === '' ) {
							el.style.border = '1px solid #FF5049';
							state = false;
						}else {
							el.style.border = '1px solid #e7e7e7';
							state = true;
						}
					}

					var inputElements = dom.getDomInputFields();
					checkInputValue(inputElements.description);
					checkInputValue(inputElements.value);

					return state;
		},
		// {} return all input values 
		getInputValue: function() {
					var inputs = dom.getDomInputFields();
					
					return {
						type: inputs.type.value,
						description: inputs.description.value,
						value: inputs.value.value
					}
		},
		// remove input red border on click on the document
		removeInputBorder: function(event) {

			var inputElements = dom.getDomInputFields();

			if ( event.target !== inputElements.type &&
				 event.target !== inputElements.description &&
				 event.target !== inputElements.value &&
				 event.target !== inputElements.addBtn ) {
				inputElements.description.style.border = '1px solid #e7e7e7';
				inputElements.value.style.border = '1px solid #e7e7e7';
			}
		}
	}

}(domSelections));








// budget calculation
var budgetController = (function(ui){


	

	return {
		income: 0,
		expenses: 0,
		// check the type '+ or -' and create el
		// {} then return el and type in object: 0,
		createLiEl: function() {
					var inputValuesObj, titleDate, el, where, date;
					

					inputValuesObj = ui.getInputValue();
					date = ui.date();

					titleDate = ui.thisMonth() +' '+ date.day +', '+ date.year +' - '+ date.fullTime;
					
					if ( inputValuesObj.type === 'inc' ) {
						this.income += parseInt(inputValuesObj.value);
						where = 'inc';
					}else if ( inputValuesObj.type === 'exp' ) {
						this.expenses += parseInt(inputValuesObj.value);
						where = 'exp';
					}
					el = '<div class="item clearfix" title="%dateAndTime%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">+ %money%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline" id="%type%"></i></button></div></div></div>';
					el = el.replace('%dateAndTime%', titleDate);
					el = el.replace('%description%', inputValuesObj.description);
					el = el.replace('%money%', inputValuesObj.value);
					el = el.replace('%type%', where);
					
					return {
						el: el,
						type: where
					}
		},
		budgetData: function() {
					var budget = this.income - this.expenses;
					var procentage = Math.floor((this.expenses / this.income) * 100);

					// if budget is below 0 asigne 0
					if ( budget > 0 ) {
						newBudget = budget;
					}else { newBudget = 0 }
					
					// if procentage is Infinity asigne 0 
					if ( procentage === Infinity ){
						newProcentage = 0;
					}else { newProcentage = procentage; }

					return {
						income: this.income,
						expenses: this.expenses,
						budget: newBudget,
						procentage: newProcentage
					}
		}
	}
}(UIcontroller));











var controller = (function(dom, ui, controller){
	
	var setupEvents = function() {

		var selection, getInputs;

		// set month on the top of the page
		selection = dom.getDomMonthEl();
		selection.thisMonth.innerHTML =  ui.thisMonth(); 

		// remove red border on click on the document
		document.addEventListener('click', function(e){ ui.removeInputBorder(e); });

		// add item on click and button event
		getInputs = dom.getDomInputFields();
		getInputs.addBtn.addEventListener('click', function(){add(); });
		document.addEventListener('keypress', function(e){ if ( e.charCode === 13 || e.which === 13 ) {add(); } });

		var containerSelections = dom.listsContainer()
		containerSelections.container.addEventListener('click', remove);
	}

			
			
			
			


	function add() { 
		
		
		var inputEl = dom.getDomInputFields();

		// check input fields for value
		if ( ui.checkInputs() === true ) {
			
			// create a elemnt and send it with type in object
			var data = controller.createLiEl();
			
			var containers = dom.getListItems();
			if ( data.type === 'inc' ) {
				containers.incomeList.insertAdjacentHTML('beforeend', data.el);
			}else if ( data.type === 'exp' ) {
				containers.expensesList.insertAdjacentHTML('beforeend', data.el);
			}

			
	
			setBudgetData(); 
			
			// clear fields
			inputEl.description.value = "";
			inputEl.description.focus();
			inputEl.value.value = "";
		}
	}

	function remove(event) {

		var el = event.target.parentNode.parentNode.parentNode.parentNode; 
		var val = event.target.parentNode.parentNode.parentNode.firstElementChild.innerHTML;
		var num = parseInt(val.slice(1)); 
		var type = event.target.id;

		if (el) {
			el.id = 'remove';
			if ( confirm('Are you sure you want to delete this list item?') ) {
				if ( type === 'inc' ) {
					controller.income = controller.income-num;
					setBudgetData();
				}else if ( type === 'exp' ) {
					controller.expenses = controller.expenses-num;
					setBudgetData();
				}
				
				document.getElementById('remove').remove();
			} else {
				document.getElementById('remove').id="";
			}
		}
	}

	function setBudgetData() {
		// add budget and income and expenses
		var budget = controller.budgetData();
		var budgetElms = dom.getBudgetElm();

		budgetElms.income.innerHTML = '+ ' + budget.income;
		budgetElms.expenses.innerHTML = '- ' + budget.expenses;
		budgetElms.budget.innerHTML = budget.budget + ' KM';
		budgetElms.expProcentage.innerHTML = budget.procentage + ' %';
	}




	return {
		init: function() {
			console.log('Application started!');
			setupEvents();
		}
	}
}(domSelections, UIcontroller, budgetController));

controller.init()