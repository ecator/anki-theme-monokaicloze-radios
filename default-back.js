
<img src="qrc:/icons/rating.png" id="star" class="marked" draggable="false" style="display: none; ">
<div id="qa"><style><style>
@font-face { font-family: hwkt; src: url('_hwkt.ttf'); }
.card {
 font-family: hwkt;
 font-size: 17px;
 text-align: left;
 color: white;
 background-color: #272822;
}
div{
 margin:5px auto
}
.text{
 color:#e6db74;
 text-align:left;
}
.hint{
 color:#a6e22e;
}
.extra{
 margin-top:15px;
 font-size:16px;
 color: #eeeebb;
 text-align:left;
}
.cloze {
 font-weight: bold;
 color: #f92672;
}
.options{
 list-style:upper-latin;
}
#typeans{
display:block;
}
</style>
<div class="text">你是谁</div>

<ol class="options" id="optionList">
<!--options第一行为正确答案，每次会随机组合选项，每个选项以换行符分隔，选项中用换行符请用<br>标签-->
</ol>
<!--下面的div用来传递选项参数，土办法-->
<div id="options" style="display:none">我是正确答案<div>我是错误答案</div></div>
<textarea cols="40" rows="30" id="debuginfo"></textarea>



<span style="font-family: 'Arial'; font-size: 20px"><div><code id="typeans"><span class="typeBad">我</span><span class="typeGood">是</span><span class="typeBad">值</span><br>↓<br><span class="typeMissed">你</span><span class="typeGood">是</span><span class="typeMissed">谁</span></code></div></span>



</div>
<script>
var ankiPlatform = "desktop";
var typeans;
function _updateQA (q, answerMode, klass) {
    $("#qa").html(q);
    typeans = document.getElementById("typeans");
    if (typeans) {
        typeans.focus();
    }
    if (answerMode) {
        var e = $("#answer");
        if (e[0]) { e[0].scrollIntoView(); }
    } else {
        window.scrollTo(0, 0);
    }
    if (klass) {
        document.body.className = klass;
    }
    // don't allow drags of images, which cause them to be deleted
    $("img").attr("draggable", false);
};

function _toggleStar (show) {
    if (show) {
        $(".marked").show();
    } else {
        $(".marked").hide();
    }
}

function _getTypedText () {
    if (typeans) {
        py.link("typeans:"+typeans.value);
    }
};
function _typeAnsPress() {
    if (window.event.keyCode === 13) {
        py.link("ansHack");
    }
}
</script>
