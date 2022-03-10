Ext.define('AppName.store.sprCity', {
    extend: 'Ext.data.Store',
    alias: 'store.sprCity',
    requires: [
        'AppName.model.sprCity'
    ],
    model: 'AppName.model.sprCity',
    autoLoad: true,
    autoSync: true
});

