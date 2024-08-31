export function map(){
    let previousSvg = null;
        let previousFill = null;
        let previousStroke = null;

        document.querySelectorAll('.p-absolute').forEach(function(item) {
            item.addEventListener('click', function() {
                // Находим path внутри текущего SVG
                const currentPath = this.querySelector('.path');
                
                if (previousSvg) {
                    // Если был предыдущий SVG, восстанавливаем его исходные цвета
                    const previousPath = previousSvg.querySelector('.path');
                    previousPath.setAttribute('fill', previousFill);
                    previousPath.setAttribute('stroke', previousStroke);
                }

                // Сохраняем текущие цвета
                previousFill = currentPath.getAttribute('fill');
                previousStroke = currentPath.getAttribute('stroke');
                
                // Меняем цвет текущего path на красный
                currentPath.setAttribute('fill', 'red');
                currentPath.setAttribute('stroke', 'red');

                // Обновляем ссылку на предыдущий SVG
                previousSvg = this;
            });
        });
}