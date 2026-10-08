function initHotelTabs(section) {
    if (section.dataset.hotelTabsInitialized) return;

    const [firstButton, secondButton] = section.querySelectorAll('.hotel_tabs__buttons > coral-button');
    const firstPanel = section.querySelector('.hotel_tabs__content--1');
    const secondPanel = section.querySelector('.hotel_tabs__content--2');
    if (!firstButton || !secondButton || !firstPanel || !secondPanel) return;

    function switchTab(showFirst) {
        firstPanel.hidden = !showFirst;
        secondPanel.hidden = showFirst;
        firstButton.setAttribute('trait', showFirst ? 'vivid' : 'ghost');
        secondButton.setAttribute('trait', showFirst ? 'ghost' : 'vivid');
        firstButton.querySelector('button')?.setAttribute('aria-pressed', String(showFirst));
        secondButton.querySelector('button')?.setAttribute('aria-pressed', String(!showFirst));
    }

    firstButton.addEventListener('click', () => switchTab(true));
    secondButton.addEventListener('click', () => switchTab(false));
    switchTab(true);
    section.dataset.hotelTabsInitialized = 'true';
}

export default function init() {
    const section = document.querySelector('.hotel_tabs_bf2026');
    if (!section) return;

    initHotelTabs(section);

    const backButton = section.querySelector('#hotel_button_back');
    const target = document.querySelector('.cards-list');

    if (backButton && target && !backButton.dataset.hotelBackInitialized) {
        backButton.addEventListener('click', () => {
            target.scrollIntoView({
                behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
                block: 'start'
            });
        });
        backButton.dataset.hotelBackInitialized = 'true';
    }
}
