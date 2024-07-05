import { message } from 'antd';
import BigNumber from 'bignumber.js';

export const $sleep = (ms: number = 1000): Promise<Function> => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export const $copy = (text: any): Promise<void> => {
    try {
        var textArea: any = document.createElement('textarea');
        textArea.style.position = 'fixed';
        textArea.style.top = 0;
        textArea.style.left = 0;
        textArea.style.width = '2em';
        textArea.style.height = '2em';
        textArea.style.padding = 0;
        textArea.style.border = 'none';
        textArea.style.outline = 'none';
        textArea.style.boxShadow = 'none';
        textArea.style.background = 'transparent';
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            var successful = document.execCommand('copy');
            // console.log(successful);
            message.success('Copy Successfully');
        } catch (err) {
            // console.log('Oops, unable to copy');
            message.success('Copy Fail');
        }
        document.body.removeChild(textArea);
        return Promise.resolve();
    } catch (e) {
        return Promise.reject();
    }
};

export const $BigNumber = (val: string | number = 1) => {
    return new BigNumber(val);
};

export const $shiftedBy = (data: number | string, decimals: any): string => {
    if (!data) return '0';
    decimals = Number(decimals);
    return $BigNumber(data).shiftedBy(decimals).toFixed();
};

export const $shiftedByFixed = (data: string | number, decimals: number, acc: number = 4) => {
    if (!data) return 0;
    decimals = Number(decimals);
    return Number($BigNumber(data).shiftedBy(decimals).toFixed(acc, 1));
};

export const $toFixed = (data: any, acc: number) => {
    if ((!data && Number(data) !== 0) || String(data).indexOf('--') !== -1) return '--';
    return $BigNumber(data).toFixed(acc, 1);
};

export const $clearNoNum = (val: any): any => {
    val = val.replace(/[^\d.]/g, '');

    val = val.replace(/\.{2,}/g, '.');

    val = val.replace(/^\./g, '');

    val = val.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.');

    return val;
};

// input val filter   e: React.FormEvent<HTMLInputElement>
export const $filterNumber = (e: any, setval?: Function) => {
    function clearNoNum(val: any) {
        val = val.replace(/[^\d.]/g, '');

        val = val.replace(/\.{2,}/g, '.');

        val = val.replace(/^\./g, '');

        val = val.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.');

        return val;
    }
    if (setval) {
        setval(clearNoNum(e.target.value));
    } else {
        return clearNoNum(e.target.value);
    }
};
export const $onlyNumber = (val: any) => {
    return val.replace(/[^\d]/g, '');
};

export const $numFormat = (val: number | string, acc: number = 4, flag: boolean = true) => {
    if (!val || val.toString().indexOf('-') != -1) {
        return val;
    } else if (!flag) {
        return $BigNumber(val).toFixed(acc, 1);
    }

    let reg = /(\d)(?=(?:\d{3})+$)/g;
    val = $BigNumber(val).toFixed(acc, 1);
    const strAry = val.toString().split('.');
    return `${strAry[0].replace(reg, '$1,')}${strAry.length > 1 ? '.' + strAry[1] : ''}`;
};

export const $dateFormat = (date: string | undefined | Date, format: string = 'MM-dd hh:mm') => {
    if (!date) return '';
    return (new Date(date) as any).format(format);
};

export const $gt = (val: string | number, next: string | number) => {
    return new BigNumber(val).gt(next);
};

export const $lt = (val: string | number, next: string | number) => {
    return new BigNumber(val).lt(next);
};

export const $plus = (aryNumber: Array<string | number>, decimal: number = 2, round: any = 1): string | number => {
    const sum: any = aryNumber.reduce((acc: any, cur: any) => {
        return (new BigNumber(isNaN(acc) ? 0 : acc) as any).plus(isNaN(cur) ? 0 : cur);
    });
    // return $BigNumber(sum).sd(decimal, round).toFixed();
    return $shiftedByFixed(sum, 0, decimal);
    // return Number(sum.toFixed(decimal, 1));
};

export const $minus = (m1: string | number, m2: string | number, decimal: number = 2, round: any = 1): string | number => {
    const diff: any = new BigNumber(m1).minus(m2);
    // return $BigNumber(diff).sd(decimal, round).toFixed();
    return $shiftedByFixed(diff, 0, decimal);
};

export const $inputNumber = (): string => {
    return window.innerWidth < 960 ? 'number' : 'text';
};

export const $moreLessThan = (value: string | number, acc = 4, decimal: number = 4) => {
    const val = $BigNumber(value);
    let i = 0,
        _value = '0.';
    for (i; i < decimal - 1; i++) {
        _value = `${_value}0`;
    }
    _value = _value = `${_value}1`;

    if (Number(value) > 0) {
        return !val.isZero() && val.isLessThan(Number(_value)) ? `<${_value}` : val.isNaN() ? value : $shiftedByFixed(value, 0, acc);
    } else if (Number(value) == 0) {
        return 0;
    } else {
        return !val.isZero() && val.gt(-Number(_value)) ? `<-${_value}` : val.isNaN() ? value : $shiftedByFixed(value, 0, acc);
    }
};

export const $hash = (txHash: any, length: number = 4, lastLength?: number) => {
    if (!txHash) {
        return '--';
    }
    if (!lastLength && lastLength !== 0) lastLength = length;
    if (txHash.length > length) {
        return txHash.substring(0, length) + '...' + txHash.substring(txHash.length - lastLength, txHash.length);
    } else {
        return txHash;
    }
};

