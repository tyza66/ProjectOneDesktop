
module.exports = function (appInfo) {
    var electron = require('electron');
    const Menu = electron.Menu;

    var template = [
        {
            label: '页面',
            submenu: [
                {
                    label: '退出',
                    click: () => {
                        appInfo.app.exit();
                    }
                },
                {
                    label: '最大化', click: () => {
                        appInfo.mainWindow.maximize();
                    }
                },
                {
                    label: '最小化', click: () => {
                        appInfo.mainWindow.unmaximize();
                    }
                }
            ]
        },
        {
            label: '操作',
            submenu: [
                {
                    label: '主页', click: () => {
                        appInfo.mainWindow.loadURL('https://rpg.blue/')
                    }
                },
                {
                    label: '登录', click: () => {
                        appInfo.mainWindow.loadURL('https://rpg.blue/member.php?mod=logging&action=login')
                    }
                },
                {
                    label: '搜索', click: () => {
                        appInfo.mainWindow.loadURL('https://rpg.blue/search.php?mod=forum')
                    }
                }
            ]
        }
    ]

    var m = Menu.buildFromTemplate(template)//按照模板构建菜单
    Menu.setApplicationMenu(m)
}

