(function (window) {
    var settings = {{ jsonsettings|safe }};
    S = function () { }
    S.get = function (key) { return settings[key]; }
    S.set = function (key, val) { return settings[key] = val; }

    window.Setting = window.S = S;
})(window);

