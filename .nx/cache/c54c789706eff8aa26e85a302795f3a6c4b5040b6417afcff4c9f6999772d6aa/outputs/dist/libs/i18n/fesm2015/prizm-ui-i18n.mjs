import * as i0 from '@angular/core';
import { InjectionToken, inject, Injectable, Inject, Optional } from '@angular/core';
import { of, isObservable, from, BehaviorSubject } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { LOCAL_STORAGE } from '@ng-web-apis/common';

var PrizmCountryIsoCode;
(function (PrizmCountryIsoCode) {
    PrizmCountryIsoCode["AD"] = "AD";
    PrizmCountryIsoCode["AE"] = "AE";
    PrizmCountryIsoCode["AF"] = "AF";
    PrizmCountryIsoCode["AG"] = "AG";
    PrizmCountryIsoCode["AI"] = "AI";
    PrizmCountryIsoCode["AL"] = "AL";
    PrizmCountryIsoCode["AM"] = "AM";
    PrizmCountryIsoCode["AO"] = "AO";
    PrizmCountryIsoCode["AR"] = "AR";
    PrizmCountryIsoCode["AT"] = "AT";
    PrizmCountryIsoCode["AU"] = "AU";
    PrizmCountryIsoCode["AW"] = "AW";
    PrizmCountryIsoCode["AZ"] = "AZ";
    PrizmCountryIsoCode["BA"] = "BA";
    PrizmCountryIsoCode["BB"] = "BB";
    PrizmCountryIsoCode["BD"] = "BD";
    PrizmCountryIsoCode["BE"] = "BE";
    PrizmCountryIsoCode["BF"] = "BF";
    PrizmCountryIsoCode["BG"] = "BG";
    PrizmCountryIsoCode["BH"] = "BH";
    PrizmCountryIsoCode["BI"] = "BI";
    PrizmCountryIsoCode["BJ"] = "BJ";
    PrizmCountryIsoCode["BM"] = "BM";
    PrizmCountryIsoCode["BN"] = "BN";
    PrizmCountryIsoCode["BO"] = "BO";
    PrizmCountryIsoCode["BQ"] = "BQ";
    PrizmCountryIsoCode["BR"] = "BR";
    PrizmCountryIsoCode["BS"] = "BS";
    PrizmCountryIsoCode["BT"] = "BT";
    PrizmCountryIsoCode["BW"] = "BW";
    PrizmCountryIsoCode["BY"] = "BY";
    PrizmCountryIsoCode["BZ"] = "BZ";
    PrizmCountryIsoCode["CD"] = "CD";
    PrizmCountryIsoCode["CF"] = "CF";
    PrizmCountryIsoCode["CG"] = "CG";
    PrizmCountryIsoCode["CH"] = "CH";
    PrizmCountryIsoCode["CI"] = "CI";
    PrizmCountryIsoCode["CL"] = "CL";
    PrizmCountryIsoCode["CM"] = "CM";
    PrizmCountryIsoCode["CN"] = "CN";
    PrizmCountryIsoCode["CO"] = "CO";
    PrizmCountryIsoCode["CR"] = "CR";
    PrizmCountryIsoCode["CU"] = "CU";
    PrizmCountryIsoCode["CV"] = "CV";
    PrizmCountryIsoCode["CW"] = "CW";
    PrizmCountryIsoCode["CY"] = "CY";
    PrizmCountryIsoCode["CZ"] = "CZ";
    PrizmCountryIsoCode["DE"] = "DE";
    PrizmCountryIsoCode["DJ"] = "DJ";
    PrizmCountryIsoCode["DK"] = "DK";
    PrizmCountryIsoCode["DM"] = "DM";
    PrizmCountryIsoCode["DO"] = "DO";
    PrizmCountryIsoCode["DZ"] = "DZ";
    PrizmCountryIsoCode["EC"] = "EC";
    PrizmCountryIsoCode["EE"] = "EE";
    PrizmCountryIsoCode["EG"] = "EG";
    PrizmCountryIsoCode["ER"] = "ER";
    PrizmCountryIsoCode["ES"] = "ES";
    PrizmCountryIsoCode["ET"] = "ET";
    PrizmCountryIsoCode["FI"] = "FI";
    PrizmCountryIsoCode["FJ"] = "FJ";
    PrizmCountryIsoCode["FK"] = "FK";
    PrizmCountryIsoCode["FM"] = "FM";
    PrizmCountryIsoCode["FR"] = "FR";
    PrizmCountryIsoCode["GA"] = "GA";
    PrizmCountryIsoCode["GB"] = "GB";
    PrizmCountryIsoCode["GD"] = "GD";
    PrizmCountryIsoCode["GE"] = "GE";
    PrizmCountryIsoCode["GH"] = "GH";
    PrizmCountryIsoCode["GI"] = "GI";
    PrizmCountryIsoCode["GL"] = "GL";
    PrizmCountryIsoCode["GM"] = "GM";
    PrizmCountryIsoCode["GN"] = "GN";
    PrizmCountryIsoCode["GQ"] = "GQ";
    PrizmCountryIsoCode["GR"] = "GR";
    PrizmCountryIsoCode["GT"] = "GT";
    PrizmCountryIsoCode["GW"] = "GW";
    PrizmCountryIsoCode["GY"] = "GY";
    PrizmCountryIsoCode["HK"] = "HK";
    PrizmCountryIsoCode["HN"] = "HN";
    PrizmCountryIsoCode["HR"] = "HR";
    PrizmCountryIsoCode["HT"] = "HT";
    PrizmCountryIsoCode["HU"] = "HU";
    PrizmCountryIsoCode["ID"] = "ID";
    PrizmCountryIsoCode["IE"] = "IE";
    PrizmCountryIsoCode["IL"] = "IL";
    PrizmCountryIsoCode["IN"] = "IN";
    PrizmCountryIsoCode["IQ"] = "IQ";
    PrizmCountryIsoCode["IR"] = "IR";
    PrizmCountryIsoCode["IS"] = "IS";
    PrizmCountryIsoCode["IT"] = "IT";
    PrizmCountryIsoCode["JM"] = "JM";
    PrizmCountryIsoCode["JO"] = "JO";
    PrizmCountryIsoCode["JP"] = "JP";
    PrizmCountryIsoCode["KE"] = "KE";
    PrizmCountryIsoCode["KG"] = "KG";
    PrizmCountryIsoCode["KH"] = "KH";
    PrizmCountryIsoCode["KM"] = "KM";
    PrizmCountryIsoCode["KN"] = "KN";
    PrizmCountryIsoCode["KP"] = "KP";
    PrizmCountryIsoCode["KR"] = "KR";
    PrizmCountryIsoCode["KW"] = "KW";
    PrizmCountryIsoCode["KY"] = "KY";
    PrizmCountryIsoCode["KZ"] = "KZ";
    PrizmCountryIsoCode["LA"] = "LA";
    PrizmCountryIsoCode["LB"] = "LB";
    PrizmCountryIsoCode["LC"] = "LC";
    PrizmCountryIsoCode["LI"] = "LI";
    PrizmCountryIsoCode["LK"] = "LK";
    PrizmCountryIsoCode["LR"] = "LR";
    PrizmCountryIsoCode["LS"] = "LS";
    PrizmCountryIsoCode["LT"] = "LT";
    PrizmCountryIsoCode["LU"] = "LU";
    PrizmCountryIsoCode["LV"] = "LV";
    PrizmCountryIsoCode["LY"] = "LY";
    PrizmCountryIsoCode["MA"] = "MA";
    PrizmCountryIsoCode["MC"] = "MC";
    PrizmCountryIsoCode["MD"] = "MD";
    PrizmCountryIsoCode["ME"] = "ME";
    PrizmCountryIsoCode["MG"] = "MG";
    PrizmCountryIsoCode["MK"] = "MK";
    PrizmCountryIsoCode["ML"] = "ML";
    PrizmCountryIsoCode["MM"] = "MM";
    PrizmCountryIsoCode["MN"] = "MN";
    PrizmCountryIsoCode["MO"] = "MO";
    PrizmCountryIsoCode["MR"] = "MR";
    PrizmCountryIsoCode["MS"] = "MS";
    PrizmCountryIsoCode["MT"] = "MT";
    PrizmCountryIsoCode["MU"] = "MU";
    PrizmCountryIsoCode["MV"] = "MV";
    PrizmCountryIsoCode["MW"] = "MW";
    PrizmCountryIsoCode["MX"] = "MX";
    PrizmCountryIsoCode["MY"] = "MY";
    PrizmCountryIsoCode["MZ"] = "MZ";
    PrizmCountryIsoCode["NA"] = "NA";
    PrizmCountryIsoCode["NE"] = "NE";
    PrizmCountryIsoCode["NG"] = "NG";
    PrizmCountryIsoCode["NI"] = "NI";
    PrizmCountryIsoCode["NL"] = "NL";
    PrizmCountryIsoCode["NO"] = "NO";
    PrizmCountryIsoCode["NP"] = "NP";
    PrizmCountryIsoCode["NZ"] = "NZ";
    PrizmCountryIsoCode["OM"] = "OM";
    PrizmCountryIsoCode["PA"] = "PA";
    PrizmCountryIsoCode["PE"] = "PE";
    PrizmCountryIsoCode["PF"] = "PF";
    PrizmCountryIsoCode["PG"] = "PG";
    PrizmCountryIsoCode["PH"] = "PH";
    PrizmCountryIsoCode["PK"] = "PK";
    PrizmCountryIsoCode["PL"] = "PL";
    PrizmCountryIsoCode["PT"] = "PT";
    PrizmCountryIsoCode["PW"] = "PW";
    PrizmCountryIsoCode["PY"] = "PY";
    PrizmCountryIsoCode["QA"] = "QA";
    PrizmCountryIsoCode["RO"] = "RO";
    PrizmCountryIsoCode["RS"] = "RS";
    PrizmCountryIsoCode["RU"] = "RU";
    PrizmCountryIsoCode["RW"] = "RW";
    PrizmCountryIsoCode["SA"] = "SA";
    PrizmCountryIsoCode["SB"] = "SB";
    PrizmCountryIsoCode["SC"] = "SC";
    PrizmCountryIsoCode["SD"] = "SD";
    PrizmCountryIsoCode["SE"] = "SE";
    PrizmCountryIsoCode["SG"] = "SG";
    PrizmCountryIsoCode["SH"] = "SH";
    PrizmCountryIsoCode["SI"] = "SI";
    PrizmCountryIsoCode["SK"] = "SK";
    PrizmCountryIsoCode["SL"] = "SL";
    PrizmCountryIsoCode["SM"] = "SM";
    PrizmCountryIsoCode["SN"] = "SN";
    PrizmCountryIsoCode["SO"] = "SO";
    PrizmCountryIsoCode["SR"] = "SR";
    PrizmCountryIsoCode["ST"] = "ST";
    PrizmCountryIsoCode["SV"] = "SV";
    PrizmCountryIsoCode["SX"] = "SX";
    PrizmCountryIsoCode["SY"] = "SY";
    PrizmCountryIsoCode["SZ"] = "SZ";
    PrizmCountryIsoCode["TC"] = "TC";
    PrizmCountryIsoCode["TD"] = "TD";
    PrizmCountryIsoCode["TG"] = "TG";
    PrizmCountryIsoCode["TH"] = "TH";
    PrizmCountryIsoCode["TJ"] = "TJ";
    PrizmCountryIsoCode["TL"] = "TL";
    PrizmCountryIsoCode["TM"] = "TM";
    PrizmCountryIsoCode["TN"] = "TN";
    PrizmCountryIsoCode["TO"] = "TO";
    PrizmCountryIsoCode["TR"] = "TR";
    PrizmCountryIsoCode["TT"] = "TT";
    PrizmCountryIsoCode["TW"] = "TW";
    PrizmCountryIsoCode["TZ"] = "TZ";
    PrizmCountryIsoCode["UA"] = "UA";
    PrizmCountryIsoCode["UG"] = "UG";
    PrizmCountryIsoCode["UY"] = "UY";
    PrizmCountryIsoCode["UZ"] = "UZ";
    PrizmCountryIsoCode["VC"] = "VC";
    PrizmCountryIsoCode["VE"] = "VE";
    PrizmCountryIsoCode["VG"] = "VG";
    PrizmCountryIsoCode["VN"] = "VN";
    PrizmCountryIsoCode["VU"] = "VU";
    PrizmCountryIsoCode["WS"] = "WS";
    PrizmCountryIsoCode["XK"] = "XK";
    PrizmCountryIsoCode["YE"] = "YE";
    PrizmCountryIsoCode["ZA"] = "ZA";
    PrizmCountryIsoCode["ZM"] = "ZM";
    PrizmCountryIsoCode["ZW"] = "ZW";
    PrizmCountryIsoCode["US"] = "US";
    PrizmCountryIsoCode["CA"] = "CA";
})(PrizmCountryIsoCode || (PrizmCountryIsoCode = {}));

