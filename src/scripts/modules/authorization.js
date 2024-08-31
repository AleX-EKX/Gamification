export function authorization(){
    document.addEventListener('DOMContentLoaded', function() {
        const btnAuthorization = document.querySelector('.btn-authorization');
        if(btnAuthorization){
            btnAuthorization.addEventListener('click', function() {
                const inputs = document.querySelectorAll('.input_authorization');
                inputs.forEach(function(input) {
                    input.style.border = '1px solid #FF6161';
                    input.style.color = '#FF6161';
                });
            });
        }
        
    });
}