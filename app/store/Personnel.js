Ext.define('AppName.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',
    requires: [
        'AppName.model.Personnel'
    ],
    model: 'AppName.model.Personnel',

    autoLoad: true,
    autoSync: true,
    pageSize: 10

});

