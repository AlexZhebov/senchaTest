Ext.define('AppName.view.main.sprCity', {
    extend: 'Ext.panel.Panel',
    xtype: 'sprCity',

    items: [
        {
            extend: 'Ext.grid.Panel',
            xtype: 'gridpanel',
            id: 'sprCityGrid',

            requires: [
                'AppName.store.sprCity'
            ],

            title: 'Справочник городов',

            store: {
                type: 'sprCity'
            },

            columns: [
                { text: 'Название города', dataIndex: 'cityname', flex: 1,
                    editor: {
                        xtype: 'textfield',
                        allowBlank: false
                    }
                },
                {
                    xtype:'actioncolumn',
                    width: 100,
                    text: 'Действия',
                    items:[{
                        icon: 'edit.png',
                        handler:function (grid, rowIndex, colIndex) {

                            var selectionModel = grid.getSelectionModel(), record;
                            selectionModel.select(rowIndex);
                            record = selectionModel.getSelection()[0];

                            var window = Ext.create('Ext.window.Window', {
                                title: 'Форма редактирования города',
                                width: 310,
                                height: 170,
                                modal: true,
                                items:[{
                                    xtype: 'sprCityEditForm',

                                }]
                            });
                            window.show();
                            var city = Ext.getCmp('cityname');
                            city.setValue(record.get('cityname'));
                            var idcity = Ext.getCmp('idcity');
                            idcity.setValue(record.get('id'));
                        }
                    },
                        {
                            icon: 'delete.png',
                            handler:function (grid, rowIndex, colIndex) {

                                var selectionModel = grid.getSelectionModel(), record;
                                selectionModel.select(rowIndex);
                                record = selectionModel.getSelection()[0];

                                let questionText = "\"" + record.get('cityname') +"\"";

                                var abc = Ext.Msg.confirm('Запрос на удаление', 'Вы действительно хотите удалить запись ' + questionText + '?', function(e)
                                    {
                                        if(e == 'yes')
                                        {
                                            grid.getStore().removeAt(rowIndex);
                                        }
                                    }
                                );
                            }
                        }]
                }
            ]
        },
        {
            xtype: 'button',
            text: 'Добавить запись в таблицу',
            margin: 10,
            listeners: {
                click: {
                    fn: function () {
                        //Handle click event
                        var window = Ext.create('Ext.window.Window', {
                            title: 'Форма добавления города',
                            width: 310,
                            height: 170,
                            modal: true,
                            items:[{
                                xtype: 'sprCityEditForm',

                            }]
                        });
                        window.show();
                    }
                }
            }
        }
    ]
});
