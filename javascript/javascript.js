console.log("script linked!");

const colorMode = document.getElementById('colorMode');
colorMode.addEventListener('click', () => {
    document.body.classList.toggle('dark');
})