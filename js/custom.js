/* Add your custom Javascrit here */
function not_chosen_yet() {
    var i = document.getElementById("ital_text");
    var a = document.getElementById("attic_text");
    return a.style.display === "none" && i.style.display === "none"
}

function show_next() {
    document.getElementById('next').style.display = "inline-block";
}

function choose_ital() {
    var x = document.getElementById("ital_text");
    //show_next();
    if (not_chosen_yet()) {
        x.style.display = "block";
    }
}

function choose_attic() {
    var x = document.getElementById("attic_text");
    //show_next();
    if (not_chosen_yet()) {
        x.style.display = "block";
    }
}
