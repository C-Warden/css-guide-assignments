var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var noButton = document.querySelector('.modal__action--negative');

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
}

const closeModal = () => {
    modal.style.display = 'none';
    if (modal) {
        backdrop.classList.add('open');
    }
};

noButton.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);