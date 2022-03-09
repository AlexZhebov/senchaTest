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
                xtype: 'container',
                title: 'Добавление персоны',
                height: 500,
                items: [
                    {
                        xtype: 'textfield',
                        name: 'firstname',
                        margin: 10,
                        fieldLabel: 'Имя',
                        allowBlank: false  // requires a non-empty value
                    },
                    {
                        xtype: 'textfield',
                        name: 'lastname',
                        margin: 10,
                        fieldLabel: 'Фамилия',
                        allowBlank: false  // requires a non-empty value
                    },
                    {
                        xtype: 'textfield',
                        name: 'city',
                        margin: 10,
                        fieldLabel: 'Город',
                        allowBlank: false  // requires a non-empty value
                    },
                    {
                        xtype: 'datefield',
                        name: 'datar',
                        margin: 10,
                        fieldLabel: 'Дата рождения',
                        allowBlank: false  // requires a non-empty value
                    },
                    {
                        xtype: 'button',
                        margin: 10,
                        text: 'Добавить'
                    },
                    {
                        xtype: 'button',
                        margin: 10,
                        text: 'Отмена'
                    }
                ]
            }
        ]

    });
