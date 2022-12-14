const inputName = document.getElementById('inputName');
const textComment = document.getElementById('inputText');
const form = document.getElementById('formulario');
const commentPost = document.getElementById('commentPost');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let p = document.createElement('p');
    p.classList = 'p-2 d-flex text-wrap text-snow flex-wrap'
    p.innerHTML = `<strong>${inputName.value}:</strong>&nbsp${textComment.value}`;
    commentPost.appendChild(p);
    esvaziarForm();
    inputName.focus();
});

function esvaziarForm() {
    inputName.value = '';
    textComment.value = '';
}