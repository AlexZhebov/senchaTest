Ext.define('AppName.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',
    requires: [
        'AppName.model.Personnel'
    ],
    model: 'AppName.model.Personnel',

    autoLoad: true,
    autoSync: true,

    proxy: {
        type: 'ajax',
        url: 'http://localhost/showdb',
        reader: {
            type: 'json'
        },
        api: {
            read: 'http://localhost/showdb',
            create: 'http://localhost/showdb?persons=add',
            update: 'http://localhost/showdb?persons=edit',
            destroy: 'http://localhost/showdb?persons=delete',
            listeners:{
                load: function( reader, records, successful, eOpts ){
                    alert(1);
                    if (!records) Ext.Msg.alert('No data loaded','Check connection or no data has been inserted yet');
                }
            }
        },
        actionMethods: {
            destroy : 'POST',
            read : 'GET',
            create : 'POST',
            update : 'POST'
        }
    }
});

