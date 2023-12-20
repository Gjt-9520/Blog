---
title: "Java-入门上-笔记"
description: "Java入门"
publishDate: "2023 12 5"
tags: ["java"]
---
## fadsfaf
## JVM
定义:Java的虚拟机
说明:JDK包含了JRE,JRE包含了JVM

## JDK
定义:Java的开发工具包
说明:包括JVM、核心类库、开发工具

## JRE
定义:Java的运行环境
说明:包括JVM、核心类库、运行工具

## 注释
定义:对代码进行解释说明的文字
**注释不要嵌套**
1.单行注释:`//`
2.多行注释:`/* */`
3.文档注释:`/*** ***/`

```
public class Main {
    //main方法,表示程序的主入口
    public static void main(String[] args) {
        //输出语句(打印语句)
        System.out.println("Hello and welcome!");
    }
}
```

## 关键字
定义:被赋予特定含义的英文单词

**关键字的字母全部小写**
class用于创建/定义一个类

## 字面量
定义:数据在程序中的书写格式

1.整数类型
定义:不带小数点的数字
例如:`1314`

2.小数类型
定义:带小数点的数字
例如:`13.14`

3.字符串类型
定义:用双引号括起来的内容
例如:`"HelloWorld"`

4.字符类型
定义:用单引号括起来的,内容只能有一个
例如:`'H'`

5.布尔类型
定义:布尔值,表示真假
只有两个值:`true false`

6.空类型
定义:一个特殊的值,空值
值是`null`
**null不能直接打印,如果要打印null,只能用字符串的形式进行**

```
public class Main {
    public static void main(String[] args) {
        //整数
        System.out.println(666);
        //小数
        System.out.println(6.66);
        //字符串
        System.out.println("666是真6");
        //字符
        System.out.println('6');
        //布尔
        System.out.println(true);
        System.out.println(false);
        //空
        System.out.println("null");
    }
}
```

7.特殊字符
&emsp;制表符:`\t`
&emsp;说明:在打印的时候,把前面的字符串长度补齐到8或者8的整数倍。最少补1个空格,最多补8个空格
&emsp;作用:对齐数据

```
public class Main {
    public static void main(String[] args) {
        //其中abc占3个字符,而\t补齐5个字符
        System.out.println("abc" + '\t');
        //将数据对齐
        System.out.println("name" + '\t' + "age");
        System.out.println("Hugh" + '\t' + "23");
    }
}
```

## 变量
定义:在程序的执行过程中,其值有可能发生改变的量(数据)

1.格式`数据类型 变量名 = 数据值;`

```
public class Main {
    public static void main(String[] args) {
        int a = 10;
        System.out.println(a);
    }
}
```

2.使用场景
&emsp;①重复使用某个值
&emsp;②某个数据进场发生改变

3.使用方式
&emsp;①变量输出打印
&emsp;②变量参与计算
&emsp;③修改变量记录的值

```
public class Main {
    public static void main(String[] args) {
        //变量a输出打印
        int a = 10;
        System.out.println(a);
        //变量b、c参与计算
        int b = 20;
        int c = 30;
        System.out.println(b + c);
        //修改变量d记录的值
        int d = b + c;
        d = 66;
        System.out.println(d);
    }
} 
```

4.注意事项
&emsp;①变量只能存一个值
&emsp;②变量名不允许重复定义
&emsp;③一条语句可以定义多个变量
&emsp;④变量在使用之前一定要进行赋值
&emsp;⑤变量的作用域范围

```
public class Main {
    public static void main(String[] args) {
        //一条语句可以定义多个变量e、f、g
        int e = 77,f = 88,g = 99;
        System.out.println(e);
        System.out.println(f);
        System.out.println(g);
    }
}
```

练习:公交车

```
public class Main {
    public static void main(String[] args){
        //一开始没有乘客
        int count = 0;
        //第一站:上去一位乘客
        count = count + 1;
        //第二站:上去两位乘客,下来一位乘客
        count = count + 2 - 1;
        //第三站:上去两位乘客,下来一位乘客
        count = count + 2 - 1;
        //第四站:下来一位乘客
        count = count - 1;
        //第五站:上去一位乘客
        count = count + 1;
        //请问到了终点站,车上一共几位乘客？
        System.out.println("车上一共" + count + "位乘客");
    }
}
```

