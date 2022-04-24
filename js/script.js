var windowWidth;

var title;
var defaultTitleX;
var defaultTitleY;
var defaultTitleFontSize;
var titlePercent;

var phone;
var defaultPhoneX;
var defaultPhoneY;
var phonePercent;

$(function() {
    windowWidth = $( window ).width();

    title = $('#title');
    defaultTitleX = title.offset().left;
    defaultTitleY = title.offset().top;
    defaultTitleFontSize = parseInt(title.css("font-size"));

    phone = $('#phone');
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
    if(defaultTitleY < window.scrollY) {
        titlePercent = defaultTitleY /  window.scrollY;

        title.css("position", "fixed");
        title.css("background", "ghostwhite");
        title.offset({
            left: defaultTitleX + 600 * (1 - titlePercent), 
            top: window.scrollY + 8 * (1 - titlePercent)
        });

        if(titlePercent > 0.5) {
            title.css("font-size", defaultTitleFontSize * titlePercent);
        }
        else {
            title.css("font-size", 20);
        }
    }
    else {
        title.css("position", "inherit");
        title.css("font-size", defaultTitleFontSize);
    }
}

function movingPhone(){
    if(defaultPhoneY < window.scrollY) {
        phonePercent = defaultPhoneY /  window.scrollY;

        phone.css("position", "fixed");
        phone.css("background", "ghostwhite");
        phone.offset({
            left: defaultPhoneX  + 850 * (1 - phonePercent), 
            top: window.scrollY + 38 * (1 - phonePercent)
        });
    }
    else {
        phone.css("position", "inherit");
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