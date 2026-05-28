document.addEventListener('DOMContentLoaded', () => {
    initializeConsole();
    initializeSplashSequence();
});

// Controls the fade out execution timeline
function initializeSplashSequence() {
    const splashOverlay = document.getElementById('app-splash');
    
    if (splashOverlay) {
        // Matches the 2.2s execution timer of the CSS loading bar progress animation
        setTimeout(() => {
            splashOverlay.classList.add('clear-sequence');
            
            // Fully remove interactivity hazards after fade closes
            setTimeout(() => {
                splashOverlay.style.display = 'none';
                console.log("PROJECT-VOX-DEI // SPLASH_SCREEN_DISMANTLED");
            }, 800); // 800ms matching transition window in CSS
            
        }, 2500); 
    }
}

function initializeConsole() {
    const logRows = document.querySelectorAll('.log-row');

    // Drawer toggles for rows
    logRows.forEach(row => {
        row.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-decrypt')) return;
            row.classList.toggle('expanded');
        });
    });

    console.log("PROJECT-VOX-DEI // SYSTEM_CONSOLE_ONLINE");
}

// Verification Hook Placeholder
function downloadCredential(operatorId) {
    alert(`ACCESS GRANTED // INITIALIZING DECRYPTION PROTOCOL FOR OPERATOR ${operatorId}\n\nCompiling Vindex Operational Order and generating secure verification hash token...`);
    console.log(`Payload deployment sequence initialized for target token: ${operatorId}`);
}