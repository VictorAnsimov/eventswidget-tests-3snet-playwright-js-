Автотесты конструктора календаря 3Snet

Быстрый старт:
npm install
npx playwright install
npm test


Тестируемые функции:
Переключение языка (русский/английский)
Выбор тематики (7 категорий + "Выбрать все" + очистка)
Выбор стран ("Выбрать все страны" + очистка)
Настройка размеров (ширина 280-1020px, высота 240-720px)
Галочки "на всю ширину/высоту"
Цветовые темы (светлая/темная)
3 варианта радио-кнопок
Генерация превью виджета
Копирование HTML-кода
Скорость загрузки страницы
Рекламные материалы и пагинация

Команды для запуска:
npm test # Все тесты
npm run test:headed # С видимым браузером
npm run test:debug # Режим отладки
npm run test:smoke # Только базовые тесты
npm run test:calendar # Только тесты календаря
npx playwright show-report # Показать HTML отчет

Структура проекта:
tests/
pages/ # Page Objects
locators/ # Локаторы элементов
specs/ # Тестовые файлы
smoke/ # Базовые тесты (3 теста)
calendar/ # Функциональные тесты (37 тестов)
topics.spec.ts # Выбор тематики
countries.spec.ts # Выбор стран
size.spec.ts # Настройка размеров
theme.spec.ts # Цветовые темы
radio-buttons.spec.ts # Радио-кнопки
preview.spec.ts # Генерация превью
e2e.spec.ts # Полная конфигурация
language.spec.ts # Язык
performance.spec.ts # Производительность

Технологии:

Playwright для автоматизации браузера
TypeScript для типизации
Page Object Model для структуры
Параллельный запуск 8 воркеров
HTML и JUnit отчеты
Отладка:
npx playwright test tests/specs/calendar/topics.spec.ts --headed
npx playwright test --screenshot=only-on-failure
npx playwright test --video=retain-on-failure
