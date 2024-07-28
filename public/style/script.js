function checkVisibility(element, options) {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Element is visible');
                document.getElementById("w_post").style.visibility="hidden";
            } else {
                console.log('Element is not visible');
                document.getElementById("w_post").style.visibility="visible";

            }
        });
    }, options);

    observer.observe(element);
}

document.addEventListener('DOMContentLoaded', () => {
    const element = document.getElementById('w_btn');
    const options = {
        root: null, // Use the viewport as the root
        rootMargin: '42px',
        threshold: 1.0 // Trigger callback when 100% of the element is visible
    };

    checkVisibility(element, options);
});




function handleClick() {
    const inputs = document.querySelectorAll('.f_one input[type="submit"]');
    for(let i = 0; i < inputs.length; i++) {
        inputs[i].classList.toggle('hid');
    }
    document.querySelector(".header").classList.toggle("transformed-state");
    document.querySelector(".container").classList.toggle("transformed-state-2");
}

document.getElementsByClassName('threeL')[0].addEventListener('click', handleClick);




