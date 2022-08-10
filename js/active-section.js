// Entry Point:
document.addEventListener('DOMContentLoaded', () => {
    // Obtain Desired Elements From The DOM:
    const headerMainLinks = document.querySelectorAll('#links > li > a');
    const headerLinks = document.querySelectorAll('header a');
    const sections = document.querySelectorAll('section');

    /**
     * @description Update active class within header links.
     * @param {a Element} activeLink
     */
    const changeStatus = (activeLink) => {
        // Remove active class from ALL links, if exists:
        headerLinks.forEach((headerLink) => {
            if (headerLink.classList.contains('active')) {
                headerLink.classList.remove('active');
            }
        });
        // Add active class on the desired link:
        activeLink.classList.add('active');
    };

    // Scrolling Behavior:
    window.addEventListener('scroll', () => {
        sections.forEach((section, key) => {
            // Desired Conditions:
            const condition = section.getBoundingClientRect().top <= 200
                                && section.getBoundingClientRect().bottom >= 200;
            if (condition) {
                try {
                    // Change The Current Link Status:
                    const activeLink = document.querySelector(`header a[href="#${section.getAttribute('id')}"]`);
                    changeStatus(activeLink);

                    // Other Links Container:
                    if (key >= headerMainLinks.length) {
                        const otherLinks = headerMainLinks[headerMainLinks.length-1];
                        if (!otherLinks.classList.contains('active')) {
                            otherLinks.classList.add('active');
                        }
                    }
                } catch (error) {
                    // DO NOTHING ...
                    // You Are Now In Landing Section ...
                }
            }
        });
    });
});
