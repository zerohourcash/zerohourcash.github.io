# Проверка сайта — 21 сентября 2026

Проверены главная страница (13 разделов), policy.html и mit-license.html. Проверка интерфейса выполнена в Chromium через браузер Codex; Safari, Firefox и физические телефоны не проверялись.

## Исправлено

- Мобильный значок меню, размер логотипа и скрытие закрытого меню. Добавлено меню на страницы политики и лицензии.
- Переходы по меню сохраняют якорь в адресе; заголовки не перекрываются фиксированной шапкой. Закрытие по Escape и клику вне шапки.
- Перевод официального описания кошелька и некорректное экранирование ссылок внутри переводов. Выбор языка доступен с клавиатуры.
- Ссылки обозревателя заменены с zeroscan.io на доступный zeroscan.st; Bounty — на bounty.zhchain.sbs.
- Загрузка Mac-ноды в подвале ведёт на релиз v1.0.0-macos.1. Установщик — v0.3.3-macos.
- Ссылка на локальную политику и изображение V3 Games; пустой якорь грантов заменён подписью «скоро».
- Актуальная награда 400 ZHC с блока 1 700 000 подтверждена обозревателем zeroscan.st (высота 1 700 869). Исторические новости сохранены. Убрано ошибочное утверждение о десятках миллионов блоков.
- Перенос длинных имён загрузок, видимый фокус клавиатуры и поддержка reduced-motion для переходов.

## Проверки

- Ширины 320, 390, 768, 1024, 1440 px: горизонтального переполнения документа нет.
- EN/RU: переключение и сохранение языка после перезагрузки; отсутствующих ключей перевода нет.
- Все 8 FAQ открываются и закрываются.
- 46 изображений без ошибок загрузки; фоновое видео воспроизводится.
- Внутренние ссылки, локальные ресурсы, уникальность ID, синтаксис JS и git diff --check: пройдены.
- Веб-кошелёк открывает стартовый экран; обозреватель показывает блоки и транзакции. Создание кошелька и финансовые операции не выполнялись.
- Установщики Linux, Windows, macOS и отдельная Mac-нода отвечают HTTP 200 после перенаправления. Это проверка доступности файлов, не запуск установки.

## Внешние зависимости

Проверено 65 уникальных HTTPS-ссылок методом HEAD с переходом по перенаправлениям: 40 вернули HTTP 200, 25 не прошли проверку. HTTP 200 не гарантирует работу всего внешнего приложения; 403 может означать защиту от автоматических проверок. Результаты зависят от сети и времени. Недоступность zh.cash/docs/en/ дополнительно подтверждена браузером (ERR_CONNECTION_CLOSED).

Ниже оставшиеся ошибки; ссылки без подтверждённой замены сохранены. Для полного исправления нужны восстановление этих сервисов или актуальные адреса/копии документов.

| URL | Результат |
| --- | --- |
| https://app.zhcash.network | <urlopen error [SSL: UNEXPECTED_EOF_WHILE_READING] EOF occurred in violation of protocol (_ssl.c:1081)> |
| https://app.zhcash.network/forms/ticket?col=col-md-5 | <urlopen error [SSL: UNEXPECTED_EOF_WHILE_READING] EOF occurred in violation of protocol (_ssl.c:1081)> |
| https://app.zhcash.network/knowledge-base | <urlopen error [SSL: UNEXPECTED_EOF_WHILE_READING] EOF occurred in violation of protocol (_ssl.c:1081)> |
| https://app.zhcash.network/knowledge-base/category/documentation-eng | <urlopen error [SSL: UNEXPECTED_EOF_WHILE_READING] EOF occurred in violation of protocol (_ssl.c:1081)> |
| https://evolution888.pro | <urlopen error [Errno 8] nodename nor servname provided, or not known> |
| https://latoken.com/invite?r=uvab4may | HTTP Error 301: The HTTP server returned a redirect error that would lead to an infinite loop. |
| https://nftmart.art | HTTP Error 521: <none> |
| https://nftmart.art/blog | HTTP Error 521: <none> |
| https://status.zhcash.network | <urlopen error [SSL: UNEXPECTED_EOF_WHILE_READING] EOF occurred in violation of protocol (_ssl.c:1081)> |
| https://testnet.zh.cash | HTTP Error 523: <none> |
| https://www.coingecko.com/en/coins/zhc-zero-hour-cash | HTTP Error 403: Forbidden |
| https://zerogravity.foundation | <urlopen error [Errno 8] nodename nor servname provided, or not known> |
| https://zerogravity.foundation/ | <urlopen error [Errno 8] nodename nor servname provided, or not known> |
| https://zerogravity.foundation/dao | <urlopen error [Errno 8] nodename nor servname provided, or not known> |
| https://zh.cash/docs/en/ | <urlopen error [SSL: UNEXPECTED_EOF_WHILE_READING] EOF occurred in violation of protocol (_ssl.c:1081)> |
| https://zh.cash/docs/en/ZHCash-RPC-API/index.html | <urlopen error [SSL: UNEXPECTED_EOF_WHILE_READING] EOF occurred in violation of protocol (_ssl.c:1081)> |
| https://zh.cash/download/Guide_ZHCASH_1.3_alpha_eng.pdf | <urlopen error [SSL: UNEXPECTED_EOF_WHILE_READING] EOF occurred in violation of protocol (_ssl.c:1081)> |
| https://zh.cash/download/ZHCASH_for_Validators_EN.pdf | <urlopen error [SSL: UNEXPECTED_EOF_WHILE_READING] EOF occurred in violation of protocol (_ssl.c:1081)> |
| https://zh.cash/download/ZHCASH_style_guide.rar | <urlopen error [SSL: UNEXPECTED_EOF_WHILE_READING] EOF occurred in violation of protocol (_ssl.c:1081)> |
| https://zh.cash/download/ZHCash_WhitePaper_EN.pdf | <urlopen error [SSL: UNEXPECTED_EOF_WHILE_READING] EOF occurred in violation of protocol (_ssl.c:1081)> |
| https://zh.cash/download/peers.zip | <urlopen error [SSL: UNEXPECTED_EOF_WHILE_READING] EOF occurred in violation of protocol (_ssl.c:1081)> |
| https://zhcash.medium.com | HTTP Error 403: Forbidden |
| https://zhcash.net | <urlopen error [SSL: UNEXPECTED_EOF_WHILE_READING] EOF occurred in violation of protocol (_ssl.c:1081)> |
| https://zhcash.org | <urlopen error _ssl.c:1063: The handshake operation timed out> |
| https://zhcex.online/register?ref=IYLBQR4N | <urlopen error [SSL: UNEXPECTED_EOF_WHILE_READING] EOF occurred in violation of protocol (_ssl.c:1081)> |
