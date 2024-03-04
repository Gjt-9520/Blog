---
title: "IDEA使用"
description: "快捷键和快速生成技巧"
publishDate: "2023 11 30"
tags: ["java","IDEA"]
---

## IDEA

项目结构介绍

project(项目)包含了module(模块)包含了package(包)包含了class(类)

## 技巧

### 快速生成

1.快速生成内方法:`psvm`

```
public class HelloWorld {
    //输入psvm后回车,自动生成内方法
    public static void main(String[] args) {
        //输入sout后回车,自动生成输出语句
        System.out.println();
    }
}
```

2.快速生成`for`循环:`循环次数.fori`

```
public class test {
    public static void main(String[] args) {
        //100.fori快速生成循环次数为100的for循环
        for (int i = 0; i < 100; i++) {
            System.out.printIn("HelloWorld");
        }
    }
}
```

### 键盘录入

定义:Java已经写好一个类叫Scanner,这个类可以接收键盘输入的数字

步骤:

1.导包

2.创建对象

3.接收数据

```
//步骤1:导包
//导包的动作必须出现在类定义的上边
import java.util.Scanner;
public class Main {
    public static void main(String[] args){
        //步骤2:创建对象
        //只有sc数变量名,可以变,其他的都不允许变
        Scanner sc = ew Scanner(System.in);
        System.out.println("请输入整数:");
        //步骤3:接收数据
        //只有i是变量名,可以变,其他的都不允许变
        int i = sc.nextInt();
        System.out.println(i);
    }
}
```

练习:键盘输入数字并求和

```
import java.util.Scanner;
public class Main {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.println("输入两个整数并求和");
        System.out.println("请输入第一个整数:");
        int number_01 = sc.nextInt();
        System.out.println("请输入第二个整数:");
        int number_02 = sc.nextInt();
        int count = number_01 + number_02;
        System.out.println("这两个整数之和为:" + count);
    }
}
```

## 快捷键

ctrl + alt + L    自动格式化代码

ctrl + X    剪切当前行或选中内容

ctrl + C    复制当前行或选中内容

ctrl + V    粘贴剪切板内容

ctrl + Z    撤销上一步操作

ctrl + shift + Z    恢复上一步被撤销的操作

ctrl + D    复制当前行并粘贴到下一行

ctrl + Y    删除当前行

ctrl + W    选中当前光标所在的单词

ctrl + shift + W    取消选中当前光标所在的单词

ctrl + /    注释当前行或选中内容

ctrl + shift + /    多行注释

shift + alt + 上下    代码上下移动

tab    代码右移

tab + shift    代码左移