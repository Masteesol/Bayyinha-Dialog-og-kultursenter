const buttonOne = document.querySelector('#tilbud-one button');
const buttonTwo = document.querySelector('#tilbud-two button');
const buttonThree = document.querySelector('#tilbud-three button');

let toggleOne = false
buttonOne.addEventListener("click", function() {
    const container = document.querySelector(`#${this.parentElement.id}`);
    if(!toggleOne) {
        container.classList.replace(container.className, container.className + "-active");
        toggleOne = !toggleOne;
    } else {
        container.classList.replace(container.className, container.className.replace("-active", ""));
        toggleOne = !toggleOne;
    }
})

let toggleTwo = false
buttonTwo.addEventListener("click", function() {
    const container = document.querySelector(`#${this.parentElement.id}`);
    if(!toggleTwo) {
        container.classList.replace(container.className, container.className + "-active");
        toggleTwo = !toggleTwo;
    } else {
        container.classList.replace(container.className, container.className.replace("-active", ""));
        toggleTwo = !toggleTwo;
    }
})

let toggleThree = false
buttonThree.addEventListener("click", function() {
    const container = document.querySelector(`#${this.parentElement.id}`);
    if(!toggleThree) {
        container.classList.replace(container.className, container.className + "-active");
        toggleThree = !toggleThree;
    } else {
        container.classList.replace(container.className, container.className.replace("-active", ""));
        toggleThree = !toggleThree;
    }
})
