(function() {

    var screen = document.getElementById('screenColor'),
        colors = ['red', 'green', 'blue'],
        index = 0;

    function changeColor() {
        setInterval(function() {
            screen.style.backgroundColor = colors[index];
            if(index < colors.length) {
                index++;
            } else {
                index = 0;
            }
        }, 1000)
    }

    window.addEventListener('DOMContentLoaded', changeColor);

})()