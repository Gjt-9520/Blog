---
title: "Linux-Terminal-使用手册"
description: "展示Linux终端常用命令"
publishDate: "2023 11 12"
tags: ["terminal","linux"]
---

## 简称
- [file] -- 文件
- [folder] -- 文件夹
- [dir] -- 路径
- [message] -- 内容
- [order] -- 指令
- [link] -- 链接
- [name] -- 用户名
- [email] -- 邮箱
- [refer] -- 提交记录
  
## Linux_Terminal_常用指令
### 简单操作
- `sudo [order]` -- 赋予指令超级管理员权限
- `man [order]` -- 查看指令的具体用法
- `say [message]` -- 朗读message
- `echo [message]"` -- 输出message
- `echo [message] >> [file]` -- 把message这个内容放入文件中
- `touch [file]` -- 创建一个文件
- `open [file]` -- 打开文件
- `cat [file]` -- 打开文件并查看文件内容
- `rm [file]` -- 删除文件
- `mkdir [folder]` -- 创建文件夹
- `rmdir [folder]` -- 删除文件夹
- `pwd` -- 打印当前工作路径
- `clear` -- Terminal清屏
- `ls` -- 查看当前路径下面的所有文件
- `ls [folder]` -- 查看对应文件夹中的内容
- `ls -l` -- 列出最近Git提交记录以及对应修改的文件名
- `ls -l -a` -- 列出最近Git提交记录以及对应修改的文件名，隐藏的文件也会显示

### cd快速切换路径
- `cd ~`或者`cd` -- 将工作路径快速切换到root
- `cd -` -- 将工作路径切换到上一状态
- `cd ..` -- 切回到上一个工作路径
- `cd [folder]` -- 进入当前路径下的文件夹
- `cd /` -- 进入根目录
- `cd /[dir]` -- 进入指定目录(绝对路径)
- `cd ./[dir]` -- 进入指定目录(相对路径)

## Linux_Vim_使用手册

### Linux终端修改文件内容基本流程
①打开终端并进入要编辑的文件所在的目录
②输入命令`vim 文件名`打开文件
③使用箭头键移动光标到要修改的位置
④按下`i`键进入输入模式,开始编辑文件
⑤编辑完成后,按下`Esc`键退出输入模式
⑥输入`:wq`保存并退出文件

### 命令模式
输入`vim 文件名`进入命令模式,此状态下敲击键盘动作会被Vim视为命令,而非输入字符
- `i` -- 切换到输入模式，在光标当前位置开始输入文本
- `x` -- 删除当前光标所在处的字符
- `:` -- 切换到底线命令模式，以在最底一行输入命令
- `a` -- 进入插入模式，在光标下一个位置开始输入文本
- `o` -- 在当前行的下方插入一个新行，并进入插入模式
- `O` -- 在当前行的上方插入一个新行，并进入插入模式
- `dd` -- 删除当前行
- `yy` -- 复制当前行
- `p(小写)` -- 粘贴剪贴板内容到光标下方
- `P(大写)` -- 粘贴剪贴板内容到光标上方
- `u` -- 撤销上一次操作
- `Ctrl + r` -- 重做上一次撤销的操作
- `:w` -- 保存文件
- `:q` -- 退出Vim编辑器
- `:q!` -- 强制退出Vim编辑器，不保存修改

### 输入模式
在命令模式下按下`i`就进入了输入模式，使用`Esc`键可以返回到命令模式
- `字符按键以及Shift组合` -- 输入字符
- `Enter` -- 换行
- `BackSpace` -- 删除光标前一个字符
- `Del` -- 删除光标后一个字符
- `方向键` -- 在文本中移动光标
- `Home/End` -- 移动光标到行首/行尾
- `Page Up/Page Down` -- 上/下翻页
- `Insert` -- 切换光标为输入/替换模式，光标将变成竖线/下划线
- `Esc` -- 退出输入模式，切换到命令模式

### 底线命令模式
在命令模式下按下`:`就进入了底线命令模式,按`Esc`键可随时退出底线命令模式
- `:w` -- 保存文件。
- `:q` -- 退出Vim编辑器。
- `:wq` -- 保存文件并退出Vim编辑器。
- `:q!` -- 强制退出Vim编辑器，不保存修改。

## Git_常用指令
### 打开Git_GUI
- `gitk` -- 快速打开Git_GUI

### 查看Git全部子命令
- `git help -a` -- 查看Git全部子命令

