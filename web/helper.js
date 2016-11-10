if(typeof URLSearchParams !== 'undefined') {
    var params = null;
    var temp = location.href.split('?');
    if (temp.length > 1) {
        temp.shift();
        params = temp.join('?');
    }
    var query = new URLSearchParams(params);

    n = query.has('n') ? parseInt(query.get('n')) : 3;
    r = query.has('r') ? parseFloat(query.get('r')) : 0.5;
    q = query.has('q') && query.get('q').split(',').length > 0 ? query.get('q').split(',').map(function (e) {
        return parseInt(e, 10);
    }) : [];
    points = query.has('points') ? parseInt(query.get('points')) : 100000;
    size = query.has('size') ? parseInt(query.get('size')) : 640;
    radius = query.has('radius') ? parseInt(query.get('radius')) : (size / 2) - 20;
    bgcolor = query.has('bgcolor') ? query.get('bgcolor') : '#FFF';
    fgcolor = query.has('fgcolor') ? query.get('fgcolor') : '#000';
}