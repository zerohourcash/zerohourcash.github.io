# Проверка ссылок — 9 октября 2026

Проверено 195 уникальных HTTP(S)-адресов исходного сайта: ссылки страниц, изображения, CSS-ресурсы, видео, скачивания и ранее отключённые внешние ссылки. Использованы GET-запросы с переходами по редиректам и диапазоном байтов. Ответ 206 означает успешную частичную отдачу файла; 403 не доказывает недоступность сайта в обычном браузере.

После исправлений: 20 HTML-файлов проверены на существование локальных файлов и якорей; 19 обычных страниц проверены в браузере (оставшийся файл — редирект). Все 93 уникальных изображения успешно декодируются. Проверены меню на ширине 320/390, воспроизведение видео, ссылки после переключения EN/RU, сигнатуры PDF/RAR и целостность ZIP peers.

## Исправлено

- 23 скриншота Imgur сохранены локально без изменения содержимого; происхождение записано в `image-sources.json`.
- Ссылка на добавление ZRC20 в удалённом репозитории заменена переходом к соответствующему разделу этой же страницы.
- Зацикленный реферальный URL LATOKEN заменён работающей главной страницей площадки.
- Remix переведён на HTTPS.
- Недоступные ZHCEX, консоль zhcash.org, старый qmix и удалённый форк solar отмечены как недоступные, включая ссылки внутри переводов EN/RU.
- Незавершённая глава Android обозначена как неполная; добавлены ссылки на текущий кошелёк и документацию его проекта.
- Ссылка на исторический bootstrap.dat не работает (DNS s.ZHCash.site). Страница прямо сообщает об этом; файла в бэкапе сайта нет.

## Что невозможно восстановить из имеющихся материалов

- Пять иллюстраций salvagewallet отсутствуют во всём архиве `sites.tar.gz`; текст шагов сохранён.
- Android-инструкция уже в исходном бэкапе содержала «Construction / Coming soon». Неизвестные шаги не дописывались.
- Работа внешних платформ и сервисов не восстанавливается публикацией статического сайта. DNS/521/TLS/таймауты отмечены; 403 у CoinGecko, MEXC и Medium оставлены как ограничения автоматической проверки.
- Команды в архивной документации и доступность торговых пар/возможностей сторонних сервисов не подтверждаются одним HTTP-ответом 200.

## Результаты исходной HTTP-проверки

