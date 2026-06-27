
const modalData = {
    walking: {
        title: "Dog Walking",
        img: "img/dog-walking.png",
        text: "Our professional dog walkers are background-checked and insured. They'll keep your furry friend active, socialised, and happy while you're away. Each walk includes a GPS route and photo update."
    },
    calendar: {
        title: "Flexible Booking",
        img: "img/calendar.png",
        text: "Need someone today? No problem. Prefer to plan ahead? We've got you. Book same-day walks or schedule weeks in advance your schedule, your way."
    },
    map: {
        title: "Local Carers",
        img: "img/map.png",
        text: "Every carer on PetPal is local to you. Find trusted pet sitters and walkers within walking distance of your home so your pet stays comfortable in familiar surroundings."
    },
    rate: {
        title: "Verified Reviews",
        img: "img/rate.png",
        text: "Every review on PetPal is from a real, verified pet owner. No fake ratings just honest feedback so you can find the perfect carer with confidence."
    }
};

function openModal(type) {
    const data = modalData[type];
    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-text').textContent = data.text;
    document.getElementById('modal-img').src = data.img;

    const modal = document.getElementById('modal');
    const modalCard = document.querySelector('.modal-card');

    modalCard.style.transform = 'scale(0.9)';
    modalCard.style.opacity = '0';
    modal.style.backgroundColor = 'rgba(0,0,0,0)';  // starts transparent
    modal.style.display = 'flex';

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            modalCard.style.transition = 'transform 0.2s ease-out, opacity 0.2s ease-out';
            modalCard.style.transform = 'scale(1)';
            modalCard.style.opacity = '1';

            modal.style.transition = 'background-color 0.2s ease-out';
            modal.style.backgroundColor = 'rgba(0,0,0,0.7)';  // fades to dark
        });
    });
}

function closeModal() {
    const modal = document.getElementById('modal');
    const modalCard = document.querySelector('.modal-card');

    // fade out card
    modalCard.style.transform = 'scale(0.9)';
    modalCard.style.opacity = '0';
    modalCard.style.transition = 'transform 0.2s ease-out, opacity 0.2s ease-out';

    // fade out backdrop
    modal.style.backgroundColor = 'rgba(0,0,0,0)';
    modal.style.transition = 'background-color 0.2s ease-out';

    setTimeout(() => {
        modal.style.display = 'none';
        // reset everything
        modalCard.style.transform = '';
        modalCard.style.opacity = '';
        modal.style.backgroundColor = '';
        modal.style.transition = '';
    }, 200);
}


