/* eslint-disable */
Array.prototype.includes ||
  Object.defineProperty(Array.prototype, 'includes', {
    value: function(r, e) {
      if (null == this) throw new TypeError('"this" is null or not defined');
      var t = Object(this),
        n = t.length >>> 0;
      if (0 === n) return !1;
      for (
        var i = 0 | e, o = Math.max(i >= 0 ? i : n - Math.abs(i), 0);
        o < n;

      ) {
        if (
          (function(r, e) {
            return (
              r === e ||
              ('number' == typeof r &&
                'number' == typeof e &&
                isNaN(r) &&
                isNaN(e))
            );
          })(t[o], r)
        )
          return !0;
        o++;
      }
      return !1;
    },
  });
