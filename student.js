const tableBody = document.querySelector('#studentTable tbody');
const addStudentForm = document.querySelector('#addStudentForm');
const editStudentForm = document.querySelector('#editStudentForm');

let students = [];

// Retrieve student data from JSON file
fetch("https://jsonplaceholder.typicode.com/users",{
    methed: "GET",
    headers:{
}}).then(response => response.json()).then(data => {
		students = data;
		renderTable();
	})
	.catch(error => console.error(error));

// Render table with student data
function renderTable() {
	tableBody.innerHTML = '';
	for (let i = 0; i < students.length; i++) {
		const student = students[i];
		const row = document.createElement('tr');
		row.innerHTML = `
			<td>${student.id}</td>
			<td>${student.name}</td>
			<td>${student.email}</td>			
			<td>${student.phone}</td>
			<td>
				<button class="edit-btn" data-id="${student.id}">Edit</button>
				<button class="delete-btn" data-id="${student.id}">Delete</button>
                </td>
                `;
                tableBody.appendChild(row);
                }

    // Add event listeners to edit and delete buttons
                const editButtons = document.querySelectorAll('.edit-btn');
                editButtons.forEach(button => button.addEventListener('click', handleEdit));
                const deleteButtons = document.querySelectorAll('.delete-btn');
                deleteButtons.forEach(button => button.addEventListener('click', handleDelete));
            }
// Handle form submission for adding a new student
addStudentForm.addEventListener('submit', event => {
    event.preventDefault();
    const name = addStudentForm.elements['name'].value;
    const email = addStudentForm.elements['email'].value;
    const phone = addStudentForm.elements['phone'].value;
    const newStudent = {
    id: students.length + 1,
    name: name,
    email: email,
    phone: phone
    };
    students.push(newStudent);
    renderTable();
    saveToLocalStorage();
    addStudentForm.reset();
    });
    
   
    
    
    // Handle edit button click
function handleEdit(event) {
    const id = event.target.dataset.id;
    const student = students.find(student => student.id == id);
    editStudentForm.elements['id'].value = student.id;
    editStudentForm.elements['name'].value = student.name;
    editStudentForm.elements['email'].value = student.email;
    editStudentForm.elements['phone'].value = student.phone;
  
    // Hide student table and show edit student form
    document.querySelector('#studentTable').classList.add('hidden');
    document.querySelector('#editStudentForm').classList.remove('hidden');
  
    // Add event listener to submit button on edit student form
    document.querySelector('#editStudentForm').addEventListener('submit', handleEditSubmit);
  }
  
  // Handle edit student form submission
  function handleEditSubmit(event) {
    event.preventDefault();
  
    // Retrieve updated student information from edit form
    const id = editStudentForm.elements['id'].value;
    const name = editStudentForm.elements['name'].value;
    const email = editStudentForm.elements['email'].value;
    const phone = editStudentForm.elements['phone'].value;
  
    // Update the corresponding student object in the array
    const studentIndex = students.findIndex(student => student.id == id);
    students[studentIndex].name = name;
    students[studentIndex].email = email;
    students[studentIndex].phone = phone;
  
    // Hide edit student form and show student table again
    document.querySelector('#editStudentForm').classList.add('hidden');
    document.querySelector('#studentTable').classList.remove('hidden');
  
    // Re-render the table with the updated student data
    renderTable();
  
    // Save the updated student data to local storage
    saveToLocalStorage();
  }
  
    
    // Save student data to localStorage
    function saveToLocalStorage() {
    localStorage.setItem('students', JSON.stringify(students));
    }
    
    // Load student data from localStorage
    function loadFromLocalStorage() {
    const savedStudents = localStorage.getItem('students');
    if (savedStudents) {
    students = JSON.parse(savedStudents);
    renderTable();
    }
    }

    function handleDelete(event) {
        const id = event.target.dataset.id;
        const studentIndex = students.findIndex(student => student.id == id);
        students.splice(studentIndex, 1);
        renderTable();
        saveToLocalStorage();
      }
      
    
    // loadFromLocalStorage();