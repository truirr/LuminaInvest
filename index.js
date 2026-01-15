const items = document.querySelectorAll('.feature-item');

items.forEach(item => {
    const header = item.querySelector('.feature-header');
    const icon = header.querySelector('img');

    header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        items.forEach(i => {
            i.classList.remove('active');
            i.querySelector('img').src = './img/plus.svg';
        });

        if (!isActive) {
            item.classList.add('active');
            icon.src = './img/minus.svg';
        }
    });
});



const oppTabs = document.querySelectorAll('.opp-tab');

oppTabs.forEach(tab => {
    const header = tab.querySelector('.opp-tab-header');
    const icon = header.querySelector('img');

    header.addEventListener('click', () => {
        const isActive = tab.classList.contains('active');

        oppTabs.forEach(t => {
            t.classList.remove('active');
            t.querySelector('img').src = './img/plus.svg';
        });

        if (!isActive) {
            tab.classList.add('active');
            icon.src = './img/minus.svg';
        }
    });
});

const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.menu-overlay');

function openMenu() {
    mobileMenu.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

burger.addEventListener('click', openMenu);
overlay.addEventListener('click', closeMenu);