const PRIZM_RUSSIAN_LANGUAGE_COUNTRIES = {
    [PrizmCountryIsoCode.AD]: `Андорра`,
    [PrizmCountryIsoCode.AE]: `Объединенные Арабские Эмираты`,
    [PrizmCountryIsoCode.AF]: `Афганистан`,
    [PrizmCountryIsoCode.AG]: `Антигуа и Барбуда`,
    [PrizmCountryIsoCode.AI]: `Ангилья`,
    [PrizmCountryIsoCode.AL]: `Албания`,
    [PrizmCountryIsoCode.AM]: `Армения`,
    [PrizmCountryIsoCode.AO]: `Ангола`,
    [PrizmCountryIsoCode.AR]: `Аргентина`,
    [PrizmCountryIsoCode.AT]: `Австрия`,
    [PrizmCountryIsoCode.AU]: `Австралия`,
    [PrizmCountryIsoCode.AW]: `Аруба`,
    [PrizmCountryIsoCode.AZ]: `Азербайджан`,
    [PrizmCountryIsoCode.BA]: `Босния и Герцеговина`,
    [PrizmCountryIsoCode.BB]: `Барбадос`,
    [PrizmCountryIsoCode.BD]: `Бангладеш`,
    [PrizmCountryIsoCode.BE]: `Бельгия`,
    [PrizmCountryIsoCode.BF]: `Буркина Фасо`,
    [PrizmCountryIsoCode.BG]: `Болгария`,
    [PrizmCountryIsoCode.BH]: `Бахрейн`,
    [PrizmCountryIsoCode.BI]: `Бурунди`,
    [PrizmCountryIsoCode.BJ]: `Бенин`,
    [PrizmCountryIsoCode.BM]: `Бермудские острова`,
    [PrizmCountryIsoCode.BN]: `Бруней-Даруссалам`,
    [PrizmCountryIsoCode.BO]: `Боливия`,
    [PrizmCountryIsoCode.BQ]: `Бонайре, Синт-Эстатиус и Саба`,
    [PrizmCountryIsoCode.BR]: `Бразилия`,
    [PrizmCountryIsoCode.BS]: `Багамские Острова`,
    [PrizmCountryIsoCode.BT]: `Бутан`,
    [PrizmCountryIsoCode.BW]: `Ботсвана`,
    [PrizmCountryIsoCode.BY]: `Беларусь (Белоруссия)`,
    [PrizmCountryIsoCode.BZ]: `Белиз`,
    [PrizmCountryIsoCode.CA]: `Канада`,
    [PrizmCountryIsoCode.CD]: `Дем. Респ. Конго (Киншаса)`,
    [PrizmCountryIsoCode.CF]: `Центральноафриканская Республика`,
    [PrizmCountryIsoCode.CG]: `Конго (Браззавиль)`,
    [PrizmCountryIsoCode.CH]: `Швейцария`,
    [PrizmCountryIsoCode.CI]: `Кот-д’Ивуар`,
    [PrizmCountryIsoCode.CL]: `Чили`,
    [PrizmCountryIsoCode.CM]: `Камерун`,
    [PrizmCountryIsoCode.CN]: `Китайская Н.Р.`,
    [PrizmCountryIsoCode.CO]: `Колумбия`,
    [PrizmCountryIsoCode.CR]: `Коста-Рика`,
    [PrizmCountryIsoCode.CU]: `Куба`,
    [PrizmCountryIsoCode.CV]: `Кабо-Верде`,
    [PrizmCountryIsoCode.CW]: `Кюрасао`,
    [PrizmCountryIsoCode.CY]: `Кипр`,
    [PrizmCountryIsoCode.CZ]: `Чехия`,
    [PrizmCountryIsoCode.DE]: `Германия`,
    [PrizmCountryIsoCode.DJ]: `Джибути`,
    [PrizmCountryIsoCode.DK]: `Дания`,
    [PrizmCountryIsoCode.DM]: `Доминика`,
    [PrizmCountryIsoCode.DO]: `Доминиканская Республика`,
    [PrizmCountryIsoCode.DZ]: `Алжир`,
    [PrizmCountryIsoCode.EC]: `Эквадор `,
    [PrizmCountryIsoCode.EE]: `Эстония `,
    [PrizmCountryIsoCode.EG]: `Египет`,
    [PrizmCountryIsoCode.ER]: `Эритрея`,
    [PrizmCountryIsoCode.ES]: `Испания`,
    [PrizmCountryIsoCode.ET]: `Эфиопия`,
    [PrizmCountryIsoCode.FI]: `Финляндия`,
    [PrizmCountryIsoCode.FJ]: `Фиджи`,
    [PrizmCountryIsoCode.FK]: `Фолклендские острова`,
    [PrizmCountryIsoCode.FM]: `Ф.Ш. Микронезии`,
    [PrizmCountryIsoCode.FR]: `Франция`,
    [PrizmCountryIsoCode.GA]: `Габон`,
    [PrizmCountryIsoCode.GB]: `Великобритания`,
    [PrizmCountryIsoCode.GD]: `Гренада`,
    [PrizmCountryIsoCode.GE]: `Грузия`,
    [PrizmCountryIsoCode.GH]: `Гана`,
    [PrizmCountryIsoCode.GI]: `Гибралтар`,
    [PrizmCountryIsoCode.GL]: `Гренландия`,
    [PrizmCountryIsoCode.GM]: `Гамбия`,
    [PrizmCountryIsoCode.GN]: `Гвинея`,
    [PrizmCountryIsoCode.GQ]: `Экваториальная Гвинея`,
    [PrizmCountryIsoCode.GR]: `Греция`,
    [PrizmCountryIsoCode.GT]: `Гватемала`,
    [PrizmCountryIsoCode.GW]: `Гвинея-Бисау`,
    [PrizmCountryIsoCode.GY]: `Гайана`,
    [PrizmCountryIsoCode.HK]: `Гонконг`,
    [PrizmCountryIsoCode.HN]: `Гондурас`,
    [PrizmCountryIsoCode.HR]: `Хорватия`,
    [PrizmCountryIsoCode.HT]: `Гаити`,
    [PrizmCountryIsoCode.HU]: `Венгрия`,
    [PrizmCountryIsoCode.ID]: `Индонезия `,
    [PrizmCountryIsoCode.IE]: `Ирландия`,
    [PrizmCountryIsoCode.IL]: `Израиль`,
    [PrizmCountryIsoCode.IN]: `Индия`,
    [PrizmCountryIsoCode.IQ]: `Ирак`,
    [PrizmCountryIsoCode.IR]: `Иран`,
    [PrizmCountryIsoCode.IS]: `Исландия`,
    [PrizmCountryIsoCode.IT]: `Италия`,
    [PrizmCountryIsoCode.JM]: `Ямайка`,
    [PrizmCountryIsoCode.JO]: `Иордания`,
    [PrizmCountryIsoCode.JP]: `Япония `,
    [PrizmCountryIsoCode.KE]: `Кения`,
    [PrizmCountryIsoCode.KG]: `Киргизия`,
    [PrizmCountryIsoCode.KH]: `Камбоджа`,
    [PrizmCountryIsoCode.KM]: `Коморы`,
    [PrizmCountryIsoCode.KN]: `Сент-Китс и Невис`,
    [PrizmCountryIsoCode.KP]: `Корейская НДР`,
    [PrizmCountryIsoCode.KR]: `Респ. Корея`,
    [PrizmCountryIsoCode.KW]: `Кувейт`,
    [PrizmCountryIsoCode.KY]: `Каймановы острова`,
    [PrizmCountryIsoCode.KZ]: `Казахстан`,
    [PrizmCountryIsoCode.LA]: `Лаос`,
    [PrizmCountryIsoCode.LB]: `Ливан `,
    [PrizmCountryIsoCode.LC]: `Сент-Люсия`,
    [PrizmCountryIsoCode.LI]: `Лихтенштейн`,
    [PrizmCountryIsoCode.LK]: `Шри-Ланка`,
    [PrizmCountryIsoCode.LR]: `Либерия`,
    [PrizmCountryIsoCode.LS]: `Лесото`,
    [PrizmCountryIsoCode.LT]: `Литва`,
    [PrizmCountryIsoCode.LU]: `Люксембург`,
    [PrizmCountryIsoCode.LV]: `Латвия`,
    [PrizmCountryIsoCode.LY]: `Ливия`,
    [PrizmCountryIsoCode.MA]: `Марокко`,
    [PrizmCountryIsoCode.MC]: `Монако`,
    [PrizmCountryIsoCode.MD]: `Молдова`,
    [PrizmCountryIsoCode.ME]: `Черногория`,
    [PrizmCountryIsoCode.MG]: `Мадагаскар`,
    [PrizmCountryIsoCode.MK]: `Респ. Северная Македония`,
    [PrizmCountryIsoCode.ML]: `Мали`,
    [PrizmCountryIsoCode.MM]: `Бирма (Мьянма)`,
    [PrizmCountryIsoCode.MN]: `Монголия`,
    [PrizmCountryIsoCode.MO]: `Макао`,
    [PrizmCountryIsoCode.MR]: `Мавритания`,
    [PrizmCountryIsoCode.MS]: `Монтсеррат`,
    [PrizmCountryIsoCode.MT]: `Мальта`,
    [PrizmCountryIsoCode.MU]: `Маврикий`,
    [PrizmCountryIsoCode.MV]: `Мальдивские острова`,
    [PrizmCountryIsoCode.MW]: `Малави`,
    [PrizmCountryIsoCode.MX]: `Мексика`,
    [PrizmCountryIsoCode.MY]: `Малайзия`,
    [PrizmCountryIsoCode.MZ]: `Мозамбик`,
    [PrizmCountryIsoCode.NA]: `Намибия`,
    [PrizmCountryIsoCode.NE]: `Нигер`,
    [PrizmCountryIsoCode.NG]: `Нигерия`,
    [PrizmCountryIsoCode.NI]: `Никарагуа`,
    [PrizmCountryIsoCode.NL]: `Нидерланды`,
    [PrizmCountryIsoCode.NO]: `Норвегия`,
    [PrizmCountryIsoCode.NP]: `Непал`,
    [PrizmCountryIsoCode.NZ]: `Новая Зеландия`,
    [PrizmCountryIsoCode.OM]: `Оман`,
    [PrizmCountryIsoCode.PA]: `Панама`,
    [PrizmCountryIsoCode.PE]: `Перу`,
    [PrizmCountryIsoCode.PF]: `Французская Полинезия (Таити)`,
    [PrizmCountryIsoCode.PG]: `Папуа-Новая Гвинея`,
    [PrizmCountryIsoCode.PH]: `Филиппины`,
    [PrizmCountryIsoCode.PK]: `Пакистан`,
    [PrizmCountryIsoCode.PL]: `Польша`,
    [PrizmCountryIsoCode.PT]: `Португалия`,
    [PrizmCountryIsoCode.PW]: `Палау`,
    [PrizmCountryIsoCode.PY]: `Парагвай`,
    [PrizmCountryIsoCode.QA]: `Катар`,
    [PrizmCountryIsoCode.RO]: `Румыния`,
    [PrizmCountryIsoCode.RS]: `Сербия`,
    [PrizmCountryIsoCode.RU]: `Россия`,
    [PrizmCountryIsoCode.RW]: `Руанда`,
    [PrizmCountryIsoCode.SA]: `Саудовская Аравия `,
    [PrizmCountryIsoCode.SB]: `Соломоновы Острова `,
    [PrizmCountryIsoCode.SC]: `Сейшелы`,
    [PrizmCountryIsoCode.SD]: `Судан`,
    [PrizmCountryIsoCode.SE]: `Швеция`,
    [PrizmCountryIsoCode.SG]: `Сингапур`,
    [PrizmCountryIsoCode.SH]: `Остров Святой Елены`,
    [PrizmCountryIsoCode.SI]: `Словения`,
    [PrizmCountryIsoCode.SK]: `Словакия`,
    [PrizmCountryIsoCode.SL]: `Сьерра-Леоне`,
    [PrizmCountryIsoCode.SM]: `Сан-Марино`,
    [PrizmCountryIsoCode.SN]: `Сенегал`,
    [PrizmCountryIsoCode.SO]: `Сомали`,
    [PrizmCountryIsoCode.SR]: `Суринам `,
    [PrizmCountryIsoCode.ST]: `Сан-Томе и Принсипи`,
    [PrizmCountryIsoCode.SV]: `Сальвадор`,
    [PrizmCountryIsoCode.SX]: `Синт-Мартен`,
    [PrizmCountryIsoCode.SY]: `Сирийская арабская республика`,
    [PrizmCountryIsoCode.SZ]: `Свазиленд`,
    [PrizmCountryIsoCode.TC]: `Тёркс и Кайкос`,
    [PrizmCountryIsoCode.TD]: `Чад`,
    [PrizmCountryIsoCode.TG]: `Того`,
    [PrizmCountryIsoCode.TH]: `Таиланд `,
    [PrizmCountryIsoCode.TJ]: `Таджикистан`,
    [PrizmCountryIsoCode.TL]: `Восточный Тимор`,
    [PrizmCountryIsoCode.TM]: `Туркменистан`,
    [PrizmCountryIsoCode.TN]: `Тунис`,
    [PrizmCountryIsoCode.TO]: `Тонга`,
    [PrizmCountryIsoCode.TR]: `Турция`,
    [PrizmCountryIsoCode.TT]: `Тринидад и Тобаго`,
    [PrizmCountryIsoCode.TW]: `Тайвань`,
    [PrizmCountryIsoCode.TZ]: `Танзания`,
    [PrizmCountryIsoCode.UA]: `Украина`,
    [PrizmCountryIsoCode.UG]: `Уганда`,
    [PrizmCountryIsoCode.US]: `США`,
    [PrizmCountryIsoCode.UY]: `Уругвай`,
    [PrizmCountryIsoCode.UZ]: `Узбекистан`,
    [PrizmCountryIsoCode.VC]: `Сент-Винсент и Гренадины`,
    [PrizmCountryIsoCode.VE]: `Венесуэла`,
    [PrizmCountryIsoCode.VG]: `Британские Виргинские острова`,
    [PrizmCountryIsoCode.VN]: `Вьетнам`,
    [PrizmCountryIsoCode.VU]: `Вануату `,
    [PrizmCountryIsoCode.WS]: `Самоа`,
    [PrizmCountryIsoCode.YE]: `Йемен `,
    [PrizmCountryIsoCode.ZA]: `Южно-Африканская Респ.`,
    [PrizmCountryIsoCode.ZM]: `Замбия`,
    [PrizmCountryIsoCode.ZW]: `Зимбабве`,
    [PrizmCountryIsoCode.XK]: `Республика Косово`,
};

