---
title: "Git_使用手册"
description: "简单介绍Git的流程及其常用的指令"
publishDate: "4 Nov 2023"
tags: ["git"]
---

简称:  
&emsp;&emsp;[dir] -- 路径  
&emsp;&emsp;[file] -- 文件  
&emsp;&emsp;[link] -- 链接  
&emsp;&emsp;[email] -- 邮箱  
&emsp;&emsp;[name] -- 用户名  
&emsp;&emsp;[message] -- 内容  
&emsp;&emsp;[refer] -- 提交记录  
&emsp;&emsp;[branch-name] -- 分支名  
&emsp;&emsp;[repository-link] -- 仓库路径  

Git工作流程图:  
![Git工作流程图](https://github.com/Gjt-9520/Image_Resources/raw/main/markdown_images/Git%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%A8%8B%E5%9B%BE.jpg)

指令:  
&emsp;&emsp;1.clone(克隆):从远程仓库中克隆代码到本地仓库  
&emsp;&emsp;2.checkout(检出):从本地仓库中检出一个仓库分支然后进行修订  
&emsp;&emsp;3.add(添加):在提交前先将代码提交到暂存区  
&emsp;&emsp;4.commit(提交):提交到本地仓库,本地仓库中保存修改的各个历史版本  
&emsp;&emsp;5.fetch(抓取):从远程库,抓取到本地仓库,不进行任何的合并动作,一般操作比较少    
&emsp;&emsp;6.pull(拉取):从远程库拉到本地库,自动进行合并(merge),然后放到到工作区,相当于fetch+merge  
&emsp;&emsp;7.push(推送):修改完成后,需要和团队成员共享代码时,将代码推送到远程仓库  

## 基本配置  
1.设置用户信息  
`git config user.name "[name]"` -- 针对当前Git仓库,设置用户名  
`git config user.email "[email]"` -- 针对当前Git仓库,设置用户名邮箱   
  
`git config --global user.name "[name]"` -- 针对系统上所有的Git仓库,设置全局用户名  
`git config --global user.email "[email]"` -- 针对系统上所有的Git仓库,设置全局用户名邮箱    
  
2.查看配置信息  
`git config -l` -- 显示当前Git仓库的配置信息  
`git config -e` -- 针对当前Git仓库,编辑配置文件  

`git config -e --global` -- 针对系统上所有的Git仓库,编辑配置文件  

`git config --global user.name` -- 查看用户名  
`git config --global user.email` -- 查看用户邮箱  

## 初始化仓库  
`git init` -- 将当前目录转换成Git仓库  
`git init [dir]` -- 指定本地目录作为Git仓库  

## 克隆仓库  
`git clone [link]` -- 克隆远程的Git仓库到当前目录内  
`git clone [link] [dir]` -- 克隆远程的Git仓库到本地目录内  

## 检查文件状态  
`git status` -- 完整版  
`git status -s` -- 精简版  

状态:  
&emsp;&emsp;`C` -- 表示复制  
&emsp;&emsp;`R` -- 表示重命名  
&emsp;&emsp;`A` -- 表示新增文件  
&emsp;&emsp;`D` -- 表示删除文件  
&emsp;&emsp;`!` -- 表示忽略文件  
&emsp;&emsp;`?` -- 表示未跟踪文件  
&emsp;&emsp;`M` -- 表示文件发生改动  
&emsp;&emsp;`U` -- 表示更新但未合并  
&emsp;&emsp;`' '` -- (空格)表示文件未发生更改  

&emsp;&emsp;第一列字符表示仓库与暂存区之间的比较状态  
&emsp;&emsp;第二列字符表示暂存区与工作区之间的比较状态  

## 添加文件到暂存区(跟踪文件)  

Git add工作流程图:  
![Git_add工作流程图](https://github.com/Gjt-9520/Image_Resources/raw/main/markdown_images/Git_add%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%A8%8B%E5%9B%BE.jpg)

`git add [file1] [file2] ...` -- 添加一个或多个文件到暂存区  
`git add [dir]` -- 添加指定目录(包括子目录)到暂存区  
`git add .` -- 添加当前目录(工作区)下的所有文件到暂存区  

`git add -u` -- 将所有已被跟踪的文件提交到暂存区  

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
 
## 忽略文件提交到暂存区  
在工作区中创建.gitignore,在里面加入需要忽略的文件名即可  

## 版本回退  
HEAD说明:  
&emsp;&emsp;&emsp;&emsp;&emsp;`HEAD`或者`HEAD~0` -- 当前版本  
&emsp;&emsp;&emsp;&emsp;&emsp;`HEAD^`或者`HEAD~1` -- 上一个版本  
&emsp;&emsp;&emsp;&emsp;&emsp;`HEAD^^`或者`HEAD~2` -- 上上一个版本  
&emsp;&emsp;&emsp;&emsp;&emsp;`HEAD^^^`或者`HEAD~3` -- 上上上一个版本  

`git reset HEAD^` -- 回退所有内容到上一个版本    
`git reset HEAD^ [file]` -- 回退指定文件的版本到上一个版本    

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

`git branch [branch-name]` -- 创建分支  

`git checkout [branch—name]` -- 切换分支  
`git checkout -b [branch—name]` -- (如果分支不存在)创建分支,并切换分支  

`git merge [branch-name]` -- 合并分支到主分支  

`git branch -d [branch-name]` -- 删除分支(需要做各种检查)  
`git branch -D [branch-name]` -- 强制删除分支(不做各种检查)  

## 解决冲突  
当两个分支上对文件的修改存在冲突,例如同时修改了同一个文件的同一行,这时就需要手动解决冲突  

解决冲突步骤:  
1.处理文件中冲突的地方  
2.将解决完冲突的文件加入暂存区  
3.提交到仓库  

## 开发中分支使用原则与流程  
Git开发流程图:  
![Git开发流程图](https://github.com/Gjt-9520/Image_Resources/raw/main/markdown_images/Git%E5%BC%80%E5%8F%91%E6%B5%81%E7%A8%8B%E5%9B%BE.jpg)

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

## Git远程仓库(以Gitee为例)  
1.配置ssh公钥  
`ssh-keygen -t rsa` -- 本地生成ssh公钥  
`cat ~/.ssh/id_rsa.pub` -- 查看本地生成的ssh公钥  
`ssh -T git@gitee.com` -- 验证是否配置成功  

2.添加远程仓库  
git remote add [远端名称] [仓库路径]  
远端名称:默认是origin,取决于远端服务器设置  
仓库路径:从远端服务器获取此URL  

`git remote add origin [repository-link]` -- 添加远程仓库  

`git remote` -- 查看远程仓库  

