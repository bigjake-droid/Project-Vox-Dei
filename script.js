document.addEventListener('DOMContentLoaded', () => {
    initializeConsole();
});

function initializeConsole() {
    const logRows = document.querySelectorAll('.log-row');

    // Handle interactive expandable rows for mobile viewports
    logRows.forEach(row => {
        row.addEventListener('click', (e) => {
            // Prevent close toggle if user clicks the action button inside the drawer
            if (e.target.classList.contains('btn-decrypt')) return;

            // Toggle active expansion state
            row.classList.toggle('expanded');
        });
    });

    console.log("PROJECT-VOX-DEI // CORE_SYSTEM_READY");
}

// Vindex Family Clearance Generation System
function downloadCredential(operatorId) {
    alert(`ACCESS GRANTED // INITIALIZING DECRYPTION PROTOCOL FOR OPERATOR ${operatorId}\n\nPreparing secure Vindex Operational Order download packet...`);
    
    // Future expansion hook: integration with canvas or PDF generator goes here
    console.log(`Payload deployment sequence initialized for target token: ${operatorId}`);
}
