Ext.define('AppName.view.main.addPersonForm', {
        extend: 'Ext.panel.Panel',
        xtype: 'addPersonForm',

        items: [
            {
                xtype: 'container',
                title: 'Добавление персоны',
                height: 500,
                items: [
                    {
                        xtype: 'textfield',
                        name: 'firstname',
                        id: 'firstName',
                        margin: 10,
                        fieldLabel: 'Имя',
                        allowBlank: false  // requires a non-empty value
                    },
                    {
                        xtype: 'textfield',
                        name: 'lastname',
                        id: 'lastName',
                        margin: 10,
                        fieldLabel: 'Фамилия',
                        allowBlank: false  // requires a non-empty value
                    },
                    {
                        xtype: 'textfield',
                        name: 'city',
                        id: 'city',
                        margin: 10,
                        fieldLabel: 'Город',
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
                        xtype: 'button',
                        margin: 10,
                        text: 'Добавить',
                        listeners: {
                            click: {
                                fn: function () {
                                    //let firstName = this.up('window').getComponent('firstname').getValue();
                                    Ext.getCmp('firstName').on
                                    var firstName = Ext.getCmp('firstName');
                                    var lastName = Ext.getCmp('lastName');
                                    var city = Ext.getCmp('city');
                                    var dataR = Ext.getCmp('dataR');

                                    var err = false;

                                    if  (firstName.getValue().length < 1) {err = true; firstName.onChange();}
                                    if  (lastName.getValue().length < 1) {err = true; lastName.onChange();}
                                    if  (city.getValue().length < 1) {err = true; city.onChange();}
                                    // проверку даты сделать!!!
                                    if  (dataR.getValue() === null) {err = true; dataR.onChange();}
                                    //alert(dataR.getValue());
                                    if (err) {
                                        alert ("Заполните все поля!");
                                    } else {
                                        var store = Ext.getCmp('PersonGrid').getStore();

                                        store.add(
                                            {
                                                firstName: firstName.getValue(),
                                                lastName: lastName.getValue(),
                                                city: city.getValue(),
                                                dataR: dataR.getValue()
                                            });

                                        this.up('window').close();
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
                                    let test = Ext.getCmp('firstName');
                                    test.onChange();
                                    if (test.isValid) {
                                        alert(test.isValid);
                                    }

                                    // закрыть окно
                                    //this.up('window').close();
                                }
                            }
                        }
                    }
                ]
            }
        ]

    });