| Адрес | HTTP | Ошибка |
| --- | --- | --- |
| `https://zerohourcash.github.io/img/core-img/favicon.ico` | 206 | — |
| `https://zerohourcash.github.io/css/style.css?v=20260921` | 206 | — |
| `https://zerohourcash.github.io/index.html` | 206 | — |
| `https://zerohourcash.github.io/img/logo.webp` | 206 | — |
| `https://zerohourcash.github.io/docs/en` | 206 | — |
| `https://zeroscan.st` | 200 | — |
| `https://zerohourcash.github.io/policy.html` | 206 | — |
| `https://zerohourcash.github.io/js/script.js?v=20260921` | 206 | — |
| `https://wallet.zeroscan.st` | 206 | — |
| `https://zerohourcash.github.io/img/video-frame.webp` | 206 | — |
| `https://zerohourcash.github.io/video/zerohour.mp4` | 206 | — |
| `https://zeroscan.st/block/1` | 200 | — |
| `https://testnet.zh.cash` | 521 | — |
| `https://zerohourcash.github.io/download/ZHCash_WhitePaper_EN.pdf` | 206 | — |
| `https://zerohourcash.github.io/download/ZHCASH_for_Validators_EN.pdf` | 206 | — |
| `https://evolution888.pro` | 000 | curl: (6) Could not resolve host: evolution888.pro |
| `https://zeroscan.st/contract/tokens` | 200 | — |
| `https://zerohourcash.github.io/img/consensus.svg` | 206 | — |
| `https://zerohourcash.github.io/img/dgp.svg` | 206 | — |
| `https://zerohourcash.github.io/img/workspeed.svg` | 206 | — |
| `https://zerohourcash.github.io/img/tokencreation.svg` | 206 | — |
| `https://zerohourcash.github.io/img/smartcontract.svg` | 206 | — |
| `https://zerohourcash.github.io/img/utxo.svg` | 206 | — |
| `https://zerohourcash.github.io/img/setting.svg` | 206 | — |
| `https://zerohourcash.github.io/img/sun.svg` | 206 | — |
| `https://zeroscan.st/misc/stake-calculator` | 200 | — |
| `https://zerohourcash.github.io/img/dapps.svg` | 206 | — |
| `https://zerohourcash.github.io/img/supernodes.svg` | 206 | — |
| `https://zerohourcash.github.io/img/smc.svg` | 206 | — |
| `https://zerohourcash.github.io/img/api.svg` | 206 | — |
| `https://zerohourcash.github.io/img/security.svg` | 206 | — |
| `https://github.com/zerohourcash` | 206 | — |
| `https://github.com/zerohourcash/ZHC-Installer/releases/latest/download/zhc-installer-linux` | 206 | — |
| `https://github.com/zerohourcash/ZHC-Installer/releases/latest/download/zhc-installer-windows.exe` | 206 | — |
| `https://github.com/zerohourcash/ZHC-Installer/releases/download/v0.3.3-macos/ZHC-Installer-0.3.3-macOS-arm64.dmg` | 206 | — |
| `https://zerohourcash.github.io/img/zerohourcash.webp` | 206 | — |
| `https://zhcex.online/register?ref=IYLBQR4N` | 000 | curl: (35) error:0A000126:SSL routines::unexpected eof while reading |
| `https://latoken.com/invite?r=uvab4may` | 301 | curl: (47) Maximum (8) redirects followed |
| `https://github.com/zerohourcash/zrc` | 206 | — |
| `https://zhcash.org` | 000 | curl: (28) Operation timed out after 18000 milliseconds with 0 bytes received |
| `https://zerohourcash.github.io/img/photon.webp` | 206 | — |
| `https://github.com/zerohourcash/zerohourcash/releases/tag/v1.0.0` | 206 | — |
| `https://t.me/zhcashnewsen/193` | 200 | — |
| `https://t.me/zhcashnewsen/175` | 200 | — |
| `https://zerogravity.foundation/` | 000 | curl: (6) Could not resolve host: zerogravity.foundation |
| `https://partner.7tix.io/partner/R5ZHBMT` | 200 | — |
| `https://t.me/zhcashnewsru/849` | 200 | — |
| `https://t.me/zhcashnewsen/187` | 200 | — |
| `https://cryptonews.net/en/editorial/guest-posts/9-best-solidity-platforms/` | 200 | — |
| `https://github.com/zerohourcash/zerohourcash` | 206 | — |
| `https://t.me/zhcashnewsen/158` | 200 | — |
| `https://telegra.ph/ZHCASH-BOUNTY-PROGRAMM-03-30` | 200 | — |
| `https://bounty.zhchain.sbs` | 206 | — |
| `https://www.coingecko.com/en/coins/zhc-zero-hour-cash` | 403 | — |
| `https://t.me/zhcashnewsen` | 200 | — |
| `https://zerohourcash.github.io/img/Latoken_Logo.svg` | 206 | — |
| `https://www.mexc.com/ru-RU/invite/customer-register?inviteCode=mexc-12RpBY` | 403 | — |
| `https://zerohourcash.github.io/img/coingecko.webp` | 206 | — |
| `https://coinstats.app/coins/zhc-zero-hour-cash` | 200 | — |
| `https://zerohourcash.github.io/img/coinstats.svg` | 206 | — |
| `https://zerohourcash.github.io/img/rasvetcooplogo.webp` | 206 | — |
| `https://zerohourcash.github.io/img/v3logo.webp` | 206 | — |
| `https://zerohourcash.github.io/img/globalinvesthub.webp` | 206 | — |
| `https://zerohourcash.github.io/img/cvl-network.svg` | 206 | — |
| `https://nftmart.art` | 521 | — |
| `https://zerohourcash.github.io/img/nftmart.webp` | 206 | — |
| `https://blockchainkz.info/en/` | 206 | — |
| `https://zerohourcash.github.io/img/blockchainkz.svg` | 206 | — |
| `https://www.forbes.com/digital-assets/assets/zhc-zero-hour-cash-zhc-2/` | 206 | — |
| `https://zerohourcash.github.io/img/forbes.webp` | 206 | — |
| `https://coinmarketcap.com/community/profile/zhchain/` | 200 | — |
| `https://zerohourcash.github.io/img/coinmarketcaplogo.webp` | 206 | — |
| `https://zhchain.sbs/assets/images/crypto-emergency.svg` | 200 | — |
| `https://zerohourcash.github.io/img/cryptosummit-logo-red.svg` | 206 | — |
| `https://zerogravity.foundation` | 000 | curl: (6) Could not resolve host: zerogravity.foundation |
| `https://zerohourcash.github.io/img/ico-platforms/1.webp` | 206 | — |
| `https://zerohourcash.github.io/img/ico-platforms/2.webp` | 206 | — |
| `https://zerohourcash.github.io/img/ico-platforms/3.webp` | 206 | — |
| `https://zerohourcash.github.io/img/ico-platforms/4.webp` | 206 | — |
| `https://zerohourcash.github.io/img/ico-platforms/6.webp` | 206 | — |
| `https://t.me/zhcash_official` | 200 | — |
| `https://twitter.com/zhcash_official` | 200 | — |
| `https://discord.gg/TVhRqmF` | 200 | — |
| `https://www.facebook.com/0hourcash/` | 200 | — |
| `https://www.facebook.com/groups/1404982826831570/` | 200 | — |
| `https://zhcash.medium.com` | 403 | — |
| `https://zhchain.sbs` | 206 | — |
| `https://zerohourcash.github.io/img/symbol_red.webp` | 206 | — |
| `https://zerohourcash.github.io/mit-license.html` | 206 | — |
| `https://zerohourcash.github.io/docs/en/index.html` | 206 | — |
| `https://zerohourcash.github.io/docs/en/ZHCash-RPC-API/index.html` | 206 | — |
| `https://zeroscan.st/misc/biggest-miners` | 200 | — |
| `https://docs.soliditylang.org/en/develop/index.html` | 200 | — |
| `https://remix.ethereum.org/` | 206 | — |
| `https://zerohourcash.github.io/download/Guide_ZHCASH_1.3_alpha_eng.pdf` | 206 | — |
| `https://zerohourcash.github.io/download/peers.zip` | 206 | — |
| `https://zerohourcash.github.io/download/ZHCASH_style_guide.rar` | 206 | — |
| `https://zhcash.network` | 000 | curl: (6) Could not resolve host: zhcash.network |
| `https://status.zhcash.network` | 000 | curl: (6) Could not resolve host: status.zhcash.network |
| `https://zhcash.net` | 200 | — |
| `https://zerogravity.foundation/dao` | 000 | curl: (6) Could not resolve host: zerogravity.foundation |
| `https://nftmart.art/blog` | 521 | — |
| `https://github.com/zerohourcash/zerohourcash/releases/download/v1.0.0-macos.1/ZHCASH-Evolution-1.0.0-macos.1-arm64.dmg` | 206 | — |
| `https://zerohourcash.github.io/js/i18n.js?v=20260921` | 206 | — |
| `https://github.com/remy/mit-license` | 206 | — |
| `https://zerohourcash.github.io/docs/gitbook/images/favicon.ico` | 206 | — |
| `https://zerohourcash.github.io/docs/en/docs.css` | 206 | — |
| `https://zerohourcash.github.io/docs/index.html` | 206 | — |
| `https://zerohourcash.github.io/docs/en/ZHCash-Wallet-Tutorial/index.html` | 206 | — |
| `https://zerohourcash.github.io/docs/en/ZHCash-wallet-usage-best-practices/index.html` | 206 | — |
| `https://zerohourcash.github.io/docs/en/updateZHCash/index.html` | 206 | — |
| `https://zerohourcash.github.io/docs/en/commands/index.html` | 206 | — |
| `https://zerohourcash.github.io/docs/en/Adding-Nodes/index.html` | 206 | — |
| `https://zerohourcash.github.io/docs/en/Encrypt-and-Unlock-ZHCash-Wallet/index.html` | 206 | — |
| `https://zerohourcash.github.io/docs/en/Wallet-Recovery-with-Salvagewallet.html` | 206 | — |
| `https://zerohourcash.github.io/docs/en/bech32/index.html` | 206 | — |
| `https://zerohourcash.github.io/docs/en/ZHCash-WebWallet-usage/index.html` | 206 | — |
| `https://zerohourcash.github.io/docs/en/How-to-use-ZHCash-Android-Wallet/index.html` | 206 | — |
| `https://zerohourcash.github.io/docs/en/ZHCash-Exchange-Usage-Guide-and-Info.html` | 206 | — |
| `https://zerohourcash.github.io/docs/en/How-To-Add-Options/index.html` | 206 | — |
| `https://zerohourcash.github.io/docs/en/How-to-Use-Bootstrap/index.html` | 206 | — |
| `https://zeroscan.st/` | 200 | — |
| `https://github.com/bitcoin/bips/blob/master/bip-0022.mediawiki` | 206 | — |
| `https://github.com/bitcoin/bips/blob/master/bip-0023.mediawiki` | 206 | — |
| `https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki` | 206 | — |
| `https://github.com/bitcoin/bips/blob/master/bip-0145.mediawiki` | 206 | — |
| `https://en.bitcoin.it/wiki/BIP_0022` | 200 | — |
| `https://zerohourcash.github.io/docs/en/Adding-Nodes/addnode5.png.webp` | 206 | — |
| `https://zerohourcash.github.io/docs/en/Adding-Nodes/addnode4.png.webp` | 206 | — |
| `https://zerohourcash.github.io/docs/en/Adding-Nodes/addnode3.png.webp` | 206 | — |
| `https://zerohourcash.github.io/docs/en/Adding-Nodes/addnode2.png.webp` | 206 | — |
| `https://zerohourcash.github.io/docs/en/Adding-Nodes/addnode7.png.webp` | 206 | — |
| `https://zerohourcash.github.io/docs/en/Adding-Nodes/addnode8.png.webp` | 206 | — |
| `https://zerohourcash.github.io/docs/en/How-To-Add-Options/zhwalletoptions.png.webp` | 206 | — |
| `https://zerohourcash.github.io/docs/en/How-To-Add-Options/zhwalcomoption.png.webp` | 206 | — |
| `https://zerohourcash.github.io/docs/en/commands/1.png.webp` | 206 | — |
| `https://zerohourcash.github.io/docs/en/commands/3.png.webp` | 206 | — |
| `https://chainquery.com` | 200 | — |
| `https://bitcoin.org/en/developer-reference` | 200 | — |
| `https://zerohourcash.github.io/docs/en/commands/4.png.webp` | 206 | — |
| `https://zerohourcash.github.io/docs/en/commands/5.png.webp` | 206 | — |
| `https://zerohourcash.github.io/img/zhcash-getblockchaininfo-20240408.jpg` | 206 | — |
| `https://zerohourcash.github.io/docs/en/ZHCash-Wallet-Tutorial/1.png.webp` | 206 | — |
| `https://zerohourcash.github.io/docs/en/ZHCash-Wallet-Tutorial/2.png.webp` | 206 | — |
| `https://zerohourcash.github.io/docs/en/ZHCash-Wallet-Tutorial/3.png.webp` | 206 | — |
| `https://zerohourcash.github.io/docs/en/ZHCash-Wallet-Tutorial/4.png.webp` | 206 | — |
| `https://zerohourcash.github.io/docs/en/ZHCash-Wallet-Tutorial/5.png.webp` | 206 | — |
| `https://zerohourcash.github.io/docs/en/ZHCash-Wallet-Tutorial/6.png.webp` | 206 | — |
| `https://zerohourcash.github.io/docs/en/ZHCash-Wallet-Tutorial/7.png.webp` | 206 | — |
| `https://zerohourcash.github.io/docs/en/ZHCash-Wallet-Tutorial/8.png.webp` | 206 | — |
| `https://zerohourcash.github.io/docs/en/ZHCash-Wallet-Tutorial/9.png.webp` | 206 | — |
| `https://zerohourcash.github.io/docs/en/ZHCash-Wallet-Tutorial/10.png.webp` | 206 | — |
| `https://zerohourcash.github.io/docs/en/ZHCash-Wallet-Tutorial/12.png.webp` | 206 | — |
| `https://zerohourcash.github.io/docs/en/ZHCash-Wallet-Tutorial/13.png.webp` | 206 | — |
| `https://zerohourcash.github.io/docs/en/ZHCash-Wallet-Tutorial/14.png.webp` | 206 | — |
| `https://zerohourcash.github.io/docs/en/ZHCash-Wallet-Tutorial/15.png.webp` | 206 | — |
| `https://zerohourcash.github.io/docs/en/ZHCash-Wallet-Tutorial/16.png.webp` | 206 | — |
| `https://zerohourcash.github.io/docs/en/Encrypt-and-Unlock-ZHCash-Wallet/enter-password.jpg` | 206 | — |
| `https://zerohourcash.github.io/docs/en/Encrypt-and-Unlock-ZHCash-Wallet/enter-new-password.jpg` | 206 | — |
| `https://wallet.zeroscan.st/` | 206 | — |
| `https://zerohourcash.github.io/docs/en/ZHCash-WebWallet-usage/webwalletssl.png.webp` | 206 | — |
| `https://zerohourcash.github.io/img/svg/checkmark.svg` | 206 | — |
| `https://i.imgur.com/6cFzE2p.jpg` | 206 | — |
| `https://i.imgur.com/MPlJCXK.jpg` | 206 | — |
| `https://i.imgur.com/ioGSwbq.jpg` | 206 | — |
| `https://i.imgur.com/1ClZwHq.jpg` | 206 | — |
| `https://i.imgur.com/DAU5res.jpg` | 206 | — |
| `https://i.imgur.com/UxnrajH.jpg` | 206 | — |
| `https://i.imgur.com/4BS3jFi.jpg` | 206 | — |
| `https://i.imgur.com/ZdCBdhu.jpg` | 206 | — |
| `https://i.imgur.com/us44CuH.png` | 206 | — |
| `https://i.imgur.com/vZ4oSZ1.jpg` | 206 | — |
| `https://i.imgur.com/EyE4B1x.jpg` | 206 | — |
| `https://i.imgur.com/JLAvVTO.jpg` | 206 | — |
| `https://i.imgur.com/i8vYHE4.jpg` | 206 | — |
| `https://i.imgur.com/UvD5aVc.jpg` | 206 | — |
| `https://github.com/ZHCashproject/documents/tree/master/en/ZHCash-WebWallet-usage` | 404 | — |
| `https://qmix.blockchainspaceman.com/` | 000 | curl: (6) Could not resolve host: qmix.blockchainspaceman.com |
| `http://remix.ethereum.org/` | 206 | — |
| `https://github.com/ZHCashproject/solar` | 404 | — |
| `https://i.imgur.com/6Db8Xay.png` | 206 | — |
| `https://i.imgur.com/61fwWHg.jpg` | 206 | — |
| `https://i.imgur.com/dJAyKga.jpg` | 206 | — |
| `https://i.imgur.com/nayWRoW.jpg` | 206 | — |
| `https://i.imgur.com/S0QDtdR.jpg` | 206 | — |
| `https://i.imgur.com/izdC8ci.jpg` | 206 | — |
| `https://i.imgur.com/2aAR0QL.jpg` | 206 | — |
| `https://i.imgur.com/WlT49Bb.jpg` | 206 | — |
| `https://i.imgur.com/goLbJfH.jpg` | 206 | — |
| `https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki` | 206 | — |
| `https://www.coindesk.com/pieter-wuilles-latest-project-making-bitcoin-harder-lose/` | 206 | — |
| `https://zerohourcash.github.io/docs/en/bech32/0.png.webp` | 206 | — |
| `https://zerohourcash.github.io/docs/en/bech32/2.png.webp` | 206 | — |
| `https://zerohourcash.github.io/docs/en/bech32/3.png.webp` | 206 | — |
| `https://zerohourcash.github.io/docs/en/bech32/4.png.webp` | 206 | — |