### 初始化仓库
- `git init` -- 将当前目录转换成Git仓库,初始化,在工作路径上创建主分支
- `git init [dir]` -- 指定本地目录作为Git仓库
- `git clone [link]` -- 克隆远程的Git仓库到当前目录内
- `git clone [link] [dir]` -- 克隆远程的Git仓库到本地目录内

### 配置仓库
- `git config -l` -- 列出当前Git仓库的配置信息
- `git config -e` -- 针对当前Git仓库,编辑配置文件
- `git config -e --global` -- 针对系统上所有的Git仓库,编辑配置文件
 
### 设置提交代码时的用户信息
- `git config user.name [name]` -- 针对当前Git仓库,设置用户名
- `git config user.email [email]` -- 针对当前Git仓库,设置用户名邮箱 
- `git config --global user.name [name]` -- 针对系统上所有的Git仓库,设置全局用户名
- `git config --global user.email [email]` -- 针对系统上所有的Git仓库,设置全局用户名邮箱 

### 检查文件状态
- `git status` -- 检查文件状态(完整版)
- `git status -s` -- 检查文件状态(精简版)
- 状态:
&emsp;第一列字符表示版本库与暂存区之间的比较状态
&emsp;第二列字符表示暂存区与工作区之间的比较状态
&emsp;1.`' '` -- (空格)表示文件未发生更改
&emsp;2.`M` -- 表示文件发生改动
&emsp;3.`A` -- 表示新增文件
&emsp;4.`D` -- 表示删除文件
&emsp;5.`R` -- 表示重命名
&emsp;6.`C` -- 表示复制
&emsp;7.`U` -- 表示更新但未合并
&emsp;8.`?` -- 表示未跟踪文件
&emsp;9.`!` -- 表示忽略文件

### 添加文件到暂存区(跟踪文件)
- `git add [file1] [file2] ...` -- 添加一个或多个文件到暂存区
- `git add [dir]` -- 添加指定目录(包括子目录)到暂存区
- `git add .` -- 添加当前目录下的所有文件到暂存区

### 删除放入暂存区的文件
- `git rm [file]` -- 

### 将工作区内容或暂存区内容添加到版本库
- `git commit -m [message]` -- 提交暂存区内容到版本库,直接输入提交信息
- `git commit -am [message]` -- (跳过git add)将所有已被跟踪的文件更改提交到版本库,直接输入提交信息

### 查看提交记录和修改历史
- `git log` -- 查看提交记录
- `git blame [file]` -- 查看文件的修改历史

## 比较文件在暂存区和工作区的差异
- 显示已写入暂存区的文件和已经被修改但尚未写入暂存区文件之间的区别
- `git diff` -- 尚未缓存的改动
- `git diff` -- 查看已缓存的改动
- `git diff HEAD` -- 查看已缓存的与未缓存的所有改动
- `git diff --stat` -- 显示摘要而非整个diff
- 应用场景:
&emsp;1.`git diff [file]` -- 显示暂存区和工作区之间的差异
&emsp;2.`git diff --cached [file]`或者`git diff --staged [file]` -- 显示暂存区和版本库之间的差异
&emsp;3.`git diff [refer1] [refer2]` -- 显示两次提交之间的差异

## 回退版本
- HEAD说明
&emsp;1.`HEAD`或者`HEAD~0` -- 表示当前版本
&emsp;2.`HEAD^`或者`HEAD~1` -- 上一个版本
&emsp;3.`HEAD^^`或者`HEAD~2` -- 上上一个版本
&emsp;4.`HEAD^^^`或者`HEAD~3` -- 上上上一个版本
- `git reset [--soft | --mixed | --hard] HEAD` -- 重置暂存区的文件与版本库的文件保存一致,工作区内容保持不变
- `git reset HEAD^` -- 回退所有内容到上一个版本  
- `git reset HEAD^ [file]` -- 回退指定文件的版本到上一个版本  
- `git reset [refer]` --  回退到指定版本
- `git reset --mixed HEAD [refer]`或者`git reset HEAD [refer]` -- 保留工作区,清空暂存区
- `git reset --soft HEAD [refer]` -- 不删除工作区的改动代码,撤销commit,不撤销git add
- `git reset --hard HEAD [refer]` -- 删除工作区的改动代码,撤销commit,撤销git add

## 撤销暂存区内的文件
- `git reset HEAD .` -- 撤销暂存区内的全部文件
- `git reset HEAD [file]` -- 撤销暂存区内的指定目标文件
- `git rm --cached [file]` -- 撤销暂存区内的指定目标文件  









- `git push -- force` -- 强制推送



