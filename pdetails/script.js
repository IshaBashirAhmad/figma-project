
function changeColor(button1) {
    
    let buttons1 = document.querySelectorAll('.chng-clr');
    buttons1.forEach(btn => btn.classList.remove('activee'));

    
    button1.classList.add('activee');
}

// change the color of other buttons

function changeColor(button2) {
    // Remove 'active' class from all buttons
    let buttons2 = document.querySelectorAll('.chng-clr2');
    buttons2.forEach(btn => btn.classList.remove('activee2'));

    // Add 'active' class to the clicked button
    button2.classList.add('activee2');
}