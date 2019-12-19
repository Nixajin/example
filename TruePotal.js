//-------------------
//タブの切り替え
//-------------------

// ▼A：対象要素を得る
let tabs = $("#pagecontrol a");
let pages = $("#pagebody .page");

// ▼B：タブの切り替え処理

function changeTab() {
    // ▼B-1. href属性値から対象のid名を抜き出す

    var targetid = this.href.substring(
        this.href.indexOf("#") + 1,
        this.href.length
    );

    // ▼B-2. 指定のタブページだけを表示する

    for (var i = 0; i < pages.length; i++) {
        if (pages[i].id != targetid) {
            pages[i].style.display = "none";
        } else {
            pages[i].style.display = "block";
        }
    }

    // ▼B-3. クリックされたタブを前面に表示する

    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.zIndex = "0";
    }

    this.style.zIndex = "10";

    // ▼B-4. ページ遷移しないようにfalseを返す

    return false;
}

// ▼C：すべてのタブに対して、クリック時にchangeTab関数が実行されるよう指定する

for (var i = 0; i < tabs.length; i++) {
    tabs[i].onclick = changeTab;
}

// ▼D：最初は先頭のタブを選択しておく

tabs[2].onclick();

//------------------------------
//ここからテーブルの位置取得
//------------------------------

$("td").click(function () {
    //縦
    let row = $(this).closest("tr").index();
    //横
    let col = this.cellIndex;
    console.log("Row: " + row + ", Column: " + col);

     $("#TBL").on("click", function () {

        if(row != 0 && col != 0){

            $("#shirabasu").css("visibility", "visible");

            $("#shirabasu").click(function () {

                let eventId = event.target.id;

                TBL.rows[row].cells[col].innerHTML = $(`#${eventId}`).html();

                console.log('Row: ' + row + ', Column: ' + col);
                console.log(eventId);

                $(this).css("visibility", "hidden");

                $(this).off();

            });

            $(this).off();
         }

    });

});
