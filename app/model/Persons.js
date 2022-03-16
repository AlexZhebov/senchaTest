Ext.define('AppName.model.Personnel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id',  type: 'string'},
        {name: 'firstName', type: 'string'},
        {name: 'lastName', type: 'string'},
        {name: 'city', type: 'string'},
        {name: 'id_city', type: 'string'},
        {name: 'dataR', type: 'date', dateFormat: 'Y-m-d'}
    ],
    validators: {
        firstName: {type: 'length', min: 2, message: 'Заполните имя'}
    },
    proxy: {
        type: 'ajax',
        url: 'http://localhost/showdb',
        reader: {
            type: 'json',
            rootProperty: 'persons',
            totalProperty: 'total'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        },
        listeners: {
            exception: function (proxy, response, operation, eOpts) {
                // событие возникает при любом обращении
                //console.log(proxy);
                //console.log(response);
                //console.log(operation);
                //console.log(eOpts);
                //alert('exception');
            }
        },
        api: {
            read: 'http://localhost/showdb',
            create: 'http://localhost/showdb?persons=add',
            update: 'http://localhost/showdb?persons=edit',
            destroy: 'http://localhost/showdb?persons=delete'
        },
        actionMethods: {
            destroy: 'POST',
            read: 'GET',
            create: 'POST',
            update: 'POST'
        }
    }
});
