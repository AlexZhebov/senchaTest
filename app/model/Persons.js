Ext.define('AppName.model.Personnel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id',  type: 'string'},
        {name: 'firstName', type: 'string'},
        {name: 'lastName', type: 'string'},
        {name: 'city', type: 'string'},
        {name: 'dataR', type: 'date', dateFormat: 'Y-m-d'}
    ]
});