## 进制
1.不同进制在代码中的表现形式
&emsp;①二进制
&emsp;定义:由0和1组成,代码中以01开头

&emsp;②十进制
&emsp;定义:由0～9组成,前面不加任何前缀

&emsp;③八进制
&emsp;定义:由0～7组成,代码中以0开头

&emsp;④十六进制
&emsp;定义:由0～9还有a～f组成,代码中以0x开头

```
public class Main {
    public static void main(String[] args){
        //输出十进制数18
        System.out.println(18);
        //输出八进制数22,即18
        System.out.println(022);
        //输出二进制数10010,即18
        System.out.println(0b10010);
        //输出十六进制数12,即18
        System.out.println(0x12);
    }
}
```

2.任意进制转十进制
公式:`系数*基数的权次幂,再相加`
系数:每一位上的数
基数:当前进制数
权:从右往左,依次为0 1 2 3 4 5...

例:
二进制数 0b1011:1 * 2 ^ 3 + 0 + 1 * 2 ^ 1 + 1 * 2 ^ 0 = 11 对应十进制数 11
八进制数 0312:3 * 8 ^ 2 + 1 * 8 ^ 1 + 2 * 8 ^ 0 = 202 对应十进制数 202
十六进制数 0xabc:10 * 16 ^ 2 + 11 * 16 ^ 1 + 12 * 16 ^ 0 = 2748 对应十进制数 2748

3.二进制转十进制(8421快速转换法)
说明:
每一位二进制值的1都是代表一个固定数值 128 64 32 16 8 4 2 1 
把每一位的1代表的十进制数加起来的到的结果就是它代表的十进制数

例:
二进制数 0b1011:8 + 2 + 1 = 11 对应十进制数 11

4.十进制转其他进制(除基取余法)
说明:不断的除以基数(几进制,基数就是几)得到余数,直到商为0,再将余数倒着拼起来即可

例:
十进制数 11    
&emsp;11 / 2 = 5 …… 1   
&emsp;5 / 2  = 2 …… 1   
&emsp;2 / 2 = 1 …… 0
&emsp;1 / 2 = 0 …… 1 
对应二进制数 0b1011
&emsp;11 / 8 = 1 …… 3  
&emsp;3 / 8 = 0 …… 1   
对应的八进制数 013

## 数据类型
1.基本数据类型
①整数
关键字:`byte`
取值范围:-128 ～ 127 
内存占用:1
    
关键字:`short` 
取值范围:-32768 ～ 32767 
内存占用:2
    
关键字:`int` 
取值范围:-2147483648 ～ 21483647(10位数) 
内存占用:4
    
关键字:`long` 
取值范围:-9223372036854775808 ～ 9223372036854775807(19位数) 
内存占用:8
**如果要定义long类型的变量,在数据值的后面需要加一个L作为后缀**
**L可以是大写,也可以是小写,推荐大写**
    
②浮点数
关键字:`float` 
取值范围:-3.401298e-38 ～ 3.402823e+38 
内存占用:4
**如果要定义float类型的变量,在数据值的后面需要加一个F作为后缀**
**F可以是大写,也可以是小写,推荐大写**

关键字:`double` 
取值范围:-4.9000000e-324 ～ 1.797693e+308 
内存占用:8    
    
③字符
关键字:`char` 
取值范围:0 ～ 65535 
内存占用:2
  
④布尔
关键字:`boolean` 
取值范围:true,false 
内存占用:1

```
public class Main {
    public static void main(String[] args){
        //byte
        byte b = 10;
        System.out.println(b);
        //short
        short s = 20;
        System.out.println(s);
        //int
        int i = 30;
        System.out.println(i);
        //long
        long l = 9999999999L;
        System.out.println(l);
        //float
        float f = 2.0F;
        System.out.println(f);
        //double
        double d = 33.0;
        System.out.println(d);
        //char
        char c = '牛';
        System.out.println(c);
        //boolean
        boolean n = true;
        System.out.println(n);
    }
}
```

