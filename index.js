
const onClickAdd = () => {
    // テキストボックスの値を取得しテキストボックスの初期化
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    createIncompleteList(inputText);
}

// 追加ボタン クリックイベント
document.getElementById("add-button").addEventListener("click", () => onClickAdd());

// 未完了リストから指定の要素を削除する関数
const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
}

// タグ生成関数
const createIncompleteList = (text) => {
        // div生成
        const div = document.createElement("div");
        div.className = "list-row";
    
        // li生成
        const li = document.createElement("li");
    
        // p生成
        const p = document.createElement("p");
        p.innerText = text;
    
        // button(完了)タグ生成
        const completeBtn = document.createElement("button");
        completeBtn.innerText = "完了";
        completeBtn.addEventListener("click", () => {
            // 未完了リストから削除
            const completeTarget = completeBtn.closest("li");
            deleteFromIncompleteList(completeTarget);
    
            // 完了リストに作成
            const backBtn = document.createElement("button");
            backBtn.innerText = "戻す";
            backBtn.addEventListener("click", () => {
                const deleteTarget = backBtn.closest("li");
                document.getElementById("complete-list").removeChild(deleteTarget);
                // text情報だけ取得
                const text = deleteTarget.querySelector("p").innerText;
                createIncompleteList(text);
            });
            div.removeChild(deleteBtn);
            div.removeChild(completeBtn);
            div.appendChild(backBtn);
            document.getElementById("complete-list").appendChild(completeTarget);
        });
    
        // button(削除)タグ生成
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "削除";
        deleteBtn.addEventListener("click", () => {
            // 押された削除ボタンの親タグ(div)を未完了リストから削除
            deleteFromIncompleteList(deleteBtn.closest("li"));
        });
    
        // divタグの子要素に各要素を設定
        li.appendChild(div);
        div.appendChild(p);
        div.appendChild(completeBtn);
        div.appendChild(deleteBtn);
    
        // 未完了のリストに追加
        document.getElementById("incomplete-list").appendChild(li);
}