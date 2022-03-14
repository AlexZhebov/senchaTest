Ext.define('AppName.view.main.sprCityEditForm', {
    extend: 'Ext.panel.Panel',
    xtype: 'sprCityEditForm',
    requires: [
        'AppName.model.sprCity',
        'AppName.store.sprCity'
    ],
    items: [
        {
            xtype: 'container',
            title: 'Добавление города в справочник',
            height: 500,
            items: [
                {
                    xtype: 'textfield',
                    name: 'cityname',
                    id: 'cityname',
                    margin: 10,
                    fieldLabel: 'Название города',
                    allowBlank: false  // requires a non-empty value
                },
                {
                    xtype: 'hiddenfield',
                    name: 'idcity',
                    id: 'idcity',
                },
                {
                    xtype: 'button',
                    margin: 10,
                    text: 'Сохранить',

                    listeners: {
                        click: {
                            fn: function () {

                                var store = Ext.getCmp('sprCityGrid').getStore();
                                var citynam = Ext.getCmp('cityname').getValue();
                                var idcity = Ext.getCmp('idcity').getValue();

                                if (idcity === "") {
                                    var city = Ext.create('AppName.model.sprCity', {
                                        cityname: citynam
                                    });
                                } else {
                                    var city = Ext.create('AppName.model.sprCity', {
                                        id: idcity,
                                        cityname: citynam
                                    });
                                }
                                if (city.isValid()) {
                                    city.save({

                                        success: function (rec, op) {
                                            //console.log(rec);
                                            //console.log(op);
                                            //alert(rec.data["insert_id"]);
                                        },
                                        failure: function (rec, op) {
                                            //console.log(rec);
                                            //console.log(op);
                                            alert('Ошибка');
                                        }
                                    });
                                    store.load();
                                    this.up('window').close();
                                } else {
                                    var errors = city.validate();
                                    errors.each (function(error) {
                                        console.log(error);
                                        alert("Ошибка: " + error.field + ": " + error.getMessage());
                                    })
                                    alert("Заполните все поля!");
                                }

                            }
                        }
                    }
                },
                {
                    xtype: 'button',
                    margin: 10,
                    text: 'Отмена',
                    listeners: {
                        click: {
                            fn: function () {
                                // закрыть окно
                                this.up('window').close();
                            }
                        }
                    }
                }
            ]
        }
    ]

});
