(function($)
{
    $.fn.fbGetcover = function(FBuid, containerWidth, containerHeight, callback)
    {
        var $this = this;
        if(typeof(containerWidth) == 'undefined') containerWidth = 850;
        if(typeof(containerHeight) == 'undefined') containerHeight = 314;
        if(typeof(callback) == 'undefined') callback = function(status){};
        $this.find('img').remove();
        $.ajax(
        {
            url: 'http://graph.facebook.com/'+FBuid+'?fields=cover',
            dataType: 'jsonp',
            complete: function(jqXHR, textStatus)
            {
                if(textStatus != 'success') callback('failed');
            },
            success: function(data)
            {
                if(typeof(data.cover) != 'undefined')
                {
                    $this.append
                    (
                        $('<img />').css({'width':'inherit'})
                        .hide()
                        .load(function(e)
                        {
                            $this.css({'width':containerWidth, 'height':containerHeight, 'display':'inline-block', 'position':'relative', 'overflow':'hidden'});
                            $(e.currentTarget).css(
                            {
                                'margin-top':(($(e.currentTarget).height()-containerHeight)*(data.cover.offset_y*0.01))*-1
                            }).show();
                            callback('success');
                        })
                        .attr('src', data.cover.source)
                    );
                }
                else callback('failed');
            }
        });
        return this;
    };
})(jQuery);;
