document.addEventListener('DOMContentLoaded', () => {
    runSystemLoadSequence();
});

function runSystemLoadSequence() {
    // Stage 1: Display the automated zoom crest overlay for exactly 5000ms
    setTimeout(() => {
        const loadingStage = document.getElementById('stage-loading');
        const initiateStage = document.getElementById('stage-initiate');
        const engageButton = document.getElementById('btn-trigger-initiate');

        if (loadingStage) loadingStage.classList.add('hidden-view');
        if (initiateStage) initiateStage.classList.remove('hidden-view');
        
        // Stage 2: Hand off click event control cleanly to Stage 3
        if (engageButton) {
            engageButton.addEventListener('click', () => {
                transitionStage('stage-initiate', 'stage-classification');
            });
        }
        
        initializePathwayTriggers();
    }, 5000);
}

function initializePathwayTriggers() {
    const pathwayButtons = document.querySelectorAll('.btn-entity');
    pathwayButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const profile = btn.getAttribute('data-profile');
            console.log(`PATHWAY ENGAGED // DETECTED PROFILE: ${profile.toUpperCase()}`);
            
            // Core Action: Terminate onboarding layer visibility completely
            const masterSplash = document.getElementById('app-splash');
            const dashboardSub = document.getElementById('console-sub');
            
            if (masterSplash) masterSplash.style.display = 'none';
            if (dashboardSub) {
                dashboardSub.innerText = `// SYSTEM_CONSOLE_ONLINE // OPERATOR: ${profile.toUpperCase()}`;
            }
        });
    });
}

function transitionStage(currentStageId, nextStageId) {
    const current = document.getElementById(currentStageId);
    const next = document.getElementById(nextStageId);
    
    if (current) current.classList.add('hidden-view');
    if (next) next.classList.remove('hidden-view');
}