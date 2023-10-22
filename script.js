// HAMBURGER
function openNav() {
    document.getElementById("sideNav").style.width = "250px";
}
function closeNav() {
    document.getElementById("sideNav").style.width = "0";
}
// NAVBAR SCROLL SHOW & HIDE
window.onscroll = function () { scrollFunction() };
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

    if (currentScrollPos === 0) {
        document.getElementById("scrollNav").style.top = "-100px";
    } else if (prevScrollpos > currentScrollPos) {
        document.getElementById("scrollNav").style.top = "0";
    } else {
        document.getElementById("scrollNav").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}
// GREETINGS VIEW MORE BUTTON
function viewMore(batchNumber) {
    const b2Container = document.getElementById('b2');
    const b3Container = document.getElementById('b3');
    const b4Container = document.getElementById('b4');
    var viewMoreBtn = document.getElementById('viewMoreBtn');
    switch (batchNumber) {
        case "b2":
            if (parseInt(b2Container.style.maxHeight) === 0) {
                b2Container.style.maxHeight = "2000%";
                b2Container.style.opacity = "1";
                viewMoreBtn.setAttribute('onclick', "viewMore('b3')");
                window.location = '#b2';
            }
            break;

        case "b3":
            if (parseInt(b3Container.style.maxHeight) === 0) {
                b3Container.style.maxHeight = "2000%";
                b3Container.style.opacity = "1";
                viewMoreBtn.setAttribute('onclick', "viewMore('b4')");
                window.location = '#b3';
            }
            break;

        case "b4":
            if (parseInt(b4Container.style.maxHeight) === 0) {
                b4Container.style.maxHeight = "2000%";
                b4Container.style.opacity = "1";
                viewMoreBtn.textContent = 'View Less';
                window.location = '#b4';
            } else {
                b2Container.style.maxHeight = "0";
                b3Container.style.maxHeight = "0";
                b4Container.style.maxHeight = "0";
                b3Container.style.opacity = "0";
                b2Container.style.opacity = "0";
                b4Container.style.opacity = "0";
                viewMoreBtn.setAttribute('onclick', "viewMore('b2')");
                viewMoreBtn.textContent = 'View More';
                window.location = '#greetings';
            }
            break;
    }
}
// REVEAL EFFECT ON SCROLL
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 20;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("reveal_active");
        } else {
            reveals[i].classList.remove("reveal_active");
        }
    }
}
window.addEventListener("scroll", reveal);