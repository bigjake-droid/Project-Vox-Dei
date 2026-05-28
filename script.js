// Global Authentication Session State Definition
let selectedProfile = "";
let isSetupMode = true; // Flips between Initialization Mode and Secure Sign-In Mode

document.addEventListener('DOMContentLoaded', () => {
    initializeSessionCheck();
});

// Gatekeeper Rule: Inspect local device persistence records
function initializeSessionCheck() {
    const activeSession = localStorage.getItem('vindex_secure_session');
    const splashOverlay = document.getElementById('app-splash');

    if (activeSession) {
        // Operator authenticated in a previous boot layer. Hard-bypass splash logic.
        if (splashOverlay) splashOverlay.style.display = 'none';
        
        const sessionData = JSON.parse(activeSession);
        hydrateDashboard(sessionData.profile);
        initializeConsoleEngine();
        console.log("PERSISTENT SESSION VERIFIED // WELCOME BACK VINDEX OPERATOR");
    } else {
        // No authentication key matched. Initialize linear startup stack.
        runSystemLoadSequence();
    }
}

// Stage 1 Control: Watch the loading meter transition
function runSystemLoadSequence() {
    setTimeout(() => {
        document.getElementById('stage-loading').classList.add('hidden-view');
        document.getElementById('stage-initiate').classList.remove('hidden-view');
        
        // Wire up the new custom Initiate event gate
        document.getElementById('btn-trigger-initiate').addEventListener('click', () => {
            transitionStage('stage-initiate', 'stage-classification');
        });
        
        initializeClassificationTriggers();
    }, 2400); // Buffer tracking slightly behind the 2.2s CSS transition wire
}

// Stage 2 Control: Capture Entity Selection Profile
function initializeClassificationTriggers() {
    const profileButtons = document.querySelectorAll('.btn-entity');
    profileButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            selectedProfile = btn.getAttribute('data-profile');
            
            // Adjust form text dynamically depending on onboarding choice
            updateAuthNodeUI();
            
            transitionStage('stage-classification', 'stage-auth');
        });
    });

    // Wire setup vs login switch link
    document.getElementById('auth-toggle-mode').addEventListener('click', toggleAuthMode);
    
    // Wire form submit line
    document.getElementById('auth-form').addEventListener('submit', handleAuthDeployment);
}

function updateAuthNodeUI() {
    const titleNode = document.getElementById('auth-node-title');
    if (isSetupMode) {
        titleNode.innerText = `// INITIALIZE ${selectedProfile.toUpperCase()} PROTOCOL`;
    } else {
        titleNode.innerText = `// SECURE SIGN-IN: ${selectedProfile.toUpperCase()}`;
    }
}

function toggleAuthMode() {
    isSetupMode = !isSetupMode;
    const toggleLink = document.getElementById('auth-toggle-mode');
    
    if (isSetupMode) {
        toggleLink.innerText = "// FIRST TIME? INITIALIZE PROTOCOL SETUP";
    } else {
        toggleLink.innerText = "// RETURNING OPERATOR? ENGAGE SECURE LOGIN";
    }
    updateAuthNodeUI();
}

// Stage 3 Control: Validate Input Data Stream & Commit to Hardware Memory
function handleAuthDeployment(event) {
    event.preventDefault();
    
    const emailInput = document.getElementById('operator-email').value.trim();
    const passInput = document.getElementById('operator-pass').value;

    if (!emailInput || passInput.length < 4) {
        alert("SECURITY FAULT // INVALID PASSPHRASE CHARACTER DENSITY");
        return;
    }

    // Construct the payload packet to drop into local hardware storage
    const cryptoPayload = {
        identityToken: btoa(emailInput), // Basic visual hash obfuscation
        profile: selectedProfile,
        timestamp: new Date().toISOString()
    };

    localStorage.setItem('vindex_secure_session', JSON.stringify(cryptoPayload));
    
    hydrateDashboard(selectedProfile);
    executeTerminalFadeSequence();
}

// Exit Protocol: Trigger the 3-second hardware-accelerated fade out window
function executeTerminalFadeSequence() {
    const splashOverlay = document.getElementById('app-splash');
    if (splashOverlay) {
        splashOverlay.classList.add('clear-sequence');
        
        setTimeout(() => {
            splashOverlay.style.display = 'none';
            initializeConsoleEngine();
            console.log("PROJECT-VOX-DEI // ACCESS NODE LAYER COMPLETED");
        }, 3000); // Exact 3000ms mapping matching the style.css fade matrix
    }
}

function hydrateDashboard(profileType) {
    // Inject classification parameters directly into header indicator metadata
    document.getElementById('console-sub').innerText = `// OPERATOR_LOG // STATUS: ${profileType.toUpperCase()}`;
}

function initializeConsoleEngine() {
    const logRows = document.querySelectorAll('.log-row');
    logRows.forEach(row => {
        row.onclick = (e) => {
            if (e.target.classList.contains('btn-decrypt')) return;
            row.classList.toggle('expanded');
        };
    });
}

function transitionStage(currentStageId, nextStageId) {
    document.getElementById(currentStageId).classList.add('hidden-view');
    document.getElementById(nextStageId).classList.remove('hidden-view');
}

function downloadCredential(operatorId) {
    alert(`ACCESS PROTOCOL // SECURE FILE EXTRACTED FOR CALLSIGN ${operatorId}`);
}