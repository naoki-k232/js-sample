
const onClickAdd = () => {
    // テキストボックスの値を取得しテキストボックスの初期化
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    // div生成
    const div = document.createElement("div");
    div.className = "list-low";
    // console.log(div);

    // li生成
    const li = document.createElement("li");
    // alert(inputText);

    // p生成
    const p = document.createElement("p");
    p.innerText = inputText;
    // console.log(p);

    // divタグの子要素に各要素を設定
    div.appendChild(p);
    li.appendChild(div);
    // console.log(li);

    // 未完了のリストに追加
    document.getElementById("incomplete-list").appendChild(li);
}

document.getElementById("add-button").addEventListener("click", () => onClickAdd());