const PRIZM_RUSSIAN_LANGUAGE_CORE = {
    months: [
        `Январь`,
        `Февраль`,
        `Март`,
        `Апрель`,
        `Май`,
        `Июнь`,
        `Июль`,
        `Август`,
        `Сентябрь`,
        `Октябрь`,
        `Ноябрь`,
        `Декабрь`,
    ],
    close: `Закрыть`,
    nothingFoundMessage: `Ничего не найдено`,
    defaultErrorMessage: `Поле заполнено неверно`,
    spinTexts: [`Предыдущий`, `Следующий`],
    shortWeekDays: [`ПН`, `ВТ`, `СР`, `ЧТ`, `ПТ`, `СБ`, `ВС`],
    countries: PRIZM_RUSSIAN_LANGUAGE_COUNTRIES,
};

const PRIZM_RUSSIAN_LANGUAGE_KIT = {
    cancel: `Отменить`,
    done: `Готово`,
    more: `Еще`,
    otherDate: `Другая дата`,
    showAll: `Показать все`,
    hide: `Скрыть`,
    mobileCalendarTexts: [`Выберите день`, `Выберите период`],
    range: [`от`, `до`],
    countTexts: [`Плюс`, `Минус`],
    time: {
        'HH:MM': `ЧЧ:ММ`,
        'HH:MM:SS': `ЧЧ:ММ:СС`,
        'HH:MM:SS.MSS': `ЧЧ:ММ:СС.МСС`,
    },
    dateTexts: {
        DMY: `дд.мм.гггг`,
        MDY: `мм.дд.гггг`,
        YMD: `гггг.мм.дд`,
    },
    digitalInformationUnits: [`Б`, `КБ`, `МБ`],
    passwordTexts: [`Показать пароль`, `Скрыть пароль`],
    copyTexts: [`Копировать`, `Скопировано`],
    shortCalendarMonths: [
        `Янв`,
        `Фев`,
        `Март`,
        `Апр`,
        `Май`,
        `Июнь`,
        `Июль`,
        `Авг`,
        `Сен`,
        `Окт`,
        `Нояб`,
        `Дек`,
    ],
    pagination: [`Предыдущая страница`, `Следующая страница`],
    fileTexts: {
        loadingError: `Ошибка загрузки`,
        preview: `Предварительный просмотр`,
        remove: `Удалить`,
    },
    inputFileTexts: {
        defaultLabelSingle: `или перетащите\u00A0его\u00A0сюда`,
        defaultLabelMultiple: `или перетащите\u00A0их\u00A0сюда`,
        defaultLinkSingle: `Выберите файл`,
        defaultLinkMultiple: `Выберите файлы`,
        maxSizeRejectionReason: `Файл превышает объем `,
        formatRejectionReason: `Неверный формат файла`,
        drop: `Поместите файл сюда`,
        dropMultiple: `Поместите файлы сюда`,
    },
};

