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