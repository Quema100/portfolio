window.onload = () => {
    console.log("Window loaded");

    const home = document.getElementById('home');
    const about = document.getElementById('about');
    const introduction_h1 = document.querySelector('.introduction-h1')
    const introduction_p = document.querySelector('.introduction-p')
    const introduction_highlights = document.querySelectorAll("#about>.introduction .highlight")
    const goal_h1 = document.querySelector('.goal-h1');
    const goal_p = document.querySelector('.goal-p');
    const goal_highlights = document.querySelectorAll("#home>.goals .highlight");
    const navbar = document.querySelector('.navbar');

    if (!window.location.hash) {
        window.location.hash = "#home";
        console.log("Home section");
    }


    switch (window.location.hash) {
        case "#home":
            setTimeout(() => {
                home.scrollIntoView({ behavior: 'smooth' });
                navbar.style.animation = "navdown 1.3s forwards";
                console.log("Home section");
            }, 0);
            break;
        case "#about":
            setTimeout(() => {
                about.scrollIntoView({ behavior: 'smooth' });

                introduction_h1.style.display = "flex";
                introduction_h1.style.animation = "goalup  2s forwards";

                introduction_p.style.display = "block";
                introduction_p.style.animation = "goalup 3s forwards";

                setTimeout(() => {
                    introduction_highlights.forEach((highlights, index) => {
                        highlights.style.animation = `colorChange 0.5s forwards`;
                        highlights.style.animationDelay = `${index * 0.7}s`;
                    });
                }, 3000);

            }, 10);
            navbar.style.animation = "navdown 1.3s forwards";
            console.log("About section");
            break;
        case "#contact":
            navbar.style.animation = "navdown 1.3s forwards";
            secretmessage();
            console.log("Contact section");
            break;
        default:
            console.log("No valid section found");
    };

    window.addEventListener('hashchange', () => {
        console.log('New hash:', window.location.hash);

        if (window.location.hash === '#about') {
            introduction_h1.style.display = "flex";
            introduction_h1.style.animation = "goalup  2s forwards";

            introduction_p.style.display = "block";
            introduction_p.style.animation = "goalup 3s forwards";

            setTimeout(() => {
                introduction_highlights.forEach((highlights, index) => {
                    highlights.style.animation = `colorChange 0.5s forwards`;
                    highlights.style.animationDelay = `${index * 0.7}s`;
                });
            }, 3000);
        } else {
            introduction_h1.style.animation = "goaldown  0.3s forwards";

            introduction_p.style.animation = "goaldown 0.5s forwards";

            introduction_highlights.forEach((highlight) => {
                highlight.style.animation = null;
                highlight.style.animationDelay = null;
            });

            setTimeout(() => {
                introduction_h1.style.display = null;
                introduction_p.style.display = null;
            }, 500);
        }
    });

    nav();
    rollerfun();
    initHomeScroll(home, goal_h1, goal_p, goal_highlights, navbar);
    initAboutScroll(about, introduction_h1, introduction_p, introduction_highlights, navbar);
};
