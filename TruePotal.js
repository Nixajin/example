//-----------------------------------
//ここからホームの設定
//-----------------------------------
document.getElementById("page1").innerHTML = document.getElementById("page4").innerHTML;

function settingHome(pageNum, homeBorder){
  $("#home2").css("border", "none");
  $("#home3").css("border", "none");
  $("#home4").css("border", "none");
  $("#home5").css("border", "none");
  document.getElementById("page1").innerHTML = document.getElementById(pageNum).innerHTML;
  $(homeBorder).css("border", "solid 1px #420000");
};

$(".homeParetto").click(function () {
  var home_Paretto = event.target.id;

  if(home_Paretto == "home2"){
    settingHome("page2", "#home2")
  }else if(home_Paretto == "home3"){
    settingHome("page3", "#home3")
  }else if(home_Paretto == "home4"){
    settingHome("page4", "#home4")
  }else if(home_Paretto == "home5"){
    settingHome("page5", "#home5")
  }
});

//-------------------
//タブの切り替え
//-------------------

// ▼A：対象要素を得る

var tabs = document.getElementById('pagecontrol').getElementsByTagName('a');
var pages = document.getElementById('pagebody').getElementsByClassName('page');
console.log(tabs);


// ▼B：タブの切り替え処理

function changeTab() {

   // ▼B-1. href属性値から対象のid名を抜き出す

   var targetid = this.href.substring(this.href.indexOf('#')+1,this.href.length);
console.log(targetid);

   // ▼B-2. 指定のタブページだけを表示する

   for(var i=0; i<pages.length; i++) {
      if( pages[i].id != targetid ) {
         pages[i].style.display = "none";
      }else{
         pages[i].style.display = "block";
      }
      //console.log(pages[i]);
   }


   // ▼B-3. クリックされたタブを前面に表示する

   for(var i=0; i<tabs.length; i++) {
      tabs[i].style.zIndex = "0";
   }

   this.style.zIndex = "10";

   // ▼B-4. ページ遷移しないようにfalseを返す

   return false;
}

// ▼C：すべてのタブに対して、クリック時にchangeTab関数が実行されるよう指定する

for(var i=0; i<tabs.length; i++) {
   tabs[i].onclick = changeTab;
}

// ▼D：最初は先頭のタブを選択しておく

tabs[2].onclick();


//------------------------------
//ここからテーブルの位置取得
//------------------------------

$('td').on('click', function(e){

    //縦
    var row = $(this).closest('tr').index();
    //横
    var col = this.cellIndex;
    //console.log('Row: ' + row + ', Column: ' + col);

    //時間割の切り替え

    $("#TBL").one("click", function () {

        if(row != 0 && col != 0){

            $("#shirabasu").css("visibility", "visible");

            $("#shirabasu").click(function () {

                let eventId = event.target.id;

                if(eventId == "clear_study"){
                  TBL.rows[row].cells[col].innerHTML = "";
                }else{
                  TBL.rows[row].cells[col].innerHTML = $(`#${eventId}`).html();
                }

                console.log('Row: ' + row + ', Column: ' + col);
                console.log(eventId);

                $(this).css("visibility", "hidden");

                $(this).off();

            });

            $(this).off();
         }

    });

});



//------------------------------------
//ここから設定
//------------------------------------

function change_color(colorNum, picHome, picSch, picTime, picBell, picSet){
    $("#pagecontrol").css("background-color", colorNum);
    $(".setting_title").css("background-color", colorNum);
    document.getElementById("pic1").src = picHome;
    document.getElementById("pic2").src = picSch;
    document.getElementById("pic3").src = picTime;
    document.getElementById("pic4").src = picBell;
    document.getElementById("pic5").src = picSet;
}


$(".Paretto").click(function () {
  var color_Paretto = event.target.id;
  console.log(color_Paretto);

  if(color_Paretto == "C11" || color_Paretto == "C21"){
    change_color("#839679", "home_1.png", "schedule_1.png", "timeSchool_1.png", "bell_1.png", "setting_1.png");
    $(".setting").css("border-bottom", "dashed 2px #839679");
    $("#clear_study").css("border", "solid #839679 1px");
    $(".study").css("border", "solid #839679 0.9px");
  }
  else if(color_Paretto == "C12" || color_Paretto == "C22"){
    change_color("#6BA8A9", "home_2.png", "schedule_2.png", "timeSchool_2.png", "bell_2.png", "setting_2.png");
    $(".setting").css("border-bottom", "dashed 2px #6BA8A9");
    $("#clear_study").css("border", "solid #6BA8A9 1px");
    $(".study").css("border", "solid #6BA8A9 0.9px");
  }
  else if(color_Paretto == "C13" || color_Paretto == "C23"){
    change_color("#F66767", "home_3.png", "schedule_3.png", "timeSchool_3.png", "bell_3.png", "setting_3.png");
    $(".setting").css("border-bottom", "dashed 2px #F66767");
    $("#clear_study").css("border", "solid #F66767 1px");
    $(".study").css("border", "solid #F66767 0.9px");
  }
  else if(color_Paretto == "C14" || color_Paretto == "C24"){
    change_color("#420000", "home_4.png", "schedule_4.png", "timeSchool_4.png", "bell_4.png", "setting_4.png");
    $(".setting").css("border-bottom", "dashed 2px #420000");
    $("#clear_study").css("border", "solid #420000 1px");
    $(".study").css("border", "solid #420000 0.9px");
  }

});
