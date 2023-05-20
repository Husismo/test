import { shoes } from "./shoes.js";
function displayShoes(array) {
  array.map(function (item, index) {
    let display = document.querySelector(`.content-items`);
    display.innerHTML += `
        <div class="content-item ${item.type}" id="${index}">
            <img src="${item.imgUrl}" alt="" class="item-img">
            <h3 class="item-title">${item.name}</h3>
            <div class="item-price__wrapper">
            <div class="item-price__inner">
                <p class="item-price__title">Цена:</p>
                <h3 class="item-price">${item.price.toLocaleString()} руб.</h3>
            </div>
            </div>
            <a alt="" class="add-to-cart__btn"> <img src="./images/add-to-cart-btn.png" alt="add-to-cart__img">Купить</a>
        </div>
        `;
  });
}
displayShoes(shoes);

function displaySneakers() {
  document.querySelector(`.search-form`).hidden = `true`;
  document.querySelector(`.content-title`).innerHTML = `Кроссовки`;
  let items = document.querySelectorAll(`.content-item`);
  for (let item of items) {
    item.classList.contains(`sneakers`)
      ? (item.style.display = `flex`)
      : (item.style.display = `none`);
  }
}

function displayGumshoes() {
  document.querySelector(`.search-form`).hidden = `true`;
  document.querySelector(`.content-title`).innerHTML = `Кеды`;
  let items = document.querySelectorAll(`.content-item`);
  for (let item of items) {
    item.classList.contains(`gumshoes`)
      ? (item.style.display = `flex`)
      : (item.style.display = `none`);
  }
}
function displayBoots() {
  document.querySelector(`.search-form`).hidden = `true`;
  document.querySelector(`.content-title`).innerHTML = `Ботинки`;
  let items = document.querySelectorAll(`.content-item`);
  for (let item of items) {
    item.classList.contains(`boots`)
      ? (item.style.display = `flex`)
      : (item.style.display = `none`);
  }
}

let headerNavBtns = document.querySelector(`.header__nav`);
headerNavBtns.addEventListener(`click`, function (event) {
  if (event.target.classList.contains(`gumshoes`)) {
    displayGumshoes();
  } else if (event.target.classList.contains(`sneakers`)) {
    displaySneakers();
  } else if (event.target.classList.contains(`boots`)) {
    displayBoots();
  }
});

let headerFooterBtns = document.querySelector(`.footer__nav`);
headerFooterBtns.addEventListener(`click`, function (event) {
  if (event.target.classList.contains(`gumshoes`)) {
    displayGumshoes();
  } else if (event.target.classList.contains(`sneakers`)) {
    displaySneakers();
  } else if (event.target.classList.contains(`boots`)) {
    displayBoots();
  }
});

