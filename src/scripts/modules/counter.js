export function counter(){
    let counter = 0;
        const counterElement = document.querySelector('.number-counter');
        const decrementBtn = document.querySelector('.decrementBtn');
        const incrementBtn = document.querySelector('.incrementBtn');

        function updateCounter() {
            counterElement.textContent = counter;
            decrementBtn.style.display = counter <= 0 ? 'none' : 'block';
        }
        if(decrementBtn&&incrementBtn){
            decrementBtn.addEventListener('click', () => {
                if (counter > 0) {
                    counter--;
                    updateCounter();
                }
            });
    
            incrementBtn.addEventListener('click', () => {
                counter++;
                updateCounter();
            });
            updateCounter(); 
        }
        

       
}