document.addEventListener('DOMContentLoaded', () => {
    runSystemLoadSequence();
});

function runSystemLoadSequence() {
    // Hold Stage 1 for exactly 5000ms to allow the flat emblem zoom animation to complete
    setTimeout(() => {
        document.getElementById('stage-loading').classList.add('hidden-view');
        document.getElementById('stage-initiate').classList.remove('hidden-view');
        
        // Advance from Screen 2 to Screen 3 (Side-by-Side Blocks)
        document.getElementById('btn-trigger-initiate').addEventListener('click', () => {
            transitionStage('stage-initiate', 'stage-classification');
        });
        
        initializePathwayTriggers();
    }, 5000);
}

function initializePathwayTriggers() {
    const pathwayButtons = document.querySelectorAll('.btn-entity');
    pathwayButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const profile = btn.getAttribute('data-profile');
            console.log(`PATHWAY SELECTED // INTERFACE MODE: ${profile.toUpperCase()}`);
            
            // Unmask the main application frame completely
            document.getElementById('app-splash').style.display = 'none';
            document.getElementById('console-sub').innerText = `// SYSTEM_CONSOLE_ONLINE // OPERATOR: ${profile.toUpperCase()}`;
        });
    });
}

function transitionStage(currentStageId, nextStageId) {
    document.getElementById(currentStageId).classList.add('hidden-view');
    document.getElementById(nextStageId).classList.remove('hidden-view');
}