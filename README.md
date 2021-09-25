# Gentleman

為紳士打造的 Chrome extension，讓紳士們安心在午夜享受屬於自己的時光。

![gentleman logo](./images/logo.png)

## How to Install

由於 [Content Policies](https://developer.chrome.com/docs/webstore/program_policies/#content_policies)，本工具不會上架至 [Chrome Web Store](https://chrome.google.com/webstore/category/extensions)。請依照以下步驟手動安裝：

- Step 1：透過 `git clone https://github.com/YogaPan/gentleman.git` 獲取原始碼，或是到 [Releases](https://github.com/YogaPan/gentleman/releases) 下載 zip 壓縮檔。
- Step 2：至 `chrome://extensions/` 打開**開發人員模式**。
- Step 3：點選載入未封裝項目，選擇 repo 下的 `/src` 資料夾。

## Features

### Quick Jump

如果每次看到[神的語言](https://twhowto.com/4605/)，都要先複製、然後手動拼湊網址實在是太麻煩了！紳士在重要時刻通常只有一隻手，我們追求的是簡單快速，透過以下兩種方式即可使用 `quick jump` 功能：

1. 在網頁中對著神的六位數字點擊右鍵開啟下拉選單，並點選 `Gentleman`。
2. 在 Chrome 網址列輸入 `g` 後按下 `tab` 建，並且輸入神的六位數字。

### Quick Close All NSFW Tabs（賢者模式）

想想以下情境：當媽媽走進來房間時，你慌張的關閉整個視窗，於是媽媽便會很好奇的你的桌面到底是多有趣；或當你成為聖賢時，你必須慢慢的關閉成堆你已經不感興趣的分頁（沒有那種世俗的慾望.jpg）。這種尷尬的情況下，這個功能就是你的好朋友！在 Mac 上按下 `Command-Shift-K`，Windows 上 `Ctrl-Shift-K` 即可關閉所有 NSFW 分頁！

NSFW Website list 列在：[./src/background.js#8](./src/background.js#5)，未來會加上使用者自行客製化的功能。

## Future Roadmap

- [ ] Restore closed NSFW tabs
- [ ] Clean NSFW website history
- [ ] User can customized NSFW website list

## LICENSE

[![Licence](https://img.shields.io/github/license/YogaPan/gentleman?style=for-the-badge)](./LICENSE)
