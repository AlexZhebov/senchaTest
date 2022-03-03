Ext.define('AppName.view.main.Config', {
        extend: 'Ext.Button',
        xtype: 'configform',

        text: 'My Button',
        handler: function() {
            alert('click');
        }
    });