- `git clone 地址 // 克隆远程仓库

- `git clone -b 分支名 地址 // 克隆分支的代码到本地





- `git checkout -- file // 撤销工作区的修改 例如- `git checkout -- readMe.txt 将本次readMe.txt在工作区的修改撤销掉




若已经有若干文件放入仓库，再次提交可以不用- `git add和- `git commit -m "备注信息" 这2步， 直接用

- `git commit -am "备注信息" // 将内容放至仓库 也可用- `git commit -a -m "备注信息"

- `git commit中的备注信息尽量完善 养成良好提交习惯 例如 - `git commit -m "变更(范围)：变更的内容"



- `git config --global credential.helper wincred // 存储凭证 (可用于输入一次用户密码后，不再输入 有时我们已经用SSH key 绑定关联好了 但是每次git提交的时候 还是需要你输入用户名密码 在这个时候 敲入这个命令 将凭证存储起来 用户名密码就不需要再次输入了)




11.删除放入暂存区文件的方法（已commit后）

- `git rm 文件名 // 将该文件从commit后撤回到add后

- `git reset HEAD^ --hard // 删除后 可以用- `git rm 文件名再回撤一步

修改文件名以及移动
- `git mv a b // 把a文件名字改成b 并且直接放入- `git add后的暂存区
- `git mv b ./demos/ // 把b文件移动到demos文件夹下

对比工作区，暂存区，仓库的差异
- `git diff // 查看变更 工作区与暂存区的差异比对
- `git diff --cached // 暂存区与提交版本的差异
- `git diff HEAD // 工作区与仓库中最后一次提交版本的差别
- `git diff 版本哈希值 版本哈希值 // 查看这2个版本哈希之间的区别
或者 - `git diff HEAD~数字 HEAD~数字
 
- `git diff tt 就是倒数第5个版本与第一个版本之间的差异

- `git diff --cached tt 暂存区与倒数第5个版本之间的比对

查看提交信息
- `git show HEAD // 查看最后一次提交修改的详细信息 也可以用- `git show 哈希值 查看对应的内容
- `git show HEAD^ // 查看倒数第二次的提交修改详细信息
- `git show HEAD^^ 或者- `git show HEAD~2 查看前2次变更
- `git show HEAD 或 - `git show 哈希值 或者- `git show tag(标签名) 都可以查看最近一次提交的详细信息
变基操作，改写历史提交 把多次提交合并起来

- `git rebase -i HEAD~3 变基之后的哈希值与之前的不同 证明变基是重新做的提交 把多次提交合并成了几次提交
回撤操作
- `git commit --amend -m "提交信息" // 回撤上一次提交并与本次工作区一起提交
- `git reset HEAD~2 --hard // 回撤2步
- `git reset --files // 从仓库回撤到暂存区
- `git reset HEAD // 回撤暂存区内容到工作目录
- `git reset HEAD --soft 回撤提交到暂存区
- `git reset HEAD --hard // 回撤提交 放弃变更 (慎用)
- `git reset HEAD^  // 回撤仓库最后一次提交
- `git reset --soft HEAD^ // 将执行- `git commit 并没有执行- `git push到远程仓库的内容 回撤到工作区 并且保存在工作区
- `git reset --hard HEAD^ // 将执行- `git commit 并没有执行- `git push到远程仓库的内容 回撤并且不保存
// 注意 在window电脑端 可能会出现执行- `git reset --hard HEAD^命令时 提示More? 所以针对windows 我们回撤内容需要键入- `git reset --hard HEAD^^才可以 如果我们- `git commit提交2次 想把2次都回撤到工作区保存 可以使用- `git reset --soft HEAD~2
- `git reset --hard commitid // 回撤到该次提交id的位置 回撤后本地暂存区可能有内容 本地仓库有要同步的内容 此时 丢弃掉暂存区的内容 并且强制将本地的内容推送至远程仓库 执行下面的命令 - `git push -u -f origin 分支名 这样就可以完全回撤到提交id的位置
- `git reset --soft commitid // 回撤到该次提交id的位置 并将回撤内容保存在暂存区
- `git push -f -u origin 分支名 所有内容都回撤完了 将回撤后的操作强制推送到远程分支
- `git push origin/分支名 --force 强制将本地回撤后的操作 强制推送到远程分支
标签操作
- `git tag // 查看列出所有打过的标签名 例如V1.1 V1.11 V1.12 V1.13等
- `git tag -d 标签名 // 删除对应标签 只是删除了本地的
- `git push origin :refs/tags/远程标签名 // 删除远程仓库的标签 可以在删除本地标签后 执行这个操作 同步远程
- `git tag 标签名字 // 在当前仓库打个标签
- `git tag 标签名 commitid // 给已知提交id的版本打标签 例如- `git tag v1.1.1 6f8f25fcf57a17e6c72b33f6bca0797fab15ff8b // 给历史提交打V1.1.1的tag标签 这里的commitid可以缩写 缩写成前6位就可以 例如- `git tag V1.1.1 6f8f25 一样可以给这个提交id打上tag
- `git tag -l // 过滤tag 例如 - `git tag -l "V1.1*" // V1.1 V1.11 可以过滤前面是V1.1开头的内容
- `git show 标签名称 // 查看tag的详细信息 包括commitid 作者信息 日期 内容
- `git push origin 标签名称 // 同步这个tag到远程服务器 默认tag是打在本地的 这个命令可以把它推到远程
- `git push origin --tags // 将本地所有tag推送到远程服务器
- `git pull --tags // 把远程仓库的标签也拉取下来
- `git tag foo -m "message" // 在当前提交上，打标签foo 并给message信息注释
- `git tag 标签名 哈希值 -m "message" // 在某个哈希值上打标签并且写上标签的信息
- `git tag foo HEAD~4 // 在当前提交之前的第4个版本上 打标签foo
 
- `git stash // 把暂存区的内容 暂时放在其他中 使暂存区变空

