export default function init() {
    const button = document.getElementById('hotel_button_back');
    const target = document.querySelector('.cards-list');

    button.addEventListener('click', () => {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

}