练习1:输出个人信息

```
public class Main {
    public static void main(String[] args){
        String name = "Hugh";
        int age = 23;
        char gender = '男';
        double height = 172.1;
        boolean marriage = false;
        System.out.println(name);
        System.out.println(age);
        System.out.println(gender);
        System.out.println(height);
        System.out.println(marriage);
    }
}
```

练习2:输出影视信息(名称、主演、年份、评分)

```
public class Main {
    public static void main(String[] args){
        String name = "前任攻略爱情公寓";
        String actor = "曾小贤,吕子乔,胡一菲";
        int year = 2023;
        double score = 9.1;
        System.out.println(name);
        System.out.println(actor);
        System.out.println(year);
        System.out.println(score);
    }
}
```

练习3:输出商品信息

```
public class Main {
    public static void main(String[] args){
        String brand = "Huawei Mate 30 Pro";
        double price = 6299.00;
        System.out.println(brand);
        System.out.println(price);
    }
}
```

2.引用数据类型

## 标识符
定义:给类、方法、变量等起的名字

1.命名规则—硬性要求
&emsp;①由数字、字母、下划线(_)和美元符($)组成
&emsp;②不能以数字开头
&emsp;③不能是关键字
&emsp;④区分大小写

2.命名规则—软性建议
&emsp;①小驼峰命名法
&emsp;适用:方法、变量

&emsp;规范1:标识符是一个单词的时候,全部小写
&emsp;范例1:`name`

&emsp;规范2:标识符由多个单词组成的时候,第一个单词首字母小写,其他单词首字母大写
&emsp;范例2:`firstName`

&emsp;②大驼峰命名法
&emsp;适用:类名

&emsp;规范1:标识符是一个单词的时候,首字母大写
&emsp;范例1:`Student`

&emsp;规范2:标识符由多个单词组成的时候,每个单词首字母大写
&emsp;范例2:`GoodStudent`

## 键盘录入
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

## IDEA

1.项目结构介绍
project(项目)包含了module(模块)包含了package(包)包含了class(类)

练习:快速生成内方法

```
public class HelloWorld {
    //输入psvm后回车,自动生成内方法
    public static void main(String[] args) {
        //输入sout后回车,自动生成输出语句
        System.out.println();
    }
}
```

## 运算符
定义:对字面量或者变量进行操作的符号
表达式:用运算符把字面量或者变量连接起来,符合Java语法的式子就可以称为表达式

例如:`int a = 10; int b = 20; int c = a + b;`
其中`+`是运算符,并且是算数运算符,`a + b`是表达式,并且是算数表达式

1.类型转换的分类
&emsp;①什么时候进行转换:
&emsp;数据类型不一样,不能进行计算,需要转成一样的才可以进行计算

&emsp;②隐式转换(自动类型提升):取值范围小的转换成取值范围大的
&emsp;取值范围:`byte < short < int < long < float < double` 
&emsp;提升规则:
&emsp;&emsp;a.取值范围小的和取值范围大的进行运算,小的会先提升为大的,再进行运算
&emsp;&emsp;例如:`int a = 10; double b = 11.1; c = a + b;`
&emsp;&emsp;其中a会先提升为double类型,输出c也是double类型
     
&emsp;&emsp;b.byte short char三种类型的数据在运算的时候,都会直接先提升为int,然后再进行运算
&emsp;&emsp;例如:`byte a = 20; short b = 30; c = a + b;`
&emsp;&emsp;其中a、b都会先提升为int,输出c也是int类型
  
&emsp;③强制转换:取值范围大的转换成取值范围小的
&emsp;格式:`目标数据类型 变量名 = (目标数据类型)被强转的数据;`
&emsp;例如:`double a = 12.3; int b = (int)a;`
&emsp;**强制转换有可能导致数据发生错误**
  
练习:强制转换

```
public class HelloWorld {
    public static void main(String[] args) {
        byte b1 = 10;
        byte b2 = 20;
        int result_01 = b1 + b2;
        System.out.println(result_01);
        byte result_02 = (byte)(b1 + b2);
        System.out.println(result_02);
    }
}
```

