(function() {

    var 
    appBtn = document.getElementById('app-btn'),
    apptest = document.getElementById('app-test'),
    colors = ['#f00', '#0f0', '#00f', '#000', '#fff'],
    refreshColor,
    index= 0,
    init = function() {
        openFullscreen(apptest);
    },
    changeColor = function(el) {
        el.style.backgroundColor = colors[index];
        refreshColor = setInterval(function() {
            el.style.backgroundColor = colors[index];
            index++;
            if(index === colors.length) {
                index = 0;
            }
        }, 2000);
        index +=1;
    },
    openFullscreen = function(el) {
        if (el.requestFullscreen) {
            el.requestFullscreen();
        } else if (el.mozRequestFullScreen) { /* Firefox */
            el.mozRequestFullScreen();
        } else if (el.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            el.webkitRequestFullscreen();
        } else if (el.msRequestFullscreen) { /* IE/Edge */
            el.msRequestFullscreen();
        }       
        
        if (document.exitFullscreen) {
            closeApp();
        }
        
        changeColor(el);
    },
    closeApp = function(ev) {
            clearInterval(refreshColor);
            index= 0;
    };


    appBtn.addEventListener('click', init);
})();