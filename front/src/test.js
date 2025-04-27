const element = document.getElementById("sidebar_search_btn");
element.addEventListener("click", function() {
    let sidebar = document.getElementById("sidebar-notelist-wrapper");
    sidebar.insertAdjacentHTML("beforeend", '<div class="note">\n' +
        '            <div class="note-item header">\n' +
        '              <span class="note-header">I need more ennies MutherFuckers!</span>\n' +
        '            </div>\n' +
        '            <div class="note-item tag">\n' +
        '              <span class="note-tag-header">Tag:</span><span class="note-tag">Ennie problems</span>\n' +
        '            </div>\n' +
        '            <div class="note-item author">\n' +
        '              <span class="note-author-header">Author:</span\n' +
        '              ><span class="note-author">FreshDog@cbr.com</span>\n' +
        '            </div>\n' +
        '          </div>');
});