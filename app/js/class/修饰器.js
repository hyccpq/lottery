{
    // 属性达到只读效果
    let readOnly = function (targat,name,descriptor) {
        descriptor.writable = false;
        return descriptor;
    };

    class Test{
        @readOnly
        time(){
            return '2017-11-12';
        }
    }

    let test = new Test();
    // test.time = function(){
    //     console.log('reset time');
    // };
    console.log(test.time());
}

{
    let typename = function (target,name,descriptor) {
        target.myname = 'kalec';
    };

    @typename
    class Test{

    }

    console.log(Test.myname);
}

{
    let log = (type) => (target,name,descriptor) => {
        let src_method = descriptor.value;
        descriptor.value=(...arg) => {
            src_method.apply(target,arg);
            console.info(`log ${type}`);
        }
    };

    class AD{
        @log('show')
        show(){
            console.info('ad is show');
        }
        @log('click')
        click(){
            console.info('ad is click');
        }
    }
    let ad = new AD();
    ad.show();
    ad.click();
}