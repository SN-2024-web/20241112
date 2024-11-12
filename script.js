//Javascript原則-------------------------
//まずはHTMLから持ってくる(変えたい、使いたい)要素をconstで定義する。
//とにかく細かく区切って動作を確認。コンソールに出してみたり、アラートを出してみたり。
//コードを書くごとにコンソールで確認でいいかも。

const BUTTON = document.querySelectorAll("button");
const RESULT = document.querySelector("#result");
const TEST = document.querySelector(".test");

let COUNT = "";

const BUTTONPRESS = (event)=> {

   if (event.target.textContent === "C"){
    COUNT = "";
    }else if (event.target.textContent === "=") {
    COUNT = eval(COUNT);
    RESULT.style.color = "black"
    COUNT = COUNT.toString(); //evalで「数値」になっちゃったCOUNTを、「文字」に戻す
    }else if (event.target.textContent === "|←") {
    COUNT = COUNT.slice(0,-1); //一文字削る関数（というより、一文字削ったものを保持する関数）
    }else{
    COUNT = COUNT + event.target.textContent;
   }
   
   RESULT.textContent = COUNT;
};

BUTTON.forEach(button => button.addEventListener("click",BUTTONPRESS));

console. log(BUTTON);
console. log(result);
console. log(TEST);