2.算数运算符
**在代码中,如果有小数参与计算,结果有可能不精确**
**整数参与计算,结果只能得到整数。要想得到小数,必须有浮点数参与运算**
**小数参与计算,结果可能不精确**

符号:`+`
作用:加
情况:
&emsp;①数字相加
&emsp;数字进行运算时,数据类型不一样不能运算,需要转换成一样的,才能运算 
  
&emsp;②字符串相加
&emsp;&emsp;a.当`+`操作中出现字符串时,这个`+`数字符串连接符,而不是算数运算符
&emsp;&emsp;这会将前后的数据进行拼接,并产生一个新的字符串
&emsp;&emsp;例如:`"123" + 123`的结果是`123123`
  
&emsp;&emsp;b.连续进行`+`操作时,从左到右逐个执行

练习:字符串相加

```
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println(1 + 99 + "GJT");         //结果:100GJT
        System.out.println("GJT" + 1 + 99);         //结果:GJT199
        System.out.println("GJT" + '牛' + true);    //结果:GJT牛true
    }
}
```

&emsp;③字符相加
&emsp;当`字符 + 字符`或者`字符 + 数字`时,会把字符通过ASCII码表查询到对应的数字再进行计算

练习:字符相加

```
public class HelloWorld {
    public static void main(String[] args) {
        char num_01 = 'a';                     //ASCII码表:a - 97
        char num_02 = 'c';                     //ASCII码表:c - 99
        System.out.println(num_01 + 2);        //结果:99
        System.out.println(num_01 + "bcd");    //结果:abcd
        System.out.println(num_01 + num_02);   //结果:196
    }
}
```

符号:`-`
作用:减

符号:`*`
作用:乘

符号:`/`
作用:除

符号:`%`
**实际上也是做除法运算,不过得到的是余数而已**
作用:取模、取余
应用场景:
&emsp;①可以用取模来判断A是否可以被B整除 `A % B`
&emsp;②可以判断A是否为偶数 `A % 2` 如果结果为0,则A为偶数;反之,则为奇数
&emsp;③斗地主发牌:把每一张牌都定义一个序号,把序号取模3。
&emsp;&emsp;如果结果为1,就发给第一个玩家;
&emsp;&emsp;如果结果为2,就发给第二个玩家;
&emsp;&emsp;如果结果为3,就发给第三个玩家;

```
public class HelloWorld {
    public static void main(String[] args) {
        int number_01 = 12;
        int number_02 = 8;
        // +
        System.out.println(number_01 + number_02);      //结果:20
        // -
        System.out.println(number_01 - number_02);      //结果:4
        // *
        System.out.println(number_01 * number_02);      //结果:96
        //在代码中,如果有小数参与计算,结果有可能不精确
        System.out.println(1.1 + 1.1);                  //结果:2.2
        System.out.println(1.1 + 1.01);                 //结果:2.1100000000000003
        // /
        System.out.println(number_01 / number_02);      //结果:1
        //整数参与计算,结果只能的到整数
        System.out.println(10 / 3);                     //结果:3
        //小数参与计算,结果可能不精确
        System.out.println(10.0 / 3);                   //结果:3.3333333333333335
        // %
        System.out.println(number_01 % number_02);      //结果:4
    }
}
```

练习:数值拆分
输入一个三位数,打印其个位、十位、百位
公式:
&emsp;&emsp;个位:数值 % 10
&emsp;&emsp;十位:数值 / 10 % 10
&emsp;&emsp;百位:数值 / 100 % 10 
&emsp;&emsp;千位:数值 / 1000 % 10 

```
import java.util.Scanner;

public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("请输入一个三位数:");
        Scanner sc = new Scanner(System.in);
        int number = sc.nextInt();
        //个位:数值 % 10
        int geWei = number % 10;
        //十位:数值 / 10 % 10
        int shiWei = number / 10 % 10;
        //百位:数值 / 100 % 10 
        int baiWei = number / 100 % 10;
        System.out.println("个位为:" + geWei);
        System.out.println("十位为:" + shiWei);
        System.out.println("百位为:" + baiWei);
    }
}
```

