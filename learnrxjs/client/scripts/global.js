var printOutput = function(res, target) {
    if(target) {
        let p = document.createElement('p');
        if( typeof res === 'object' ) {
            res = JSON.stringify(res);
        }
        p.textContent = '> ' + res;
        target.insertBefore(p, target.firstChild);
    }
}
$('.demo-code').each(function(){
    var id = $(this).data('id');
    var title = $(this).data('title');
    var template = `<div class="well">
            <h4 id="code-sample-title${id}"></h4>
            <details>
                <summary>Code</summary>
                <div class="snippet-holder">
                    <div class="snippet-content auto-height">
                        <pre id="code-sample${id}"></pre>
                    </div>
                </div>
            </details>
            <details>
                <summary>Output</summary>
                <div class="snippet-holder">
                    <div class="console-features">
                        <span class="clear-output" data-target="#result-sample${id}"><i class="fa fa-times"></i> Clear</span>
                        <span class="restart-script" data-id="${id}"><i class="fa fa-repeat" aria-hidden="true"></i> Restart</span>
                        <span class="stop-script" data-id="${id}"><i class="fa fa-pause" aria-hidden="true"></i> Stop </span>
                    </div>
                    <div class="snippet-content">
                        <div class="output-console">
                            <div id="result-sample${id}"></div>
                        </div>
                    </div>
                </div>
            </details>
        </div>`;
        $(this).html(template);
});
$(function() {
    $('.append-script').each(function() {
        var target = $(this).data('id');
        var title = $(this).data('title');
        $('#code-sample' + target).html($(this).html());
        $('#code-sample-title' + target).html(title);
    } );
    $('.clear-output').on('click', function(e) {
        e.preventDefault();
        var target = $(this).data('target');
        $(target).empty();
    });
    $('.stop-script').on('click', function(e) {
        e.preventDefault();
        var id = $(this).data('id');
        var script = $(`.append-script[data-id="${id}"]`);
        var subscriptions = $(script).data('subscription');
        if(subscriptions.startsWith('[')) {
            subscriptions = eval(subscriptions);
        } else {
            subscriptions = [subscriptions];
        }
        subscriptions.forEach( (item) => {
            window[item].unsubscribe();
        } );
        
    });
    $('.restart-script').on('click', function(e) {
        e.preventDefault();
        $(this).closest('.console-features').find('.stop-script').trigger('click');
        $(this).closest('.console-features').find('.clear-output').trigger('click');
        var id = $(this).data('id');
        var script = $(`.append-script[data-id="${id}"]`);
        script.remove();
        setTimeout(()=>{
             $(document.body).append(script);
        })
       
    });
});