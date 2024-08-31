export function popup(){
    document.addEventListener('DOMContentLoaded', function() {
        const asdBlock = document.querySelector('.popup');
        const emptyBlocks = document.querySelectorAll('.empty-block');
    
        if(emptyBlocks){
            emptyBlocks.forEach(block => {
                block.addEventListener('click', function(event) {
                    const rect = block.getBoundingClientRect();
                    const asdRect = asdBlock.getBoundingClientRect();
                
                    // Размер шрифта корневого элемента (например, 16px)
                    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
                    
                    // Преобразуйте размеры в ремы
                    const rectRightInRem = (rect.right + window.scrollX) / rootFontSize;
                    const rectWidthInRem = rect.width / rootFontSize;
                    const asdRectWidthInRem = asdRect.width / rootFontSize;
                    const rectTopInRem = rect.top / rootFontSize;
                    const heightInRem = (5.5 * rect.width) / rootFontSize;
                
                    // Установите стили с использованием рем
                    asdBlock.style.display = 'block';
                    
                    if (window.innerWidth < 768) {
                        asdBlock.style.top = `${rectTopInRem + (5.3 * heightInRem)}rem`;
                        asdBlock.style.left = `${5.5}rem`;
                    } else if(asdBlock.closest('.popup-project')) {
                        asdBlock.style.top = `${5}rem`;
                        asdBlock.style.left = `${rectRightInRem - rectWidthInRem - asdRectWidthInRem +5}rem`;
                    }
                    else{
                        asdBlock.style.top = `${rectTopInRem - heightInRem}rem`;
                        asdBlock.style.left = `${rectRightInRem - rectWidthInRem - asdRectWidthInRem}rem`;
                    }
                });
            });
            if(asdBlock){
                document.addEventListener('click', function(event) {
                    if (!asdBlock.contains(event.target) && !event.target.classList.contains('empty-block')) {
                        asdBlock.style.display = 'none';
                    }
                });
            }
           
        }
        
    });
    
}