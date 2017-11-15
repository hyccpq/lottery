{
    let obj = {
        time: '2017-3-11',
        name: 'net',
        _r: 123
    };

    let monitor = new Proxy(obj, {

        get(target, key) {
            return target[key].replace('2017', '2018');
        },

        set(target, key, value) {
            if (key === 'name') {
                return target[key] = value;
            } else {
                return target[key];
            }
        }
    });

    console.log('get', monitor.time);

    monitor.time = '2018';
    monitor.name = 'kalegos';
    console.log(monitor.time);
    console.log(monitor)
}