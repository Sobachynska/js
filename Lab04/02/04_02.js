<!DOCTYPE html>
<html lang="uk">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Алгоритм Гаусса</title>
</head>

<body>
    <script>
        function calculateEasterDate(year) {
            var a = year % 19;
            var b = Math.floor(year / 100);
            var c = year % 100;
            var d = Math.floor(b / 4);
            var e = b % 4;
            var f = Math.floor((b + 8) / 25);
            var g = Math.floor((b - f + 1) / 3);
            var h = (19 * a + b - d - g + 15) % 30;
            var i = Math.floor(c / 4);
            var k = c % 4;
            var l = (32 + 2 * e + 2 * i - h - k) % 7;
            var m = Math.floor((a + 11 * h + 22 * l) / 451);
            var n = Math.floor((h + l - 7 * m + 114) / 31);
            var p = (h + l - 7 * m + 114) % 31;
            var day = p + 1;
            var month = n;

            return new Date(year, month - 1, day);
        }

        // Приклад використання
        var year = 2023;
        var easterDate = calculateEasterDate(year);
        var formattedDate = easterDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

        document.write('Католицький Великдень ' + year + ': ' + formattedDate);
    </script>
</body>

</html>