---
title: "Git_Terminal_使用手册"
description: "简单介绍Git的流程及其常用的指令"
publishDate: "4 Nov 2023"
tags: ["git", "terminal"]
---

## [Git官方文档链接](https://git-scm.com/docs)

## 简称  
[dir] -- 路径  
[file] -- 文件   
[email] -- 邮箱  
[name] -- 用户名  
[branch] -- 分支
[message] -- 内容  
[refer] -- 提交记录  
[repository-link] -- 仓库路径  
[repository-branch] -- 远端分支  
[repository-name] -- 仓库名(远端名称)

## Git工作流程图  
![Git工作流程图](https://github.com/Gjt-9520/Image_Resources/raw/main/markdown_images/Git%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%A8%8B%E5%9B%BE.jpg)

### 指令  
1.clone(克隆):从远程仓库中克隆代码到本地仓库  
2.checkout(检出):从本地仓库中检出一个仓库分支然后进行修订  
3.add(添加):在提交前先将代码提交到暂存区  
4.commit(提交):提交到本地仓库,本地仓库中保存修改的各个历史版本  
5.fetch(抓取):从远程库,抓取到本地仓库,不进行任何的合并动作,一般操作比较少    
6.pull(拉取):从远程库拉到本地库,自动进行合并(merge),然后放到到工作区,相当于fetch+merge  
7.push(推送):修改完成后,需要和团队成员共享代码时,将代码推送到远程仓库  

## 基本配置  
### 设置用户信息  
`git config user.name "[name]"` -- 针对当前Git仓库,设置用户名  
`git config user.email "[email]"` -- 针对当前Git仓库,设置用户名邮箱   
  
`git config --global user.name "[name]"` -- 针对系统上所有的Git仓库,设置全局用户名  
`git config --global user.email "[email]"` -- 针对系统上所有的Git仓库,设置全局用户名邮箱    
  
### 查看配置信息  
`git config -l` -- 显示当前Git仓库的配置信息  
`git config -e` -- 针对当前Git仓库,编辑配置文件  

`git config -e --global` -- 针对系统上所有的Git仓库,编辑配置文件  

`git config --global user.name` -- 查看用户名  
`git config --global user.email` -- 查看用户邮箱  

## 初始化仓库  
`git init` -- 将当前目录转换成Git仓库  
`git init [dir]` -- 指定本地目录作为Git仓库  

## 克隆远程仓库  
`git clone [repository-link]` -- 克隆远程的Git仓库到当前目录内  
`git clone [repository-link] [dir]` -- 克隆远程的Git仓库到本地目录内  

## 检查文件状态  
`git status` -- 完整版  
`git status -s` -- 精简版  
  
状态:    
`C` -- 表示复制  
`R` -- 表示重命名  
`A` -- 表示新增文件  
`D` -- 表示删除文件  
`!` -- 表示忽略文件  
`?` -- 表示未跟踪文件  
`M` -- 表示文件发生改动  
`U` -- 表示更新但未合并  
`' '` -- (空格)表示文件未发生更改  

第一列字符表示仓库与暂存区之间的比较状态  
第二列字符表示暂存区与工作区之间的比较状态  

## Git add工作流程图   
![Git_add工作流程图](https://github.com/Gjt-9520/Image_Resources/raw/main/markdown_images/Git_add%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%A8%8B%E5%9B%BE.jpg)

## 添加文件到暂存区(跟踪文件)  

`git add [file1] [file2] ...` -- 添加一个或多个文件到暂存区  
`git add [dir]` -- 添加指定目录(包括子目录)到暂存区  

`git add .` -- 添加当前目录(工作区)下的所有文件到暂存区  
`git add -u` -- 将所有已被跟踪的文件提交到暂存区  

## 忽略文件提交到暂存区  
在工作区中创建.gitignore,在里面加入需要忽略的文件名即可  

## 撤销暂存区内的文件  
`git reset HEAD .` -- 撤销暂存区内的全部文件  
`git reset HEAD [file]` -- 撤销暂存区内的指定目标文件  
`git rm --cached [file]` -- 撤销暂存区内的指定目标文件   

## 查看提交日志  
`git log --all` -- 显示所有分支  
`git log --pretty=oneline` -- 将提交信息显示为一行  
`git log --abbrev-commit` -- 使得输出的commit更简短  
`git log --graph` -- 以图的方式显示所有分支  

`git reflog` -- 查看已经删除的提交记录  

## 添加指令的快捷键
在终端的编辑文件中添加`alias 新指令="原指令"`  
例如:使用zsh,在.zshrc中添加`alias git-log="git log --pretty=oneline --all --graph --abbrev-commit"`  
即可实现查看提交日志的快捷指令`git-log`  

## 版本回退  
HEAD说明:  
`HEAD`或者`HEAD~0` -- 当前版本  
`HEAD^`或者`HEAD~1` -- 上一个版本  
`HEAD^^`或者`HEAD~2` -- 上上一个版本  
`HEAD^^^`或者`HEAD~3` -- 上上上一个版本  

`git reset HEAD^` -- 回退所有内容到上一个版本    
`git reset HEAD^ [file]` -- 回退指定文件到上一个版本    

`git reset --mixed [refer]`或者`git reset [refer]` -- 保留工作区,清空暂存区  
`git reset --soft [refer]` -- 不删除工作区的改动代码,撤销git commit,不撤销git add  
`git reset --hard [refer]` -- 删除工作区的改动代码,撤销git commit,撤销git add  

## 将工作区内容或暂存区内容添加到仓库  
`git commit [file1] [file2] ...` -- 将已被跟踪的文件提交到仓库(包含工作区和暂存区),进入Vim命令界面输入提交记录的信息     
`git commit -m "[message]"` -- 提交暂存区内容到仓库,直接输入提交记录的信息   
`git commit -am "[message]"` -- (跳过git add)将所有已被跟踪的文件更改提交到仓库,直接输入提交记录的信息    

## 修改上一次提交记录的信息  
`git commit --amend` -- 进入Vim命令界面,修改上一次提交记录的信息  
`git commit --amend -m "[message]"` -- 直接修改上一次提交记录的信息   

## 比较文件之间的差异  
`git diff [file]` -- 显示暂存区和工作区之间的差异  
`git diff --cached [file]`或者`git diff --staged [file]` -- 显示暂存区和仓库之间的差异  
`git diff [refer1] [refer2]` -- 显示两次提交之间的差异  

## 分支  
HEAD相当于指针,一次只能指向一个分支,HEAD永远指向当前分支  

`git branch` -- 查看分支   

`git branch [branch]` -- 创建分支  

`git checkout [branch—name]` -- 切换分支  
`git checkout -b [branch—name]` -- (如果分支不存在)创建分支,并切换分支  

`git merge [branch]` -- 合并分支到主分支  

`git branch -d [branch]` -- 删除分支(需要做各种检查)    
`git branch -D [branch]` -- 强制删除分支(不做各种检查)   

`git branch -vv` -- 查看本地分支与远端分支的关联  

## Git开发流程图
![Git开发流程图](https://github.com/Gjt-9520/Image_Resources/raw/main/markdown_images/Git%E5%BC%80%E5%8F%91%E6%B5%81%E7%A8%8B%E5%9B%BE.jpg)

## 开发中分支使用原则与流程  
1.master(生产)分支  
线上分支,主分支,中小规模项目作为线上运行的应用对应的分支  

2.develop(开发)分支  
从master创建的分支,一般作为开发部门的主要开发分支  
如果没有其他并行开发不同期上线的要求,都可以在此版本进行开发  
阶段开发完成后,需要合并到master分支,准备上线  

3.feature或者XXX分支  
从develop创建的分支,一般是同期并行开发,但不同期上线时创建的分支  
分支上的研发任务完成后,需要合并到develop分支  

4.hotfix或者XXX分支  
从master派生的分支,一般作为线上bug修复使用  
修复完成后,需要合并到master、test、develop分支  

5.还有一些其他分支,例如test分支(用于代码测试)、pre分支(用于预上线)  

## Git远程仓库 
### 配置ssh公钥  
`ssh-keygen -t rsa` -- 本地生成ssh公钥  
`cat ~/.ssh/id_rsa.pub` -- 查看本地生成的ssh公钥  

`ssh -T git@gitee.com` -- 验证是否配置成功(以Gitee为例)  

### 添加远程仓库  
git remote add [repository-name] [repository-link]  
repository-name:默认是origin,取决于远端服务器设置  
repository-link:从远端服务器获取此URL  

`git remote add origin [repository-link]` -- 添加远程仓库  

### 查看远程仓库
`git remote` -- 查看远程仓库   

### 推送到远程仓库(远端分支)  
git push [-f] [--set-upstream] [branch]:[repository-branch]  
[-f]参数:强制推送(无视冲突,以推送的本地分支为准,强制用本地分支覆盖远端分支)  

`git push origin [branch]:[repository-branch]` -- 推送本地分支到远端分支  
`git push origin [branch]` -- 推送本地分支到远端分支(本地分支名和远端分支名相同)  

`git push [--set-upstream] [branch]:[repository-branch]` -- 推送本地分支到远端分支,同时建立起本地分支与远端分支的关联联系  
`git push` -- 推送到远端分支(当前分支已经和远端分支关联)  

### 从远程仓库(远端分支)中抓取和拉取  
`git fetch [repository-name] [repository-branch]` -- 将远程仓库里的更新都抓取到本地,不会进行合并(如果不指定远端名称和远端分支,则抓取所有分支)  

`git pull [repository-name] [repository-branch]` -- 将远程仓库里的修改都拉到本地并自动进行合并,等同于fetch+merge(如果不指定远端名称和远端分支,则拉取所有病更新当前分支)  

## 解决合并冲突流程图 
![解决合并冲突](https://github.com/Gjt-9520/Image_Resources/raw/main/markdown_images/%E8%A7%A3%E5%86%B3%E5%90%88%E5%B9%B6%E5%86%B2%E7%AA%81.jpg)  

## 解决冲突
当两个分支上对文件的修改存在冲突,例如同时修改了同一个文件的同一行,这时就需要手动解决冲突  

解决冲突步骤:  
1.处理文件中冲突的地方  
2.将解决完冲突的文件加入暂存区  
3.提交到仓库  