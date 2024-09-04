// Handle image hover animation
const image = document.querySelector('.image-section img');

image.addEventListener('mouseover', () => {
    image.style.animationPlayState = 'paused'; // Pause animation on hover
});

image.addEventListener('mouseout', () => {
    image.style.animationPlayState = 'running'; // Resume animation when not hovering
});
document.addEventListener('DOMContentLoaded', () => {
    const saveButton = document.querySelector('.save-btn a.save');

    saveButton.addEventListener('click', (event) => {
        event.preventDefault();

        const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:Mussie Haile
ORG:Cloud 251
TEL;TYPE=CELL:+17033621125
EMAIL:mussie@cloud251.com
URL:http://www.cloud251.com
END:VCARD
        `.trim();

        // Encode vCard data as a data URI
        const encodedData = encodeURIComponent(vCardData);
        const dataUri = `data:text/vcard;charset=utf-8,${encodedData}`;

        // Create and click a link to download the vCard file
        const link = document.createElement('a');
        link.href = dataUri;
        link.download = 'Mussie_Haile_Contact.vcf'; // File name
        document.body.appendChild(link);
        link.click();

        // Clean up
        link.remove();

        // Provide feedback to the user
        alert('The contact vCard has been downloaded. Please import it into your contacts. Thank you!');
    });
});


// Create cloud effect
document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');

    function createCloud() {
        const cloud = document.createElement('div');
        cloud.classList.add('cloud', 'fa', 'fa-cloud');
        cloud.style.left = `${Math.random() * (window.innerWidth - 100)}px`;
        cloud.style.animationDuration = `${Math.random() * 10 + 15}s`; // Vary cloud speed
        cloud.style.fontSize = `${Math.random() * 20 + 10}px`; // Random cloud size
        cloud.style.transform = `translateX(${Math.random() * 200 - 100}px)`; // Random horizontal starting point
        body.appendChild(cloud);

        // Remove cloud after it falls off screen
        setTimeout(() => {
            cloud.remove();
        }, parseFloat(cloud.style.animationDuration) * 1000); // Match removal with animation duration
    }

    setInterval(createCloud, 2000); // Adjusted interval for balanced appearance
});