export const $enumKey = (list: { [key: string]: string | number }[], value: string | number, target: string = 'name', key: string = 'key'): string | number => {
    if (!value && ![0, '0'].includes(value)) return '';
    const _tar: any = list.find((item) => item[key] === value);
    return _tar[target] || '';
};

export const $trim = (event: any): string | number => {
    return event.target.value.trim();
};

export const $trimNumber = (event: any): string | number => {
    return event.target.value.replace(/[^\d^\.]+/g, '').trim();
};

export const $dealTimes = (endTime: string | number): Record<string, number> => {
    var difftime = (typeof endTime === 'number' ? endTime : new Date(endTime).getTime()) - Date.now();
    if (difftime > 0) {
        var days = Math.floor(difftime / (24 * 3600 * 1000));
        var leave1 = difftime % (24 * 3600 * 1000);
        var hours = Math.floor(leave1 / (3600 * 1000));

        var leave2 = leave1 % (3600 * 1000);
        var minutes = Math.floor(leave2 / (60 * 1000));

        var leave3 = leave2 % (60 * 1000);
        var seconds = Math.round(leave3 / 1000) >= 60 ? 60 : Math.round(leave3 / 1000);
        return {
            days,
            hours,
            minutes,
            seconds
        };
    } else {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    }
};

export const $dealOverTimes = (satrtTime: string | number): Record<string, number> => {
    var difftime = Date.now() - (typeof satrtTime === 'number' ? satrtTime : new Date(satrtTime).getTime());
    if (difftime > 0) {
        var days = Math.floor(difftime / (24 * 3600 * 1000));
        var leave1 = difftime % (24 * 3600 * 1000);
        var hours = Math.floor(leave1 / (3600 * 1000));

        var leave2 = leave1 % (3600 * 1000);
        var minutes = Math.floor(leave2 / (60 * 1000));

        var leave3 = leave2 % (60 * 1000);
        var seconds = Math.round(leave3 / 1000) >= 60 ? 60 : Math.round(leave3 / 1000);
        return {
            days,
            hours,
            minutes,
            seconds
        };
    } else {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    }
};

export async function $delay(ms: number) {
    return new Promise((res) => setTimeout(res, ms));
}

export const $getQuery = () => {
    if (typeof window !== 'undefined') {
        const href = window.location.href;
        const query = href.substring(href.indexOf('?') + 1);
        const types = query.split('&');
        let obj: any = {},
            i = 0;
        for (i; i < types.length; i++) {
            const pari = types[i].split('=');
            obj[pari[0]] = pari[1];
        }
        return obj;
    } else {
        return {};
    }
};

export const $imageUrl = (url: string) => {
    let _url = '';
    if (!url) {
        _url = url;
    } else if (url?.indexOf('https://') === -1) {
        _url = 'https://asset.promptport.ai/files' + url;
    } else {
        _url = url;
    }
    return _url;
};
export const $imageVisualUrl = (url: string) => {
    let _url = '';
    if (!url) {
        _url = url;
    } else if (url?.indexOf('https://') === -1) {
        _url = 'https://asset.promptport.ai/aifiles' + url;
    } else {
        _url = url;
    }
    return _url;
};

export const $toExponential = (val: string | number, acc: number = 2) => {
    let _val: string | number = '';
    const vals = $toFixed($BigNumber(val), acc);
    if ($BigNumber(vals).gt(100000000000000000000)) {
        _val = vals;
    } else {
        _val = Number(vals);
    }
    return _val;
};

export const $hexToRgba = (hexColor = 'FFFFFF', opacity = 1) => {
    const red = parseInt(hexColor.substring(0, 2), 16);
    const green = parseInt(hexColor.substring(2, 4), 16);
    const blue = parseInt(hexColor.substring(4, 6), 16);

    const rgbaColor = `rgba(${red}, ${green}, ${blue}, ${opacity})`;

    return rgbaColor;
};

export const $isCharacterInArray = (char: string, array: any[]) => {
    return array.includes(char);
};
export const $formatNumber = (val: string | number) => {
    val = Number(val || 0);
    if (val < 1000) {
        return val;
    } else {
        return Number($toFixed(val / 1000, 1)) + 'k';
    }
};

export const $isChinese = (str: string): boolean => {
    const chineseReg: RegExp = /[\u4e00-\u9fa5]/;
    return chineseReg.test(str);
};

export const $progressColor = (percent: number, firstMax: number) => {
    const colorRanges = [
        { min: 0, max: firstMax, color: '#FF8DC4' },
        { min: firstMax, max: 60, color: '#F1BD62' },
        { min: 60, max: 70, color: '#FFE153' },
        { min: 70, max: 80, color: '#C6EF53' },
        { min: 80, max: 100, color: '#03C97B' }
    ];

    for (const range of colorRanges) {
        if (percent >= range.min && percent < range.max) {
            return range.color;
        }
    }

    return colorRanges[colorRanges.length - 1].color;
};

type ColorMap = {
    [key: string]: string;
};

export const $blogTopicForColor = (value: string) => {
    const colorMapping: ColorMap = {
        'product updates': 'rgba(198, 239, 83, 0.50)',
        'market cooperation': 'rgba(255, 225, 83, 0.50)',
        'major issues': 'rgba(255, 141, 196, 0.50)',
        'related activities': 'rgba(255, 166, 83, 0.50)'
    };
    return colorMapping[value];
};
