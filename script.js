document.addEventListener("DOMContentLoaded", function() {
    const text = "I AM\nMASUMA RASULI\nGraphic Designer & Digital Painter";
    const typingSpeed = 100; // Adjust typing speed here (milliseconds)
    const restartDelay = 2000; // Delay before restarting the typing animation (milliseconds)
    let index = 0;

    function type() {
        if (index < text.length) {
            if (text[index] === "\n") {
                document.getElementById("auto-type").innerHTML += "<br>";
            } else {
                document.getElementById("auto-type").innerHTML += text[index];
            }
            index++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(restartTyping, restartDelay);
        }
    }

    function restartTyping() {
        document.getElementById("auto-type").innerHTML = "";
        index = 0;
        type();
    }

    type();
});
// script.js
document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    var closeBtn = document.getElementsByClassName("close")[0];

    document.querySelectorAll('.gallery img').forEach(function(image) {
        image.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    closeBtn.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});