let contentItem = document.querySelector(`.content-items`);
contentItem.addEventListener(`click`, function (event) {
  if (
    event.target.classList.contains(`item-title`) ||
    event.target.classList.contains(`add-to-cart__btn`)
  ) {
    let id = event.target.parentElement.id;
    let bgColor;
    themeBtn.classList.contains('theme-dark') ? bgColor = `#1f1f1f` : bgColor = `#fff`
    let show = document.createElement("div");
    show.innerHTML += `<div class="item-card" data-id="${id}">
        <div class="item-card__wrapper" style="background-color: ${bgColor}" >
          <div class="img-card-wrapper">
            <img class="img-card" src="${shoes[id].imgUrl}" alt="">
          </div>
          <div class="item-card-disc">
            <h4 class="item-card-name">${shoes[id].name}</h4>
            <h5 class="item-card-price">${shoes[
              id
            ].price.toLocaleString()} руб.</h5>
            <form action="" class="item-card-color__form">
              <p>Цвет:</p>
              <label>
                <input checked name="color" type="radio" class="item-real-color-radio" value="white"> <span class="color-white item-custom-radio-color__radio"></span>
              </label>
              <label>
                <input name="color" type="radio" class="item-real-color-radio" value="black"> <span class="color-black item-custom-radio-color__radio"></span>
              </label>
              <label>
                <input name="color" type="radio" class="item-real-color-radio" value="red"> <span class="color-red item-custom-radio-color__radio"></span>
              </label>
            </form>
            <form action="" class="item-card-size__form">
              <p>RU:</p>
              <label>
                <input checked name="size" type="radio" class="item-real-size-radio" value="39"> <span class="item-custom-radio-size__radio">39</span>
              </label>
              <label>
                <input name="size" type="radio" class="item-real-size-radio" value="40"> <span class="item-custom-radio-size__radio">40</span>
              </label>
              <label>
                <input name="size" type="radio" class="item-real-size-radio" value="41"> <span class="item-custom-radio-size__radio">41</span>
              </label>
              <label>
                <input name="size" type="radio" class="item-real-size-radio" value="42"> <span class="item-custom-radio-size__radio">42</span>
              </label>
              <label>
                <input name="size" type="radio" class="item-real-size-radio" value="43"> <span class="item-custom-radio-size__radio">43</span>
              </label>
              <label>
                <input name="size" type="radio" class="item-real-size-radio" value="44"> <span class="item-custom-radio-size__radio">44</span>
              </label>
              <label>
                <input name="size" type="radio" class="item-real-size-radio" value="45"> <span class="item-custom-radio-size__radio">45</span>
              </label>
            </form>
            <div class="cart-counter__wrapper">
                <img src="./images/minus.png" class="card-counter-minus__btn"></img>
                <p class="card-counter">1</p>
                <img src="./images/plus.png" class="card-counter-plus__btn"></img>
            </div>
            <button class="add-to-cart-card__btn">Добавить в корзину</button>
          </div>
          <img class="card-cross-img" src="./images/cross.png" alt="">
        </div>
      </div>`;
    document.body.prepend(show);

    function removeCard() {
      show.remove();
    }

    let closeBtn = document.querySelector(`.card-cross-img`);
    closeBtn.addEventListener(`click`, removeCard);

    let addToCartBtn = document.querySelector(`.add-to-cart-card__btn`);
    addToCartBtn.addEventListener(`click`, addToCart);

    let cardCounterWrapper = document.querySelector(`.cart-counter__wrapper`);
    let cardCounterMinustBtn = document.querySelector(
      `.card-counter-minus__btn`
    );
    let cardCounterPlustBtn = document.querySelector(`.card-counter-plus__btn`);
    cardCounterWrapper.addEventListener(`click`, function (event) {
      if (event.target == cardCounterMinustBtn) {
        let counter = document.querySelector(`.card-counter`);
        if (counter.innerText != 1) {
          counter.innerHTML = `${--counter.innerText}`;
        }
      } else if (event.target == cardCounterPlustBtn) {
        let counter = document.querySelector(`.card-counter`);
        if (counter.innerText != 10) {
          counter.innerHTML = `${++counter.innerText}`;
        }
      }
    });
  }
});
function showValue() {
  let val = document.querySelector(`.search-form`).value.toLowerCase().trim();
  let items = document.querySelectorAll(`.item-title`);
  for (let item of items) {
    if (!item.innerText.toLowerCase().includes(val)) {
      item.parentElement.style.display = `none`;
    } else {
      item.parentElement.style.display = `flex`;
    }
  }
}
document.querySelector(`.search-form`).addEventListener(`input`, showValue);

let cart = [];

function addToCart() {
  let itemColor;
  for (let color of document.querySelectorAll(`.item-real-color-radio`)) {
    if (color.checked) {
      itemColor = color.value;
    }
  }
  let itemSize;
  for (let size of document.querySelectorAll(`.item-real-size-radio`)) {
    if (size.checked) {
      itemSize = size.value;
    }
  }

  let itemId = document.querySelector(`.item-card`).dataset.id;
  let fullItem = {
    color: itemColor,
    size: itemSize,
    model: shoes[itemId],
    quantity: document.querySelector(`.card-counter`).innerText,
  };
  cart.push(fullItem);

  let itemCard = document.querySelector(`.item-card`);
  itemCard.parentElement.remove();
  document.querySelector(`.cart-added`).style.display = `flex`;
  setTimeout(function(){
  document.querySelector(`.cart-added`).style.display = `none`;
  }, 800)
  cartCounter()
}

