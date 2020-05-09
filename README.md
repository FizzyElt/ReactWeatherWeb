## 台灣天氣查詢網頁

[作品網址](https://react-weather-web.netlify.com/)

![](./QRcode.png)

### 特點

* 自製Slider組件
* 自行撰寫webpack設定檔

### 使用框架及套件

* React
* Ant Design
* axios
* react-icons
* react-router
* react-transition-group

## 使用步驟

### 下載套件

終端機執行
```
npm install
```
要正常使用請先到[氣象局資料開份平台](https://opendata.cwb.gov.tw/index)申請Token

在src資料夾內新增apiToken.js檔案撰寫以下內容
```js
export const Token='<your Token>'
```

### 運行 
```
npm run start
```
網址127.0.0.1:3000

### 打包
```
npm run build
```
