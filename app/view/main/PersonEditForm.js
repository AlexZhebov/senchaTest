Ext.define('AppName.view.main.PersonEditForm', {
    extend: 'Ext.panel.Panel',
    xtype: 'PersonEditForm',

    items: [
        {
            xtype: 'container',
            height: 500,
            items: [
                {
                    xtype: 'textfield',
                    name: 'firstname',
                    id: 'firstname',
                    margin: 10,
                    fieldLabel: 'Имя',
                    allowBlank: false  // requires a non-empty value
                },
                {
                    xtype: 'textfield',
                    name: 'lastname',
                    id: 'lastname',
                    margin: 10,
                    fieldLabel: 'Фамилия',
                    allowBlank: false  // requires a non-empty value
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Выберите город',
                    name: 'id_city',
                    store: {
                        type: 'sprCity'
                    },
                    valueField: 'id',
                    displayField: 'cityname',
                    //name: 'city',
                    id: 'id_city',
                    margin: 10,
                    allowBlank: false  // requires a non-empty value
                },
                {
                    xtype: 'datefield',
                    name: 'datar',
                    id: 'dataR',
                    margin: 10,
                    fieldLabel: 'Дата рождения',
                    allowBlank: false  // requires a non-empty value
                },
                {
                    xtype: 'hiddenfield',
                    name: 'idperson',
                    id: 'idperson',
                },
                {
                    xtype: 'button',
                    margin: 10,
                    text: 'Сохранить',
                    listeners: {
                        click: {
                            fn: function () {

                                var store = Ext.getCmp('PersonGrid').getStore();
                                var firstname = Ext.getCmp('firstname').getValue();
                                var lastname = Ext.getCmp('lastname').getValue();
                                var id_city = Ext.getCmp('id_city').getValue();
                                var idperson = Ext.getCmp('idperson').getValue();
                                var dataR = Ext.getCmp('dataR').getValue();

                                if (idperson === "") {
                                    var person = Ext.create('AppName.model.Personnel', {
                                        firstName: firstname,
                                        lastName: lastname,
                                        id_city: id_city,
                                        dataR: dataR
                                    });
                                } else {
                                    var person = Ext.create('AppName.model.Personnel', {
                                        id: idperson,
                                        firstName: firstname,
                                        lastName: lastname,
                                        id_city: id_city,
                                        dataR: dataR
                                    });
                                }
                                if (person.isValid()) {
                                    person.save({

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
