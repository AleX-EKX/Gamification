export function neon() {
    let iconBtns = document.querySelectorAll('.icon');
    
    iconBtns.forEach(iconBtn => {
        let neonBtn = iconBtn.querySelector('.neon-svg');
        let defBtn = iconBtn.querySelector('.def-svg');

        iconBtn.addEventListener('mouseover', function() {
            neonBtn.style.opacity = '1';
            defBtn.style.opacity = '0';
        });

        iconBtn.addEventListener('mouseout', function() {
            neonBtn.style.opacity = '0';
            defBtn.style.opacity = '1';
        });
    });
}