const PRIZM_RUSSIAN_FILE_UPLOAD = {
    fileUpload: {
        dropzone__description: 'Выберите файл или перетащите его в эту область',
        dropzone__title: 'Загрузка файлов',
        btn__select: 'Выбрать',
        idle: 'Ожидание загрузки',
        progress: 'Загрузка',
        warning: 'Ошибка',
        success: 'Загружено',
    },
};
const PRIZM_ENGLISH_FILE_UPLOAD = {
    fileUpload: {
        dropzone__description: 'Select a file or drag it to this area',
        dropzone__title: 'File upload',
        btn__select: 'Browse',
        idle: 'Waiting to upload',
        progress: 'Uploading',
        warning: 'Error',
        success: 'Uploaded',
    },
};

const PRIZM_RUSSIAN_CRON = {
    cron: {
        title: 'Cron',
        submitText: 'Применить',
        resetText: 'Отменить',
        startDateLabel: 'Начало работы',
        endDateLabel: 'Конец работы',
        indefinitelyLabel: 'Бессрочно',
        day: {
            every: 'Каждый день',
        },
    },
};

const PRIZM_RUSSIAN_INPUT_LAYOUT_DATE_RELATIVE = {
    inputLayoutDateRelative: {
        wrongFormat: 'Неправильный формат данных',
    },
};

