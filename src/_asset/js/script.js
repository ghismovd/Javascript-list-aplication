const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');

addItemInput.addEventListener('keydown', function (e) {
  var value = this.value;
  let ul = document.querySelector('ul.uncompletet_tasks');  
  var li = document.createElement('li');
  if (e.code === 'Enter' && value) {
    if(addItemInput.value){
      addItem(value);
    }
  }
});


addItemButton.addEventListener('click', addItem)

function addItem(){ 
  let ul = document.querySelector('ul.uncompletet_tasks');  
  var li = document.createElement('li');
  if(addItemInput.value===''){
    addItemInput.value='';
  }else{
    li.textContent = addItemInput.value;
    ul.insertBefore(li,ul.childNodes[0]);
    addItemInput.value = '';
  }
  
  let buttons = document.createElement('div');
  buttons.classList.add('buttons');
  li.appendChild(buttons);
  
  let remove = document.createElement('button');
  remove.classList.add('app_icon-cancel-circle');
  buttons.appendChild(remove);
  
	remove.addEventListener('click', removeItem);
  
  let complete = document.createElement('button');
  complete.classList.add('app_icon-checkbox-checked');
  buttons.appendChild(complete);
  
	complete.addEventListener('click',completeItem );
  
}
  
  function removeItem() {
    let item = this.parentNode.parentNode;
    let parent = item.parentNode;
    
    parent.removeChild(item);
  }
  
  function completeItem() {
  let item = this.parentNode.parentNode;
	let parent = item.parentNode;
	let id = parent.className;
 
  if(id === 'uncompletet_tasks'){
    id='completed_tasks';
  }
  else{
    id='uncompletet_tasks';
  }

	// Check if the item should be added to the completed list or to re-added to the todo list
	let target = (id === 'uncompletet_tasks') ? document.querySelector('.uncompletet_tasks'):document.querySelector('.completed_tasks');
  console.log(item);
  parent.removeChild(item);
	target.insertBefore(item, target.childNodes[0]);
}
  