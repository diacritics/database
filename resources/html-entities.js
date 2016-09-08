/**
 * Entities modified from https://dev.w3.org/html5/html-author/charref
 * Note:
 * 1. All white space characters removed, but are still ignored by the build.
 *    This includes: &Tab; &NewLine; &nbsp; &shy; &ensp; &emsp; &emsp13;
 *    &emsp14; &numsp; &puncsp; &thinsp; &ThinSpace; &hairsp; &VeryThinSpace;
 *    &ZeroWidthSpace; &NegativeVeryThinSpace; &NegativeThinSpace;
 *    &NegativeMediumSpace; &NegativeThickSpace; &zwnj; &zwj; &lrm; &rlm;
 *    &MediumSpace; &NoBreak; &ApplyFunction; &af; &InvisibleTimes; &it;
 *    &InvisibleComma; &ic;
 * 2. Multiple entities for a given character must be separated by a space.
 * 3. Added backslash escapes to quote (&quot;) and backslash (&bsol;)
 */
{
    "!": "&excl;",
    "\"": "&quot; &QUOT;",
    "#": "&num;",
    "$": "&dollar;",
    "%": "&percnt;",
    "&": "&amp; &AMP;",
    "'": "&apos;",
    "(": "&lpar;",
    ")": "&rpar;",
    "*": "&ast; &midast;",
    "+": "&plus;",
    ",": "&comma;",
    ".": "&period;",
    "/": "&sol;",
    ":": "&colon;",
    ";": "&semi;",
    "<": "&lt; &LT;",
    "=": "&equals;",
    ">": "&gt; &GT;",
    "?": "&quest;",
    "@": "&commat;",
    "[": "&lsqb; &lbrack;",
    "\\": "&bsol;",
    "]": "&rsqb; &rbrack;",
    "^": "&Hat;",
    "_": "&lowbar;",
    "`": "&grave; &DiacriticalGrave;",
    "{": "&lcub; &lbrace;",
    "|": "&verbar; &vert; &VerticalLine;",
    "}": "&rcub; &rbrace;",
    "¡": "&iexcl;",
    "¢": "&cent;",
    "£": "&pound;",
    "¤": "&curren;",
    "¥": "&yen;",
    "¦": "&brvbar;",
    "§": "&sect;",
    "¨": "&Dot; &die; &DoubleDot; &uml;",
    "©": "&copy; &COPY;",
    "ª": "&ordf;",
    "«": "&laquo;",
    "¬": "&not;",
    "®": "&reg; &circledR; &REG;",
    "¯": "&macr; &OverBar; &strns;",
    "°": "&deg;",
    "±": "&plusmn; &pm; &PlusMinus;",
    "²": "&sup2;",
    "³": "&sup3;",
    "´": "&acute; &DiacriticalAcute;",
    "µ": "&micro;",
    "¶": "&para;",
    "·": "&middot; &centerdot; &CenterDot;",
    "¸": "&cedil; &Cedilla;",
    "¹": "&sup1;",
    "º": "&ordm;",
    "»": "&raquo;",
    "¼": "&frac14;",
    "½": "&frac12; &half;",
    "¾": "&frac34;",
    "¿": "&iquest;",
    "À": "&Agrave;",
    "Á": "&Aacute;",
    "Â": "&Acirc;",
    "Ã": "&Atilde;",
    "Ä": "&Auml;",
    "Å": "&Aring;",
    "Æ": "&AElig;",
    "Ç": "&Ccedil;",
    "È": "&Egrave;",
    "É": "&Eacute;",
    "Ê": "&Ecirc;",
    "Ë": "&Euml;",
    "Ì": "&Igrave;",
    "Í": "&Iacute;",
    "Î": "&Icirc;",
    "Ï": "&Iuml;",
    "Ð": "&ETH;",
    "Ñ": "&Ntilde;",
    "Ò": "&Ograve;",
    "Ó": "&Oacute;",
    "Ô": "&Ocirc;",
    "Õ": "&Otilde;",
    "Ö": "&Ouml;",
    "×": "&times;",
    "Ø": "&Oslash;",
    "Ù": "&Ugrave;",
    "Ú": "&Uacute;",
    "Û": "&Ucirc;",
    "Ü": "&Uuml;",
    "Ý": "&Yacute;",
    "Þ": "&THORN;",
    "ß": "&szlig;",
    "à": "&agrave;",
    "á": "&aacute;",
    "â": "&acirc;",
    "ã": "&atilde;",
    "ä": "&auml;",
    "å": "&aring;",
    "æ": "&aelig;",
    "ç": "&ccedil;",
    "è": "&egrave;",
    "é": "&eacute;",
    "ê": "&ecirc;",
    "ë": "&euml;",
    "ì": "&igrave;",
    "í": "&iacute;",
    "î": "&icirc;",
    "ï": "&iuml;",
    "ð": "&eth;",
    "ñ": "&ntilde;",
    "ò": "&ograve;",
    "ó": "&oacute;",
    "ô": "&ocirc;",
    "õ": "&otilde;",
    "ö": "&ouml;",
    "÷": "&divide; &div;",
    "ø": "&oslash;",
    "ù": "&ugrave;",
    "ú": "&uacute;",
    "û": "&ucirc;",
    "ü": "&uuml;",
    "ý": "&yacute;",
    "þ": "&thorn;",
    "ÿ": "&yuml;",
    "Ā": "&Amacr;",
    "ā": "&amacr;",
    "Ă": "&Abreve;",
    "ă": "&abreve;",
    "Ą": "&Aogon;",
    "ą": "&aogon;",
    "Ć": "&Cacute;",
    "ć": "&cacute;",
    "Ĉ": "&Ccirc;",
    "ĉ": "&ccirc;",
    "Ċ": "&Cdot;",
    "ċ": "&cdot;",
    "Č": "&Ccaron;",
    "č": "&ccaron;",
    "Ď": "&Dcaron;",
    "ď": "&dcaron;",
    "Đ": "&Dstrok;",
    "đ": "&dstrok;",
    "Ē": "&Emacr;",
    "ē": "&emacr;",
    "Ė": "&Edot;",
    "ė": "&edot;",
    "Ę": "&Eogon;",
    "ę": "&eogon;",
    "Ě": "&Ecaron;",
    "ě": "&ecaron;",
    "Ĝ": "&Gcirc;",
    "ĝ": "&gcirc;",
    "Ğ": "&Gbreve;",
    "ğ": "&gbreve;",
    "Ġ": "&Gdot;",
    "ġ": "&gdot;",
    "Ģ": "&Gcedil;",
    "Ĥ": "&Hcirc;",
    "ĥ": "&hcirc;",
    "Ħ": "&Hstrok;",
    "ħ": "&hstrok;",
    "Ĩ": "&Itilde;",
    "ĩ": "&itilde;",
    "Ī": "&Imacr;",
    "ī": "&imacr;",
    "Į": "&Iogon;",
    "į": "&iogon;",
    "İ": "&Idot;",
    "ı": "&imath; &inodot;",
    "Ĳ": "&IJlig;",
    "ĳ": "&ijlig;",
    "Ĵ": "&Jcirc;",
    "ĵ": "&jcirc;",
    "Ķ": "&Kcedil;",
    "ķ": "&kcedil;",
    "ĸ": "&kgreen;",
    "Ĺ": "&Lacute;",
    "ĺ": "&lacute;",
    "Ļ": "&Lcedil;",
    "ļ": "&lcedil;",
    "Ľ": "&Lcaron;",
    "ľ": "&lcaron;",
    "Ŀ": "&Lmidot;",
    "ŀ": "&lmidot;",
    "Ł": "&Lstrok;",
    "ł": "&lstrok;",
    "Ń": "&Nacute;",
    "ń": "&nacute;",
    "Ņ": "&Ncedil;",
    "ņ": "&ncedil;",
    "Ň": "&Ncaron;",
    "ň": "&ncaron;",
    "ŉ": "&napos;",
    "Ŋ": "&ENG;",
    "ŋ": "&eng;",
    "Ō": "&Omacr;",
    "ō": "&omacr;",
    "Ő": "&Odblac;",
    "ő": "&odblac;",
    "Œ": "&OElig;",
    "œ": "&oelig;",
    "Ŕ": "&Racute;",
    "ŕ": "&racute;",
    "Ŗ": "&Rcedil;",
    "ŗ": "&rcedil;",
    "Ř": "&Rcaron;",
    "ř": "&rcaron;",
    "Ś": "&Sacute;",
    "ś": "&sacute;",
    "Ŝ": "&Scirc;",
    "ŝ": "&scirc;",
    "Ş": "&Scedil;",
    "ş": "&scedil;",
    "Š": "&Scaron;",
    "š": "&scaron;",
    "Ţ": "&Tcedil;",
    "ţ": "&tcedil;",
    "Ť": "&Tcaron;",
    "ť": "&tcaron;",
    "Ŧ": "&Tstrok;",
    "ŧ": "&tstrok;",
    "Ũ": "&Utilde;",
    "ũ": "&utilde;",
    "Ū": "&Umacr;",
    "ū": "&umacr;",
    "Ŭ": "&Ubreve;",
    "ŭ": "&ubreve;",
    "Ů": "&Uring;",
    "ů": "&uring;",
    "Ű": "&Udblac;",
    "ű": "&udblac;",
    "Ų": "&Uogon;",
    "ų": "&uogon;",
    "Ŵ": "&Wcirc;",
    "ŵ": "&wcirc;",
    "Ŷ": "&Ycirc;",
    "ŷ": "&ycirc;",
    "Ÿ": "&Yuml;",
    "Ź": "&Zacute;",
    "ź": "&zacute;",
    "Ż": "&Zdot;",
    "ż": "&zdot;",
    "Ž": "&Zcaron;",
    "ž": "&zcaron;",
    "ƒ": "&fnof;",
    "Ƶ": "&imped;",
    "ǵ": "&gacute;",
    "ȷ": "&jmath;",
    "ˆ": "&circ;",
    "ˇ": "&caron; &Hacek;",
    "˘": "&breve; &Breve;",
    "˙": "&dot; &DiacriticalDot;",
    "˚": "&ring;",
    "˛": "&ogon;",
    "˜": "&tilde; &DiacriticalTilde;",
    "˝": "&dblac; &DiacriticalDoubleAcute;",
    "̑": "&DownBreve;",
    "̲": "&UnderBar;",
    "Α": "&Alpha;",
    "Β": "&Beta;",
    "Γ": "&Gamma;",
    "Δ": "&Delta;",
    "Ε": "&Epsilon;",
    "Ζ": "&Zeta;",
    "Η": "&Eta;",
    "Θ": "&Theta;",
    "Ι": "&Iota;",
    "Κ": "&Kappa;",
    "Λ": "&Lambda;",
    "Μ": "&Mu;",
    "Ν": "&Nu;",
    "Ξ": "&Xi;",
    "Ο": "&Omicron;",
    "Π": "&Pi;",
    "Ρ": "&Rho;",
    "Σ": "&Sigma;",
    "Τ": "&Tau;",
    "Υ": "&Upsilon;",
    "Φ": "&Phi;",
    "Χ": "&Chi;",
    "Ψ": "&Psi;",
    "Ω": "&Omega;",
    "α": "&alpha;",
    "β": "&beta;",
    "γ": "&gamma;",
    "δ": "&delta;",
    "ε": "&epsiv; &varepsilon; &epsilon;",
    "ζ": "&zeta;",
    "η": "&eta;",
    "θ": "&theta;",
    "ι": "&iota;",
    "κ": "&kappa;",
    "λ": "&lambda;",
    "μ": "&mu;",
    "ν": "&nu;",
    "ξ": "&xi;",
    "ο": "&omicron;",
    "π": "&pi;",
    "ρ": "&rho;",
    "ς": "&sigmav; &varsigma; &sigmaf;",
    "σ": "&sigma;",
    "τ": "&tau;",
    "υ": "&upsi; &upsilon;",
    "φ": "&phi; &phiv; &varphi;",
    "χ": "&chi;",
    "ψ": "&psi;",
    "ω": "&omega;",
    "ϑ": "&thetav; &vartheta; &thetasym;",
    "ϒ": "&Upsi; &upsih;",
    "ϕ": "&straightphi;",
    "ϖ": "&piv; &varpi;",
    "Ϝ": "&Gammad;",
    "ϝ": "&gammad; &digamma;",
    "ϰ": "&kappav; &varkappa;",
    "ϱ": "&rhov; &varrho;",
    "ϵ": "&epsi; &straightepsilon;",
    "϶": "&bepsi; &backepsilon;",
    "Ё": "&IOcy;",
    "Ђ": "&DJcy;",
    "Ѓ": "&GJcy;",
    "Є": "&Jukcy;",
    "Ѕ": "&DScy;",
    "І": "&Iukcy;",
    "Ї": "&YIcy;",
    "Ј": "&Jsercy;",
    "Љ": "&LJcy;",
    "Њ": "&NJcy;",
    "Ћ": "&TSHcy;",
    "Ќ": "&KJcy;",
    "Ў": "&Ubrcy;",
    "Џ": "&DZcy;",
    "А": "&Acy;",
    "Б": "&Bcy;",
    "В": "&Vcy;",
    "Г": "&Gcy;",
    "Д": "&Dcy;",
    "Е": "&IEcy;",
    "Ж": "&ZHcy;",
    "З": "&Zcy;",
    "И": "&Icy;",
    "Й": "&Jcy;",
    "К": "&Kcy;",
    "Л": "&Lcy;",
    "М": "&Mcy;",
    "Н": "&Ncy;",
    "О": "&Ocy;",
    "П": "&Pcy;",
    "Р": "&Rcy;",
    "С": "&Scy;",
    "Т": "&Tcy;",
    "У": "&Ucy;",
    "Ф": "&Fcy;",
    "Х": "&KHcy;",
    "Ц": "&TScy;",
    "Ч": "&CHcy;",
    "Ш": "&SHcy;",
    "Щ": "&SHCHcy;",
    "Ъ": "&HARDcy;",
    "Ы": "&Ycy;",
    "Ь": "&SOFTcy;",
    "Э": "&Ecy;",
    "Ю": "&YUcy;",
    "Я": "&YAcy;",
    "а": "&acy;",
    "б": "&bcy;",
    "в": "&vcy;",
    "г": "&gcy;",
    "д": "&dcy;",
    "е": "&iecy;",
    "ж": "&zhcy;",
    "з": "&zcy;",
    "и": "&icy;",
    "й": "&jcy;",
    "к": "&kcy;",
    "л": "&lcy;",
    "м": "&mcy;",
    "н": "&ncy;",
    "о": "&ocy;",
    "п": "&pcy;",
    "р": "&rcy;",
    "с": "&scy;",
    "т": "&tcy;",
    "у": "&ucy;",
    "ф": "&fcy;",
    "х": "&khcy;",
    "ц": "&tscy;",
    "ч": "&chcy;",
    "ш": "&shcy;",
    "щ": "&shchcy;",
    "ъ": "&hardcy;",
    "ы": "&ycy;",
    "ь": "&softcy;",
    "э": "&ecy;",
    "ю": "&yucy;",
    "я": "&yacy;",
    "ё": "&iocy;",
    "ђ": "&djcy;",
    "ѓ": "&gjcy;",
    "є": "&jukcy;",
    "ѕ": "&dscy;",
    "і": "&iukcy;",
    "ї": "&yicy;",
    "ј": "&jsercy;",
    "љ": "&ljcy;",
    "њ": "&njcy;",
    "ћ": "&tshcy;",
    "ќ": "&kjcy;",
    "ў": "&ubrcy;",
    "џ": "&dzcy;",
    "‐": "&hyphen; &dash;",
    "–": "&ndash;",
    "—": "&mdash;",
    "―": "&horbar;",
    "‖": "&Verbar; &Vert;",
    "‘": "&lsquo; &OpenCurlyQuote;",
    "’": "&rsquo; &rsquor; &CloseCurlyQuote;",
    "‚": "&lsquor; &sbquo;",
    "“": "&ldquo; &OpenCurlyDoubleQuote;",
    "”": "&rdquo; &rdquor; &CloseCurlyDoubleQuote;",
    "„": "&ldquor; &bdquo;",
    "†": "&dagger;",
    "‡": "&Dagger; &ddagger;",
    "•": "&bull; &bullet;",
    "‥": "&nldr;",
    "…": "&hellip; &mldr;",
    "‰": "&permil;",
    "‱": "&pertenk;",
    "′": "&prime;",
    "″": "&Prime;",
    "‴": "&tprime;",
    "‵": "&bprime; &backprime;",
    "‹": "&lsaquo;",
    "›": "&rsaquo;",
    "‾": "&oline;",
    "⁁": "&caret;",
    "⁃": "&hybull;",
    "⁄": "&frasl;",
    "⁏": "&bsemi;",
    "⁗": "&qprime;",
    "€": "&euro;",
    "⃛": "&tdot; &TripleDot;",
    "⃜": "&DotDot;",
    "ℂ": "&Copf; &complexes;",
    "℅": "&incare;",
    "ℊ": "&gscr;",
    "ℋ": "&hamilt; &HilbertSpace; &Hscr;",
    "ℌ": "&Hfr; &Poincareplane;",
    "ℍ": "&quaternions; &Hopf;",
    "ℎ": "&planckh;",
    "ℏ": "&planck; &hbar; &plankv; &hslash;",
    "ℐ": "&Iscr; &imagline;",
    "ℑ": "&image; &Im; &imagpart; &Ifr;",
    "ℒ": "&Lscr; &lagran; &Laplacetrf;",
    "ℓ": "&ell;",
    "ℕ": "&Nopf; &naturals;",
    "№": "&numero;",
    "℗": "&copysr;",
    "℘": "&weierp; &wp;",
    "ℙ": "&Popf; &primes;",
    "ℚ": "&rationals; &Qopf;",
    "ℛ": "&Rscr; &realine;",
    "ℜ": "&real; &Re; &realpart; &Rfr;",
    "ℝ": "&reals; &Ropf;",
    "℞": "&rx;",
    "™": "&trade; &TRADE;",
    "ℤ": "&integers; &Zopf;",
    "Ω": "&ohm;",
    "℧": "&mho;",
    "ℨ": "&Zfr; &zeetrf;",
    "℩": "&iiota;",
    "Å": "&angst;",
    "ℬ": "&bernou; &Bernoullis; &Bscr;",
    "ℭ": "&Cfr; &Cayleys;",
    "ℯ": "&escr;",
    "ℰ": "&Escr; &expectation;",
    "ℱ": "&Fscr; &Fouriertrf;",
    "ℳ": "&phmmat; &Mellintrf; &Mscr;",
    "ℴ": "&order; &orderof; &oscr;",
    "ℵ": "&alefsym; &aleph;",
    "ℶ": "&beth;",
    "ℷ": "&gimel;",
    "ℸ": "&daleth;",
    "ⅅ": "&CapitalDifferentialD; &DD;",
    "ⅆ": "&DifferentialD; &dd;",
    "ⅇ": "&ExponentialE; &exponentiale; &ee;",
    "ⅈ": "&ImaginaryI; &ii;",
    "⅓": "&frac13;",
    "⅔": "&frac23;",
    "⅕": "&frac15;",
    "⅖": "&frac25;",
    "⅗": "&frac35;",
    "⅘": "&frac45;",
    "⅙": "&frac16;",
    "⅚": "&frac56;",
    "⅛": "&frac18;",
    "⅜": "&frac38;",
    "⅝": "&frac58;",
    "⅞": "&frac78;",
    "←": "&larr; &leftarrow; &LeftArrow; &slarr; &ShortLeftArrow;",
    "↑": "&uarr; &uparrow; &UpArrow; &ShortUpArrow;",
    "→": "&rarr; &rightarrow; &RightArrow; &srarr; &ShortRightArrow;",
    "↓": "&darr; &downarrow; &DownArrow; &ShortDownArrow;",
    "↔": "&harr; &leftrightarrow; &LeftRightArrow;",
    "↕": "&varr; &updownarrow; &UpDownArrow;",
    "↖": "&nwarr; &UpperLeftArrow; &nwarrow;",
    "↗": "&nearr; &UpperRightArrow; &nearrow;",
    "↘": "&searr; &searrow; &LowerRightArrow;",
    "↙": "&swarr; &swarrow; &LowerLeftArrow;",
    "↚": "&nlarr; &nleftarrow;",
    "↛": "&nrarr; &nrightarrow;",
    "↝": "&rarrw; &rightsquigarrow;",
    "↞": "&Larr; &twoheadleftarrow;",
    "↟": "&Uarr;",
    "↠": "&Rarr; &twoheadrightarrow;",
    "↡": "&Darr;",
    "↢": "&larrtl; &leftarrowtail;",
    "↣": "&rarrtl; &rightarrowtail;",
    "↤": "&LeftTeeArrow; &mapstoleft;",
    "↥": "&UpTeeArrow; &mapstoup;",
    "↦": "&map; &RightTeeArrow; &mapsto;",
    "↧": "&DownTeeArrow; &mapstodown;",
    "↩": "&larrhk; &hookleftarrow;",
    "↪": "&rarrhk; &hookrightarrow;",
    "↫": "&larrlp; &looparrowleft;",
    "↬": "&rarrlp; &looparrowright;",
    "↭": "&harrw; &leftrightsquigarrow;",
    "↮": "&nharr; &nleftrightarrow;",
    "↰": "&lsh; &Lsh;",
    "↱": "&rsh; &Rsh;",
    "↲": "&ldsh;",
    "↳": "&rdsh;",
    "↵": "&crarr;",
    "↶": "&cularr; &curvearrowleft;",
    "↷": "&curarr; &curvearrowright;",
    "↺": "&olarr; &circlearrowleft;",
    "↻": "&orarr; &circlearrowright;",
    "↼": "&lharu; &LeftVector; &leftharpoonup;",
    "↽": "&lhard; &leftharpoondown; &DownLeftVector;",
    "↾": "&uharr; &upharpoonright; &RightUpVector;",
    "↿": "&uharl; &upharpoonleft; &LeftUpVector;",
    "⇀": "&rharu; &RightVector; &rightharpoonup;",
    "⇁": "&rhard; &rightharpoondown; &DownRightVector;",
    "⇂": "&dharr; &RightDownVector; &downharpoonright;",
    "⇃": "&dharl; &LeftDownVector; &downharpoonleft;",
    "⇄": "&rlarr; &rightleftarrows; &RightArrowLeftArrow;",
    "⇅": "&udarr; &UpArrowDownArrow;",
    "⇆": "&lrarr; &leftrightarrows; &LeftArrowRightArrow;",
    "⇇": "&llarr; &leftleftarrows;",
    "⇈": "&uuarr; &upuparrows;",
    "⇉": "&rrarr; &rightrightarrows;",
    "⇊": "&ddarr; &downdownarrows;",
    "⇋": "&lrhar; &ReverseEquilibrium; &leftrightharpoons;",
    "⇌": "&rlhar; &rightleftharpoons; &Equilibrium;",
    "⇍": "&nlArr; &nLeftarrow;",
    "⇎": "&nhArr; &nLeftrightarrow;",
    "⇏": "&nrArr; &nRightarrow;",
    "⇐": "&lArr; &Leftarrow; &DoubleLeftArrow;",
    "⇑": "&uArr; &Uparrow; &DoubleUpArrow;",
    "⇒": "&rArr; &Rightarrow; &Implies; &DoubleRightArrow;",
    "⇓": "&dArr; &Downarrow; &DoubleDownArrow;",
    "⇔": "&hArr; &Leftrightarrow; &DoubleLeftRightArrow; &iff;",
    "⇕": "&vArr; &Updownarrow; &DoubleUpDownArrow;",
    "⇖": "&nwArr;",
    "⇗": "&neArr;",
    "⇘": "&seArr;",
    "⇙": "&swArr;",
    "⇚": "&lAarr; &Lleftarrow;",
    "⇛": "&rAarr; &Rrightarrow;",
    "⇝": "&zigrarr;",
    "⇤": "&larrb; &LeftArrowBar;",
    "⇥": "&rarrb; &RightArrowBar;",
    "⇵": "&duarr; &DownArrowUpArrow;",
    "⇽": "&loarr;",
    "⇾": "&roarr;",
    "⇿": "&hoarr;",
    "∀": "&forall; &ForAll;",
    "∁": "&comp; &complement;",
    "∂": "&part; &PartialD;",
    "∃": "&exist; &Exists;",
    "∄": "&nexist; &NotExists; &nexists;",
    "∅": "&empty; &emptyset; &emptyv; &varnothing;",
    "∇": "&nabla; &Del;",
    "∈": "&isin; &isinv; &Element; &in;",
    "∉": "&notin; &NotElement; &notinva;",
    "∋": "&niv; &ReverseElement; &ni; &SuchThat;",
    "∌": "&notni; &notniva; &NotReverseElement;",
    "∏": "&prod; &Product;",
    "∐": "&coprod; &Coproduct;",
    "∑": "&sum; &Sum;",
    "−": "&minus;",
    "∓": "&mnplus; &mp; &MinusPlus;",
    "∔": "&plusdo; &dotplus;",
    "∖": "&setmn; &setminus; &Backslash; &ssetmn; &smallsetminus;",
    "∗": "&lowast;",
    "∘": "&compfn; &SmallCircle;",
    "√": "&radic; &Sqrt;",
    "∝": "&prop; &propto; &Proportional; &vprop; &varpropto;",
    "∞": "&infin;",
    "∟": "&angrt;",
    "∠": "&ang; &angle;",
    "∡": "&angmsd; &measuredangle;",
    "∢": "&angsph;",
    "∣": "&mid; &VerticalBar; &smid; &shortmid;",
    "∤": "&nmid; &NotVerticalBar; &nsmid; &nshortmid;",
    "∥": "&par; &parallel; &DoubleVerticalBar; &spar; &shortparallel;",
    "∦": "&npar; &nparallel; &NotDoubleVerticalBar; &nspar; &nshortparallel;",
    "∧": "&and; &wedge;",
    "∨": "&or; &vee;",
    "∩": "&cap;",
    "∪": "&cup;",
    "∫": "&int; &Integral;",
    "∬": "&Int;",
    "∭": "&tint; &iiint;",
    "∮": "&conint; &oint; &ContourIntegral;",
    "∯": "&Conint; &DoubleContourIntegral;",
    "∰": "&Cconint;",
    "∱": "&cwint;",
    "∲": "&cwconint; &ClockwiseContourIntegral;",
    "∳": "&awconint; &CounterClockwiseContourIntegral;",
    "∴": "&there4; &therefore; &Therefore;",
    "∵": "&becaus; &because; &Because;",
    "∶": "&ratio;",
    "∷": "&Colon; &Proportion;",
    "∸": "&minusd; &dotminus;",
    "∺": "&mDDot;",
    "∻": "&homtht;",
    "∼": "&sim; &Tilde; &thksim; &thicksim;",
    "∽": "&bsim; &backsim;",
    "∾": "&ac; &mstpos;",
    "∿": "&acd;",
    "≀": "&wreath; &VerticalTilde; &wr;",
    "≁": "&nsim; &NotTilde;",
    "≂": "&esim; &EqualTilde; &eqsim;",
    "≃": "&sime; &TildeEqual; &simeq;",
    "≄": "&nsime; &nsimeq; &NotTildeEqual;",
    "≅": "&cong; &TildeFullEqual;",
    "≆": "&simne;",
    "≇": "&ncong; &NotTildeFullEqual;",
    "≈": "&asymp; &ap; &TildeTilde; &approx; &thkap; &thickapprox;",
    "≉": "&nap; &NotTildeTilde; &napprox;",
    "≊": "&ape; &approxeq;",
    "≋": "&apid;",
    "≌": "&bcong; &backcong;",
    "≍": "&asympeq; &CupCap;",
    "≎": "&bump; &HumpDownHump; &Bumpeq;",
    "≏": "&bumpe; &HumpEqual; &bumpeq;",
    "≐": "&esdot; &DotEqual; &doteq;",
    "≑": "&eDot; &doteqdot;",
    "≒": "&efDot; &fallingdotseq;",
    "≓": "&erDot; &risingdotseq;",
    "≔": "&colone; &coloneq; &Assign;",
    "≕": "&ecolon; &eqcolon;",
    "≖": "&ecir; &eqcirc;",
    "≗": "&cire; &circeq;",
    "≙": "&wedgeq;",
    "≚": "&veeeq;",
    "≜": "&trie; &triangleq;",
    "≟": "&equest; &questeq;",
    "≠": "&ne; &NotEqual;",
    "≡": "&equiv; &Congruent;",
    "≢": "&nequiv; &NotCongruent;",
    "≤": "&le; &leq;",
    "≥": "&ge; &GreaterEqual; &geq;",
    "≦": "&lE; &LessFullEqual; &leqq;",
    "≧": "&gE; &GreaterFullEqual; &geqq;",
    "≨": "&lnE; &lneqq;",
    "≩": "&gnE; &gneqq;",
    "≪": "&Lt; &NestedLessLess; &ll;",
    "≫": "&Gt; &NestedGreaterGreater; &gg;",
    "≬": "&twixt; &between;",
    "≭": "&NotCupCap;",
    "≮": "&nlt; &NotLess; &nless;",
    "≯": "&ngt; &NotGreater; &ngtr;",
    "≰": "&nle; &NotLessEqual; &nleq;",
    "≱": "&nge; &NotGreaterEqual; &ngeq;",
    "≲": "&lsim; &LessTilde; &lesssim;",
    "≳": "&gsim; &gtrsim; &GreaterTilde;",
    "≴": "&nlsim; &NotLessTilde;",
    "≵": "&ngsim; &NotGreaterTilde;",
    "≶": "&lg; &lessgtr; &LessGreater;",
    "≷": "&gl; &gtrless; &GreaterLess;",
    "≸": "&ntlg; &NotLessGreater;",
    "≹": "&ntgl; &NotGreaterLess;",
    "≺": "&pr; &Precedes; &prec;",
    "≻": "&sc; &Succeeds; &succ;",
    "≼": "&prcue; &PrecedesSlantEqual; &preccurlyeq;",
    "≽": "&sccue; &SucceedsSlantEqual; &succcurlyeq;",
    "≾": "&prsim; &precsim; &PrecedesTilde;",
    "≿": "&scsim; &succsim; &SucceedsTilde;",
    "⊀": "&npr; &nprec; &NotPrecedes;",
    "⊁": "&nsc; &nsucc; &NotSucceeds;",
    "⊂": "&sub; &subset;",
    "⊃": "&sup; &supset; &Superset;",
    "⊄": "&nsub;",
    "⊅": "&nsup;",
    "⊆": "&sube; &SubsetEqual; &subseteq;",
    "⊇": "&supe; &supseteq; &SupersetEqual;",
    "⊈": "&nsube; &nsubseteq; &NotSubsetEqual;",
    "⊉": "&nsupe; &nsupseteq; &NotSupersetEqual;",
    "⊊": "&subne; &subsetneq;",
    "⊋": "&supne; &supsetneq;",
    "⊍": "&cupdot;",
    "⊎": "&uplus; &UnionPlus;",
    "⊏": "&sqsub; &SquareSubset; &sqsubset;",
    "⊐": "&sqsup; &SquareSuperset; &sqsupset;",
    "⊑": "&sqsube; &SquareSubsetEqual; &sqsubseteq;",
    "⊒": "&sqsupe; &SquareSupersetEqual; &sqsupseteq;",
    "⊓": "&sqcap; &SquareIntersection;",
    "⊔": "&sqcup; &SquareUnion;",
    "⊕": "&oplus; &CirclePlus;",
    "⊖": "&ominus; &CircleMinus;",
    "⊗": "&otimes; &CircleTimes;",
    "⊘": "&osol;",
    "⊙": "&odot; &CircleDot;",
    "⊚": "&ocir; &circledcirc;",
    "⊛": "&oast; &circledast;",
    "⊝": "&odash; &circleddash;",
    "⊞": "&plusb; &boxplus;",
    "⊟": "&minusb; &boxminus;",
    "⊠": "&timesb; &boxtimes;",
    "⊡": "&sdotb; &dotsquare;",
    "⊢": "&vdash; &RightTee;",
    "⊣": "&dashv; &LeftTee;",
    "⊤": "&top; &DownTee;",
    "⊥": "&bottom; &bot; &perp; &UpTee;",
    "⊧": "&models;",
    "⊨": "&vDash; &DoubleRightTee;",
    "⊩": "&Vdash;",
    "⊪": "&Vvdash;",
    "⊫": "&VDash;",
    "⊬": "&nvdash;",
    "⊭": "&nvDash;",
    "⊮": "&nVdash;",
    "⊯": "&nVDash;",
    "⊰": "&prurel;",
    "⊲": "&vltri; &vartriangleleft; &LeftTriangle;",
    "⊳": "&vrtri; &vartriangleright; &RightTriangle;",
    "⊴": "&ltrie; &trianglelefteq; &LeftTriangleEqual;",
    "⊵": "&rtrie; &trianglerighteq; &RightTriangleEqual;",
    "⊶": "&origof;",
    "⊷": "&imof;",
    "⊸": "&mumap; &multimap;",
    "⊹": "&hercon;",
    "⊺": "&intcal; &intercal;",
    "⊻": "&veebar;",
    "⊽": "&barvee;",
    "⊾": "&angrtvb;",
    "⊿": "&lrtri;",
    "⋀": "&xwedge; &Wedge; &bigwedge;",
    "⋁": "&xvee; &Vee; &bigvee;",
    "⋂": "&xcap; &Intersection; &bigcap;",
    "⋃": "&xcup; &Union; &bigcup;",
    "⋄": "&diam; &diamond; &Diamond;",
    "⋅": "&sdot;",
    "⋆": "&sstarf; &Star;",
    "⋇": "&divonx; &divideontimes;",
    "⋈": "&bowtie;",
    "⋉": "&ltimes;",
    "⋊": "&rtimes;",
    "⋋": "&lthree; &leftthreetimes;",
    "⋌": "&rthree; &rightthreetimes;",
    "⋍": "&bsime; &backsimeq;",
    "⋎": "&cuvee; &curlyvee;",
    "⋏": "&cuwed; &curlywedge;",
    "⋐": "&Sub; &Subset;",
    "⋑": "&Sup; &Supset;",
    "⋒": "&Cap;",
    "⋓": "&Cup;",
    "⋔": "&fork; &pitchfork;",
    "⋕": "&epar;",
    "⋖": "&ltdot; &lessdot;",
    "⋗": "&gtdot; &gtrdot;",
    "⋘": "&Ll;",
    "⋙": "&Gg; &ggg;",
    "⋚": "&leg; &LessEqualGreater; &lesseqgtr;",
    "⋛": "&gel; &gtreqless; &GreaterEqualLess;",
    "⋞": "&cuepr; &curlyeqprec;",
    "⋟": "&cuesc; &curlyeqsucc;",
    "⋠": "&nprcue; &NotPrecedesSlantEqual;",
    "⋡": "&nsccue; &NotSucceedsSlantEqual;",
    "⋢": "&nsqsube; &NotSquareSubsetEqual;",
    "⋣": "&nsqsupe; &NotSquareSupersetEqual;",
    "⋦": "&lnsim;",
    "⋧": "&gnsim;",
    "⋨": "&prnsim; &precnsim;",
    "⋩": "&scnsim; &succnsim;",
    "⋪": "&nltri; &ntriangleleft; &NotLeftTriangle;",
    "⋫": "&nrtri; &ntriangleright; &NotRightTriangle;",
    "⋬": "&nltrie; &ntrianglelefteq; &NotLeftTriangleEqual;",
    "⋭": "&nrtrie; &ntrianglerighteq; &NotRightTriangleEqual;",
    "⋮": "&vellip;",
    "⋯": "&ctdot;",
    "⋰": "&utdot;",
    "⋱": "&dtdot;",
    "⋲": "&disin;",
    "⋳": "&isinsv;",
    "⋴": "&isins;",
    "⋵": "&isindot;",
    "⋶": "&notinvc;",
    "⋷": "&notinvb;",
    "⋹": "&isinE;",
    "⋺": "&nisd;",
    "⋻": "&xnis;",
    "⋼": "&nis;",
    "⋽": "&notnivc;",
    "⋾": "&notnivb;",
    "⌅": "&barwed; &barwedge;",
    "⌆": "&Barwed; &doublebarwedge;",
    "⌈": "&lceil; &LeftCeiling;",
    "⌉": "&rceil; &RightCeiling;",
    "⌊": "&lfloor; &LeftFloor;",
    "⌋": "&rfloor; &RightFloor;",
    "⌌": "&drcrop;",
    "⌍": "&dlcrop;",
    "⌎": "&urcrop;",
    "⌏": "&ulcrop;",
    "⌐": "&bnot;",
    "⌒": "&profline;",
    "⌓": "&profsurf;",
    "⌕": "&telrec;",
    "⌖": "&target;",
    "⌜": "&ulcorn; &ulcorner;",
    "⌝": "&urcorn; &urcorner;",
    "⌞": "&dlcorn; &llcorner;",
    "⌟": "&drcorn; &lrcorner;",
    "⌢": "&frown; &sfrown;",
    "⌣": "&smile; &ssmile;",
    "⌭": "&cylcty;",
    "⌮": "&profalar;",
    "⌶": "&topbot;",
    "⌽": "&ovbar;",
    "⌿": "&solbar;",
    "⍼": "&angzarr;",
    "⎰": "&lmoust; &lmoustache;",
    "⎱": "&rmoust; &rmoustache;",
    "⎴": "&tbrk; &OverBracket;",
    "⎵": "&bbrk; &UnderBracket;",
    "⎶": "&bbrktbrk;",
    "⏜": "&OverParenthesis;",
    "⏝": "&UnderParenthesis;",
    "⏞": "&OverBrace;",
    "⏟": "&UnderBrace;",
    "⏢": "&trpezium;",
    "⏧": "&elinters;",
    "␣": "&blank;",
    "Ⓢ": "&oS; &circledS;",
    "─": "&boxh; &HorizontalLine;",
    "│": "&boxv;",
    "┌": "&boxdr;",
    "┐": "&boxdl;",
    "└": "&boxur;",
    "┘": "&boxul;",
    "├": "&boxvr;",
    "┤": "&boxvl;",
    "┬": "&boxhd;",
    "┴": "&boxhu;",
    "┼": "&boxvh;",
    "═": "&boxH;",
    "║": "&boxV;",
    "╒": "&boxdR;",
    "╓": "&boxDr;",
    "╔": "&boxDR;",
    "╕": "&boxdL;",
    "╖": "&boxDl;",
    "╗": "&boxDL;",
    "╘": "&boxuR;",
    "╙": "&boxUr;",
    "╚": "&boxUR;",
    "╛": "&boxuL;",
    "╜": "&boxUl;",
    "╝": "&boxUL;",
    "╞": "&boxvR;",
    "╟": "&boxVr;",
    "╠": "&boxVR;",
    "╡": "&boxvL;",
    "╢": "&boxVl;",
    "╣": "&boxVL;",
    "╤": "&boxHd;",
    "╥": "&boxhD;",
    "╦": "&boxHD;",
    "╧": "&boxHu;",
    "╨": "&boxhU;",
    "╩": "&boxHU;",
    "╪": "&boxvH;",
    "╫": "&boxVh;",
    "╬": "&boxVH;",
    "▀": "&uhblk;",
    "▄": "&lhblk;",
    "█": "&block;",
    "░": "&blk14;",
    "▒": "&blk12;",
    "▓": "&blk34;",
    "□": "&squ; &square; &Square;",
    "▪": "&squf; &squarf; &blacksquare; &FilledVerySmallSquare;",
    "▫": "&EmptyVerySmallSquare;",
    "▭": "&rect;",
    "▮": "&marker;",
    "▱": "&fltns;",
    "△": "&xutri; &bigtriangleup;",
    "▴": "&utrif; &blacktriangle;",
    "▵": "&utri; &triangle;",
    "▸": "&rtrif; &blacktriangleright;",
    "▹": "&rtri; &triangleright;",
    "▽": "&xdtri; &bigtriangledown;",
    "▾": "&dtrif; &blacktriangledown;",
    "▿": "&dtri; &triangledown;",
    "◂": "&ltrif; &blacktriangleleft;",
    "◃": "&ltri; &triangleleft;",
    "◊": "&loz; &lozenge;",
    "○": "&cir;",
    "◬": "&tridot;",
    "◯": "&xcirc; &bigcirc;",
    "◸": "&ultri;",
    "◹": "&urtri;",
    "◺": "&lltri;",
    "◻": "&EmptySmallSquare;",
    "◼": "&FilledSmallSquare;",
    "★": "&starf; &bigstar;",
    "☆": "&star;",
    "☎": "&phone;",
    "♀": "&female;",
    "♂": "&male;",
    "♠": "&spades; &spadesuit;",
    "♣": "&clubs; &clubsuit;",
    "♥": "&hearts; &heartsuit;",
    "♦": "&diams; &diamondsuit;",
    "♪": "&sung;",
    "♭": "&flat;",
    "♮": "&natur; &natural;",
    "♯": "&sharp;",
    "✓": "&check; &checkmark;",
    "✗": "&cross;",
    "✠": "&malt; &maltese;",
    "✶": "&sext;",
    "❘": "&VerticalSeparator;",
    "❲": "&lbbrk;",
    "❳": "&rbbrk;",
    "⟦": "&lobrk; &LeftDoubleBracket;",
    "⟧": "&robrk; &RightDoubleBracket;",
    "⟨": "&lang; &LeftAngleBracket; &langle;",
    "⟩": "&rang; &RightAngleBracket; &rangle;",
    "⟪": "&Lang;",
    "⟫": "&Rang;",
    "⟬": "&loang;",
    "⟭": "&roang;",
    "⟵": "&xlarr; &longleftarrow; &LongLeftArrow;",
    "⟶": "&xrarr; &longrightarrow; &LongRightArrow;",
    "⟷": "&xharr; &longleftrightarrow; &LongLeftRightArrow;",
    "⟸": "&xlArr; &Longleftarrow; &DoubleLongLeftArrow;",
    "⟹": "&xrArr; &Longrightarrow; &DoubleLongRightArrow;",
    "⟺": "&xhArr; &Longleftrightarrow; &DoubleLongLeftRightArrow;",
    "⟼": "&xmap; &longmapsto;",
    "⟿": "&dzigrarr;",
    "⤂": "&nvlArr;",
    "⤃": "&nvrArr;",
    "⤄": "&nvHarr;",
    "⤅": "&Map;",
    "⤌": "&lbarr;",
    "⤍": "&rbarr; &bkarow;",
    "⤎": "&lBarr;",
    "⤏": "&rBarr; &dbkarow;",
    "⤐": "&RBarr; &drbkarow;",
    "⤑": "&DDotrahd;",
    "⤒": "&UpArrowBar;",
    "⤓": "&DownArrowBar;",
    "⤖": "&Rarrtl;",
    "⤙": "&latail;",
    "⤚": "&ratail;",
    "⤛": "&lAtail;",
    "⤜": "&rAtail;",
    "⤝": "&larrfs;",
    "⤞": "&rarrfs;",
    "⤟": "&larrbfs;",
    "⤠": "&rarrbfs;",
    "⤣": "&nwarhk;",
    "⤤": "&nearhk;",
    "⤥": "&searhk; &hksearow;",
    "⤦": "&swarhk; &hkswarow;",
    "⤧": "&nwnear;",
    "⤨": "&nesear; &toea;",
    "⤩": "&seswar; &tosa;",
    "⤪": "&swnwar;",
    "⤳": "&rarrc;",
    "⤵": "&cudarrr;",
    "⤶": "&ldca;",
    "⤷": "&rdca;",
    "⤸": "&cudarrl;",
    "⤹": "&larrpl;",
    "⤼": "&curarrm;",
    "⤽": "&cularrp;",
    "⥅": "&rarrpl;",
    "⥈": "&harrcir;",
    "⥉": "&Uarrocir;",
    "⥊": "&lurdshar;",
    "⥋": "&ldrushar;",
    "⥎": "&LeftRightVector;",
    "⥏": "&RightUpDownVector;",
    "⥐": "&DownLeftRightVector;",
    "⥑": "&LeftUpDownVector;",
    "⥒": "&LeftVectorBar;",
    "⥓": "&RightVectorBar;",
    "⥔": "&RightUpVectorBar;",
    "⥕": "&RightDownVectorBar;",
    "⥖": "&DownLeftVectorBar;",
    "⥗": "&DownRightVectorBar;",
    "⥘": "&LeftUpVectorBar;",
    "⥙": "&LeftDownVectorBar;",
    "⥚": "&LeftTeeVector;",
    "⥛": "&RightTeeVector;",
    "⥜": "&RightUpTeeVector;",
    "⥝": "&RightDownTeeVector;",
    "⥞": "&DownLeftTeeVector;",
    "⥟": "&DownRightTeeVector;",
    "⥠": "&LeftUpTeeVector;",
    "⥡": "&LeftDownTeeVector;",
    "⥢": "&lHar;",
    "⥣": "&uHar;",
    "⥤": "&rHar;",
    "⥥": "&dHar;",
    "⥦": "&luruhar;",
    "⥧": "&ldrdhar;",
    "⥨": "&ruluhar;",
    "⥩": "&rdldhar;",
    "⥪": "&lharul;",
    "⥫": "&llhard;",
    "⥬": "&rharul;",
    "⥭": "&lrhard;",
    "⥮": "&udhar; &UpEquilibrium;",
    "⥯": "&duhar; &ReverseUpEquilibrium;",
    "⥰": "&RoundImplies;",
    "⥱": "&erarr;",
    "⥲": "&simrarr;",
    "⥳": "&larrsim;",
    "⥴": "&rarrsim;",
    "⥵": "&rarrap;",
    "⥶": "&ltlarr;",
    "⥸": "&gtrarr;",
    "⥹": "&subrarr;",
    "⥻": "&suplarr;",
    "⥼": "&lfisht;",
    "⥽": "&rfisht;",
    "⥾": "&ufisht;",
    "⥿": "&dfisht;",
    "⦅": "&lopar;",
    "⦆": "&ropar;",
    "⦋": "&lbrke;",
    "⦌": "&rbrke;",
    "⦍": "&lbrkslu;",
    "⦎": "&rbrksld;",
    "⦏": "&lbrksld;",
    "⦐": "&rbrkslu;",
    "⦑": "&langd;",
    "⦒": "&rangd;",
    "⦓": "&lparlt;",
    "⦔": "&rpargt;",
    "⦕": "&gtlPar;",
    "⦖": "&ltrPar;",
    "⦚": "&vzigzag;",
    "⦜": "&vangrt;",
    "⦝": "&angrtvbd;",
    "⦤": "&ange;",
    "⦥": "&range;",
    "⦦": "&dwangle;",
    "⦧": "&uwangle;",
    "⦨": "&angmsdaa;",
    "⦩": "&angmsdab;",
    "⦪": "&angmsdac;",
    "⦫": "&angmsdad;",
    "⦬": "&angmsdae;",
    "⦭": "&angmsdaf;",
    "⦮": "&angmsdag;",
    "⦯": "&angmsdah;",
    "⦰": "&bemptyv;",
    "⦱": "&demptyv;",
    "⦲": "&cemptyv;",
    "⦳": "&raemptyv;",
    "⦴": "&laemptyv;",
    "⦵": "&ohbar;",
    "⦶": "&omid;",
    "⦷": "&opar;",
    "⦹": "&operp;",
    "⦻": "&olcross;",
    "⦼": "&odsold;",
    "⦾": "&olcir;",
    "⦿": "&ofcir;",
    "⧀": "&olt;",
    "⧁": "&ogt;",
    "⧂": "&cirscir;",
    "⧃": "&cirE;",
    "⧄": "&solb;",
    "⧅": "&bsolb;",
    "⧉": "&boxbox;",
    "⧍": "&trisb;",
    "⧎": "&rtriltri;",
    "⧏": "&LeftTriangleBar;",
    "⧐": "&RightTriangleBar;",
    "⧚": "&race;",
    "⧜": "&iinfin;",
    "⧝": "&infintie;",
    "⧞": "&nvinfin;",
    "⧣": "&eparsl;",
    "⧤": "&smeparsl;",
    "⧥": "&eqvparsl;",
    "⧫": "&lozf; &blacklozenge;",
    "⧴": "&RuleDelayed;",
    "⧶": "&dsol;",
    "⨀": "&xodot; &bigodot;",
    "⨁": "&xoplus; &bigoplus;",
    "⨂": "&xotime; &bigotimes;",
    "⨄": "&xuplus; &biguplus;",
    "⨆": "&xsqcup; &bigsqcup;",
    "⨌": "&qint; &iiiint;",
    "⨍": "&fpartint;",
    "⨐": "&cirfnint;",
    "⨑": "&awint;",
    "⨒": "&rppolint;",
    "⨓": "&scpolint;",
    "⨔": "&npolint;",
    "⨕": "&pointint;",
    "⨖": "&quatint;",
    "⨗": "&intlarhk;",
    "⨢": "&pluscir;",
    "⨣": "&plusacir;",
    "⨤": "&simplus;",
    "⨥": "&plusdu;",
    "⨦": "&plussim;",
    "⨧": "&plustwo;",
    "⨩": "&mcomma;",
    "⨪": "&minusdu;",
    "⨭": "&loplus;",
    "⨮": "&roplus;",
    "⨯": "&Cross;",
    "⨰": "&timesd;",
    "⨱": "&timesbar;",
    "⨳": "&smashp;",
    "⨴": "&lotimes;",
    "⨵": "&rotimes;",
    "⨶": "&otimesas;",
    "⨷": "&Otimes;",
    "⨸": "&odiv;",
    "⨹": "&triplus;",
    "⨺": "&triminus;",
    "⨻": "&tritime;",
    "⨼": "&iprod; &intprod;",
    "⨿": "&amalg;",
    "⩀": "&capdot;",
    "⩂": "&ncup;",
    "⩃": "&ncap;",
    "⩄": "&capand;",
    "⩅": "&cupor;",
    "⩆": "&cupcap;",
    "⩇": "&capcup;",
    "⩈": "&cupbrcap;",
    "⩉": "&capbrcup;",
    "⩊": "&cupcup;",
    "⩋": "&capcap;",
    "⩌": "&ccups;",
    "⩍": "&ccaps;",
    "⩐": "&ccupssm;",
    "⩓": "&And;",
    "⩔": "&Or;",
    "⩕": "&andand;",
    "⩖": "&oror;",
    "⩗": "&orslope;",
    "⩘": "&andslope;",
    "⩚": "&andv;",
    "⩛": "&orv;",
    "⩜": "&andd;",
    "⩝": "&ord;",
    "⩟": "&wedbar;",
    "⩦": "&sdote;",
    "⩪": "&simdot;",
    "⩭": "&congdot;",
    "⩮": "&easter;",
    "⩯": "&apacir;",
    "⩰": "&apE;",
    "⩱": "&eplus;",
    "⩲": "&pluse;",
    "⩳": "&Esim;",
    "⩴": "&Colone;",
    "⩵": "&Equal;",
    "⩷": "&eDDot; &ddotseq;",
    "⩸": "&equivDD;",
    "⩹": "&ltcir;",
    "⩺": "&gtcir;",
    "⩻": "&ltquest;",
    "⩼": "&gtquest;",
    "⩽": "&les; &LessSlantEqual; &leqslant;",
    "⩾": "&ges; &GreaterSlantEqual; &geqslant;",
    "⩿": "&lesdot;",
    "⪀": "&gesdot;",
    "⪁": "&lesdoto;",
    "⪂": "&gesdoto;",
    "⪃": "&lesdotor;",
    "⪄": "&gesdotol;",
    "⪅": "&lap; &lessapprox;",
    "⪆": "&gap; &gtrapprox;",
    "⪇": "&lne; &lneq;",
    "⪈": "&gne; &gneq;",
    "⪉": "&lnap; &lnapprox;",
    "⪊": "&gnap; &gnapprox;",
    "⪋": "&lEg; &lesseqqgtr;",
    "⪌": "&gEl; &gtreqqless;",
    "⪍": "&lsime;",
    "⪎": "&gsime;",
    "⪏": "&lsimg;",
    "⪐": "&gsiml;",
    "⪑": "&lgE;",
    "⪒": "&glE;",
    "⪓": "&lesges;",
    "⪔": "&gesles;",
    "⪕": "&els; &eqslantless;",
    "⪖": "&egs; &eqslantgtr;",
    "⪗": "&elsdot;",
    "⪘": "&egsdot;",
    "⪙": "&el;",
    "⪚": "&eg;",
    "⪝": "&siml;",
    "⪞": "&simg;",
    "⪟": "&simlE;",
    "⪠": "&simgE;",
    "⪡": "&LessLess;",
    "⪢": "&GreaterGreater;",
    "⪤": "&glj;",
    "⪥": "&gla;",
    "⪦": "&ltcc;",
    "⪧": "&gtcc;",
    "⪨": "&lescc;",
    "⪩": "&gescc;",
    "⪪": "&smt;",
    "⪫": "&lat;",
    "⪬": "&smte;",
    "⪭": "&late;",
    "⪮": "&bumpE;",
    "⪯": "&pre; &preceq; &PrecedesEqual;",
    "⪰": "&sce; &succeq; &SucceedsEqual;",
    "⪳": "&prE;",
    "⪴": "&scE;",
    "⪵": "&prnE; &precneqq;",
    "⪶": "&scnE; &succneqq;",
    "⪷": "&prap; &precapprox;",
    "⪸": "&scap; &succapprox;",
    "⪹": "&prnap; &precnapprox;",
    "⪺": "&scnap; &succnapprox;",
    "⪻": "&Pr;",
    "⪼": "&Sc;",
    "⪽": "&subdot;",
    "⪾": "&supdot;",
    "⪿": "&subplus;",
    "⫀": "&supplus;",
    "⫁": "&submult;",
    "⫂": "&supmult;",
    "⫃": "&subedot;",
    "⫄": "&supedot;",
    "⫅": "&subE; &subseteqq;",
    "⫆": "&supE; &supseteqq;",
    "⫇": "&subsim;",
    "⫈": "&supsim;",
    "⫋": "&subnE; &subsetneqq;",
    "⫌": "&supnE; &supsetneqq;",
    "⫏": "&csub;",
    "⫐": "&csup;",
    "⫑": "&csube;",
    "⫒": "&csupe;",
    "⫓": "&subsup;",
    "⫔": "&supsub;",
    "⫕": "&subsub;",
    "⫖": "&supsup;",
    "⫗": "&suphsub;",
    "⫘": "&supdsub;",
    "⫙": "&forkv;",
    "⫚": "&topfork;",
    "⫛": "&mlcp;",
    "⫤": "&Dashv; &DoubleLeftTee;",
    "⫦": "&Vdashl;",
    "⫧": "&Barv;",
    "⫨": "&vBar;",
    "⫩": "&vBarv;",
    "⫫": "&Vbar;",
    "⫬": "&Not;",
    "⫭": "&bNot;",
    "⫮": "&rnmid;",
    "⫯": "&cirmid;",
    "⫰": "&midcir;",
    "⫱": "&topcir;",
    "⫲": "&nhpar;",
    "⫳": "&parsim;",
    "⫽": "&parsl;",
    "ﬀ": "&fflig;",
    "ﬁ": "&filig;",
    "ﬂ": "&fllig;",
    "ﬃ": "&ffilig;",
    "ﬄ": "&ffllig;",
    "𝒜": "&Ascr;",
    "𝒞": "&Cscr;",
    "𝒟": "&Dscr;",
    "𝒢": "&Gscr;",
    "𝒥": "&Jscr;",
    "𝒦": "&Kscr;",
    "𝒩": "&Nscr;",
    "𝒪": "&Oscr;",
    "𝒫": "&Pscr;",
    "𝒬": "&Qscr;",
    "𝒮": "&Sscr;",
    "𝒯": "&Tscr;",
    "𝒰": "&Uscr;",
    "𝒱": "&Vscr;",
    "𝒲": "&Wscr;",
    "𝒳": "&Xscr;",
    "𝒴": "&Yscr;",
    "𝒵": "&Zscr;",
    "𝒶": "&ascr;",
    "𝒷": "&bscr;",
    "𝒸": "&cscr;",
    "𝒹": "&dscr;",
    "𝒻": "&fscr;",
    "𝒽": "&hscr;",
    "𝒾": "&iscr;",
    "𝒿": "&jscr;",
    "𝓀": "&kscr;",
    "𝓁": "&lscr;",
    "𝓂": "&mscr;",
    "𝓃": "&nscr;",
    "𝓅": "&pscr;",
    "𝓆": "&qscr;",
    "𝓇": "&rscr;",
    "𝓈": "&sscr;",
    "𝓉": "&tscr;",
    "𝓊": "&uscr;",
    "𝓋": "&vscr;",
    "𝓌": "&wscr;",
    "𝓍": "&xscr;",
    "𝓎": "&yscr;",
    "𝓏": "&zscr;",
    "𝔄": "&Afr;",
    "𝔅": "&Bfr;",
    "𝔇": "&Dfr;",
    "𝔈": "&Efr;",
    "𝔉": "&Ffr;",
    "𝔊": "&Gfr;",
    "𝔍": "&Jfr;",
    "𝔎": "&Kfr;",
    "𝔏": "&Lfr;",
    "𝔐": "&Mfr;",
    "𝔑": "&Nfr;",
    "𝔒": "&Ofr;",
    "𝔓": "&Pfr;",
    "𝔔": "&Qfr;",
    "𝔖": "&Sfr;",
    "𝔗": "&Tfr;",
    "𝔘": "&Ufr;",
    "𝔙": "&Vfr;",
    "𝔚": "&Wfr;",
    "𝔛": "&Xfr;",
    "𝔜": "&Yfr;",
    "𝔞": "&afr;",
    "𝔟": "&bfr;",
    "𝔠": "&cfr;",
    "𝔡": "&dfr;",
    "𝔢": "&efr;",
    "𝔣": "&ffr;",
    "𝔤": "&gfr;",
    "𝔥": "&hfr;",
    "𝔦": "&ifr;",
    "𝔧": "&jfr;",
    "𝔨": "&kfr;",
    "𝔩": "&lfr;",
    "𝔪": "&mfr;",
    "𝔫": "&nfr;",
    "𝔬": "&ofr;",
    "𝔭": "&pfr;",
    "𝔮": "&qfr;",
    "𝔯": "&rfr;",
    "𝔰": "&sfr;",
    "𝔱": "&tfr;",
    "𝔲": "&ufr;",
    "𝔳": "&vfr;",
    "𝔴": "&wfr;",
    "𝔵": "&xfr;",
    "𝔶": "&yfr;",
    "𝔷": "&zfr;",
    "𝔸": "&Aopf;",
    "𝔹": "&Bopf;",
    "𝔻": "&Dopf;",
    "𝔼": "&Eopf;",
    "𝔽": "&Fopf;",
    "𝔾": "&Gopf;",
    "𝕀": "&Iopf;",
    "𝕁": "&Jopf;",
    "𝕂": "&Kopf;",
    "𝕃": "&Lopf;",
    "𝕄": "&Mopf;",
    "𝕆": "&Oopf;",
    "𝕊": "&Sopf;",
    "𝕋": "&Topf;",
    "𝕌": "&Uopf;",
    "𝕍": "&Vopf;",
    "𝕎": "&Wopf;",
    "𝕏": "&Xopf;",
    "𝕐": "&Yopf;",
    "𝕒": "&aopf;",
    "𝕓": "&bopf;",
    "𝕔": "&copf;",
    "𝕕": "&dopf;",
    "𝕖": "&eopf;",
    "𝕗": "&fopf;",
    "𝕘": "&gopf;",
    "𝕙": "&hopf;",
    "𝕚": "&iopf;",
    "𝕛": "&jopf;",
    "𝕜": "&kopf;",
    "𝕝": "&lopf;",
    "𝕞": "&mopf;",
    "𝕟": "&nopf;",
    "𝕠": "&oopf;",
    "𝕡": "&popf;",
    "𝕢": "&qopf;",
    "𝕣": "&ropf;",
    "𝕤": "&sopf;",
    "𝕥": "&topf;",
    "𝕦": "&uopf;",
    "𝕧": "&vopf;",
    "𝕨": "&wopf;",
    "𝕩": "&xopf;",
    "𝕪": "&yopf;",
    "𝕫": "&zopf;"
}