const PRIZM_RUSSIAN_COLUMN_SETTINGS = {
    columnSettings: {
        title: 'Настройки таблицы',
        subTitle: 'Заголовок списка',
        resetBtn: 'Сбросить',
        showAllBtn: 'Показать все',
        cancelBtn: 'Отменить',
        saveBtn: 'Сохранить',
        fixHeaderToggle: 'Фиксировать шапку при скролле',
        stickyLeft: 'Фиксированные колонки слева',
        mainColumns: 'Колонки',
        stickyRight: 'Фиксированные колонки справа',
        dropzone: 'Перетащите колонку',
        disabledHint: 'Нельзя скрыть последнюю колонку',
    },
};

const PRIZM_RUSSIAN_PAGINATOR = {
    paginator: {
        linesShown: 'Показано строк:',
    },
};

const PRIZM_RUSSIAN_LANGUAGE = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ name: `russian`, shortName: `ru` }, PRIZM_RUSSIAN_LANGUAGE_CORE), PRIZM_RUSSIAN_LANGUAGE_KIT), PRIZM_RUSSIAN_FILE_UPLOAD), PRIZM_RUSSIAN_INPUT_LAYOUT_DATE_RELATIVE), PRIZM_RUSSIAN_CRON), PRIZM_RUSSIAN_COLUMN_SETTINGS), PRIZM_RUSSIAN_PAGINATOR);

