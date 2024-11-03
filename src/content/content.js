function createPopupUI() {
    // Create modal container
    const modal = document.createElement('div');
    modal.innerHTML = `
        <div id="jobHelperModal" style="
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            z-index: 10001;
            min-width: 300px;
        ">
            <h3 style="margin: 0 0 15px 0; color: #333;">Job Helper</h3>
            <div style="display: flex; flex-direction: column; gap: 10px;">
                <button id="openNextOffer" style="
                    padding: 10px 20px;
                    background: #4CAF50;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 14px;
                ">Open Next Offer</button>
                <div id="currentCount" style="text-align: center; color: #666; margin-top: 5px;"></div>
            </div>
        </div>
        <div id="modalOverlay" style="
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.5);
            z-index: 10000;
        "></div>
    `;
    document.body.appendChild(modal);

    // Add styles for selected job
    const style = document.createElement('style');
    style.textContent = `
        .selected-job {
            border: 2px solid #4CAF50 !important;
            background-color: rgba(76, 175, 80, 0.1) !important;
        }
    `;
    document.head.appendChild(style);

    // Setup event listeners
    const openNextOfferBtn = document.getElementById('openNextOffer');
    const modalOverlay = document.getElementById('modalOverlay');
    const jobHelperModal = document.getElementById('jobHelperModal');
    const currentCount = document.getElementById('currentCount');

    openNextOfferBtn.addEventListener('click', () => {
        openNextOffer(currentCount);
    });

    // Toggle modal with Alt+J
    document.addEventListener('keydown', (event) => {
        if (event.altKey && event.key === 'j') {
            toggleModal();
        }
    });

    // Close modal when clicking overlay
    modalOverlay.addEventListener('click', toggleModal);

    function toggleModal() {
        const isVisible = modalOverlay.style.display === 'block';
        modalOverlay.style.display = isVisible ? 'none' : 'block';
        jobHelperModal.style.display = isVisible ? 'none' : 'block';
        
        if (!isVisible) {
            updateJobCount(currentCount);
        }
    }
}

function updateJobCount(countElement) {
    const jobCards = document.querySelectorAll('.air3-card-section');
    const currentSelected = document.querySelector('.selected-job');
    const currentIndex = currentSelected ? Array.from(jobCards).indexOf(currentSelected) : -1;
    
    countElement.textContent = currentIndex === -1 
        ? `Total jobs: ${jobCards.length}` 
        : `Job ${currentIndex + 1} of ${jobCards.length}`;
}

function openNextOffer(countElement) {
    const jobCards = document.querySelectorAll('.air3-card-section');
    const currentSelected = document.querySelector('.selected-job');
    
    let nextIndex = 0;
    if (currentSelected) {
        const currentIndex = Array.from(jobCards).indexOf(currentSelected);
        nextIndex = (currentIndex + 1) % jobCards.length;
        currentSelected.classList.remove('selected-job');
    }
    
    if (jobCards[nextIndex]) {
        const nextCard = jobCards[nextIndex];
        nextCard.classList.add('selected-job');
        nextCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        setTimeout(() => {
            nextCard.click();
        }, 500);

        updateJobCount(countElement);
    }
}

// Initialize the UI
createPopupUI();