require.config({ //配置路径
    paths: {
        'jquery': '../lib/jquery-1.11.0.min',
        'common': 'common',
        'same': 'same',
        'js': 'js',
    },
    shim: { //配置依赖关系
        'same': {
            deps: ['jquery']
        },
        'js': {
            deps: ['jquery', 'common']
        },
        'shopping': {
            deps: ['jquery', 'common', 'same']
        },
    }
});
require(['jquery', 'common', 'same', 'js', 'shopping'], function () {});