// @note: cannot be transferred to a shared file
// ReferenceError: Cannot access 'PRIZM_LANGUAGE_LOADER' before initialization
const PRIZM_LANGUAGE_LOADER = new InjectionToken(`Webpack chunk loader for Prizm UI libraries i18n`);

const PRIZM_LANGUAGE_STORAGE_KEY = new InjectionToken(`Default key for search value in storage`, {
    factory: () => `prizmLanguage`,
});

const PRIZM_DEFAULT_LANGUAGE = new InjectionToken(`Default Language for Prizm UI libraries i18n`, {
    factory: () => PRIZM_RUSSIAN_LANGUAGE,
});
const PRIZM_LANGUAGE = new InjectionToken(`Language for Prizm UI libraries i18n`, {
    factory: () => of(inject(PRIZM_DEFAULT_LANGUAGE)),
});

/**
 * @deprecated
 * use only method "extract" from service PrizmI18nService
 * */
function prizmExtractI18n(key) {
    return () => inject(PRIZM_LANGUAGE).pipe(switchMap((streamOrValue) => isObservable(streamOrValue) ? streamOrValue : of(streamOrValue)), map((lang) => lang[key]));
}

function prizmAsyncLoadLanguage(language, loader, fallback) {
    return language && loader ? prizmLoadLanguage(language, loader) : of(fallback);
}
function prizmLoadLanguage(language, loader) {
    return from(loader(language));
}

