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
});


window.addEventListener('scroll', () => {
    if(windowWidth < 1000) return;
    movingTitle();
    movingPhone();
});

window.onbeforeprint = function() {
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
        isMoveTitle = true;

        title.css("position", "fixed");
        title.css("top", 0);
        title.animate({
            top: 8,
            left: 1395,
            fontSize: 20
        }, function(){
            title.css("background", "ghostwhite");
        });
    }
    
    if(defaultTitleY > window.scrollY && isMoveTitle)
    {
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
        isMovePhone = true;

        phone.css("position", "fixed");
        phone.css("top", 0);
        phone.animate({
            top: 35,
            left: 1341,
        }, function(){
            phone.css("background", "ghostwhite");
        });
    }
    
    if(defaultTitleY > window.scrollY && isMovePhone) {
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