const createForm = document.querySelector('#createNote')
const titleInput = createForm.title
const descriptionInput = createForm.description

createForm.onsubmit = function (evt) {
    evt.preventDefault()  // prevents the page from reloading and sending data to the server

    if (!titleInput.value.trim() || !descriptionInput.value.trim()) {
        let errorMsg = 'Title or Description cannot be empty'
        alert(errorMsg)
        throw new Error(errorMsg)
    }

    console.clear()

    let stickyNote = {
        title: titleInput.value,
        description: descriptionInput.value,
        date_created: new Date().toDateString()
    }

    console.log(stickyNote)
    notes.innerHTML += generateStickyNote(stickyNote)
    titleInput.value = ''
    descriptionInput.value = ''
}

function generateStickyNote (note) {
    return `
        <div class="p-5 border rounded-lg shadow">
            <h2>${note.title}</h2>
            <p>${note.description}</p>
            <p>Created: ${note.date_created}</p>
        </div>
    `
}