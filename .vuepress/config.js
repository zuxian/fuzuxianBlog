module.exports = {
  "title": "fuzuxian",
  "description": "blog",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "文档",
        "icon": "reco-message",
        "items": [
          {
            "text": "小记",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      {
        "text": "关于我",
        "icon": "reco-message",
        "items": [
          {
            "text": "CSDN",
            "link": "https://blog.csdn.net/image_fzx",
            "icon": "zuxian-CSDN"
          },
          {
            "text": "GitHub",
            "link": "https://github.com/zuxian",
            "icon": "zuxian-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "sort"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "CSDN",
        "desc": "我的CSDN博客地址",
        "email": "zuxian_fu@163.com",
        "link": "https://blog.csdn.net/image_fzx"
      },
      {
        "title": "github",
        "desc": "我的github地址",
        "avatar": "./avatar.png",
        "link": "https://github.com/zuxian"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    // "lastUpdated": "Last Updated",
    "author": "fuzuxian",
    "authorAvatar": "/avatar.png",
    // "record": "xxxx",
    "startYear": "2017"
  },
  "markdown": {
    "lineNumbers": true
  }
}