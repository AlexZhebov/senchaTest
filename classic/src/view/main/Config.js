Ext.define('AppName.view.main.Config', {
        extend: 'Ext.panel.Panel',
        xtype: 'configform',

        items: [
            {
                xtype: 'button',
                text: 'Кнопка перед панелью',

                listeners: {
                    click: {
                        fn: function () {
                            //Handle click event
                            alert('Нажата кнопка перед панелью');
                            }
                        }
                    }
            },
            {
                xtype: 'panel',
                title: 'Добавление персоны',
                height: 200,
                items: [
                    {
                        xtype: 'textfield',
                        name: 'name',
                        fieldLabel: 'Name',
                        allowBlank: false  // requires a non-empty value
                    },
                    {
                        xtype: 'button',
                        text: 'Кнопка'
                    }
                ]
            }
        ]

    });
