function animateNavbar() {
    const navbar = document.querySelector(".navbar");

    // Remove and re-add the class to restart the animation
    navbar.classList.remove("loaded");
    void navbar.offsetWidth; // force reflow
    navbar.classList.add("loaded");
}

// Trigger on initial load
document.addEventListener("DOMContentLoaded", () => {
    animateNavbar();
});

// Also trigger on back/forward nav or page show from cache
window.addEventListener("pageshow", () => {
    animateNavbar();
});






function openInNewTab(event, url) {
    event.preventDefault(); // Stop the default <a> behavior
    window.open(url, '_blank'); // Open the URL in a new tab
}















    function downloadPDF() {
        const element = document.getElementById("cv-content");

    const opt = {
    margin:       0.5,
    filename:     'Hamid_Iqbal_CV.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
};

    html2pdf().set(opt).from(element).save();
}