3.自增自减运算符
&emsp;①自增运算符
&emsp;符号:`++`
&emsp;作用:加
&emsp;说明:变量的值加1

&emsp;②自减运算符
&emsp;符号:`--`
&emsp;作用:减
&emsp;说明:变量的值减1

&emsp;③用法
&emsp;&emsp;a.单独使用
&emsp;&emsp;`++`和`--`即可以放在变量的前边,也可以放在变量的后边
&emsp;&emsp;`++`和`--`无论是放在变量的前边还是后边,单独写一行结果是一样的

```
public class HelloWorld {
    public static void main(String[] args) {
        int a = 10;
        a++;
        System.out.println(a);        //结果:11
        ++a;
        System.out.println(a);        //结果:12
        a--;
        System.out.println(a);        //结果:11
        --a;
        System.out.println(a);        //结果:10
    }
}
```

&emsp;&emsp;b.用法二:参与计算
&emsp;&emsp;&emsp;I.`a++`和`a--`:先用后加(减)
&emsp;&emsp;&emsp;&emsp;例如:`int a = 10; int b = a++;`其结果:b为10,a为11
&emsp;&emsp;&emsp;&emsp;`int a = 10; int b = a--;`其结果:b为10,a为9

&emsp;&emsp;&emsp;II.`++a`和`--a`:先加(减)后用
&emsp;&emsp;&emsp;&emsp;例如:`int a = 10; int b = ++a;`其结果:b为11,a为11
&emsp;&emsp;&emsp;&emsp;`int a = 10; int b = --a;`其结果:b为9,a为9

练习1

```
public class HelloWorld {
    public static void main(String[] args) {
        int a = 10;
        int b1 = a++;
        System.out.println(b1);        //结果:10
        System.out.println(a);         //结果:11
        int b2 = ++a;
        System.out.println(b2);        //结果:12
        System.out.println(a);         //结果:12
        int b3 = a--;
        System.out.println(b3);        //结果:12
        System.out.println(a);         //结果:11
        int b4 = --a;
        System.out.println(b4);        //结果:10
        System.out.println(a);         //结果:10
    }
}
```

练习2

```
public class HelloWorld {
    public static void main(String[] args) {
        int x = 10;
        int y = x++;
        int z = ++x;
        System.out.println("x:" + x);   //结果:x:12
        System.out.println("y:" + y);   //结果:y:10
        System.out.println("z:" + z);   //结果:z:12
    }
}
```

4.赋值运算符
&emsp;①符号:`=`
&emsp;&emsp;作用:赋值
&emsp;&emsp;说明:`int a = b;`将b的值给变量a

&emsp;②符号:`+=`
&emsp;&emsp;作用:加后赋值
&emsp;&emsp;说明:`int a += b;`将a+b的值给变量a

&emsp;③符号:`-=`
&emsp;&emsp;作用:减后赋值
&emsp;&emsp;说明:`int a -= b;`将a-b的值给变量a

&emsp;④符号:`*=`
&emsp;&emsp;作用:乘后赋值
&emsp;&emsp;说明:`int a *= b;`将a*b的值给变量a

&emsp;⑤符号:`/=`
&emsp;&emsp;作用:除后赋值
&emsp;&emsp;说明:`int a /= b;`将a/b的值(a/b的商)给变量a

&emsp;⑥符号:`%=`
&emsp;&emsp;作用:取余后赋值
&emsp;&emsp;说明:`int a %= b;`将a%b的值(a/b的余数)给变量a

**`+= -= *= /= %=`底层都隐藏了一个强制类型转换**

```
public class HelloWorld {
    public static void main(String[] args) {
        short s = 1;
        s += 1;                     //等同于s =(short)(s + 1)
        System.out.println(s);      //结果:2
    }
}
```

5.关系运算符(比较运算符)

**关系运算符的结果都是`boolean`类型,要么是true,要么是false**

&emsp;①符号:`==`
&emsp;&emsp;使用:`a == b`
&emsp;&emsp;说明:判断a和b的值是否相等,成立为true,不成立为false

&emsp;②符号:`!=`
&emsp;&emsp;使用:`a != b`
&emsp;&emsp;说明:判断a和b的值是否不相等,成立为true,不成立为false

