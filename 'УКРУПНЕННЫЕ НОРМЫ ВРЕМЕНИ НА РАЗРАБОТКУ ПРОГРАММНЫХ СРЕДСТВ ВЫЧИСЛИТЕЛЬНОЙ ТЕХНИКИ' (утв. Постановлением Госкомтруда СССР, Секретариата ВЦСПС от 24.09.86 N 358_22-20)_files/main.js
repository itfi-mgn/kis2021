function show_hide(more_text) {
    if (document.getElementById(more_text).style.display == "none") {
        $('#' + more_text).show();
    } else {
        $('#' + more_text).hide();
    }
}