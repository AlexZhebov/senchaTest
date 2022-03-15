/**
 * This view is an example list of people.
 */
Ext.define('AppName.view.main.Persons2', {
    extend: 'Ext.grid.Panel',
    xtype: 'personslist2',

    requires: [
        'AppName.store.Personnel'
    ],

    title: 'Список персон',
    plugins:[{
        ptype:'rowediting',
        clicksToEdit: 1
    }],

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Имя',  dataIndex: 'firstName', flex: 1,
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        },
        { text: 'Фамилия',  dataIndex: 'lastName', flex: 1,
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        },
        { text: 'Город', dataIndex: 'city', flex: 1,
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        },
        { text: 'Дата рождения', dataIndex: 'dataR', flex: 1, xtype: 'datecolumn', format: 'Y-m-d',
            editor: {
                xtype: 'datefield',
                format: 'Y-m-d',
                allowBlank: false
            }
        },
        {
            xtype:'actioncolumn',
            width:40,
            items:[{
                icon: 'delete.png',
                handler:function (grid, rowIndex, colIndex) {

                    var selectionModel = grid.getSelectionModel(), record;
                    selectionModel.select(rowIndex);
                    record = selectionModel.getSelection()[0];

                    let questionText = "\"" + record.get('firstName') + " " + record.get('lastName') + " (город: " + record.get('city') + ")\"";

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
    ],

    listeners: {
        //select: 'onItemSelected'
    }
});
