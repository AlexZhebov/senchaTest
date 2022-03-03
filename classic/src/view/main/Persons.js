/**
 * This view is an example list of people.
 */
Ext.define('AppName.view.main.Persons', {
    extend: 'Ext.grid.Panel',
    xtype: 'personslist',

    requires: [
        'AppName.store.Personnel'
    ],

    title: 'Список персон',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'ФИО',  dataIndex: 'name' },
        { text: 'Город', dataIndex: 'email', flex: 1 },
        { text: 'Дата рождения', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
