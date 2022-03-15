/**
 * This view is an example list of people.
 */
Ext.define('AppName.view.main.Persons', {
    extend: 'Ext.panel.Panel',
    xtype: 'personslist',
    requires: [
        'AppName.view.main.PersonEditForm',
    ],

    items: [
        {
            extend: 'Ext.toolbar.Toolbar',
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    icon: 'add24.png',
                    padding: 0,
                    width: 32,
                    scale: 'large',
                    height: 32,
                    tooltip: 'Создать новую запись',
                    handler: addPerson
                },
                {
                    icon: 'edit24.png',
                    padding: 0,
                    scale: 'large',
                    width: 32,
                    height: 32,
                    tooltip: 'Редактировать запись',
                    handler: editPerson
                },
                {
                    icon: 'delete24.png',
                    padding: 0,
                    scale: 'large',
                    width: 32,
                    height: 32,
                    tooltip: 'Удалить запись',
                    handler: deletePerson
                },
                '-',
                {
                    icon: 'refresh24.png',
                    padding: 0,
                    scale: 'large',
                    width: 32,
                    height: 32,
                    tooltip: 'Обновить записи',
                    handler: function () {refreshPerson();}
                },
                '-',
                {
                    xtype    : 'textfield',
                    name     : 'findPerson',
                    id: 'findPersonText',
                    emptyText: 'Введите текст поиска'
                },
                {
                    text: 'Найти',
                    icon: 'find24.png',
                    scale: 'large',
                    height: 32,
                    padding: '5 0 0 5',
                    style: {
                        'font-size': '36px'
                    },
                    tooltip: 'Выполнить поиск',
                    handler: findPerson
                },
                {
                    text: 'Сброс',
                    height: 32,
                    tooltip: 'Сброс поиска',
                    handler: clearfindPerson
                }
            ]
        },
        {
            extend: 'Ext.grid.Panel',
            xtype: 'gridpanel',
            id: 'PersonGrid',
            viewConfig: {
                stripeRows: true,
                listeners: {
                    itemcontextmenu: function(view, rec, node, index, e) {
                        e.stopEvent();
                        mnuPersonContext.showAt(e.getXY());
                        return false;
                    }
                }
            },
            requires: [
                'AppName.store.Personnel'
            ],

            title: 'Список персон',


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
                    width: 100,
                    text: 'Действия',
                    items:[{
                            icon: 'edit.png',
                            handler:function (grid, rowIndex, colIndex) {
                                var selectionModel = grid.getSelectionModel(), record;
                                selectionModel.select(rowIndex);
                                editPerson();
                            }
                        },{
                            icon: 'delete.png',
                            handler:function (grid, rowIndex, colIndex) {
                                var selectionModel = grid.getSelectionModel(), record;
                                selectionModel.select(rowIndex);
                                deletePerson();
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
                    fn: addPerson
                }
            }
        }
    ]

});

mnuPersonContext = new Ext.menu.Menu({
    items: [{
        id: 'refresh',
        text: 'обновить',
        icon: 'refresh24.png'
    },{
        xtype: 'menuseparator'
    },{
        id: 'edit',
        text: 'редактировать',
        icon: 'edit24.png'
    },{
        id: 'delete',
        text: 'удалить',
        icon: 'delete24.png'
    }
    ],
    listeners: {
        click: function(menu, item, e, eOpts, grid) {
            //alert(item.text);
            switch (item.id) {
                case 'refresh':
                    refreshPerson();
                    break;
                case 'edit':
                    editPerson();
                    break;
                case 'delete':
                    deletePerson();
                    break;
            }
        }
    }
});

/**
 * Функция обновления
 */
function refreshPerson() {
    var model = Ext.create('AppName.model.Personnel');

    //model.getProxy().api.read="http://localhost/showdb?findtext=" + Ext.getCmp('findPersonText').getValue();

    model.load();
};

/**
 * Функция обработки кнопки поиск
 */
function findPerson() {

    // первый способ добавления параметра
    //var model = Ext.create('AppName.model.Personnel');
    //model.getProxy().api.read="http://localhost/showdb?findtext=" + Ext.getCmp('findPersonText').getValue();
    //model.load();
    var grid= Ext.getCmp('PersonGrid').getStore();

    var findtext = Ext.getCmp('findPersonText').getValue();
    var proxy = grid.getProxy();
    proxy.setExtraParams({
        findtext : findtext
    });

    grid.load();
};

/**
 * Функция обработки кнопки поиск
 */
function clearfindPerson() {
    Ext.getCmp('findPersonText').setValue('');
    var grid= Ext.getCmp('PersonGrid').getStore();
    var findtext = Ext.getCmp('findPersonText').getValue();
    var proxy = grid.getProxy();
    proxy.setExtraParams({
        findtext : findtext
    });
    grid.load();
};
/**
 * Функция удаления персоны
 */
function deletePerson() {

    var grid= Ext.getCmp('PersonGrid');
    var selectionModel = grid.getSelectionModel(), record;
    selectionModel.select(grid.getActiveCounter);
    record = selectionModel.getSelection()[0];

    if (record === undefined) {
        Ext.Msg.alert('Внимание!', 'Выберите строку для удаления', Ext.emptyFn);
    } else {
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

};

/**
 * Функция редактирования персоны
 */
function editPerson() {

    var grid= Ext.getCmp('PersonGrid');

    var selectionModel = grid.getSelectionModel(), record;
    selectionModel.select(grid.getActiveCounter);
    record = selectionModel.getSelection()[0];

    if (record === undefined) {
        Ext.Msg.alert('Внимание!', 'Выберите строку для редактирования', Ext.emptyFn);
        //alert('Выберите строку');
    } else {
        var window = Ext.create('Ext.window.Window', {
            title: 'Форма редактирования персоны',
            width: 310,
            height: 300,
            modal: true,
            items:[{
                xtype: 'PersonEditForm',

            }]
        });
        window.show();

        var firstname = Ext.getCmp('firstname');
        firstname.setValue(record.get('firstName'));
        var lastname = Ext.getCmp('lastname');
        lastname.setValue(record.get('lastName'));

        if (!(record.get('id_city') === "0")) {
            var idcity = Ext.getCmp('id_city');
            idcity.setValue(record.get('id_city'));
        }

        var dataR = Ext.getCmp('dataR');
        dataR.setValue(record.get('dataR'));

        var idperson = Ext.getCmp('idperson');
        idperson.setValue(record.get('id'));
    }

};

/**
 * Функция добавления персоны
 */
function addPerson() {
    //Handle click event
    var window = Ext.create('Ext.window.Window', {
        title: 'Форма добавления персоны',
        width: 310,
        height: 300,
        modal: true,
        items:[{
            xtype: 'PersonEditForm',

        }]
    });
    window.show();
};
