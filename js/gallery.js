`use strict`; // Код у суворому режимі

//! 2 - Масив зображень
// preview — посилання на маленьку версію зображення для картки галереї
// original — посилання на велику версію зображення для модального вікна
// description — текстовий опис зображення, для атрибута alt малого зображення
// та підпису великого зображення в модалці.

const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

//* В-А-Р-І-А-Н-Т 1 (як показували на лекції)

//! 3 - Розмітка елементів галереї
// В атрибуті src тега <img> вказуємо посилання на маленьку версію зображення.
// Для атрибута alt використовуємо опис зображення.
// Посилання на велике зображення повинно зберігатися в data-атрибуті source на елементі <img>,
// і вказуватися в href посилання.

// const createImageCardTemplate = (card, index) => {
//   return `
//     <li class="gallery-item js-gallery-item" data-id="${index}">
//     <a class="gallery-link" href="${card.original}">
//         <img
//         class="gallery-image"
//         src="${card.preview}"
//         data-source="${card.original}"
//         alt="${card.description}"
//         />
//     </a>
//     </li>
//     `;
// };

// const imageCardTemplate = images
//   .map((el, ind) => createImageCardTemplate(el, ind))
//   .join(``);

// //! 3.1 - Додавання розмітки в html файл за одну операцію

// const imageListEl = document.querySelector(`.js-gallery`);

// imageListEl.innerHTML = imageCardTemplate;

// //! 5 - Делегування

// imageListEl.addEventListener(`click`, (event) => {
//   event.preventDefault(); // Скасовуємо завантаження зображень
//   if (event.target === event.currentTarget) {
//     return;
//   }

//   const imageCardEl = event.target.closest(`.js-gallery-item`);
//   const imageId = Number(imageCardEl.dataset.id);
//   const imageInfo = images[imageId];

//   //! 7 - Модальне вікно + 8 - Велике зображення
//   const modalWindowInstance = basicLightbox.create(`
//     <div class="image-modal-wrapper">
//     <img
//     class="modal-image"
//     src="${imageInfo.original}"
//     alt="${imageInfo.description}"
//     />
//     <h2 class="modal-title" >${imageInfo.description}</h2>
//     </div>
//     `);

//   modalWindowInstance.show();

//   // Закриття модального вікна клавішею Escape
//   document.addEventListener("keydown", (event) => {
//     if (event.key === "Escape") {
//       modalWindowInstance.close();
//     }
//   });
// });

//* В-А-Р-І-А-Н-Т 2 (після коментаря ментора)
// Для перевірки куди саме клікнули не рекомендую використовувати порівняння
// event.currentTarget === event.target, цей спосіб не є надійним.
// Так само вам не потрібно шукати потрібний елемент через closest і find,
// він вам вже досупен через event.target.

//! 3 - Розмітка елементів галереї
// В атрибуті src тега <img> вказуємо посилання на маленьку версію зображення.
// Для атрибута alt використовуємо опис зображення.
// Посилання на велике зображення повинно зберігатися в data-атрибуті source на елементі <img>,
// і вказуватися в href посилання.

const createImageCardTemplate = (card) => `
  <li class="gallery-item">
    <a class="gallery-link" href="${card.original}">
      <img
        class="gallery-image js-gallery-image"
        src="${card.preview}"
        data-source="${card.original}"
        alt="${card.description}"
      />
    </a>
  </li>
`;

const imageCardTemplate = images.map(createImageCardTemplate).join(``);

//! 3.1 - Додавання розмітки в html файл за одну операцію

const imageListEl = document.querySelector(`.js-gallery`);
imageListEl.innerHTML = imageCardTemplate;

// //! 5 - Делегування

imageListEl.addEventListener(`click`, (event) => {
  event.preventDefault();

  // Перевіряємо, чи клікнули по зображенню
  if (!event.target.classList.contains("js-gallery-image")) return;

  // Отримуємо дані з атрибутів зображення
  const largeImageURL = event.target.dataset.source;
  const imageDescription = event.target.alt;

  //   //! 7 - Модальне вікно + 8 - Велике зображення
  const modalWindowInstance = basicLightbox.create(`
    <div class="image-modal-wrapper">
      <img
        class="modal-image"
        src="${largeImageURL}"
        alt="${imageDescription}"
      />
      <h2 class="modal-title">${imageDescription}</h2>
    </div>
  `);

  modalWindowInstance.show();

  // Закриття модального вікна клавішею Escape
  const handleKeydown = (e) => {
    if (e.key === "Escape") {
      modalWindowInstance.close();
      document.removeEventListener("keydown", handleKeydown);
    }
  };

  document.addEventListener("keydown", handleKeydown);
});
