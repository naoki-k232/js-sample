
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

    // button(完了)タグ生成
    const completeBtn = document.createElement("button");
    completeBtn.innerText = "完了";
    completeBtn.addEventListener("click", () => {
        alert("完了");
    });
    // console.log(completeBtn);

    // button(削除)タグ生成
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "削除";
    deleteBtn.addEventListener("click", () => {
        alert("削除");
    });

    // divタグの子要素に各要素を設定
    li.appendChild(div);
    div.appendChild(p);
    p.appendChild(completeBtn);
    p.appendChild(deleteBtn);
    // console.log(li);

    // 未完了のリストに追加
    document.getElementById("incomplete-list").appendChild(li);
}

document.getElementById("add-button").addEventListener("click", () => onClickAdd());