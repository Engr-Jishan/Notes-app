const addBox = document.querySelector(".add-box"),
    popupBox = document.querySelector(".popup-box"),
    closeIcon = popupBox.querySelector("header i"),
    titleTag = popupBox.querySelector("input"),
    descTag = popupBox.querySelector("textarea"),
    addBtn = popupBox.querySelector("button");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// getting localstorage notes if exist and persing them 
// to js object else passing an empty array to notes
const notes = JSON.parse(localStorage.getItem("notes") || "[]");

addBox.addEventListener("click", () => {
    popupBox.classList.add("show")
});

closeIcon.addEventListener('click', () => {
    popupBox.classList.remove("show");
});

addBtn.addEventListener("click", e => {
    e.preventDefault();
    let noteTitle = titleTag.value,
        noteDesc = descTag.value;

    if (noteTitle || noteDesc) {
        let dateObj = new Date(),
            month = months[dateObj.getMonth()],
            day = dateObj.getDay(),
            year = dateObj.getFullYear();

        let noteInfo = {
            title: noteTitle, description: noteDesc, date: `${month}, ${day}, ${year}`
        }
        // adding new note ot notes
        notes.push(noteInfo);
        // saving notes to localStorage
        localStorage.setItem("notes", JSON.stringify(notes));
    }
});