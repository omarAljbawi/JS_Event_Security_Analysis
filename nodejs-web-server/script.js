document.addEventListener('DOMContentLoaded', function() {
    // Get references to HTML elements
    const button = document.getElementById('saveButton');
    const firstnameInput = document.getElementById('firstname');
    const lastnameInput = document.getElementById('lastname');
    const ageSelect = document.getElementById('ageSelect');
    const selectedAgeField = document.getElementById('selectedAge');

    button.addEventListener('click', function() {
        alert('Button clicked!');
    });

    firstnameInput.addEventListener('input', function(e) {
        console.log('Input changed firstname:', e.currentTarget.value);
    });

    lastnameInput.addEventListener('input', function(e) {
        console.log('Input changed lastname:', e.currentTarget.value);
    });

    // Populate dropdown with age options
    for (let age = 1; age <= 100; age++) {
        const option = document.createElement('option');
        option.value = age;
        option.textContent = age;
        ageSelect.appendChild(option);
    }


    // Add event listener to the dropdown menu
    ageSelect.addEventListener('change', function() {
        // Update the read-only text field with the selected age
        selectedAgeField.value = this.value;
    });

});
