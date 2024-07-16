document.querySelectorAll('.dropdown-menu input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        document.querySelectorAll('.dropdown-menu input[type="checkbox"]').forEach(cb => cb.checked = false);
        this.checked = true;
        document.getElementById('dropdownButton').textContent = this.value;
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.dropdown-togglee');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    toggleButton.addEventListener('click', function() {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function(event) {
        if (!toggleButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
});

// change the colors of buttons

function changeColor(button) {
    // Remove 'active' class from all buttons
    let buttons = document.querySelectorAll('button');
    buttons.forEach(btn => btn.classList.remove('activee'));

    // Add 'active' class to the clicked button
    button.classList.add('activee');
}
