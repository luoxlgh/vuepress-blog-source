# 配置mac

## 终端启动 App

::: tip Attention
背景：使用了 oh my zsh<br/>
修改 `~/.zsh` 文件后，需要运行 `source ~/.zshrc` 生效命令。
:::

- 启动 VS Code: 在 `~/.zsh` 中配置： `alias vscode="/Applications/Visual\ Studio\ Code.app/Contents/Resources/app/bin/code"`。 可以使用命令 `vscode .` 用 VS Code 打开当前目录。
- [启动 Idea](https://gist.github.com/chrisdarroch/7018927)： 在终端输入如下命令
``` bash
curl -L "https://gist.githubusercontent.com/chrisdarroch/7018927/raw/9a6d663fd7a52aa76a943fe8a9bc6091ad06b18d/idea" -o /usr/local/bin/idea
chmod +x /usr/local/bin/idea
```

## 自定义命令

### feat xxx
#### Step 1: 脚本
由于项目的分支命名规范是：`feature-20190711/xxx` 这种格式，每次新增分支都需要写一遍日期，有时候还会写错。因此写了个 shell 脚本来实现同日期下分支创建。

``` bash
#! /bin/bash
# 在当前分支中创建相同版本号的feature分支
if [ -z $1 ];then
    echo '请输入分支名'
else
    br=`git branch | grep "*"`
    version=`expr "$br" : '.*-\(20[0-9]\{6\}\)'`
    if [ -z $version ];then
        echo '呵，当前分支竟然没找到版本号'
    else
        git co -b "feature-${version}/$1"
    fi
fi
```
#### Step 2: 加入全局命令

- 将所有自定义脚本都放在 `~/command/mygit/` 文件夹下，上述文件命名为  `feat.sh`。
- 在 `~/.zsh` 中配置 `alias feat="~/command/mygit/feat.sh"`。

重新加载命令后，即可在终端使用 `feat xxx` 创建出 `feature-20190711/xxx` 格式的分支。<br />同样，也可以定制一些类似于回到主分支(`develop-20190711`)等功能的命令。

:eyes: TODO：应该也可以用js来做，node可以直接放在全局 :eyes: