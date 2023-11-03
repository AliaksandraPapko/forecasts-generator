/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */
const forecastContainer = document.querySelector('.current-forecast');
const predictForecast = document.querySelector('.forecast-btn');
const oldForecasts = document.querySelector('.forecasts');

predictForecast.addEventListener('click', function() {
    const textForecast = [
        "Вы не узнаете, если не попытаетесь",
        "Всему свое время",
        "Никогда не забывайте о себе",
        "Не вмешивайся в чужие дела"
    ];
    const randomForecast = textForecast[Math.floor(Math.random() * textForecast.length)];
    const forecast = document.querySelector('.current-forecast h1');
    forecast.textContent = `${randomForecast}`;

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(0);
        max = Math.floor(100);
        return randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    getRandomIntInclusive();

    const odds = document.querySelector('.current-forecast p');
    odds.textContent = `Вероятность - ${randomValue}%`;

    function createNewForecast(forecast, odds) {
        const template = document.querySelector('#forecast-item');
        const newForecast = template.content.cloneNode(true);

        newForecast.querySelector('h3').textContent = forecast;

        newForecast.querySelector('p').textContent = odds;

        oldForecasts.append(newForecast);
    }
    createNewForecast(forecast.textContent, odds.textContent);
});
/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */