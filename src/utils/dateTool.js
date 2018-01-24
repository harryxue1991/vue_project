// ie9- 兼容trim
String.prototype.trim = function () {
        return this.replace(/(^\s*)|(\s*$)/g, '');
};

Date.prototype.format = function (format) {
        var o = {
                'M+': this.getMonth() + 1, //month
                'd+': this.getDate(), //day
                'h+': this.getHours(), //hour
                'm+': this.getMinutes(), //minute
                's+': this.getSeconds(), //second
                'q+': Math.floor((this.getMonth() + 3) / 3), //quarter
                S: this.getMilliseconds() //millisecond
        };

        if (/(y+)/.test(format)) {
                format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
        }

        for (var k in o) {
                if (new RegExp('(' + k + ')').test(format)) {
                        format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
                }
        }
        return format;
};
//在当前时间上添加年数
Date.prototype.addYear = function (years) {
        var cyear = this.getFullYear();
        cyear += years;
        this.setYear(cyear);
        return this;
};
//在当前时间上添加天数
Date.prototype.addDay = function (days) {
        var cd = this.getDate();
        cd += days;
        this.setDate(cd);
        return this;
};
//在当前时间上添加月数
Date.prototype.addMonth = function (months) {
        var cm = this.getMonth();
        cm += months;
        this.setMonth(cm);
        return this;
};
// 计算当前日期在本月份的周数
Date.prototype.getWeekOfMonth = function (weekStart) {
        weekStart = (weekStart || 0) - 0;
        if (isNaN(weekStart) || weekStart > 6) weekStart = 0;

        var dayOfWeek = this.getDay();
        var day = this.getDate();
        return Math.ceil((day - dayOfWeek - 1) / 7) + (dayOfWeek >= weekStart ? 1 : 0);
};