class PrizmLanguageSwitcher extends BehaviorSubject {
    constructor(fallback, key, storage, loader) {
        super(prizmAsyncLoadLanguage(storage.getItem(key), loader, fallback));
        this.fallback = fallback;
        this.key = key;
        this.storage = storage;
        this.loader = loader;
    }
    get language() {
        return this.storage.getItem(this.key) || this.fallback.name;
    }
    setLanguage(language) {
        this.storage.setItem(this.key, language);
        this.next(prizmAsyncLoadLanguage(language, this.loader, this.fallback));
    }
    clear() {
        this.storage.removeItem(this.key);
        this.next(of(this.fallback));
    }
}
PrizmLanguageSwitcher.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmLanguageSwitcher, deps: [{ token: PRIZM_DEFAULT_LANGUAGE }, { token: PRIZM_LANGUAGE_STORAGE_KEY }, { token: LOCAL_STORAGE }, { token: PRIZM_LANGUAGE_LOADER, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
PrizmLanguageSwitcher.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmLanguageSwitcher, providedIn: `root` });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PrizmLanguageSwitcher, decorators: [{
            type: Injectable,
            args: [{ providedIn: `root` }]
        }], ctorParameters: function () {
        return [{ type: undefined, decorators: [{
                        type: Inject,
                        args: [PRIZM_DEFAULT_LANGUAGE]
                    }] }, { type: undefined, decorators: [{
                        type: Inject,
                        args: [PRIZM_LANGUAGE_STORAGE_KEY]
                    }] }, { type: undefined, decorators: [{
                        type: Inject,
                        args: [LOCAL_STORAGE]
                    }] }, { type: undefined, decorators: [{
                        type: Optional
                    }, {
                        type: Inject,
                        args: [PRIZM_LANGUAGE_LOADER]
                    }] }];
    } });

function prizmLanguageSwitcher(loader) {
    return [
        {
            provide: PRIZM_LANGUAGE_LOADER,
            useFactory: () => loader,
        },
        {
            provide: PRIZM_LANGUAGE,
            useExisting: PrizmLanguageSwitcher,
        },
    ];
}

/**
 * Generated bundle index. Do not edit.
 */

export { PRIZM_DEFAULT_LANGUAGE, PRIZM_LANGUAGE, PRIZM_LANGUAGE_LOADER, PRIZM_LANGUAGE_STORAGE_KEY, PRIZM_RUSSIAN_LANGUAGE, PRIZM_RUSSIAN_LANGUAGE_CORE, PRIZM_RUSSIAN_LANGUAGE_COUNTRIES, PRIZM_RUSSIAN_LANGUAGE_KIT, PrizmCountryIsoCode, PrizmLanguageSwitcher, prizmAsyncLoadLanguage, prizmExtractI18n, prizmLanguageSwitcher, prizmLoadLanguage };
//# sourceMappingURL=prizm-ui-i18n.mjs.map
