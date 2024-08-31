export function sidebar() {
    document.addEventListener('DOMContentLoaded', () => {
        const sidebar = document.querySelector('.sidebar-block');
        const chatBlock = document.querySelector('.chat-block');
        const taskSvg = document.querySelector('.task-svg');
        const messageSvg = document.querySelector('.message-svg');
        const closeButtons = [
            sidebar.querySelector('.return-svg'),
            chatBlock.querySelector('.return-svg')
        ];

        const blockStack = []; // Стек для отслеживания активных блоков

        function openBlock(block) {
            if (!block.classList.contains('open')) {
                block.classList.add('open');
                blockStack.push(block);
                document.addEventListener('click', closeActiveBlockOnOutsideClick);
            }
        }

        function closeBlock(block) {
            block.classList.remove('open');
            const index = blockStack.indexOf(block);
            if (index > -1) {
                blockStack.splice(index, 1);
            }
        }

        // Функция для закрытия последнего активного блока при клике вне его
        function closeActiveBlockOnOutsideClick(event) {
            if (blockStack.length > 0) {
                const topBlock = blockStack[blockStack.length - 1]; // Последний активный блок
                if (!topBlock.contains(event.target)) {
                    closeBlock(topBlock);
                }

                if (blockStack.length === 0) {
                    document.removeEventListener('click', closeActiveBlockOnOutsideClick);
                }
            }
        }

        closeButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                event.stopPropagation();
                closeBlock(button.closest('.sidebar-block, .chat-block'));
                if (blockStack.length === 0) {
                    document.removeEventListener('click', closeActiveBlockOnOutsideClick);
                }
            });
        });

        taskSvg.addEventListener('click', (event) => {
            event.stopPropagation();
            openBlock(sidebar);
        });

        messageSvg.addEventListener('click', (event) => {
            event.stopPropagation();
            openBlock(chatBlock);
        });
    });
}
