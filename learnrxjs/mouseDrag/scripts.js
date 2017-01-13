var createMouseDrags = function(element) {
    var parentEle = document.body;
    var mousemoves$ = Rx.Observable.fromEvent(parentEle, 'mousemove');
    var mousedowns$ = Rx.Observable.fromEvent(element,'mousedown');
    var mouseups$ = Rx.Observable.fromEvent(element,'mouseup');
    return mousedowns$.concatMap((clickEvent) => mousemoves$
                .map((mousemoveEvent) => {
                        return {
                            left: mousemoveEvent.clientX - clickEvent.offsetX,
                            top: mousemoveEvent.clientY - clickEvent.offsetY
                        };
                    }
                ).takeUntil(mouseups$)
            );
    
}
var element = document.getElementById('item1');
var mouseDrag$ = createMouseDrags(element);
    mouseDrag$
    .subscribe((x) => {
            element.style.left = x.left + 'px';
            element.style.top = x.top +  'px';
        });

