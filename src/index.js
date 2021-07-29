const Addbtn = document.getElementById('addForm');
const formContainer = document.getElementById('form');
let removeBtns = document.querySelectorAll('.removeForm');
let idCount = 1;

const inputGroup = document.querySelector('.input-wrapper');
inputGroup.setAttribute('id', `inputWrapper${idCount}`);
const inputGroupTemplate = inputGroup.cloneNode(true);



$(document).ready(function() {
    $('.js-example-basic-single').select2({
        theme: "bootstrap-5",
    });

    const header = document.querySelector('header');

    removeBtns[0].addEventListener('click', (event) => {
        formContainer.removeChild(document.getElementById('inputWrapper1'));
    })

    Addbtn.addEventListener('click', () => {
        $(document).ready(function() {
            $('.js-example-basic-single').select2({
                theme: "bootstrap-5",
            });
        });
        idCount++;
        const inputGroupInstance = inputGroupTemplate.cloneNode(true);
        inputGroupInstance.setAttribute('id', `inputWrapper${idCount}`);
        formContainer.appendChild(inputGroupInstance);
        const removeCandidate = document.getElementById(`inputWrapper${idCount}`);
        removeBtns = document.querySelectorAll('.removeForm');
        removeBtns[removeBtns.length - 1].addEventListener('click', (event) => {
            formContainer.removeChild(removeCandidate);
            if (header.getBoundingClientRect().top >= 0) {
                header.classList.remove('show');
            }
        })
    
        if (header.getBoundingClientRect().top == 0) {
            header.classList.add('show');
        }
    })
});