function showCart() {
  document.querySelector(`.cart__inner`).style.display = `grid`;
  document.querySelector(`.empty__cart-title`).style.display = `none`;
  let cartWrapper = document.querySelector(`.cart__wrapper`);
  cartWrapper.style.display = `block`;
  let totalPrice = 0;
  let showItem = document.querySelector(`.cart__items`);
  showItem.innerHTML = ``;
  cart.map(function (item, index) {
    let showItem = document.querySelector(`.cart__items`);
    let classItem = `cart-delete__btn`;
    showItem.innerHTML += `
    <div class="cart__item" data-cartId="${index}">
      <div class="cart__img">
        <img src="${item.model.imgUrl}" alt="">
      </div>
      <div class="cart__info">
        <div class="cart__text">
          <p class="cart__name">${item.model.name}</p>
          <p class="cart__price">${item.model.price.toLocaleString()} руб.</p>
          <p class="cart-color__title">Цвет:  <span class="cart__color cart__color-${
            item.color
          }"></span></p>
          <p class="cart__size">Размер: ${item.size} RU</p>
        </div>
        <div class="cart__buttons">
          <p class="cart-quantity">Штук: ${item.quantity}</p>
          <img src="./images/trash.png" class="${classItem}">
        </div>
      </div>
    </div>`;
    totalPrice += item.model.price * item.quantity;
  });

  document.querySelector(
    `.total__price`
  ).innerHTML = `${totalPrice.toLocaleString()} Руб.`;

  function removeCart() {
    cartWrapper.style.display = `none`;
  }

  let deleteBtns = document.querySelectorAll(`.cart-delete__btn`);
  for (let btn of deleteBtns) {
    btn.addEventListener(`click`, function (event) {
      let elementIds = document.querySelectorAll(`.cart__item`);
      let eventElement =
        event.target.parentElement.parentElement.parentElement.dataset.cartid;
      for (let elem of elementIds) {
        if (eventElement == elem.dataset.cartid) {
          cart.splice(elem.dataset.cartid, 1);
          elem.remove();
          console.log(cart);
          if (cart.length == 0) {
            document.querySelector(`.cart__inner`).style.display = `none`;
            document.querySelector(
              `.empty__cart-title`
            ).style.display = `block`;
          }
        }
        if (elem.dataset.cartid > eventElement) {
          elem.dataset.cartid = elem.dataset.cartid - 1;
        }

        cartCounter();
        let totalPrice = 0;
        cart.map(function (item, index) {
          totalPrice += item.model.price * item.quantity;
          document.querySelector(
            `.total__price`
          ).innerHTML = `${totalPrice.toLocaleString()} Руб.`;
        });
      }
    });
  }

  let closeBtn = document.querySelector(`.cart-cross__img`);
  closeBtn.addEventListener(`click`, removeCart);
}

function emptyCart() {
  let cartWrapper = document.querySelector(`.cart__wrapper`);
  cartWrapper.style.display = `block`;

  document.querySelector(`.cart__inner`).style.display = `none`;
  function removeCart() {
    cartWrapper.style.display = `none`;
  }

  let closeBtn = document.querySelector(`.cart-cross__img`);
  closeBtn.addEventListener(`click`, removeCart);
}

let cartBtn = document.querySelector(`.header-menu__wrapper`);
cartBtn.addEventListener(`click`, function () {
  if (cart.length == 0) {
    emptyCart();
  } else {
    showCart();
  }
});

window.addEventListener(`scroll`, function(){
  let scrollBtn = document.querySelector(`.up-button__wrapper`);
  scrollBtn.classList.toggle(`active`, window.scrollY > 200)
})

let scrollBtn = document.querySelector(`.up-button__wrapper`);
scrollBtn.addEventListener(`click`,function(){
  window.scrollTo({
    top:0,
  })
})

function cartCounter(){
  let counter = document.querySelector(`.header-cart__counter`);
  if (cart.length == 0){
    let counter = document.querySelector(`.header-cart__counter`);
    counter.style.display = `none`;
  } else {
    counter.style.display = `block`;
    counter.innerHTML = cart.length
  }
}

let setOrderBtn = document.querySelector(`.setOrder__btn`);
setOrderBtn.addEventListener(`click`, function(event){
  event.preventDefault();
  document.querySelector(`.cart__wrapper`).style.display = `none`;
  document.querySelector(`.empty__cart-title`).style.display = `block`;
  cart.splice(0)
  cartCounter()
  document.querySelector(`.order-confirmed`).style.display = `block`;
  setTimeout(function(){
    document.querySelector(`.order-confirmed`).style.display = `none`;
  }, 2000)
})

function changeTheme(){
  let body = document.querySelector(`body`);
  let header = document.querySelector(`header`)
  let cartAdd = document.querySelector(`.cart-added__wrapper`);
  let cart = document.querySelector(`.cart`);
  let orderConfirm = document.querySelector(`.order-confirmed__wrapper`)
  if (themeBtn.classList.contains('theme-dark')){
    body.style.backgroundColor = `#fff`;
    header.style.backgroundColor = `#fff`;
    body.style.color = `#000`;
    cartAdd.style.backgroundColor = `#fff`;
    cart.style.backgroundColor = `#fff`;
    orderConfirm.style.backgroundColor = `#fff`;
  } else {
    body.style.backgroundColor = `#1f1f1f`;
    header.style.backgroundColor = `#1f1f1f`;
    body.style.color = `#fff`;
    cartAdd.style.backgroundColor = `#1f1f1f`;
    cart.style.backgroundColor = `#1f1f1f`
    orderConfirm.style.backgroundColor = `#1f1f1f`;
  }
  themeBtn.classList.toggle(`theme-dark`);
}

let themeBtn = document.querySelector(`.header-theme__wrapper`);
themeBtn.addEventListener(`click`, changeTheme)