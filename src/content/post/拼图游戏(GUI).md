---
title: "拼图游戏(GUI)"
description: "用户登录界面;拼图游戏具体功能"
publishDate: "2024 01 13"
tags: ["java基础","java","GUI","项目"]
---

## GUI

是指采用图形化的方式显示操作界面

## 需求分析

### 创建界面

`JFrame`:窗体

#### 主界面

```java
package ui;

import javax.swing.*;

//主界面
public class GameJFrame extends JFrame {

    //在创建登录界面的时候,同时给这个界面去设置一些信息
    //通过构造函数即实现界面的初始化
    public GameJFrame(){
        //设置界面的宽高
        this.setSize(603, 680);
        //设置界面的标题
        this.setTitle("拼图游戏");
        //设置界面置顶
        this.setAlwaysOnTop(true);
        //设置界面居中
        this.setLocationRelativeTo(null);
        //设置关闭模式
        this.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
        //让界面显示出来,建议写在最后
        this.setVisible(true);
    }
}
```

#### 登录界面

```java
package ui;

import javax.swing.*;

//游戏的登录界面
public class LoginJFrame extends JFrame {

    //在创建登录界面的时候,同时给这个界面去设置一些信息
    //通过构造函数即实现界面的初始化
    public LoginJFrame() {
        //设置界面的宽高
        this.setSize(488, 430);
        //设置界面的标题
        this.setTitle("登录界面");
        //设置界面置顶
        this.setAlwaysOnTop(true);
        //设置界面居中
        this.setLocationRelativeTo(null);
        //设置关闭模式
        this.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
        //让界面显示出来,建议写在最后
        this.setVisible(true);
    }
}
```

#### 注册界面

```java
package ui;

import javax.swing.*;

//游戏的注册界面
public class RegisterJFrame extends JFrame {

    //在创建登录界面的时候,同时给这个界面去设置一些信息
    //通过构造函数即实现界面的初始化
    public RegisterJFrame(){
        //设置界面的宽高
        this.setSize(488, 500);
        //设置界面的标题
        this.setTitle("注册界面");
        //设置界面置顶
        this.setAlwaysOnTop(true);
        //设置界面居中
        this.setLocationRelativeTo(null);
        //设置关闭模式
        this.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
        //让界面显示出来,建议写在最后
        this.setVisible(true);
    }
}
```

### 启动入口

```java
import ui.GameJFrame;
import ui.LoginJFrame;
import ui.RegisterJFrame;

//程序的启动入口
public class APP {
    public static void main(String[] args) {

        //如果想要开启一个界面,创建该界面的对象即可
        new LoginJFrame();
        new RegisterJFrame();
        new GameJFrame();
    }
}
```

### 制作菜单

`JMenuBar`:菜单栏

`JMenu`:菜单项

`JMenuItem`:菜单条目(即下拉框)

```java
package ui;

import javax.swing.*;

//游戏的主界面
public class GameJFrame extends JFrame {

    //构造方法实现初始化
    public GameJFrame() {
        //初始化界面
        initJFrame();
        //初始化菜单栏
        initJMenuBar();
        //让界面显示出来,建议写在最后
        this.setVisible(true);
    }

    //初始化菜单栏
    private void initJMenuBar() {
        //初始化菜单
        //创建菜单栏
        JMenuBar jMenuBar = new JMenuBar();
        //创建菜单项:功能、关于我们
        JMenu functionJMenu = new JMenu("功能");
        JMenu aboutJMenu = new JMenu("关于我们");
        //创建菜单条目
        JMenuItem rePlayItem = new JMenuItem("重新游戏");
        JMenuItem reLoginItem = new JMenuItem("重新登录");

        JMenuItem accountItem = new JMenuItem("公众号");

        //将每一个菜单项下面的菜单条目添加到菜单项当中
        functionJMenu.add(rePlayItem);
        functionJMenu.add(reLoginItem);
        aboutJMenu.add(accountItem);

        //将每一个菜单项添加到菜单栏当中
        jMenuBar.add(functionJMenu);
        jMenuBar.add(aboutJMenu);

        //给界面设置菜单
        this.setJMenuBar(jMenuBar);
    }

    //初始化界面
    private void initJFrame() {
        //设置界面的宽高
        this.setSize(603, 680);
        //设置界面的标题
        this.setTitle("拼图游戏");
        //设置界面置顶
        this.setAlwaysOnTop(true);
        //设置界面居中
        this.setLocationRelativeTo(null);
        //设置关闭模式
        this.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
        //取消默认的居中放置(取消后才会按照XY轴的方式添加组件)
        this.setLayout(null);
    }
}
```

### 添加图片

`ImageIcon`:图片对象

`JLabel`:管理文字和图片的容器

```java
//初始化图片
private void initImage() {
    //计数器,用来加载1~15张图片
    int number = 1;
    //外循环:把内循环重复执行4次,即执行4行
    for (int j = 0; j < 4; j++) {
        //内循环:每行添加4张图片
        for (int i = 0; i < 4; i++) {
            //创建图片
            ImageIcon icon = new ImageIcon("image/animal/animal3/" + number + ".jpg");
            //创建管理容器
            JLabel jLabel = new JLabel(icon);
            //指定图片位置
            jLabel.setBounds(105 * i, 105 * j, 105, 105);
            //将管理容器添加到界面(隐藏容器)当中
            this.getContentPane().add(jLabel);
            //添加一次后number需要自增,表示下一次加载后面一张图片
            number++;
        }
    }
}
```

### 打乱图片

```java
package ui;

import javax.swing.*;
import java.util.Random;

//游戏的主界面
public class GameJFrame extends JFrame {
    //创建一个4*4的二维数组
    //目的:用来管理数据
    //加载图片的时候,会根据二维数组中的数据进行加载
    int[][] data = new int[4][4];

    //构造方法实现初始化
    public GameJFrame() {
        //初始化界面
        initJFrame();
        //初始化菜单栏
        initJMenuBar();
        //初始化图片顺序(打乱)
        initData();
        //初始化图片
        initImage();
        //让界面显示出来,建议写在最后
        this.setVisible(true);
    }

    //初始化图片顺序(打乱)
    private void initData() {
        //创建一个一维数组
        int[] tempArr = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15};
        Random random = new Random();
        //遍历一维数组,得到每一个元素,拿着每一个元素跟随机索引上的数据进行交换
        for (int i = 0; i < tempArr.length; i++) {
            //获取随机索引
            int randomIndex = random.nextInt(16);
            //拿着每一个元素跟随机索引上的数据进行交换
            int temp = tempArr[i];
            tempArr[i] = tempArr[randomIndex];
            tempArr[randomIndex] = temp;
        }
        //遍历二维数组
        int index = 0;
        for (int i = 0; i < data.length; i++) {
            for (int j = 0; j < data[i].length; j++) {
                //给其中的每一个数据赋一维数组中每一个元素的值
                data[i][j] = tempArr[index];
                index++;
            }
        }
    }

    //初始化图片
    private void initImage() {
        //外循环:把内循环重复执行4次,即执行4行
        for (int j = 0; j < 4; j++) {
            //内循环:每行添加4张图片
            for (int i = 0; i < 4; i++) {
                int number = data[i][j];
                //创建图片
                ImageIcon icon = new ImageIcon("image/animal/animal8/" + number + ".jpg");
                //创建管理容器
                JLabel jLabel = new JLabel(icon);
                //指定图片位置
                jLabel.setBounds(105 * i, 105 * j, 105, 105);
                //将管理容器添加到界面(隐藏容器)当中
                this.getContentPane().add(jLabel);
            }
        }
    }
}
```

## 事件

