var mySlider = {
    init: function() {
        this._initUnslider();
    },
    _initUnslider: function() {
        if (!this.slider) {
            this.slider = $('.banner').unslider({
                nav: function(index, label) {
                    //  $(this) is the current index slide
                    //  label is the current label
                    //  index is the slide index, starting at 0

                    //  On the third slide, append " third slide!"
                    if (index === 2) {
                        return label + ' third slide!';
                    }
                    console.log(index + "," + label);
                    //  Only show the number
                    return index + 1;
                },
                keys: {
                    prev: 37,
                    next: 39,
                    stop: 27 //  Example: pause when the Esc key is hit
                },
                animateHeight: true,

            });
            this._slideEvent();
        }

    },

    _slideEvent: function() {
        var _this = this;
        this.slider.on('unslider.change', function(event, index, slide) {
            // alert('Slide has been changed to ' + index);
            $(".liulist,.liutext").removeClass("for-cur");

            if(index<0) index = $(slide).parent().children("li").length - 1;
            for (var i = 0; i < index + 1; i++) {
                $(".liulist:eq(" + i + "),.liutext:eq(" + i + ")").addClass("for-cur");
            }

        });
    },
    _removeLiCon: function() {
        this.slider.find('li:last').remove();
        this.slider.unslider('calculateSlides');
    }

};
