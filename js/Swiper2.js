var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const express = require('express');
const app = express();

// Устанавливаем SameSite=None и Secure для cookie
app.use((req, res, next) => {
    res.cookie('cookie_name', 'cookie_value', { sameSite: 'none', secure: true });
    next();
});

// Другие настройки сервера
// ...

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
