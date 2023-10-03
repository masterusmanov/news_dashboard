let titleInput = document.querySelector('#title');
let contentInput = document.querySelector('#content');
let fileInput = document.querySelector('#file');
let form = document.querySelector('#form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = titleInput.value;
    const content = contentInput.value;
    const file = fileInput.files[0];
    
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('image', file);
    fetch('http://localhost:3000/api/posts', {
        method: 'POST',
        body: formData,
        })
        .then((response) => response.json())
        .then((data) => {
            alert("Ma'lumot qo'shildi")
          console.log('Response:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
});