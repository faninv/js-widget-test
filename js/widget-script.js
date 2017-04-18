$(function() {
    $.widget( "namespace.modernWidget", {

        // Default options.
        options: {
            width: '200px',
            height: '200px',
            backgroundColor: '#fff',
            fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
            fontSize: '16px',
            fontColor: '#000',
            margin: '0 10px 20px',
            padding: '10px'
        },

        _create: function() {

            var id = this.element.attr('id');
            var jsonp_url = "http://93.170.169.173/widget-test/widget-data.php?callback=?";
            $.getJSON(jsonp_url, function(data) {
                var container = $('#'+ id);
                container.html("Widget data: <br>title = " + data.title + "<br> description = " + data.description + "<br>");
            });

            this._refresh();
        },

        _refresh: function() {

            this.element.css( "width", this.options.width);
            this.element.css( "height", this.options.height);
            this.element.css( "background-color", this.options.backgroundColor);
            this.element.css( "font-family", this.options.fontFamily);
            this.element.css( "font-size", this.options.fontSize);
            this.element.css( "color", this.options.fontColor);
            this.element.css( "margin", this.options.margin);
            this.element.css( "padding", this.options.padding);
        }
    });
});