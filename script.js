const nuevaTarea = document.getElementById('nuevaTarea');
const agregarBtn = document.getElementById('agregarBtn');
const listaTareas = document.getElementById('listaTareas');

agregarBtn.addEventListener('click', () => {
    const texto = nuevaTarea.value.trim();
    if (texto === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
        ${texto} 
        <button class="eliminarBtn">X</button>
    `;
    listaTareas.appendChild(li);
    nuevaTarea.value ='';
    
    li.querySelector('.eliminarBtn').addEventListener('click', () => {
        listaTareas.removeChild(li);        
    });
});
