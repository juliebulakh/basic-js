module.exports = function getSeason(date) {
    let month = date.getMonth();
    let season='';
        if (month==0||month==1||month==11 ) { season = "winter"; }
        else if (month==2||month==3||month==4) { season = "spring"; }
        else if (month==5||month==6||month==7) { season ="summer"; }
        else if(month==8||month==9||month==10) { season = "autumn"; }
    return season;

};
