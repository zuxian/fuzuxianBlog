#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd public

# 如果是发布到自定义域名
# echo 'fuzuxian.fun' > CNAME

git init
git add -A

git config user.name "zuxian"
git config user.email "zuxian_fu@163.com"

git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master
# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:zuxian/myBlog.git master:gh-pages
git push -f git@github.com:zuxian/fuzuxianBlog.git master:dist


# https://fuzuxian.fun/zuxian/myBlog/index.html

# https://fuzuxian.fun/zuxian/myBlog/index.html

# http://fuzuxian.fun/fuzuxianBlog/public/index.html

# zuxian.github.io

# http://zuxian.github.io/fuzuxianBlog/
# http://zuxian.github.io/myBlog/


# http://47.103.74.217:80


# http://localhost:8088




cd -
