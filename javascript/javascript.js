console.log("script linked!");

function DarkMode() {
    const body = document.body;
    body.classList.toggle('dark'); 

    const KeepDark = body.classList.contains('dark');
    localStorage.setItem('darkMode', KeepDark);

    body.classList.remove('dark-no-trans');
}

window.onload = function() {
    const KeepDark = JSON.parse(localStorage.getItem('darkMode'));
    if (KeepDark) {
        document.body.classList.add('dark');
        document.body.classList.add('dark-no-trans');
    }

    setTimeout(() => {
        document.body.classList.remove('dark-no-trans');
    }, 100);
}

const colorMode = document.getElementById('colorMode');
colorMode.addEventListener('click', DarkMode);

document.getElementById("verzend").addEventListener("submit", function(event) {
    event.preventDefault(); // Voorkom standaardgedrag van het formulier

    var errorMessage = "Word nog aan gewerkt maar bedankt voor de moeite <33"; 

    alert(errorMessage);
});