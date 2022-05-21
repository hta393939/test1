/**
 * @file index.js
 */

(function(_global) {

class Freqwav {

    constructor() {

/**
 * iFFT する長さ
 */
        this.lensample = 4096;

        this.largebuf = null;
        this.binbuf = null;
        this.samplebuf = null;
    }
    initialize() {
        {
            let num = this.lensample * 2;
            const largebuf = new Float32Array(num);
            this.largebuf = largebuf;
        }
        {
            let num = this.lensample * 2;
            const binbuf = new Float32Array(num);
            this.binbuf = binbuf;

            const samplebuf = new Float32Array(num);
            this.samplebuf = samplebuf;
        }
    }

/**
 * 周波数 bin からサンプル値を計算する
 * 位相ずらさないと位相 0 のところがぴんと飛び出す
 * @param {Float32Array} srcre 実bin値 this.lensample 必要
 * @param {Float32Array} dst 結果書き出し先 this.lensample 必要
 */
    calcByifft(srcre, dst) {
        const n = this.lensample;
        const maxbinindex = n / 2;
        const angk = 2 * Math.PI / n;
        for (let i = 1; i < maxbinindex; ++i) {
            for (let j = 0; j < n; ++j) {
                const ang = i * j * angk;
                const val = Math.cos(ang) * srcre[j];
                dst[j] += val;
            }
        }
    }


}

if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
        exports = module.exports = Freqwav;
    }
    exports.Freqwav = Freqwav;
} else {
    _global.Freqwav = Freqwav;
}

})((this || 0).self || (typeof self !== 'undefined' ? self : global));


