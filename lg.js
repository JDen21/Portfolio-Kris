function toggleSwitch(switchContainer) {
    // Toggle the 'switch-on' class to change the switch's state
    switchContainer.classList.toggle("switch-on");
}

visualViewport.addEventListener('resize', () => {
    const a = document.createElement('a')
    a.href = '/Portfolio-Kris/lg.html'
    a.click()
})