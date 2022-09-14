const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    list.innerHTML += html;                 //adaugare continut la lista

};

addForm.addEventListener('submit', e => {
    e.preventDefault();                     //pentru a nu-si da refresh singur la enter
    const todo = addForm.add.value.trim();  //trim() pentru a scapa de spatii
    // console.log(todo);
    if(todo.length){                        //pentru a nu putea adauga un rand gol
        generateTemplate(todo);
        addForm.reset();                    //dupa enter nu mai ramane continutul
    }
});


//delete todos
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();     //cu .parentElement de la icon ne mutam la lista sa o stergem
    }
});

const filterTodos = (term) => {

    Array.from(list.children) //htmlcolection to array
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add('filtered'));
        //daca term nu e in todo(li ->span->content) ramane in noul array
         //scoatem ce se gaseste si adaugam dupa clasa pentru a nu le mai afisa

    Array.from(list.children) //htmlcolection to array
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove('filtered'));
};

//keyup event
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});