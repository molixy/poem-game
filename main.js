const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false
    },
    icon: path.join(__dirname, 'icon.png')
  });

  // 加载 index.html
  mainWindow.loadFile('index.html');

  // 开发模式下打开开发者工具（可选）
  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools();
  }

  // 创建窗口菜单
  const template = [
    {
      label: '文件',
      submenu: [
        {
          label: '重新开始',
          accelerator: 'CmdOrCtrl+R',
          click: () => {
            mainWindow.reload();
          }
        },
        {
          label: '退出',
          accelerator: 'CmdOrCtrl+Q',
          click: () => {
            app.quit();
          }
        }
      ]
    },
    {
      label: '帮助',
      submenu: [
        {
          label: '关于',
          click: () => {
            // 可以打开一个关于对话框
            mainWindow.webContents.send('show-about');
          }
        }
      ]
    }
  ];

  // 在 macOS 上添加默认的 App 菜单
  if (process.platform === 'darwin') {
    template.unshift({
      label: app.getName(),
      submenu: [
        {
          role: 'about'
        },
        { type: 'separator' },
        {
          role: 'hide'
        },
        {
          role: 'hideothers'
        },
        { type: 'separator' },
        {
          role: 'unhide'
        },
        { type: 'separator' },
        {
          role: 'quit'
        }
      ]
    });
  }

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// 应用启动时创建窗口
app.whenReady().then(createWindow);

// 当所有窗口关闭时退出应用（macOS 除外）
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// 当应用被激活时创建窗口（macOS）
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// 处理任何未捕获的异常
process.on('uncaughtException', (error) => {
  console.error('未捕获的异常:', error);
});
