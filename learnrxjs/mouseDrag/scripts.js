var mousemoves$ = Rx.Observable.fromEvent(document.getElementById('item1'), 'mousemove');
var mousedowns$ = Rx.Observable.fromEvent(document.getElementById('item1'),'mousedown');
var mouseups$ = Rx.Observable.fromEvent(document.getElementById('item1'),'mouseup');

/*mousemoves$.subscribe((e) => {
    console.log('mousemoves$', e.clientX, e.clientY);
});*/
/*mousedowns$.subscribe((e) => {
    console.log('mousedowns$', e.clientX, e.clientY);
});
mouseups$.subscribe((e) => {
    console.log('mouseups$', e.clientX, e.clientY);
});*/


mousedowns$.concatMap((clickEvent) => mousemoves$
                            .map((e) => {
                                    return {
                                        left: e.clientX - clickEvent.offsetX,
                                        top: e.clientY - clickEvent.offsetY,
                                    };
                                }
                            ).takeUntil(mouseups$)
                        ).subscribe((x) => {
                            document.getElementById('item1').style.left = x.left + 'px';
                            document.getElementById('item1').style.top = x.top + 'px';
                        });

