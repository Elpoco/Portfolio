var windowWidth;

var title;
var isMoveTitle;
var defaultTitleX;
var defaultTitleY;
var defaultTitleFontSize;

var phone;
var isMovePhone;
var defaultPhoneX;
var defaultPhoneY;

$(function() {
    windowWidth = $( window ).width();

    title = $('#title');
    isMoveTitle = false;
    defaultTitleX = title.offset().left;
    defaultTitleY = title.offset().top;
    defaultTitleFontSize = parseInt(title.css("font-size"));

    phone = $('#phone');
    isMovePhone = false;
    defaultPhoneX = phone.offset().left;
    defaultPhoneY = phone.offset().top;

    $('#age').html(new Date().getFullYear() - 1996);

    $("#imgModal").on("shown.bs.modal", function () { $("#imgModal").focus(); });
});


window.addEventListener('scroll', () => {
    if(document.documentElement.scrollTop >= 200) $('#header').show();
    else $('#header').hide();

    if(windowWidth < 1000) return;
    // movingTitle();
    // movingPhone();
});

window.onbeforeprint = function() {
    title.css("position", "inherit");
    title.css("font-size", defaultTitleFontSize);
    phone.css("position", "inherit");
    window.scrollTo(0, 0);
    $('.container').before(
        '<div class="text-center" id="printLink">이력서 주소: '+
        '<a class="print-msg" href="https://elpoco.github.io/Portfolio/">'+
        'https://elpoco.github.io/Portfolio/</a></div>'
    );
};

window.onafterprint = function() {
    $('#printLink').remove();
};

function movingTitle(){
    if(defaultTitleY < window.scrollY && !isMoveTitle) {
        title.stop();
        isMoveTitle = true;

        title.css("position", "fixed");
        title.css("top", 0);
        title.animate({
            top: 8,
            left: window.innerWidth * 0.85,
            fontSize: 20
        }, function(){
            title.css("background", "ghostwhite");
        });
    }
    
    if(defaultTitleY > window.scrollY && isMoveTitle) {
        title.stop();
        isMoveTitle = false;

        title.css("background", "none");
        title.animate({
            top: window.scrollY,
            left: defaultTitleX,
        }, function() {
            title.css("position", "inherit");
            title.animate({
                fontSize: defaultTitleFontSize,
            });
        });
    }
    
}

function movingPhone(){
    if(defaultPhoneY < window.scrollY && !isMovePhone) {
        phone.stop();
        isMovePhone = true;

        phone.css("position", "fixed");
        phone.css("top", 0);
        phone.animate({
            top: 35,
            left: window.innerWidth * 0.85 - 54,
        }, function(){
            phone.css("background", "ghostwhite");
        });
    }
    
    if(defaultTitleY > window.scrollY && isMovePhone) {
        phone.stop();
        isMovePhone = false;

        phone.css("background", "none");
        phone.animate({
            top: defaultPhoneY,
            left: defaultPhoneX,
        }, function() {
            phone.css("position", "inherit");
        });
    }
}

function clickTag(obj){
    var language = $(obj).html();
    var aObject = $('.language-tag');
    var hasClass = $(obj).hasClass('selected');
    for(var i=0; i<aObject.length; i++){
        if($(aObject[i]).html() == language){
            if(hasClass){
                $(aObject[i]).removeClass('selected');
            } else {
                $(aObject[i]).addClass('selected');
            }
        }
    }
}

function clickEmail(){
    alert('복사되었습니다.');
    var tempElem = document.createElement('textarea');
    tempElem.value = 'wjdwlgus96@google.com';
    document.body.appendChild(tempElem);

    tempElem.select();
    document.execCommand("copy");
    document.body.removeChild(tempElem);
}

function clickDungreedTag(idx) {
    $('#Dungreed').collapse('show');
    var arrTime = ['8', '159', '206','227', '328', '599', '907'];
    var link = "https://www.youtube.com/embed/2GJa40E7roc?autoplay=1&start=";
    $('#dungreedYoutube').attr("src", link+arrTime[idx]);
}

function changeImage(obj, idx) {
    //$(obj).attr("src", "assets/images/jjh"+idx+".jpg");
}

function clickImage(obj) {
    $('#imgDetail').attr("src", $(obj).attr("src"));
    $('#imgModal').modal("show");
}

function clickShowModal(idx) {
    return;
    var json = $.parseJSON(data);
    var cntImg = json[idx].img.length;

    $('#modalImage').children().remove();
    $('#modalText').children().remove();

    for (var i = 0; i < cntImg; i++) {
        var html = '<img class="tec-doc-img" src="';
        html += json[idx].img[i];
        html += '" onclick="clickImage(this)">';
        $('#modalImage').append(html);
    }
    $('#modalText').append(json[idx].text);
    
    $('#dungreedModal').modal("show");
}