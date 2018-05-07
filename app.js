const list = document.querySelector('#book-list ul');

// delete books
list.addEventListener('click', function(e){
  if(e.target.className === 'delete'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});


// add books
const addForm = document.forms['add-book'];
addForm.addEventListener('submit', function(e){
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;
  
  // create elements
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');
  
  // add classes
  bookName.classList.add('name');
  deleteBtn.classList.add('delete');
  
  // add content
  bookName.textContent = value;
  deleteBtn.textContent = 'delete'; 
  
  // append to document
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li)
  
});