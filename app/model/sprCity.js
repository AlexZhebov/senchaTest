Ext.define('AppName.model.sprCity', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id',  type: 'string'},
        {name: 'cityname', type: 'string'}
    ],
    validators: {
        cityname: {type: 'length', min: 2, message: 'Заполните название города'}
    },
    proxy: {
        type: 'ajax',
        url: 'http://localhost/sprcity',
        reader: {
            type: 'json',
            listeners: {
                exception: function( reader, response, error, eOpts ) {
                    alert("read");
                }
            }
        },
        writer: {
            type: 'json',
            writeAllFields: true
        },
        listeners: {
            exception: function(proxy, response, operation, eOpts) {
                // событие возникает при любом обращении
                //console.log(proxy);
                //console.log(response);
                //console.log(operation);
                //console.log(eOpts);
                //alert('exception');
            }
        },
        api: {
            read: 'http://localhost/sprcity',
            create: 'http://localhost/sprcity?city=add',
            update: 'http://localhost/sprcity?city=edit',
            destroy: 'http://localhost/sprcity?city=delete'
        },
        actionMethods: {
            destroy: 'POST',
            read: 'GET',
            create: 'POST',
            update: 'POST'
        }
    }

});
