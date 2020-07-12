(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global['emails-input'] = factory());
}(this, (function () { 'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  var isNil = function isNil(obj) {
    return obj == null;
  };

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, basedir, module) {
  	return module = {
  	  path: basedir,
  	  exports: {},
  	  require: function (path, base) {
        return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
      }
  	}, fn(module, module.exports), module.exports;
  }

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
  }

  var shams = function hasSymbols() {
    if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') {
      return false;
    }

    if (_typeof(Symbol.iterator) === 'symbol') {
      return true;
    }

    var obj = {};
    var sym = Symbol('test');
    var symObj = Object(sym);

    if (typeof sym === 'string') {
      return false;
    }

    if (Object.prototype.toString.call(sym) !== '[object Symbol]') {
      return false;
    }

    if (Object.prototype.toString.call(symObj) !== '[object Symbol]') {
      return false;
    } // temp disabled per https://github.com/ljharb/object.assign/issues/17
    // if (sym instanceof Symbol) { return false; }
    // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
    // if (!(symObj instanceof Symbol)) { return false; }
    // if (typeof Symbol.prototype.toString !== 'function') { return false; }
    // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }


    var symVal = 42;
    obj[sym] = symVal;

    for (sym in obj) {
      return false;
    } // eslint-disable-line no-restricted-syntax


    if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) {
      return false;
    }

    if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) {
      return false;
    }

    var syms = Object.getOwnPropertySymbols(obj);

    if (syms.length !== 1 || syms[0] !== sym) {
      return false;
    }

    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
      return false;
    }

    if (typeof Object.getOwnPropertyDescriptor === 'function') {
      var descriptor = Object.getOwnPropertyDescriptor(obj, sym);

      if (descriptor.value !== symVal || descriptor.enumerable !== true) {
        return false;
      }
    }

    return true;
  };

  var origSymbol = commonjsGlobal.Symbol;

  var hasSymbols = function hasNativeSymbols() {
    if (typeof origSymbol !== 'function') {
      return false;
    }

    if (typeof Symbol !== 'function') {
      return false;
    }

    if (_typeof(origSymbol('foo')) !== 'symbol') {
      return false;
    }

    if (_typeof(Symbol('bar')) !== 'symbol') {
      return false;
    }

    return shams();
  };

  var isSymbol = createCommonjsModule(function (module) {

    var toStr = Object.prototype.toString;
    var hasSymbols$1 = hasSymbols();

    if (hasSymbols$1) {
      var symToStr = Symbol.prototype.toString;
      var symStringRegex = /^Symbol\(.*\)$/;

      var isSymbolObject = function isRealSymbolObject(value) {
        if (_typeof(value.valueOf()) !== 'symbol') {
          return false;
        }

        return symStringRegex.test(symToStr.call(value));
      };

      module.exports = function isSymbol(value) {
        if (_typeof(value) === 'symbol') {
          return true;
        }

        if (toStr.call(value) !== '[object Symbol]') {
          return false;
        }

        try {
          return isSymbolObject(value);
        } catch (e) {
          return false;
        }
      };
    } else {
      module.exports = function isSymbol(value) {
        // this environment does not support Symbols.
        return false ;
      };
    }
  });

  var isObject = function isObject(x) {
    return _typeof(x) === "object" && x !== null;
  };

  var isFunction_1 = isFunction;
  var toString = Object.prototype.toString;

  function isFunction(fn) {
    if (!fn) {
      return false;
    }

    var string = toString.call(fn);
    return string === '[object Function]' || typeof fn === 'function' && string !== '[object RegExp]' || typeof window !== 'undefined' && ( // IE8 and below
    fn === window.setTimeout || fn === window.alert || fn === window.confirm || fn === window.prompt);
  }

  /* global Symbol */


  var toStr = function toStr(value) {
    if (typeof value === 'string') {
      return value;
    }

    if (isNil(value)) {
      return '';
    }

    if (isSymbol(value)) {
      return Symbol.prototype.toString.call(value);
    }

    if (isObject(value) && isFunction_1(value.toString)) {
      return value.toString();
    }

    var result = '' + value;
    return result === '0' && 1 / value === -1 / 0 ? '-0' : result;
  };

  var clamp_1 = clamp;

  function clamp(value, min, max) {
    return min < max ? value < min ? min : value > max ? max : value : value < max ? max : value > min ? min : value;
  }

  var NAN = 0 / 0;

  var toInteger = function toInteger(value) {
    if (isNil(value)) {
      return 0;
    }

    var type = _typeof(value);

    if (type === 'number') {
      return value;
    } else if (type === 'boolean') {
      return value ? 1 : 0;
    }

    if (isSymbol(value)) {
      return NAN;
    }

    if (isObject(value)) {
      var raw = isFunction_1(value.valueOf) ? value.valueOf() : value;
      value = isObject(raw) ? raw + '' : raw;
    }

    type = _typeof(value);

    if (type !== 'string') {
      return type === 'number' ? value : parseInt(value, 10);
    } // trim


    value = value.replace(/^\s+|\s+$/g, '');

    if (/^0b[01]+$/i.test(value)) {
      return parseInt(value.slice(2), 2);
    } else if (/^0o[0-7]+$/i.test(value)) {
      return parseInt(value.slice(2), 8);
    } else if (/^0x[0-9a-f]+$/i.test(value)) {
      return parseInt(value.slice(2), 16);
    }

    if (/^0b/i.test(value) || /^0o/i.test(value) || /^[\+\-]?0x/i.test(value)) {
      return NAN;
    }

    return parseInt(value, 10);
  };

  var maxSafeInt = 9007199254740991;

  var MIN_SAFE_INT = -maxSafeInt;

  function fixme(val, min, max, isMin) {
    if (typeof val !== 'number') {
      val = toInteger(val);
    }

    if (isNaN(val) || !isFinite(val)) {
      return isMin ? min : max;
    }

    return clamp_1(val, min, max);
  }

  var randomIntegral = function randomIntegral(options) {
    if (options) {
      // for speed up
      if (!options.inspected) {
        options.min = fixme(options.min, MIN_SAFE_INT, maxSafeInt, true);
        options.max = fixme(options.max, MIN_SAFE_INT, maxSafeInt, false);
      }
    } else {
      options = {
        min: MIN_SAFE_INT,
        max: maxSafeInt
      };
    }

    var min = options.min;
    var max = options.max; // swap to variables
    // ref: http://stackoverflow.com/a/16201688

    if (min > max) {
      min = min ^ max;
      max = min ^ max;
      min = min ^ max;
    }

    return Math.round(Math.random() * (max - min)) + min;
  };

  var fixme_1 = fixme;
  randomIntegral.fixme = fixme_1;

  var randomNatural = function randomNatural(options) {
    if (options) {
      if (!options.inspected) {
        options.min = randomIntegral.fixme(options.min, 0, maxSafeInt, true);
        options.max = randomIntegral.fixme(options.max, 0, maxSafeInt, false);
      }
    } else {
      options = {
        min: 0,
        max: maxSafeInt
      };
    }

    options.inspected = true;
    return randomIntegral(options);
  };

  var fixme$1 = randomIntegral.fixme;
  randomNatural.fixme = fixme$1;

  var pools = {
    lower: 'abcdefghijklmnopqrstuvwxyz',
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    number: '0123456789',
    symbol: '~!@#$%^&()*_+-={}[]'
  };
  pools.alpha = pools.lower + pools.upper;
  pools['all'] = pools.lower + pools.upper + pools.number + pools.symbol;

  var randomChar = function randomChar(options) {
    if (!isObject(options)) {
      if (isNil(options)) {
        options = {
          pool: pools.all
        };
      } else {
        options = toStr(options);
        options = {
          pool: pools[options] || options
        };
      }
    }

    var pool;

    if (options.pool) {
      pool = options.pool;
    } else if (options.lower) {
      pool = pools.lower;
    } else if (options.upper) {
      pool = pools.upper;
    } else if (options.alpha) {
      pool = pools.alpha;
    } else if (options.number) {
      pool = pools.number;
    } else if (options.symbol) {
      pool = pools.symbol;
    } else {
      pool = pools.all;
    }

    pool = toStr(pool);
    return pool.charAt(randomNatural({
      min: 0,
      max: pool.length - 1,
      inspected: true
    }));
  };

  var randomSyllable = function randomSyllable(options) {
    var length = isObject(options) ? options.length : options;

    if (length) {
      length = toInteger(length);
      length = clamp_1(length, 2, 3);
    } else {
      length = randomNatural({
        min: 2,
        max: 3
      });
    }

    var consonants = 'bcdfghjklmnprstvwz'; // consonants except hard to speak ones

    var vowels = 'aeiou'; // vowels

    var all = consonants + vowels; // all

    var text = '';
    var char;

    for (var i = 0; i < length; i++) {
      if (i === 0) {
        // First character can be anything
        char = randomChar({
          pool: all
        });
      } else if (consonants.indexOf(char) === -1) {
        // Last character was a vowel, now we want a consonant
        char = randomChar({
          pool: consonants
        });
      } else {
        // Last character was a consonant, now we want a vowel
        char = randomChar({
          pool: vowels
        });
      }

      text += char;
    }

    return text;
  };

  var MIN_LEN = 2;
  var MAX_LEN = 18;

  var randomLorem = function randomLorem(options) {
    options = options || {
      syllables: randomNatural({
        min: 1,
        max: 3,
        inspected: true
      })
    };
    var length = options.length;
    var syllables = options.syllables;
    var result = '';

    if (syllables) {
      for (var i = 0; i < syllables; i++) {
        result += randomSyllable();
      }

      return result.substring(0, MAX_LEN);
    }

    if (!length && (options.min || options.max)) {
      length = randomNatural({
        min: options.min || MIN_LEN,
        max: options.max || MAX_LEN
      });
    }

    length = length || randomNatural({
      min: MIN_LEN,
      max: MAX_LEN,
      inspected: true
    });
    length = clamp_1(length, MIN_LEN, MAX_LEN);

    while (result.length < length) {
      result += randomSyllable();
    }

    return result.substring(0, length);
  };

  var tldList = ["aaa", "aarp", "abarth", "abb", "abbott", "abbvie", "abc", "able", "abogado", "abudhabi", "ac", "academy", "accenture", "accountant", "accountants", "aco", "actor", "ad", "adac", "ads", "adult", "ae", "aeg", "aero", "aetna", "af", "afamilycompany", "afl", "africa", "ag", "agakhan", "agency", "ai", "aig", "airbus", "airforce", "airtel", "akdn", "al", "alfaromeo", "alibaba", "alipay", "allfinanz", "allstate", "ally", "alsace", "alstom", "am", "amazon", "americanexpress", "americanfamily", "amex", "amfam", "amica", "amsterdam", "analytics", "android", "anquan", "anz", "ao", "aol", "apartments", "app", "apple", "aq", "aquarelle", "ar", "arab", "aramco", "archi", "army", "arpa", "art", "arte", "as", "asda", "asia", "associates", "at", "athleta", "attorney", "au", "auction", "audi", "audible", "audio", "auspost", "author", "auto", "autos", "avianca", "aw", "aws", "ax", "axa", "az", "azure", "ba", "baby", "baidu", "banamex", "bananarepublic", "band", "bank", "bar", "barcelona", "barclaycard", "barclays", "barefoot", "bargains", "baseball", "basketball", "bauhaus", "bayern", "bb", "bbc", "bbt", "bbva", "bcg", "bcn", "bd", "be", "beats", "beauty", "beer", "bentley", "berlin", "best", "bestbuy", "bet", "bf", "bg", "bh", "bharti", "bi", "bible", "bid", "bike", "bing", "bingo", "bio", "biz", "bj", "black", "blackfriday", "blockbuster", "blog", "bloomberg", "blue", "bm", "bms", "bmw", "bn", "bnpparibas", "bo", "boats", "boehringer", "bofa", "bom", "bond", "boo", "book", "booking", "bosch", "bostik", "boston", "bot", "boutique", "box", "br", "bradesco", "bridgestone", "broadway", "broker", "brother", "brussels", "bs", "bt", "budapest", "bugatti", "build", "builders", "business", "buy", "buzz", "bv", "bw", "by", "bz", "bzh", "ca", "cab", "cafe", "cal", "call", "calvinklein", "cam", "camera", "camp", "cancerresearch", "canon", "capetown", "capital", "capitalone", "car", "caravan", "cards", "care", "career", "careers", "cars", "casa", "case", "caseih", "cash", "casino", "cat", "catering", "catholic", "cba", "cbn", "cbre", "cbs", "cc", "cd", "ceb", "center", "ceo", "cern", "cf", "cfa", "cfd", "cg", "ch", "chanel", "channel", "charity", "chase", "chat", "cheap", "chintai", "christmas", "chrome", "church", "ci", "cipriani", "circle", "cisco", "citadel", "citi", "citic", "city", "cityeats", "ck", "cl", "claims", "cleaning", "click", "clinic", "clinique", "clothing", "cloud", "club", "clubmed", "cm", "cn", "co", "coach", "codes", "coffee", "college", "cologne", "com", "comcast", "commbank", "community", "company", "compare", "computer", "comsec", "condos", "construction", "consulting", "contact", "contractors", "cooking", "cookingchannel", "cool", "coop", "corsica", "country", "coupon", "coupons", "courses", "cpa", "cr", "credit", "creditcard", "creditunion", "cricket", "crown", "crs", "cruise", "cruises", "csc", "cu", "cuisinella", "cv", "cw", "cx", "cy", "cymru", "cyou", "cz", "dabur", "dad", "dance", "data", "date", "dating", "datsun", "day", "dclk", "dds", "de", "deal", "dealer", "deals", "degree", "delivery", "dell", "deloitte", "delta", "democrat", "dental", "dentist", "desi", "design", "dev", "dhl", "diamonds", "diet", "digital", "direct", "directory", "discount", "discover", "dish", "diy", "dj", "dk", "dm", "dnp", "do", "docs", "doctor", "dog", "domains", "dot", "download", "drive", "dtv", "dubai", "duck", "dunlop", "dupont", "durban", "dvag", "dvr", "dz", "earth", "eat", "ec", "eco", "edeka", "edu", "education", "ee", "eg", "email", "emerck", "energy", "engineer", "engineering", "enterprises", "epson", "equipment", "er", "ericsson", "erni", "es", "esq", "estate", "et", "etisalat", "eu", "eurovision", "eus", "events", "exchange", "expert", "exposed", "express", "extraspace", "fage", "fail", "fairwinds", "faith", "family", "fan", "fans", "farm", "farmers", "fashion", "fast", "fedex", "feedback", "ferrari", "ferrero", "fi", "fiat", "fidelity", "fido", "film", "final", "finance", "financial", "fire", "firestone", "firmdale", "fish", "fishing", "fit", "fitness", "fj", "fk", "flickr", "flights", "flir", "florist", "flowers", "fly", "fm", "fo", "foo", "food", "foodnetwork", "football", "ford", "forex", "forsale", "forum", "foundation", "fox", "fr", "free", "fresenius", "frl", "frogans", "frontdoor", "frontier", "ftr", "fujitsu", "fujixerox", "fun", "fund", "furniture", "futbol", "fyi", "ga", "gal", "gallery", "gallo", "gallup", "game", "games", "gap", "garden", "gay", "gb", "gbiz", "gd", "gdn", "ge", "gea", "gent", "genting", "george", "gf", "gg", "ggee", "gh", "gi", "gift", "gifts", "gives", "giving", "gl", "glade", "glass", "gle", "global", "globo", "gm", "gmail", "gmbh", "gmo", "gmx", "gn", "godaddy", "gold", "goldpoint", "golf", "goo", "goodyear", "goog", "google", "gop", "got", "gov", "gp", "gq", "gr", "grainger", "graphics", "gratis", "green", "gripe", "grocery", "group", "gs", "gt", "gu", "guardian", "gucci", "guge", "guide", "guitars", "guru", "gw", "gy", "hair", "hamburg", "hangout", "haus", "hbo", "hdfc", "hdfcbank", "health", "healthcare", "help", "helsinki", "here", "hermes", "hgtv", "hiphop", "hisamitsu", "hitachi", "hiv", "hk", "hkt", "hm", "hn", "hockey", "holdings", "holiday", "homedepot", "homegoods", "homes", "homesense", "honda", "horse", "hospital", "host", "hosting", "hot", "hoteles", "hotels", "hotmail", "house", "how", "hr", "hsbc", "ht", "hu", "hughes", "hyatt", "hyundai", "ibm", "icbc", "ice", "icu", "id", "ie", "ieee", "ifm", "ikano", "il", "im", "imamat", "imdb", "immo", "immobilien", "in", "inc", "industries", "infiniti", "info", "ing", "ink", "institute", "insurance", "insure", "int", "intel", "international", "intuit", "investments", "io", "ipiranga", "iq", "ir", "irish", "is", "ismaili", "ist", "istanbul", "it", "itau", "itv", "iveco", "jaguar", "java", "jcb", "jcp", "je", "jeep", "jetzt", "jewelry", "jio", "jll", "jm", "jmp", "jnj", "jo", "jobs", "joburg", "jot", "joy", "jp", "jpmorgan", "jprs", "juegos", "juniper", "kaufen", "kddi", "ke", "kerryhotels", "kerrylogistics", "kerryproperties", "kfh", "kg", "kh", "ki", "kia", "kim", "kinder", "kindle", "kitchen", "kiwi", "km", "kn", "koeln", "komatsu", "kosher", "kp", "kpmg", "kpn", "kr", "krd", "kred", "kuokgroup", "kw", "ky", "kyoto", "kz", "la", "lacaixa", "lamborghini", "lamer", "lancaster", "lancia", "land", "landrover", "lanxess", "lasalle", "lat", "latino", "latrobe", "law", "lawyer", "lb", "lc", "lds", "lease", "leclerc", "lefrak", "legal", "lego", "lexus", "lgbt", "li", "lidl", "life", "lifeinsurance", "lifestyle", "lighting", "like", "lilly", "limited", "limo", "lincoln", "linde", "link", "lipsy", "live", "living", "lixil", "lk", "llc", "llp", "loan", "loans", "locker", "locus", "loft", "lol", "london", "lotte", "lotto", "love", "lpl", "lplfinancial", "lr", "ls", "lt", "ltd", "ltda", "lu", "lundbeck", "lupin", "luxe", "luxury", "lv", "ly", "ma", "macys", "madrid", "maif", "maison", "makeup", "man", "management", "mango", "map", "market", "marketing", "markets", "marriott", "marshalls", "maserati", "mattel", "mba", "mc", "mckinsey", "md", "me", "med", "media", "meet", "melbourne", "meme", "memorial", "men", "menu", "merckmsd", "metlife", "mg", "mh", "miami", "microsoft", "mil", "mini", "mint", "mit", "mitsubishi", "mk", "ml", "mlb", "mls", "mm", "mma", "mn", "mo", "mobi", "mobile", "moda", "moe", "moi", "mom", "monash", "money", "monster", "mormon", "mortgage", "moscow", "moto", "motorcycles", "mov", "movie", "mp", "mq", "mr", "ms", "msd", "mt", "mtn", "mtr", "mu", "museum", "mutual", "mv", "mw", "mx", "my", "mz", "na", "nab", "nagoya", "name", "nationwide", "natura", "navy", "nba", "nc", "ne", "nec", "net", "netbank", "netflix", "network", "neustar", "new", "newholland", "news", "next", "nextdirect", "nexus", "nf", "nfl", "ng", "ngo", "nhk", "ni", "nico", "nike", "nikon", "ninja", "nissan", "nissay", "nl", "no", "nokia", "northwesternmutual", "norton", "now", "nowruz", "nowtv", "np", "nr", "nra", "nrw", "ntt", "nu", "nyc", "nz", "obi", "observer", "off", "office", "okinawa", "olayan", "olayangroup", "oldnavy", "ollo", "om", "omega", "one", "ong", "onl", "online", "onyourside", "ooo", "open", "oracle", "orange", "org", "organic", "origins", "osaka", "otsuka", "ott", "ovh", "pa", "page", "panasonic", "paris", "pars", "partners", "parts", "party", "passagens", "pay", "pccw", "pe", "pet", "pf", "pfizer", "pg", "ph", "pharmacy", "phd", "philips", "phone", "photo", "photography", "photos", "physio", "pics", "pictet", "pictures", "pid", "pin", "ping", "pink", "pioneer", "pizza", "pk", "pl", "place", "play", "playstation", "plumbing", "plus", "pm", "pn", "pnc", "pohl", "poker", "politie", "porn", "post", "pr", "pramerica", "praxi", "press", "prime", "pro", "prod", "productions", "prof", "progressive", "promo", "properties", "property", "protection", "pru", "prudential", "ps", "pt", "pub", "pw", "pwc", "py", "qa", "qpon", "quebec", "quest", "qvc", "racing", "radio", "raid", "re", "read", "realestate", "realtor", "realty", "recipes", "red", "redstone", "redumbrella", "rehab", "reise", "reisen", "reit", "reliance", "ren", "rent", "rentals", "repair", "report", "republican", "rest", "restaurant", "review", "reviews", "rexroth", "rich", "richardli", "ricoh", "rightathome", "ril", "rio", "rip", "rmit", "ro", "rocher", "rocks", "rodeo", "rogers", "room", "rs", "rsvp", "ru", "rugby", "ruhr", "run", "rw", "rwe", "ryukyu", "sa", "saarland", "safe", "safety", "sakura", "sale", "salon", "samsclub", "samsung", "sandvik", "sandvikcoromant", "sanofi", "sap", "sarl", "sas", "save", "saxo", "sb", "sbi", "sbs", "sc", "sca", "scb", "schaeffler", "schmidt", "scholarships", "school", "schule", "schwarz", "science", "scjohnson", "scot", "sd", "se", "search", "seat", "secure", "security", "seek", "select", "sener", "services", "ses", "seven", "sew", "sex", "sexy", "sfr", "sg", "sh", "shangrila", "sharp", "shaw", "shell", "shia", "shiksha", "shoes", "shop", "shopping", "shouji", "show", "showtime", "shriram", "si", "silk", "sina", "singles", "site", "sj", "sk", "ski", "skin", "sky", "skype", "sl", "sling", "sm", "smart", "smile", "sn", "sncf", "so", "soccer", "social", "softbank", "software", "sohu", "solar", "solutions", "song", "sony", "soy", "space", "sport", "spot", "spreadbetting", "sr", "srl", "ss", "st", "stada", "staples", "star", "statebank", "statefarm", "stc", "stcgroup", "stockholm", "storage", "store", "stream", "studio", "study", "style", "su", "sucks", "supplies", "supply", "support", "surf", "surgery", "suzuki", "sv", "swatch", "swiftcover", "swiss", "sx", "sy", "sydney", "symantec", "systems", "sz", "tab", "taipei", "talk", "taobao", "target", "tatamotors", "tatar", "tattoo", "tax", "taxi", "tc", "tci", "td", "tdk", "team", "tech", "technology", "tel", "temasek", "tennis", "teva", "tf", "tg", "th", "thd", "theater", "theatre", "tiaa", "tickets", "tienda", "tiffany", "tips", "tires", "tirol", "tj", "tjmaxx", "tjx", "tk", "tkmaxx", "tl", "tm", "tmall", "tn", "to", "today", "tokyo", "tools", "top", "toray", "toshiba", "total", "tours", "town", "toyota", "toys", "tr", "trade", "trading", "training", "travel", "travelchannel", "travelers", "travelersinsurance", "trust", "trv", "tt", "tube", "tui", "tunes", "tushu", "tv", "tvs", "tw", "tz", "ua", "ubank", "ubs", "ug", "uk", "unicom", "university", "uno", "uol", "ups", "us", "uy", "uz", "va", "vacations", "vana", "vanguard", "vc", "ve", "vegas", "ventures", "verisign", "versicherung", "vet", "vg", "vi", "viajes", "video", "vig", "viking", "villas", "vin", "vip", "virgin", "visa", "vision", "viva", "vivo", "vlaanderen", "vn", "vodka", "volkswagen", "volvo", "vote", "voting", "voto", "voyage", "vu", "vuelos", "wales", "walmart", "walter", "wang", "wanggou", "watch", "watches", "weather", "weatherchannel", "webcam", "weber", "website", "wed", "wedding", "weibo", "weir", "wf", "whoswho", "wien", "wiki", "williamhill", "win", "windows", "wine", "winners", "wme", "wolterskluwer", "woodside", "work", "works", "world", "wow", "ws", "wtc", "wtf", "xbox", "xerox", "xfinity", "xihuan", "xin", "कॉम", // xn--11b4c3d
  "セール", // xn--1ck2e1b
  "佛山", // xn--1qqw23a
  "ಭಾರತ", // xn--2scrj9c
  "慈善", // xn--30rr7y
  "集团", // xn--3bst00m
  "在线", // xn--3ds443g
  "한국", // xn--3e0b707e
  "ଭାରତ", // xn--3hcrj9c
  "大众汽车", // xn--3oq18vl8pn36a
  "点看", // xn--3pxu8k
  "คอม", // xn--42c2d9a
  "ভাৰত", // xn--45br5cyl
  "ভারত", // xn--45brj9c
  "八卦", // xn--45q11c
  "موقع", // xn--4gbrim
  "বাংলা", // xn--54b7fta0cc
  "公益", // xn--55qw42g
  "公司", // xn--55qx5d
  "香格里拉", // xn--5su34j936bgsg
  "网站", // xn--5tzm5g
  "移动", // xn--6frz82g
  "我爱你", // xn--6qq986b3xl
  "москва", // xn--80adxhks
  "қаз", // xn--80ao21a
  "католик", // xn--80aqecdr1a
  "онлайн", // xn--80asehdb
  "сайт", // xn--80aswg
  "联通", // xn--8y0a063a
  "срб", // xn--90a3ac
  "бг", // xn--90ae
  "бел", // xn--90ais
  "קום", // xn--9dbq2a
  "时尚", // xn--9et52u
  "微博", // xn--9krt00a
  "淡马锡", // xn--b4w605ferd
  "ファッション", // xn--bck1b9a5dre4c
  "орг", // xn--c1avg
  "नेट", // xn--c2br7g
  "ストア", // xn--cck2b3b
  "アマゾン", // xn--cckwcxetd
  "삼성", // xn--cg4bki
  "சிங்கப்பூர்", // xn--clchc0ea0b2g2a9gcd
  "商标", // xn--czr694b
  "商店", // xn--czrs0t
  "商城", // xn--czru2d
  "дети", // xn--d1acj3b
  "мкд", // xn--d1alf
  "ею", // xn--e1a4c
  "ポイント", // xn--eckvdtc9d
  "新闻", // xn--efvy88h
  "家電", // xn--fct429k
  "كوم", // xn--fhbei
  "中文网", // xn--fiq228c5hs
  "中信", // xn--fiq64b
  "中国", // xn--fiqs8s
  "中國", // xn--fiqz9s
  "娱乐", // xn--fjq720a
  "谷歌", // xn--flw351e
  "భారత్", // xn--fpcrj9c3d
  "ලංකා", // xn--fzc2c9e2c
  "電訊盈科", // xn--fzys8d69uvgm
  "购物", // xn--g2xx48c
  "クラウド", // xn--gckr3f0f
  "ભારત", // xn--gecrj9c
  "通販", // xn--gk3at1e
  "भारतम्", // xn--h2breg3eve
  "भारत", // xn--h2brj9c
  "भारोत", // xn--h2brj9c8c
  "网店", // xn--hxt814e
  "संगठन", // xn--i1b6b1a6a2e
  "餐厅", // xn--imr513n
  "网络", // xn--io0a7i
  "ком", // xn--j1aef
  "укр", // xn--j1amh
  "香港", // xn--j6w193g
  "亚马逊", // xn--jlq480n2rg
  "诺基亚", // xn--jlq61u9w7b
  "食品", // xn--jvr189m
  "飞利浦", // xn--kcrx77d1x4a
  "台湾", // xn--kprw13d
  "台灣", // xn--kpry57d
  "手机", // xn--kput3i
  "мон", // xn--l1acc
  "الجزائر", // xn--lgbbat1ad8j
  "عمان", // xn--mgb9awbf
  "ارامكو", // xn--mgba3a3ejt
  "ایران", // xn--mgba3a4f16a
  "العليان", // xn--mgba7c0bbn0a
  "اتصالات", // xn--mgbaakc7dvf
  "امارات", // xn--mgbaam7a8h
  "بازار", // xn--mgbab2bd
  "موريتانيا", // xn--mgbah1a3hjkrd
  "پاکستان", // xn--mgbai9azgqp6j
  "الاردن", // xn--mgbayh7gpa
  "بارت", // xn--mgbbh1a
  "بھارت", // xn--mgbbh1a71e
  "المغرب", // xn--mgbc0a9azcg
  "ابوظبي", // xn--mgbca7dzdo
  "البحرين", // xn--mgbcpq6gpa1a
  "السعودية", // xn--mgberp4a5d4ar
  "ڀارت", // xn--mgbgu82a
  "كاثوليك", // xn--mgbi4ecexp
  "سودان", // xn--mgbpl2fh
  "همراه", // xn--mgbt3dhd
  "عراق", // xn--mgbtx2b
  "مليسيا", // xn--mgbx4cd0ab
  "澳門", // xn--mix891f
  "닷컴", // xn--mk1bu44c
  "政府", // xn--mxtq1m
  "شبكة", // xn--ngbc5azd
  "بيتك", // xn--ngbe9e0a
  "عرب", // xn--ngbrx
  "გე", // xn--node
  "机构", // xn--nqv7f
  "组织机构", // xn--nqv7fs00ema
  "健康", // xn--nyqy26a
  "ไทย", // xn--o3cw4h
  "سورية", // xn--ogbpf8fl
  "招聘", // xn--otu796d
  "рус", // xn--p1acf
  "рф", // xn--p1ai
  "تونس", // xn--pgbs0dh
  "大拿", // xn--pssy2u
  "ລາວ", // xn--q7ce6a
  "みんな", // xn--q9jyb4c
  "グーグル", // xn--qcka1pmc
  "ευ", // xn--qxa6a
  "ελ", // xn--qxam
  "世界", // xn--rhqv96g
  "書籍", // xn--rovu88b
  "ഭാരതം", // xn--rvc1e0am3e
  "ਭਾਰਤ", // xn--s9brj9c
  "网址", // xn--ses554g
  "닷넷", // xn--t60b56a
  "コム", // xn--tckwe
  "天主教", // xn--tiq49xqyj
  "游戏", // xn--unup4y
  "vermögensberater", // xn--vermgensberater-ctb
  "vermögensberatung", // xn--vermgensberatung-pwb
  "企业", // xn--vhquv
  "信息", // xn--vuq861b
  "嘉里大酒店", // xn--w4r85el8fhu5dnra
  "嘉里", // xn--w4rs40l
  "مصر", // xn--wgbh1c
  "قطر", // xn--wgbl6a
  "广东", // xn--xhq521b
  "இலங்கை", // xn--xkc2al3hye2a
  "இந்தியா", // xn--xkc2dl3a5ee0h
  "հայ", // xn--y9a3aq
  "新加坡", // xn--yfro4i67o
  "فلسطين", // xn--ygbi2ammx
  "政务", // xn--zfr164b
  "xxx", "xyz", "yachts", "yahoo", "yamaxun", "yandex", "ye", "yodobashi", "yoga", "yokohama", "you", "youtube", "yt", "yun", "za", "zappos", "zara", "zero", "zip", "zm", "zone", "zuerich", "zw"];

  /**
   * isArray
   */
  var isArray = Array.isArray;
  /**
   * toString
   */

  var str = Object.prototype.toString;
  /**
   * Whether or not the given `val`
   * is an array.
   *
   * example:
   *
   *        isArray([]);
   *        // > true
   *        isArray(arguments);
   *        // > false
   *        isArray('');
   *        // > false
   *
   * @param {mixed} val
   * @return {bool}
   */

  var isArray_1 = isArray || function (val) {
    return !!val && '[object Array]' == str.call(val);
  };

  var isWindow = function isWindow(obj) {
    if (obj == null) {
      return false;
    }

    var o = Object(obj);
    return o === o.window;
  };

  var isArrayLike = function isArrayLike(obj) {
    if (!obj) {
      return false;
    }

    if (isArray_1(obj)) {
      return true;
    }

    if (isFunction_1(obj) || isWindow(obj)) {
      return false;
    }

    obj = Object(obj);
    var length = 'length' in obj && obj.length;

    if (obj.nodeType === 1 && length) {
      return true;
    }

    return length === 0 || typeof length === 'number' && length > 0 && length - 1 in obj;
  };

  var maxArrayLength = 4294967295;

  var fixme$2 = randomNatural.fixme;

  var randomIndex = function randomIndex(options) {
    if (options) {
      if (!options.inspected) {
        options.min = fixme$2(options.min, 0, maxArrayLength, true);
        options.max = fixme$2(options.max, 0, maxArrayLength, false);
      }
    } else {
      options = {
        min: 0,
        max: maxArrayLength
      };
    }

    options.inspected = true;
    return randomNatural(options);
  };

  var pickItem = function pickItem(arr) {
    if (!arr || !isArrayLike(arr)) {
      return arr;
    }

    var length = arr.length;

    if (!length) {
      return undefined;
    }

    return arr[randomIndex({
      max: length - 1
    })];
  };

  var randomTld = function randomTld() {
    return pickItem(tldList);
  };

  var randomDomains = function randomDomains(options) {
    options = options || {
      level: 1
    };

    if (!options.tld) {
      options.tld = randomTld();
    }

    var level = clamp_1(options.level || 1, 1, 10);
    var parts = [];

    while (level--) {
      parts.push(randomLorem());
    }

    parts.push(options.tld);
    return parts.join('.');
  };

  var randomEmail = function randomEmail(options) {
    var domain = options && options.domain ? toStr(options.domain) : randomDomains();
    return randomLorem() + '@' + domain;
  };

  function Logic() {
    var observers = []; //  an id necessary because text can be repeated

    var id = 0;
    var logic = {
      addEmail: function addEmail(raw) {
        var email = raw && raw.trim();

        if (!email) {
          return;
        }

        var addEmailEvent = {
          email: email,
          id: id++,
          isValid: isEmailValid(email)
        };
        logic.emails.push(addEmailEvent);
        observers.forEach(function (_ref) {
          var onAddEmail = _ref.onAddEmail;
          onAddEmail && onAddEmail(addEmailEvent);
        });
      },
      removeEmail: function removeEmail(id) {
        logic.emails = logic.emails.filter(function (email) {
          return email.id !== id;
        });
        observers.forEach(function (_ref2) {
          var onRemoveEmail = _ref2.onRemoveEmail;
          onRemoveEmail && onRemoveEmail(id);
        });
      },
      getEmailsCount: function getEmailsCount() {
        var validEmails = logic.emails.filter(function (_ref3) {
          var isValid = _ref3.isValid;
          return isValid;
        });
        alert(validEmails.length);
      },
      addRandomEmail: function addRandomEmail() {
        var raw = randomEmail();

        if (!isEmailValid(raw)) {
          return logic.addRandomEmail();
        }

        logic.addEmail(raw);
      },
      setEmails: function setEmails() {
        var emails = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        logic.emails.forEach(function (_ref4) {
          var id = _ref4.id;
          return logic.removeEmail(id);
        });
        emails.forEach(logic.addEmail);
      },
      getEmails: function getEmails() {
        return logic.emails.map(function (_ref5) {
          var email = _ref5.email;
          return email;
        });
      },
      register: function register(callbacks) {
        observers.push(callbacks);
      },
      emails: []
    };
    return logic;
  } // https://stackoverflow.com/a/46181/3178998


  function isEmailValid(email) {
    //  eslint-disable-next-line no-useless-escape
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function addInput(editor, logic) {
    var input = document.createElement('input');
    input.className = 'emails-input__email';
    input.type = 'email';
    input.tabIndex = 0;
    input.autofocus = true;
    input.placeholder = 'add more people…';

    var addEmail = function addEmail(email) {
      logic.addEmail(email);
      input.value = '';
    };

    input.addEventListener('input', function onKeyDown(event) {
      if (event.data === ',') {
        input.value.split(',').forEach(addEmail);
      }
    });
    input.addEventListener('keydown', function onKeyDown(event) {
      if (event.key === 'Enter') {
        addEmail(input.value);
      }
    });
    input.addEventListener('blur', function onBlur(event) {
      addEmail(input.value);
    });
    input.addEventListener('paste', function onPaste(event) {
      // uses the timeout to be sure that the value has changed
      setTimeout(function () {
        input.value.split(',').forEach(addEmail);
      }, 0);
    });
    editor.appendChild(input);
    return input;
  }

  var remove = '<svg viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 0.8L7.2 0L4 3.2L0.8 0L0 0.8L3.2 4L0 7.2L0.8 8L4 4.8L7.2 8L8 7.2L4.8 4L8 0.8Z" fill="#050038"/></svg>';

  function addBlock(_ref, addEmailEvent) {
    var editor = _ref.editor,
        input = _ref.input,
        logic = _ref.logic;
    var block = document.createElement('span');
    block.className = 'emails-input__block';

    if (!addEmailEvent.isValid) {
      block.className = block.className + ' emails-input__block--invalid';
    }

    addLabel(block, addEmailEvent);
    addRemoveButton(block, logic, addEmailEvent);
    editor.insertBefore(block, input);
    logic.register({
      onRemoveEmail: function onRemoveEmail(id) {
        if (id === addEmailEvent.id) {
          editor.removeChild(block);
        }
      }
    });
  }

  function addLabel(block, _ref2) {
    var email = _ref2.email;
    var label = document.createElement('span');
    label.innerHTML = email;
    label.className = 'emails-input__block-email';
    block.appendChild(label);
  }

  function addRemoveButton(block, logic, _ref3) {
    var id = _ref3.id;
    var button = document.createElement('span');
    button.innerHTML = remove;
    button.className = 'emails-input__block-remove';
    button.addEventListener('click', function () {
      return logic.removeEmail(id);
    });
    block.appendChild(button);
  }

  function addContent(node, logic, options) {
    var content = document.createElement('div');
    content.className = 'emails-input__content';
    node.appendChild(content);
    addTitle(content, options);
    addEditor(content, logic);
  }

  function addTitle(content, _ref) {
    var createTitleNodes = _ref.createTitleNodes;
    var header = document.createElement('header');
    var title = createTitleNodes();
    header.className = 'emails-input__title';
    title.forEach(function (node) {
      return header.appendChild(node);
    });
    content.appendChild(header);
  }

  function addEditor(content, logic) {
    var editor = document.createElement('div');
    editor.className = 'emails-input__editor';
    content.appendChild(editor);
    var input = addInput(editor, logic);
    logic.register({
      onAddEmail: function onAddEmail(addEmailEvent) {
        addBlock({
          editor: editor,
          input: input,
          logic: logic
        }, addEmailEvent);
      }
    });
  }

  function addFooter(node, logic) {
    var footer = document.createElement('footer');
    footer.className = 'emails-input__footer';
    node.appendChild(footer);
    addAddEmail(footer, logic);
    addGetEmailsCount(footer, logic);
  }

  function addAddEmail(footer, logic) {
    var button = document.createElement('button');
    button.innerHTML = 'Add email';
    button.type = 'button';
    button.className = 'emails-input__footer-button emails-input__add-email';
    button.addEventListener('click', logic.addRandomEmail);
    footer.appendChild(button);
  }

  function addGetEmailsCount(footer, logic) {
    var button = document.createElement('button');
    button.innerHTML = 'Get emails count';
    button.type = 'button';
    button.className = 'emails-input__footer-button emails-input__get-emails-count';
    button.addEventListener('click', logic.getEmailsCount);
    footer.appendChild(button);
  }

  function Ui(node, logic, _ref) {
    var classes = _ref.classes,
        options = _objectWithoutProperties(_ref, ["classes"]);

    node.className = "emails-input ".concat(classes);
    addContent(node, logic, options);
    addFooter(node, logic);
  }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  var CONFIG = {
    emails: [],
    createTitleNodes: function createTitleNodes() {
      var strong = document.createElement('strong');
      strong.innerText = 'Board Name';
      return [document.createTextNode('Share '), strong, document.createTextNode(' with others')];
    },
    classes: ''
  };

  function EmailsInput(inputContainerNode, config) {
    var _CONFIG$config = _objectSpread(_objectSpread({}, CONFIG), config),
        emails = _CONFIG$config.emails,
        options = _objectWithoutProperties(_CONFIG$config, ["emails"]);

    var logic = new Logic();
    Ui(inputContainerNode, logic, options);
    logic.setEmails(emails);
    return {
      setEmails: logic.setEmails,
      getEmails: logic.getEmails
    };
  }

  try {
    globalThis.EmailsInput = EmailsInput;
  } catch (e) {
    window.EmailsInput = EmailsInput;
  }

  return EmailsInput;

})));
