const initAboutScroll = (aboutSection, introduction_h1, introduction_p, highlights, navbar) => {
    let currentSectionIndex = 0;
    let isScrolling = false;

    const scrollToSection = (sections, index) => {
        if (index <= 0) {
            index = 0;
            aboutSection.scrollIntoView({ behavior: 'smooth' });

            introduction_h1.style.display = "flex";
            introduction_h1.style.animation = "goalup  2s forwards";

            introduction_p.style.display = "block";
            introduction_p.style.animation = "goalup 3s forwards";

            setTimeout(() => {
                highlights.forEach((highlight, index) => {
                    highlight.style.animation = `colorChange 0.5s forwards`;
                    highlight.style.animationDelay = `${index * 0.7}s`;
                });
            }, 3000);

            navbar.style.animation = "navdown 1.3s forwards";
            console.log("Reached the first section");
        } else if (index >= sections.length) {
            index = sections.length - 1;
            console.log("Reached the last section");
        } else {
            console.log(`Scrolling to section ${index}`);
            sections[index].scrollIntoView({ behavior: 'smooth' });

            introduction_h1.style.animation = "goaldown  0.3s forwards";

            introduction_p.style.animation = "goaldown 0.5s forwards";

            highlights.forEach((highlight) => {
                highlight.style.animation = null;
                highlight.style.animationDelay = null;
            });

            setTimeout(() => {
                introduction_h1.style.display = null;
                introduction_p.style.display = null;
            }, 500);

            navbar.style.animation = "navup 0.4s forwards";
        }

        return index;
    };

    aboutSection.addEventListener('wheel', (event) => {
        if (!isScrolling && window.location.hash === "#about") {
            isScrolling = true;
            const direction = event.deltaY > 0 ? 1 : -1;
            currentSectionIndex += direction;
            const sections = aboutSection.querySelectorAll(':scope > div');
            currentSectionIndex = scrollToSection(sections, currentSectionIndex);
            setTimeout(() => {
                isScrolling = false;
            }, 1000);
        }
    });
};