- `git stash list // 查看stash了哪些存储

- `git stash pop // 将stash中的内容恢复到当前目录，将缓存堆栈中的对应stash删除

- `git stash apply // 将stash中的内容恢复到当前目录，不会将缓存堆栈中的对应stash删除

- `git stash clear // 删除所有缓存的stash

- `git reset --hard // 回撤- `git stash pop的内容

分支
- `git branch 分支名 // 新建分支
- `git branch // 查看当前所有分支
- `git checkout 分支名 // 检出分支
- `git checkout -b 分支名 // 创建并切换分支
- `git checkout commitId 文件名（文件路径下的文件名） 还原这个文件到对应的commitId的版本
（例如src/page/attendance/attendanceSum.vue我想把它还原到2个版本之前 首先- `git log src/page/attendance/attendanceSum.vue找到对应想要还原的版本
复制版本提交的commitID 然后执行- `git checkout commitID src/page/attendance/attendanceSum.vue
这样就把attendanceSum.vue这个单个文件 还原到了对应版本）
- `git branch -v // 查看分支以及提交hash值和commit信息
- `git merge 分支名 // 把该分支的内容合并到现有分支上
- `git cherry-pick commitId // 把其他分支的某一次提交内容合并到当前分支 这个在我们平时多分支开发中很常用
- `git branch -d 分支名 // 删除分支
- `git branch -D 分支名 // 强制删除 若没有其他分支合并就删除 d会提示 D不会
- `git branch -m 旧分支名 新分支名 // 修改分支名
- `git branch -M 旧分支名 新分支名 // 修改分支名 M强制修改 若与其他分支有冲突也会创建(慎用)
- `git branch -r // 列出远程分支(远程所有分支名)
- `git branch -a // 查看远程分支(列出远程分支以及本地分支名 远程分支会以remote/origin/分支名这种形式展示 红色标识)
- `git branch // 查看本地分支
- `git reflog show --date=iso <branch name> // 查看分支创建时间 例如- `git reflog show --date=iso origin/feature-PCDEC-6375 输出 88e22885 (HEAD -> feature-PCDEC-6375, origin/feature-PCDEC-6375, origin/EC-master, EC-master) refs/remotes/origin/feature-PCDEC-6375@{2021-07-27 11:31:23 +0800}: fetch: storing head 创建时间就是2021-07-27 11:31:23
- `git fetch // 更新remote索引
- `git push -u origin 分支名 // 将本地分支推送到origin主机，同时指定origin为默认主机，后面就可以不加任何参数使用- `git push 也可解决 - `git建立远程分支关联时出现fatal ... upstram的问题
- `git push origin --delete 分支名 (将- `git branch -D 分支名 删掉的分支 同步到远程主机 将origin/分支名的该分支也删除掉)
- `git remote show origin 查看remote地址，远程分支，还有本地分支与之相对应关系等信息(结合- `git branch -a使用)
- `git remote prune origin 删除远程仓库不存在的分支 (- `git branch -a使用)
- `git reflog show --date=iso 分支名 // 查看指定分支的创建时间 以及更改记录等