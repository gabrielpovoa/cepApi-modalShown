const AllInput = document.querySelectorAll('.box');
const SectionCepArea = document.querySelector('.container');

const buttonLocation = document.getElementById("box-button");
const modalArea = document.querySelector('.modal-click');
const closeModalBtn = document.querySelector('.close-modal');
const receiveLetters = document.getElementById('receiveLetters');


let cepClick = document.getElementById('cep-field');

const FilltheField = (data) => {
    document.getElementById('logradouro').value = data.logradouro;
    document.getElementById('localidade').value = `${data.localidade} - ${data.bairro}`;
    document.getElementById('unidade-federal').value = data.uf;
}

const setApi = async () => {
    let cep = document.querySelector('#cep-field').value;
    try {
        let BASEURL = `https://viacep.com.br/ws/${cep}/json/`;
        const response = await fetch(BASEURL);
        const data = await response.json();
        FilltheField(data);
    } catch (err) {
        console.log('Uff! We got an error');
    }
};

buttonLocation.onclick = () => {
    modalArea.style.display = 'initial';
    SectionCepArea.style.display = 'none';
}


cepClick.addEventListener('focusout', setApi)

function closeModal() {
    modalArea.style.opacity = 0;
    setTimeout(() => {
        modalArea.style.display = 'none';
        SectionCepArea.style.display = 'initial'
    }, 500);
}

closeModalBtn.addEventListener('click', () => {closeModal()})
