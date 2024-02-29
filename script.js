
function getFormvalue() {
    // Get the form element
    var form = document.getElementById('form1');
    
    // Get the input values
    var firstName = form.elements['fname'].value;
    var lastName = form.elements['lname'].value;
    
    // Concatenate first and last name
    var fullName = firstName + ' ' + lastName;
    
    // Display the full name in an alert
    alert(fullName);
}
