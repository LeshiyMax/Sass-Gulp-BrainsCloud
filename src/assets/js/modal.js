// все кнопки у которых есть атрибут data-modal
const modalBtn = document.querySelectorAll('[data-modal]');

const body = document.body;

// Все кнпки закрыть модальное окно
const modalClose = document.querySelectorAll('.modal__close');

// Все модальные окна
const modal = document.querySelectorAll('.modal');

modalBtn.forEach(item => {
   item.addEventListener('click', (event) => {
      let $this = event.currentTarget;

      // у кнопки получаем значение data-modal
      let modalId = $this.getAttribute('data-modal');

      // в переменую modal добавляем элемент по id
      let modal = document.getElementById(modalId);

      // Получаем блок modal__content 
      let modalContent = modal.querySelector('.modal__content')

      // отменяем закрытие модального окна при клики по нему
      modalContent.addEventListener('click', event => {
         event.stopPropagation();
      });


      // элементу с найденым ID добавляем класс .show
      // класс .show display: block;
      modal.classList.add('show');

      // убираем скролл когда модальное окно открыто
      body.classList.add('no-scroll');

      setTimeout(() => {
         modalContent.style.transform = 'none';
         modalContent.style.opacity = '1';
      }, 1);
   });
});

// закрытие модального окна по клику на кнопку крестика
modalClose.forEach(item => {
   item.addEventListener('click', (event) => {
      // получаем родителя кнопки
      let currentModal = event.currentTarget.closest('.modal');

      // вызываем функцию на закрытие модального окна
      closeModal(currentModal)
   });
});

// Закрытие модального окна при клики по фону сзади 
modal.forEach(item => {
   item.addEventListener('click', (event) => {
      // получаем родителя кнопки
      let currentModal = event.currentTarget;

      // вызываем функцию на закрытие модального окна
      closeModal(currentModal)
   });
});

// функция которая закрывает модальное окно
function closeModal(modal) {
   let modalContent = modal.querySelector('.modal__content');
   modalContent.removeAttribute('style');

   setTimeout(() => {
      // Убираем класс .show у открытого модального окна 
      modal.classList.remove('show');
      body.classList.remove('no-scroll');
   }, 250);
}