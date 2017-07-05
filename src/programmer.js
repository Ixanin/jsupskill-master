// TODO: fill in missing code gaps

function Programmer1() {
    this.languages = [];
}

Programmer1.prototype.learnNewLanguage = function (language) {
    this.languages.push(language);
};

Programmer1.prototype.isPragmatic = function () {
    return this.languages.length > 2;
};

class Programmer2 {
    constructor() {
        this.learnedLangs = 0;
    }
    learnNewLanguage(str) {
        if (str) {
            this.learnedLangs += 1;
        }
    }
    isPragmatic() {
        if(this.learnedLangs >= 3) {return true};
    }
}

var Programmer3 = {
    val: 0,

    init: function() {
        this.val = 0;
    },
    learnNewLanguage: function(str) {
        if (str) {this.val += 1};
    },
    isPragmatic: function(str) {
        if(this.val > 2) { return true }
    }
};

function createProgrammer() {
    var languages = [];

    return {
        learnNewLanguage: function (language) {
            languages.push(language);
        },
        isPragmatic: function () {
            return languages.length > 2;
        }
    };
}

module.exports = {
    Programmer1, Programmer2, Programmer3, createProgrammer
};