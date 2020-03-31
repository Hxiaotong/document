# Git
## 常用命令
1. 将远程git仓库里的指定分支拉取到本地（本地不存在的分支）
```js
git checkout -b 本地分支名 origin/远程分支名
```

2. 把某个分支上的内容都拉取到本地
```js
git pull origin dev(远程分支名称)
```

3. 把远程分支拉到本地
```js
git fetch origin dev（dev为远程仓库的分支名）
```

4. 删除本地分支
```js
git branch -d branchName
```

5. 删除远程分支
```js
git push origin --delete branchName
```

6. 更换git仓库
方法有三种：
1. 修改命令
```js
git remote origin set-url [url]
```
2. 先删后加
```js
git remote rm origin
git remote add origin [url]
```
3. 直接修改config文件
```js
git remote set-url origin https://XXXXX/XXXX.git
```

7. git克隆时指定项目名称
```js
git clone https://XXXXXX/XX/XXXXX.git myDirName
```

8. 清除本地的分支（远程仓库不存在的分支）
```js
git remote prune origin
```

9. 强行提交
```js
git push origin master -f
```

## 批量删除分支
批量删除git 本地分支、远程分支、tag

1. 批量删除本地分支
```js
git branch -a | grep -v -E 'master|develop' | xargs git branch -D
```
2. 批量删除远程分支
```js
git branch -r| grep -v -E 'master|develop' | sed 's/origin\///g' | xargs -I {} git push origin :{}
```
3. 如果有些分支无法删除，是因为远程分支的缓存问题，可以使用
```js
git remote prune
```
4. 批量删除本地tag
```js
git tag | xargs -I {} git tag -d {}
```
5. 批量删除远程tag
```js
git tag | xargs -I {} git push origin :refs/tags/{}
```
6. 用到命令说明
```js
grep -v -E 排除master 和 develop
-v 排除
-E 使用正则表达式
xargs 将前面的值作为参数传入 git branch -D 后面
-I {} 使用占位符 来构造 后面的命令
```