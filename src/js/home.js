const initHomeScroll = (homeSection, goal_h1, goal_p, highlights, navbar) => {
    let currentSectionIndex = 0;
    let isScrolling = false;

    const scrollToSection = (sections, index) => {
        if (index <= 0) {
            index = 0;
            homeSection.scrollIntoView({ behavior: 'smooth' });
            navbar.style.animation = "navdown 1.3s forwards";
            console.log("Reached the first section");
        } else if (index >= sections.length) {
            index = sections.length - 1;
            console.log("Reached the last section");
        } else if (index === 2) {
            console.log(`Scrolling to section ${index}`);
            sections[index].scrollIntoView({ behavior: 'smooth' });

            goal_h1.style.display = "flex";
            goal_h1.style.animation = "goalup  2s forwards";

            goal_p.style.display = "block";
            goal_p.style.animation = "goalup 3s forwards";

            setTimeout(() => {
                highlights.forEach((highlight, index) => {
                    highlight.style.animation = `colorChange 0.5s forwards`;
                    highlight.style.animationDelay = `${index * 0.7}s`;
                });
            }, 3000);
            navbar.style.animation = "navup 0.4s forwards";
        } else {
            console.log(`Scrolling to section ${index}`);
            sections[index].scrollIntoView({ behavior: 'smooth' });

            goal_h1.style.animation = "goaldown  0.3s forwards";

            goal_p.style.animation = "goaldown 0.5s forwards";

            highlights.forEach((highlight) => {
                highlight.style.animation = null;
                highlight.style.animationDelay = null;
            });

            setTimeout(() => {
                goal_h1.style.display = null;
                goal_p.style.display = null;
            }, 500);

            navbar.style.animation = "navup 0.4s forwards";
        }

        return index;
    };

    homeSection.addEventListener('wheel', (event) => {
        if (!isScrolling && window.location.hash === "#home") {
            isScrolling = true;
            const direction = event.deltaY > 0 ? 1 : -1;
            currentSectionIndex += direction;
            const sections = homeSection.querySelectorAll(':scope > div');
            currentSectionIndex = scrollToSection(sections, currentSectionIndex);
            setTimeout(() => {
                isScrolling = false;
            }, 1000);
        }
    });
};

const rollerfun = () => {
    let roller = document.querySelector('.rolling-list');
    roller.id = 'mainroller';

    let clone = roller.cloneNode(true)

    clone.id = 'cloneroller';
    document.querySelector('.wrap').appendChild(clone);

    document.querySelector('#mainroller').style.left = '0px';
    document.querySelector('#mainroller').style.left = document.querySelector('.rolling-list ul').offsetWidth + 'px';

    roller.classList.add('original');
    clone.classList.add('clone');
}