(function ($) {

    var self = $.nEasy = new function () { };

    $.extend(self, {

        nEasyBackgrounds: [
            './background/airton.png'
        ],

        nEasyImgs: [
            'https://media.giphy.com/media/xUOxfn0FnRetf71v7a/giphy.gif',
            'https://media.giphy.com/media/xUNd9UkS8kpxe6eHGU/giphy.gif',
            'https://media.giphy.com/media/xUNd9C59DZjPfBVrry/giphy.gif',
            'https://scontent-gru2-2.xx.fbcdn.net/v/t31.0-8/21366864_1529323847110583_324403790350163002_o.jpg?oh=aeffa102f431569f6d04da7c3691b417&oe=5AC6304F',
            'https://scontent-gru2-2.xx.fbcdn.net/v/t31.0-8/20280580_1511951858865187_4531444988858936101_o.jpg?oh=e18e8a82a979bf1836a045afbc9b1710&oe=5A8E4B1C',
            'https://scontent-gru2-2.xx.fbcdn.net/v/t31.0-8/12671896_987786857941382_8832076564588980905_o.jpg?oh=0c5e8574a5445921ca852481b1d7c471&oe=5A8FBC7C',
            'https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/17991979_1280831678681566_8675204164956818863_n.jpg?oh=80a070f30431accae7d379b69d96321f&oe=5A9089DA',
            'https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/14721589_1086100434821359_1313383920159995941_n.jpg?oh=2349d68fb79f24d456d1301eb2ea7b02&oe=5ABE5090',
            'https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/12003881_868290089935729_5481919160117627014_n.jpg?oh=4bf53107776ae09a3f0b691320dec997&oe=5AC801E1',
            'https://scontent-gru2-2.xx.fbcdn.net/v/t31.0-8/10708660_662264993871574_129236259432663722_o.jpg?oh=b71ab72b1f2c4b233509c13509c1a3a5&oe=5A8C3136',
            'https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/10584032_633574070074000_4347014662020392992_n.jpg?oh=25dce4031bd7a9194f118b19a1b5b807&oe=5ACC9F15'
        ],

        handleImages: function (lstImgs, time) {
            $.each($('img'), function (i, item) {
                //Skip if image is already replaced
                if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                    var h = $(item).height();
                    var w = $(item).width();

                    //If image loaded
                    if (h > 0 && w > 0) {
                        //Replace
                        $(item).css('width', w + 'px').css('height', h + 'px');
                        $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
                    }
                    else {
                        //Replace when loaded
                        $(item).load(function () {
                            //Prevent 'infinite' loop
                            if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                                var h = $(item).height();
                                var w = $(item).width();
                                $(item).css('width', w + 'px').css('height', h + 'px');
                                $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
                            }
                        });
                    }
                }
            });

            //Keep replacing
            if (time > 0) {
                setTimeout(function () { self.handleImages(lstImgs, time); }, time);
            }
        },

        handleLogo: function (bgImgs, time) {
            $backgroundImages = $(
                '[class*=logo], [class*=header], [id*=header], [id*=logo],' +
                '[class*=logo] span, [class*=header] span, [id*=header] span, [id*=logo] span,' +
                '[class*=logo] h1, [class*=header] h1, [id*=header] h1, [id*=logo] h1,' +
                '[class*=logo] a, [class*=header] a, [id*=header] a, [id*=logo] a'
            )
                .filter(function () {
                    backgroundImg = $(this).css('background-image');
                    return backgroundImg && backgroundImg != 'none';
                }
                );

            $backgroundImages.each(function (i, item) {
                $(item).css('background-image', 'url(' + bgImgs[Math.floor(Math.random() * bgImgs.length)] + ')');
                $(item).css('background-position', '0 0');
                $(item).css('background-repeat', 'no-repeat');
                $(item).css('background-size', 'contain');
            });
        }
    });

    //Run on jQuery ready
    $(function () {
        self.handleImages(self.nEasyImgs, 3000);
        self.handleLogo(self.nEasyBackgrounds, 3000);
    });
})(jQuery);
