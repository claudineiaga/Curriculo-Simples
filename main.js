// Menu links
let getSobre = document.getElementById("getSobre");
let getResume = document.getElementById("getResume");
let getContact = document.getElementById("getContact");

// Secoes
let sobre = document.getElementById("sobre");
let resume = document.getElementById("resume");
let contact = document.getElementById("contact");

function removeClass() {
    // Links
    getSobre.classList.remove('selected');
    getResume.classList.remove('selected');
    getContact.classList.remove('selected');
    // Secoes
    sobre.classList.remove('view');
    resume.classList.remove('view');
    contact.classList.remove('view');
}

getSobre.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        removeClass();
        sobre.classList.add('view');
        getSobre.classList.add('selected');
    }

});
getResume.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        removeClass();
        resume.classList.add('view');
        getResume.classList.add('selected');
    }
});
getContact.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        removeClass();
        contact.classList.add('view');
        getContact.classList.add('selected');
    }
})
