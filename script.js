let wins = 0;

$(function() {
    let myHand, comHand;
    let myTemp, comTemp;

    $('#button-0').click(function() {
        Judge(0);
    });

    $('#button-1').click(function() {
        Judge(1);
    });

    $('#button-2').click(function() {
        Judge(2);
    });

    $('#button-restart').click(function() {
        myHand = null;
        comHand = null;
        myTemp = null;
        comTemp = null;
        $('#end-preview').css('display','none');
        $('#button-list').css('display','block');
        $('#button-restart').css('display','none');
        $('#label').html('突然ですが、じゃんけんを開始します。<br>出す手をクリックしてください。');
    });
});

function Judge(myHand) {
    comHand = Math.floor(Math.random() * Math.floor(3));
    const $label = $('#label'), $shiratamaComment = $('#shiratama-comment');

    switch(myHand) {
        case 0:
            myTemp = "グー";
            break;
        case 1:
            myTemp = "チョキ";
            break;
        case 2:
            myTemp = "パー";
            break;
    }

    switch(comHand) {
        case 0:
            comTemp = "グー";
            break;
        case 1:
            comTemp = "チョキ";
            break;
        case 2:
            comTemp = "パー";
            break;
    }

    if(myHand === 0 && comHand === 1 || myHand === 2 && comHand === 0 || myHand === 1 && comHand === 2) {
        $label.html('<p>お前：' + myTemp + '　しらたま：' + comTemp + '<br/>あなたの勝ちです</p>');
        $shiratamaComment.html('<p>強いね！！ ＾▽＾</p>');
        wins++;
    }
    else if(myHand === comHand) {
        $label.html('<p>お前：' + myTemp + '　しらたま：' + comTemp + '<br/>引き分けです</p>');
        $shiratamaComment.html('<p>もう一回！ ＞_＜</p>');
    }
    else {
        $label.html('<p>お前：' + myTemp + '　しらたま：' + comTemp + '<br/>あなたの負けです</p>');
        $shiratamaComment.html('<p>ザッッコww ＾△＾</p>');
        wins = 0;
    }
    
    var worldWins = localStorage.getItem('world-max-wins');
    Number(worldWins);
    if(worldWins === null) {
        worldWins = 0;
    }
    if(worldWins < wins) {
        localStorage.setItem('world-max-wins',String(wins));
    }

    $('#end-preview').css('display','block');
    $('#button-list').css('display','none');
    $('#button-restart').css('display','block');
    $('#wins-letters').html("あんたの記録：" + wins + '連勝');
    $('#world-max-wins-letters').html("全プレイヤー最高記録：" + worldWins + '連勝');
}
