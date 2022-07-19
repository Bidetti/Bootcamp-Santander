const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

function changeMode(){
    try{
        changeVisual()
        changeToggle()
        console.log("Modo alterado!")
    }catch(e){
        console.log("Error ao alterar modo: \n", e)
    }
}

function changeVisual(){
    if (body.classList.contains(darkModeClass)) {
        h1.innerHTML = "Dark Mode On"
        button.innerHTML = "Light Mode"
        return;
    }

    h1.innerHTML = "Light Mode On"
    button.innerHTML = "Dark Mode"
}

function changeToggle(){
    button.classList.toggle(darkModeClass);
	h1.classList.toggle(darkModeClass);
	body.classList.toggle(darkModeClass);
	footer.classList.toggle(darkModeClass);
}

button.addEventListener("click", changeMode)