/**
 * Render Functions
 * The following functions abstract away common UI elements inside out pages
 * allowing us to quickly render elements between separate routes.
 */
export default function renderAll(className, view) {
    let els = document.getElementsByClassName(className);
    // We need to dynamically render all lightboxes on the page.
    for (let i = 0; i < els.length; i++) {
        let el = els[i];
        let v = new view({el});
        v.render();
    }
};

