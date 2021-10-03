#!/bin/sh

# 确保脚本抛出遇到的错误
set -e

# 1、生成静态文件
yarn run docs:build

# 2、进入生成的文件夹
cd docs/.vuepress/dist

# 3、提交
# 如果是发布到自定义域名
echo 'python.dreamagain.top' > CNAME

git init
git add -A
git commit -m 'deploy-update!'

# 如果想用username.gitee.io或者username.github.io访问你的网站，必须让新建的仓库名和你的用户名一致！！

# A:如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# B:如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

# 这里选择第二种方式，注意一定要添加 -f 参数
# 提交到github
git push -f git@github.com:small-universe/vuepress-python.git master:gh-pages
# 提交到gitee
# git push -f git@gitee.com:small-universe/vuepress-python.git master:gh-pages

# 提交静态文件到部署的仓库结束