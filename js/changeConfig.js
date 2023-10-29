import company from "./config.js";

// Buscamos los elementos en nuestro HTML.
const title = document.querySelector('.fixedBanner__title');
const whatsappLink = document.getElementById('whatsappLink');
const telegramLink = document.getElementById('telegramLink');
const rootElement = document.documentElement;

// Hacemos los cambios de valores de nuestro html.
title.innerHTML = company.name;
whatsappLink.href = company.whatsapp;
telegramLink.href = company.telegram;
rootElement.style.setProperty('--primary', company.color);