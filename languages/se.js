/*!
 * numeral.js language configuration
 * language : Svenska
 * author : Martin Isaksson : https://github.com/MartinIsaksson
 */
(function () {
    var language = {
        delimiters: {
            thousands: ' ',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'k',
            million: 'M',
            billion: 'Mj',
            trillion: 'T'
        },
        ordinal: function (number) {
            return '.';
        },
        currency: {
            symbol: 'SEK'
        }
    };

    // Node
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = language;
    }
    // Browser
    if (typeof window !== 'undefined' && this.numeral && this.numeral.language) {
        this.numeral.language('se', language);
    }
}());