&emsp;③符号:`>`
&emsp;&emsp;使用:`a > b`
&emsp;&emsp;说明:判断a是否大于b,成立为true,不成立为false

&emsp;④符号:`>=`
&emsp;&emsp;使用:`a >= b`
&emsp;&emsp;说明:判断a是否大于等于b,成立为true,不成立为false

&emsp;⑤符号:`<`
&emsp;&emsp;使用:`a < b`
&emsp;&emsp;说明:判断a是否小于b,成立为true,不成立为false

&emsp;⑥符号:`<=`
&emsp;&emsp;使用:`a <= b`
&emsp;&emsp;说明:判断a是否小于等于b,成立为true,不成立为false

练习:关系运算符

```
public class HelloWorld {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;
        int c = 30;
        System.out.println(a == b);     //结果:false
        System.out.println(b != c);     //结果:true
        System.out.println(a <= c);     //结果:true
        System.out.println(b < c);      //结果:true
        System.out.println(a >= b);     //结果:false
        System.out.println(b > c);      //结果:false
    }
}
```

练习:约会
&emsp;&emsp;键盘录入两个整数,表示你和你约会对象的时髦程度(手动录入0～10之间的整数,不能录入其他)
&emsp;&emsp;如果你的时髦程度大于你约会对象的时髦程度,相亲就成功,输出true;否则就输出false

```
import java.util.Scanner;

public class HelloWorld {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("请输入你的时髦程度（0～10）:");
        int fashion_01 = sc.nextInt();
        System.out.println("请输入相亲对象的时髦程度（0～10）:");
        int fashion_02 = sc.nextInt();
        boolean result = fashion_01 > fashion_02;
        System.out.println(result);
    }
}
```

6.逻辑运算符
&emsp;①符号:`&`
&emsp;&emsp;作用:逻辑与(且)
&emsp;&emsp;说明:并且,两边都为真,结果才是真(`两边都要满足`)

&emsp;②符号:`|`
&emsp;&emsp;作用:逻辑或
&emsp;&emsp;说明:或者,两边都为假,结果才是假(`两边满足一个`)

&emsp;③符号:`^`
&emsp;&emsp;作用:逻辑异或
&emsp;&emsp;说明:相同为false,不同为true

&emsp;④符号:`!`
&emsp;&emsp;作用:逻辑非
&emsp;&emsp;说明:取反

**取反的感叹号不要写多次,要么不写,要么只写一次**

练习:逻辑运算符

```
public class HelloWorld {
    public static void main(String[] args) {
        //&
        System.out.println(true & true);    //结果:true
        System.out.println(true & false);   //结果:false
        System.out.println(false & false);  //结果:false
        //|
        System.out.println(true | true);    //结果:true
        System.out.println(true | false);   //结果:true
        System.out.println(false | false);  //结果:false
        //^
        System.out.println(true ^ true);    //结果:false
        System.out.println(true ^ false);   //结果:true
        System.out.println(false ^ false);  //结果:false
        //!
        System.out.println(!false);         //结果:true
        System.out.println(!true);          //结果:false
    }
}
```

7.短路逻辑运算符
&emsp;①符号:`&&`
&emsp;&emsp;作用:短路与
&emsp;&emsp;说明:结果与`&`相同
&emsp;&emsp;但是有短路效果:左边为`false`,右边无论真假,整个表达式的结果一定是`false`

&emsp;②符号:`||`
&emsp;&emsp;作用:短路或
&emsp;&emsp;说明:结果与`|`相同
&emsp;&emsp;但是有短路效果:左边为`true`,右边无论真假,整个表达式的结果一定是`true`

**`&&`和`||`具备短路效果,即当左边的表达式能确定最终结果,那么右边就不执行**
**而`&`和`|`则无论左边是`true`还是`false`,右边都会继续执行**

