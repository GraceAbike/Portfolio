// myArray section
const myArray = [
  {
    class: 'background-img1 background-img',
    class2: 'card-img',
    subtitle: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    popuptext: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.',
    image: {
      image1: './imgs/placeholder.png',
      popup: './imgs/SnapshootPortfolio.png',
    },
    langlist: {
      css: 'css',
      html: 'html',
      bootstrap: 'bootstrap',
      ruby: 'Ruby',
      lags: 'Ruby on rails',
    },
    btn: 'See Project',
    style: {
      style1: 'section-1',
    },
    button: {
      live: 'See live',
      source: 'See source',
    },
  },
  {
    class: 'background-img2 background-img',
    class2: 'card-img1',
    subtitle: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    image: {
      image1: './imgs/placeholder.png',
    },
    langlist: {
      css: 'css',
      html: 'html',
      bootstrap: 'bootstrap',
      ruby: 'Ruby',
      lags: 'Ruby on rails',
    },
    btn: 'See Project',
    style: {
      style1: 'section-2',
    },
    imageleft: 'image-left',
  },
  {
    class: 'background-img3 background-img',
    class2: 'card-img',
    subtitle: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    image: {
      image1: './imgs/placeholder.png',
    },
    langlist: {
      css: 'css',
      html: 'html',
      bootstrap: 'bootstrap',
      ruby: 'Ruby',
      lags: 'Ruby on rails',
    },
    btn: 'See Project',
    style: {
      style1: 'section-1',
    },

  },
  // {
  //   class: 'background-img4 background-img',
  //   class2: 'card-img1',
  //   subtitle: 'Multi-Post Stories',
  //   description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  //   image: {
  //     image1: './imgs/placeholder.png',
  //   },
  //   langlist: {
  //     css: 'css',
  //     html: 'html',
  //     bootstrap: 'bootstrap',
  //     ruby: 'Ruby',
  //     lags: 'Ruby on rails',
  //   },
  //   btn: 'See Project',
  //   style: {
  //     style1: 'section-2',
  //   },
  //   imageleft: 'image-left',
  // },
];
// JavaScript Dynamic Section
// const section = document.querySelector('#work-section');
// for (let cardIndex = 0; cardIndex < myArray.length; cardIndex += 1) {
//   section.innerHTML = `
// <div class="background-img1 background-img">
// <div class="card-img">
// <img src="${myArray[cardIndex].image.image1}" alt="placeholder">
// </div>
// <div class="card-text">
// <h2>${myArray[cardIndex].subtitle}</h2>
// <p>${myArray[cardIndex].description}
// </p>
// <ul class="list-item">
//   <li class="item">${myArray[cardIndex].langlist.css}</li>
//   <li class="item">${myArray[cardIndex].langlist.html}</li>
//   <li class="item">${myArray[cardIndex].langlist.bootstrap}</li>
//   <li class="Ruby">${myArray[cardIndex].langlist.ruby}</li>
// </ul>
// <button type="button" class="btn">${myArray[cardIndex].btn}</button>
// </div>
// </div>

// <div class="background-img2 background-img">
// <div class="card-img1">
// <img src="${myArray[cardIndex].image.image1}" alt="placeholder">
// </div>
// <div class="card-text">
// <h2>${myArray[cardIndex].subtitle}</h2>
// <p>${myArray[cardIndex].description}</p>
// <ul class="list-item">
// <li class="item">${myArray[cardIndex].langlist.css}</li>
// <li class="item">${myArray[cardIndex].langlist.html}</li>
// <li class="item">${myArray[cardIndex].langlist.bootstrap}</li>
// <li class="Ruby">${myArray[cardIndex].langlist.ruby}</li>
// </ul>
// <button type="button" class="btn">${myArray[cardIndex].btn}t</button>
// </div>
// </div>
// </div>

// <div class="background-img3 background-img">
// <div class="card-img">
// <img src="${myArray[cardIndex].image.image1}" alt="placeholder">
// </div>
// <div class="card-text">
// <h2>${myArray[cardIndex].subtitle}</h2>
// <p>${myArray[cardIndex].description}</p>
// <ul class="list-item">
// <li class="item">${myArray[cardIndex].langlist.css}</li>
// <li class="item">${myArray[cardIndex].langlist.html}</li>
// <li class="item">${myArray[cardIndex].langlist.bootstrap}</li>
// <li class="Ruby">${myArray[cardIndex].langlist.ruby}</li>
// </ul>
// <button type="button" class="btn">${myArray[cardIndex].btn}</button>
// </div>
// </div>

// <div class="background-img4 background-img">
// <div class="card-img1">
// <img src="${myArray[cardIndex].image.image1}" alt="placeholder">
// </div>
// <div class="card-text">
// <h2>${myArray[cardIndex].subtitle}</h2>
// <p>
// ${myArray[cardIndex].description}</p>
// <ul class="list-item">
//   <li class="item">${myArray[cardIndex].langlist.css}</li>
//   <li class="item">${myArray[cardIndex].langlist.html}</li>
//   <li class="item">${myArray[cardIndex].langlist.bootstrap}</li>
//   <li class="Ruby">${myArray[cardIndex].langlist.ruby}</li>
// </ul>
// <button type="button" class="btn">${myArray[cardIndex].btn}</button>
// </div>
// </div>
// `;
// }
// Button Action
// const overlay = document.getElementById('overlay');
// const popup = document.getElementById('mypopup');
// const span = document.getElementsByClassName('closeX')[0];
// span.onclick = function span() {
//   overlay.style.display = 'none';
//   popup.style.display = 'none';
// };
// const button = document.getElementsByClassName('btn')[0];
// button.onclick = function buton() {
//   overlay.style.display = 'block';
//   popup.style.display = 'block';
// };
// const myButton = document.getElementsByClassName('btn')[1];

// myButton.onclick = function buton() {
//   overlay.style.display = 'block';
//   popup.style.display = 'block';
// };
// const myBtn = document.getElementsByClassName('btn')[2];

// myBtn.onclick = function buton() {
//   overlay.style.display = 'block';
//   popup.style.display = 'block';
// };
// const buton = document.getElementsByClassName('btn')[3];

// buton.onclick = function buton() {
//   overlay.style.display = 'block';
//   popup.style.display = 'block';
// };