function showTab(tabId, btn) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-button');
    const selectedTab = document.getElementById(tabId);
    const activeTab = document.querySelector('.tab-content.active');
    const activeButton = document.querySelector('.tab-button.active');
    const transitionDuration = 300; // Deve corresponder à duração da transição no CSS (em ms)

    if (activeTab) {
        activeTab.classList.remove('active');
        activeTab.classList.add('fade-out');

        if (activeButton) {
            activeButton.classList.remove('active');
        }

        setTimeout(() => {
            activeTab.style.display = 'none';
            selectedTab.style.display = 'block';
            selectedTab.classList.remove('fade-out');
            void selectedTab.offsetWidth; // Força o navegador a reflow
            selectedTab.classList.add('active');
            btn.classList.add('active');
        }, transitionDuration);
    } else {
        // Caso seja a primeira aba a ser ativada
        selectedTab.style.display = 'block';
        void selectedTab.offsetWidth; // Força o navegador a reflow
        selectedTab.classList.add('active');
        btn.classList.add('active');
    }
}