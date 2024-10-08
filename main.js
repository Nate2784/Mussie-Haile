// save contact logic
document.addEventListener('DOMContentLoaded', function() {
    const saveButton = document.querySelector('.save-btn a.save');

    saveButton.addEventListener('click', function(event) {
        event.preventDefault();

        const vCardData = `
BEGIN:VCARD
VERSION:3.0
N:Mussie;Haile;;;
FN:Mussie Haile
ORG:Cloud 251
TEL;TYPE=CELL:+17033621125
EMAIL:mussie@cloud251.com
URL:http://www.cloud251.com
END:VCARD
        `.trim();

        // Create a Blob from the vCard data
        const blob = new Blob([vCardData], { type: 'text/vcard' });
        const url = URL.createObjectURL(blob);

        // Create a link element and simulate a click to download the file
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Mussie_Haile_Contact.vcf'; // File name
        link.click();

        // Clean up the URL object
        URL.revokeObjectURL(url);
        
        // Provide feedback to the user
        alert('The contact vCard has been downloaded. if you\'re on Android Please open and import it into your contacts. Thank you! \n  (✿◡‿◡)');
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