&emsp;③范例1:登陆界面输入用户名和密码
&emsp;&emsp;判断用户名`&`判断密码,会出现:
&emsp;&emsp;&emsp;a.用户名正确,密码正确
&emsp;&emsp;&emsp;b.用户名正确,密码错误
&emsp;&emsp;&emsp;c.用户名错误,密码正确(可优化)
&emsp;&emsp;&emsp;d.用户名错误,密码错误(可优化)
&emsp;&emsp;而判断用户名`&&`判断密码,会出现:
&emsp;&emsp;&emsp;a.用户名正确 -> 需要判断密码
&emsp;&emsp;&emsp;b.用户名错误 -> 无需判断密码

&emsp;④范例2:丈母娘看你是否能娶她女儿
&emsp;&emsp;拥有房`|`拥有车,会出现:
&emsp;&emsp;&emsp;a.无房,有车
&emsp;&emsp;&emsp;b.无房,无车
&emsp;&emsp;&emsp;c.有房,有车(可优化)
&emsp;&emsp;&emsp;d.有房,无车(可优化)
&emsp;&emsp;而拥有房`||`拥有车,会出现:
&emsp;&emsp;&emsp;a.如果无房 -> 需要再看车
&emsp;&emsp;&emsp;b.如果有房 -> 无需再看车

练习1:短路逻辑运算符

```
public class HelloWorld {
    public static void main(String[] args) {
        //&&
        System.out.println(true && true);    //结果:true
        System.out.println(true && false);   //结果:false
        System.out.println(false && false);  //结果:false
        //||
        System.out.println(true || true);    //结果:true
        System.out.println(true || false);   //结果:true
        System.out.println(false || false);  //结果:false
    }
}
```

练习2:短路逻辑运算符

```
public class HelloWorld {
    public static void main(String[] args) {
        //使用&&情况
        int a = 10;
        int b = 20;
        boolean result_01 = ++a < 5 && ++b < 5;
        System.out.println(result_01);       //结果:false
        System.out.println(a);               //结果:11
        System.out.println(b);               //结果:20
        //使用&的情况
        int c = 10;
        int d = 20;
        boolean result_02 = ++c < 5 & ++d < 5;
        System.out.println(result_02);       //结果:false
        System.out.println(c);               //结果:11
        System.out.println(d);               //结果:21
    }
}
```

对比:
&emsp;①使用`&&`的情况:
&emsp;&emsp;其中左边`++a < 5`先运行:`a`自增`+ 1`,`a`变成11,而`11 < 5`,结果为`false`
&emsp;&emsp;所以无论`&&`右边是什么,`result`都是`false`,因此`++b`不会运行,`b`不会自增,`b`仍然是20

&emsp;②使用`&`的情况:
&emsp;&emsp;其中左边`++c < 5`先运行:`c`自增`+ 1`,`c`变成11,而`11 < 5`,结果为`false`
&emsp;&emsp;`&`会再运行右边,右边是`++d < 5`:`d`变成21,而`21 < 5`,结果为`false`
&emsp;&emsp;而`false & false`的最终结果是`false`

**最常用的逻辑运算符:`&& || !`**

练习3:数字6
&emsp;&emsp;&emsp;键盘录入两个整数
&emsp;&emsp;&emsp;如果其中一个为6,最终结果输出true
&emsp;&emsp;&emsp;如果它们的和为6的倍数,最终结果输出true
&emsp;&emsp;&emsp;其他情况都是false

我的答案

```
import java.util.Scanner;

public class HelloWorld {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("请输入第一个整数:");
        int number_01 = sc.nextInt();
        System.out.println("请输入第二个整数:");
        int number_02 = sc.nextInt();
        //判断其中一个数是否为6
        boolean result_01 = number_01 == 6 || number_02 == 6;
        //判断两数之和是否为6的倍数
        int count = number_01 + number_02;
        boolean result_02 = count % 6 == 0;
        System.out.println(result_01 || result_02);
    }
}
```

标准答案

```
import java.util.Scanner;

public class HelloWorld {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("请输入第一个整数:");
        int number_01 = sc.nextInt();
        System.out.println("请输入第二个整数:");
        int number_02 = sc.nextInt();
        //用短路逻辑运算符||去连接三个判断
        boolean result = number_01 == 6 || number_02 == 6 || (number_01 + number_02) % 6 == 0;
        System.out.println(result);
    }
}
```

8.三元运算符
作用:进行判断,根据判断的结果得到不同的内容




