



# Docker入门

## 一、Docker概述

### 01 | Docker为什么出现？

一款产品∶开发--上线两套甚至多套环境!应用环境，应用配置!

开发…运维。**问题**︰我在我的电脑上可以运行!版本更新，导致服务不可用!对于运维来说，考验就十分大。

环境配置是十分的麻烦，每一个机器都要部署环境（集群Redis、ES、Hadoop.....)!费时费力。

发布一个项目( jar + ( Redis MySQL jdk ES ))，项目能不能都带上环境安装打包!

之前在服务器配置一个应用的环境Redis MySQL jdk ES Hadoop，配置超麻烦了，不能够跨平台。

Windows，最后发布到Linux !

传统：开发构建成jar，发布由运维来负责

现在：开发打包部署上线，一套流程做完!



java -- apk --发布（应用商店)----张三使用apk ---安装即可用!

java -- jar（环境.).....打包项目带上环境(镜像:) … ( Docker仓库:商店 ) …下载我们发布的镜像....直接运行即可!

Docker给以上的问题，提出了解决方案!



JRE--多个应用（端口冲突)---原来都是交叉的!

隔离：Docker核心思想!打包装箱!每个箱子是互相隔离的。水果―生化武器

Docker 通过隔离机制，可以将服务器利用到极致!

本质：所有的技术都是因为出现了一些问题，我们需要去解决，才去学习!。

### 02 | Docker的历史

2010年，几个搞IT的年轻人，就在美国成立了一家公司dotcloud

做一些pass的云计算服务!LXC有关的容器技术!

他们将自己的技术(容器化技术)命名就是Docker !

Docker刚刚诞生的时候，没有引起行业的注意! dotCloud，就活不下去!

开源-----开发源代码! 开源成就了Docker

2013年，Docker开源!

Docker越来越多的人发现了docker的优点!火了，Docker每个月都会更新一个版本!2014年4月9日，Docker1.0发布!

Docker为什么这么火?十分的轻巧!

在容器技术出来之前，我们都是使用虚拟机技术!

虚拟机：在window中装一个Vmware，通过这个软件我们可以虚拟出来一台或者多台电脑!**笨重!**虚拟机也是属于虚拟化技术，Docker容器技术，也是一种虚拟化技术!

```
vm :  linux centos原生镜像（一个电脑!)   隔离，需要开启多个虚拟机!    几个G     几分钟

docker:   隔离，  镜像（最核心的环境 4m + jdk + mysql)十分的小巧，运行镜像就可以了!   小巧!  几个M  KB   秒级启动!
```



> 聊聊Docker

Docker是基于Go语言开发的!开源项目

官网：https://www.docker.com/

文档地址：https://docs.docker.com/

仓库地址：https://hub.docker.com/

### 03 | Docker能干什么？

> 虚拟机技术

虚拟机技术缺点∶

1、资源占用十分多

2、冗余步骤多

3、启动很慢!



> 容器化技术

容器化技术不是模拟的一个完整的操作系统

![image-20210720092438527](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20210720092438527-2021-10-419:52:04.png)

比较Docker和虚拟机技不的个同:

- 传统虚拟机，虚拟出一条硬件，运行一个完整的操作系统，然后在这个系统上安装和运行软件

- 容器内的应用直接运行在宿主机的内核，容器是没有自己的内核的，也没有虚拟我们的硬件，所以就轻便了

- 每个容器间是互相限离，每个容器内都有一个属于自己的文件系统，互不影响

  

## 二、Docker安装

### 01 | Docker的基本组成

![image-20210719234751466](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20210719234751466-2021-10-4-19:52:47.png)

**镜像（ image ) :**

Docker镜像就好比是一个模板，可以通过这个模板来创建容器服务，tomcat镜像===>run ==> tomcat01容器(提供服务器），通过这个镜像可以创建多个容器（最终服务运行或者项目运行就是在容器中的)。

**容器( container ) :**

Docker利用容器技术，独立运行一个或者一个组应用，通过镜像来创建的。

启动，停止，删除，基本命令!

目前就可以把这个容器理解为就是一个简易的linux系统

**仓库( repository ) :**

仓库就是存放镜像的地方!

仓库分为公有仓库和私有仓库!

Docker Hub(默认是国外的)

阿里云...都有容器服务器（配置镜像加速!)



### 02 | 安装Docker

> 环境准备

1、需要会一点点的Linux的基础

2、CentOs 7

3、我们使用Xshell连接远程服务器进行操作!



> 环境查看

```shell
# 系统内核是 3.10以上的
Last login: Sun Jul  4 12:38:47 2021 from 10.0.2.2
[root@localhost ~]# uname -r
3.10.0-327.4.5.el7.x86_64
```



```shell
# 系统版本
[root@localhost ~]# cat /etc/os-release
NAME="CentOS Linux"
VERSION="7 (Core)"
ID="centos"
ID_LIKE="rhel fedora"
VERSION_ID="7"
PRETTY_NAME="CentOS Linux 7 (Core)"
ANSI_COLOR="0;31"
CPE_NAME="cpe:/o:centos:centos:7"
HOME_URL="https://www.centos.org/"
BUG_REPORT_URL="https://bugs.centos.org/"

CENTOS_MANTISBT_PROJECT="CentOS-7"
CENTOS_MANTISBT_PROJECT_VERSION="7"
REDHAT_SUPPORT_PRODUCT="centos"
REDHAT_SUPPORT_PRODUCT_VERSION="7"

```



> 安装

帮助文档：https://docs.docker.com/get-docker/

![image-20210720094009565](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20210720094009565-2021-10-4-19:53:10.png)

进去之后选择我们的centOS系统：https://docs.docker.com/engine/install/centos/

```shell
# 1、卸载旧的版本
sudo yum remove docker \
                docker-client \
                docker-client-latest \
                docker-common \
                docker-latest \
                docker-latest-logrotate \
                docker-logrotate \
                docker-engine
# 2、需要的安装包
sudo yum install -y yum-utils
# 如果一直找不到镜像，请更换域名源，详细内容请参考：#https://blog.csdn.net/wangshuai6707/article/details/104609213/

# 3、设置镜像的仓库
sudo yum-config-manager \
   --add-repo \
   https://download.docker.com/linux/centos/docker-ce.repo # 默认是国外的！
   
sudo yum-config-manager \
   --add-repo \
   http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo # 换成国内的阿里云镜像，速度很快！

# 更新yum软件包索引
yum makecache fast

# 4、安装docker docker-ce：社区版  docker-ee：企业版
sudo yum install docker-ce docker-ce-cli containerd.io

# 5、启动docker
systemctl start docker

# 6、使用docker version查看是否安装成功
docker version

# 7、hello-world
docker run hello-world

# 8、查看一下下载的这个 hello-world 镜像
[root@localhost ~]# docker images
REPOSITORY        TAG                 IMAGE ID            CREATED             SIZE
hello-world      latest              d1165f221234        4 months ago        13.3kB

```

了解：卸载docker

```shell
# 1、卸载依赖
yum remove docker-ce docker-ce-cli containerd.io
# 2、删除资源
rm -rf /var/lib/docker
# /var/lib/docker    docker的默认工作路径!
```



### 03 | 阿里云镜像加速

1、进入阿里云官网，搜索容器镜像服务

2、依次执行官方的这四条命令

```shell
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://axvfsf7e.mirror.aliyuncs.com"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker

```



### 04 | 回顾HelloWorld流程

![image-20210720001236086](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20210720001236086-2021-10-4-19:53:25.png)

### 05 | 底层原理

![image-20210720001513548](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20210720001513548-2021-10-4-19:53:40.png)



> **Docker为什么比VM快**

1、Docker有着比虚拟机更少的抽象层

2、Docker利用的是宿主机的额内核，VM需要的是Guest OS（Cent OS、Ubuntu.....）

![image-20210720100303344](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20210720100303344-2021-10-4-19:53:58.png)

所以说，新建一个容器的时候，Docker不需要想虚拟机一样重新加载一个操作系统内核，避免引导。

虚拟机是加载Guest Oos,分钟级别的，而Docker是利用宿主机的操作系统吗，省略了这个复杂的过程，秒级!|

## 三、Docker的常用命令

### 01 | 帮助命令

帮助文档地址：https://docs.docker.com/engine/reference/commandline/docker/

```shell
docker version        # 显示docker的版本信息.
docker info           # 显示docker的系统信息.,包括镜像和容器的数量
docker [命令] --help   # 帮助命令

```

### 02 | 镜像命令

**docker images 查看本地镜像**

```shell
[root@localhost ~]# docker images
REPOSITORY        TAG                 IMAGE ID            CREATED             SIZE
hello-world      latest              d1165f221234        4 months ago        13.3kB

# 解释
REPOSITORY # 镜像的仓库源
TAG        # 镜像的标签
IMAGE ID   # 镜像的id
CREATED    # 境像的创建时间
SIZE       # 镜像的太小

# 可选项
-a,--all    # 列出所有镜像
-q,--quiet  # 只显示镜像的id

```

**docker search 搜素镜像**

```shell
[root@localhost ~]# docker search mysql
NAME              DESCRIPTION           STARS               OFFICIAL            AUTOMATED
mysql    MySQL is a widely used, open-source relation…   11145      [OK]

# 查看帮助命令
[root@localhost ~]# docker search --help

Usage:  docker search [OPTIONS] TERM

Search the Docker Hub for images

Options:
  -f, --filter filter   Filter output based on conditions provided
      --format string   Pretty-print search using a Go template
      --limit int       Max number of search results (default 25)
      --no-trunc        Don't truncate output

# 使用--filter进行过滤，搜索出来的就是STARS大于等于3000的镜像
[root@localhost ~]# docker search mysql --filter=STARS=3000
NAME                DESCRIPTION                                     STARS               OFFICIAL            AUTOMATED
mysql               MySQL is a widely used, open-source relation…   11145               [OK]                
mariadb             MariaDB Server is a high performing open sou…   4224                [OK] 

```

**docker pull 下载镜像**

```shell
#下载镜像docker pu1l镜像名[:tag]
[root@localhost ~]# docker pull mysql
Using default tag: latest # 如果不写tag，默认就是lastest
latest: Pulling from library/mysql
b4d181a07f80: Pull complete  # 分层下载 docker image的核心 联合文件系统
a462b60610f5: Pull complete 
578fafb77ab8: Pull complete 
524046006037: Pull complete 
d0cbe54c8855: Pull complete 
aa18e05cc46d: Pull complete 
fd6f649b1d0a: Pull complete 
2a97d48c2fdc: Pull complete 
30f0c7db48fc: Pull complete 
f5dda8df049e: Pull complete 
671b83fd7448: Pull complete 
5d9cc55fa997: Pull complete 
Digest: sha256:18d8d109aa64673c78aebfb845b929cfdac97a553332f4310f4de8d67ceb03d2 # 签名
Status: Downloaded newer image for mysql:latest
docker.io/library/mysql:latest # 真实地址

# 等价的两个命令
docker pull mysql
docker pu11 docker.io/1ibrary/mysq1:latest

# 下载指定版本的镜像
[root@localhost ~]# docker pull mysql:5.7
5.7: Pulling from library/mysql
b4d181a07f80: Already exists 
a462b60610f5: Already exists 
578fafb77ab8: Already exists 
524046006037: Already exists 
d0cbe54c8855: Already exists 
aa18e05cc46d: Already exists 
fd6f649b1d0a: Already exists # 分层下载的好处 不用每次都从头开始下载
8a2b858b000b: Pull complete 
322182b17422: Pull complete 
070e28050a88: Pull complete 
613bdfd8796e: Pull complete 
Digest: sha256:956e11ac581cad9ac8747a9a1d61b8ffcfa6845e0f23bdbab6ba20a2ad792cbf
Status: Downloaded newer image for mysql:5.7
docker.io/library/mysql:5.
```

**docker rmi 删除镜像**

```shell
docker rmi -f 镜像id # 删除指定的镜像
docker rmi -f 镜像id 镜像id 镜像id 镜像id # 删除多个镜像
docker rmi -f $(docker images -aq）# 删除全部的镜像

```



### 03 | 容器命令

**说明：我们有了镜像才可以创建容器，linux，下载一个centos镜像来测试学习**

```shell
docker pull centos
```

**新建容器并启动**

```shell
docker run [可选参数] image
#参数说明
--name="Name" #容器名字tomcato1 tomcat02，用来区分容器
-d            #后台方式运行
-it           #使用交互方式运行,进入容器查看内容
-p            #指定容器的端口-p 8080:8080
   -p ip:主机端口:容器端口
   -p 主机端口:容器端口（常用)
   -p 容器端口
    容器端口
-p 随机指定端口

# 测试：启动并进入容器
[root@localhost ~]# docker run -it centos /bin/bash
[root@2b80ad7df26f /]# ls #基础版本的centos，很多命令都不完善
bin  dev  etc  home  lib  lib64  lost+found  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var

# 从容器中退回到主机 直接容器停止并退出
[root@2b80ad7df26f /]# exit 
exit 

```

**列出所有运行的容器**

```shell
# docker ps命令
      # 没有加上参数，会列出当前正在运行的容器
-a    # 列出当前正在运行的容器+带出历史运行过的容器
-n=?  # 显示最近创建的容器，指定个数
-q    # 只显示容器的编号
```

**退出容器**

```shell 
exit      # 直接容器停止并退出
ctr1+p+Q  # 容器不停止退出
```

**删除容器**

```shell
docker rm 容器id                # 删除指定的容器 不能删除正在运行的容器 如果要强制删除 使用 rm -f
docker rm -f $(docker ps -aq)   # 删除所有的容器
docker ps -a -q|xargs docker rm # 删除所有的容器
```

**启动和停止容器的操作**

```shell
docker start 容器id    # 启动容器
docker restart 容器id  # 重启容器
docker stop 容器id     # 停止当前正在运行的容器
docker kill 容器id     # 强制停止当前容器

```

### 04 | 常用其他命令

**后台启动容器**

```shell
# 命令 docker run -d 镜像名!
[root@localhost ~]# docker run -d centos
```

> 问题docker ps，发现centos停止了
>
> 常见的坑: docker容器使用后台运行，就必须要有要一个前台进程，docker发现没有应用，就会自动停止，容器启动后，发现自己没有提供服务，就会立刻停止，就是没有程序了

**查看日志**

```shell
[root@localhost ~]# docker logs -f -t --tail 10  # 发现容器没有日志
# 自己编写一段she11脚本
[root@localhost ~]# docker run -d centos /bin/sh -c "while true;do echo 日志打印;s1eep 1; done"
[root@localhost ~]# docker ps

#显示日志
-tf           # 显示日志
--tai7 number # 要显示日志条数
[root@localhost ~]# docker logs -tf --tai1 10 7e891e3f50c4
```

**查看容器中进程信息 ps**

```shell
# 命令： docker top 容器id
[root@localhost ~]# docker top dce7b84398df
```

**查看镜像的元数据**

```shell
# 命令： docker inspect 容器id
[root@localhost ~]# docker inspect dce7b84398df
```

**进入当前正在运行的容器**

```shell
#我们通常容器都是使用后台方式运行的，需要进入容器，修改一些配置

#方式一
docker exec -it容器id bash she11
#测试
[root@localhost ~]# docker ps

[root@localhost ~]# docker exec -it dce7b86171bf /bin/bash

[root@dce7b86171bf / ]# ls
[root@dce7b86171bf /]# ps -ef


```



```shell
#方式二
docker attach容器id
#测试
[root@localhost ~]# docker attach dce7b86171bf

# docker exec#进入容器后开启一个新的终端，可以在里面操作（常用)
# docker attach#进入容器正在执行的终端，不会启动新的进程!

```

**从容器内拷贝文件到主机上**

```shell
docker cp 容器id:容器内路径 目的主机路径

#查看当前主机目录下
[root@localhost home]# ls

[root@localhost home]# docker ps

#进入docker容器内部
[root@localhost home]# docker attach b78453025116

[root@b78453025116/]#cd /home
[root@b78453025116 home]# 1s
#在容器内新建一个文件
[root@b78453025116 home]# touch test.java
[root@b78453025116 home]# exit
exit
[root@localhost home]# docker ps -a

#将这文件拷贝出来到主机上
[root@localhost home]# docker cp b78453025116:/home/test.java /home
[root@localhost home]# ls
test.java



```



### 05 | 小结

<img src="https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20210720112752478-2021-10-4-20:10:35.png" alt="image-20210720112752478" style="zoom:120%;" />

```shell
attach    # 当前shell下attach连接指定运行镜像
build     # 通过Dockerfile定制镜像
commit    # 提交当前容器为新的镜像
cp        # 从容器中拷贝指定文件或目录到宿主机中
create    # 创建一个新的容器，同 run 但不启动容器
diff      # 查看 docker 容器变化
events    # 从docker服务器获取容器实时事件
exec      # 在已存在的容器上运行命令
export    # 导出容器的内容流作为一个 tar 归档文件【对应 import】
history   # 展示一个镜像形成历史
images    # 列出系统当前镜像
import    # 从tar包中的内容创建一个新的文件系统映像【对应 export】
info      # 显示系统相关信息
inspect   # 查看容器详细信息
kill      # kill 指定的容器
load      # 从一个 tar 包中加载一个镜像【对应 save】
login     # 注册或者登录一个 docker 源服务器
logout    # 从当前 Docekr registry 退出
logs      # 输出当前容器日志信息

port  	  # 查看映射端口对应的容器内部源端口
pause	  # 暂停容器
ps        # 猎户容器列表
pull      # 从docker镜像源服务器拉取指定镜像或者库镜像
push      # 推送指定镜像或者库镜像至docker源服务器
restart   # 重启运行的容器
rm        # 移除一个或多个容器
rmi       # 移除一个或多个镜像 （无容器使用该镜像才可删除，否则需要删除相关容器才可继续或 -f 强制删除）
run       # 创建一个新的容器并运行一个命令
save      # 保存一个镜像为一个 tar 包【对应 load】
search    # 在 docker hub 中搜索镜像
start     # 启动容器
stop      # 停止容器
tag       # 给源中镜像打标签
top       # 查看容器中运行的进程信息
unpause   # 取消暂停容器
version   # 查看 docker版本号
wait      # 截取容器停止时的退出状态值
```

以上是基本的命令，之后还有很多常用的命令需要学习！

### 06 | 常用容器部署

> Nginx部署

```shell
# 1、搜索镜像 search 建议大家去docker搜索，可以看到帮助文档
# 2、下载镜像pu11
# 3、运行测试
[root@localhost home]# docker images

# -d 后台运行
# --name 给容器命名
# -p 宿主机端口:容器内部端口
[root@localhost home]# docker run -d --name nginx01 -p 3344:80 

[root@localhost home]# docker ps

[root@localhost home]# cur1 localhost:3344

#进入容器
[root@localhost home]# docker exec -it nginx01 /bin/bash
root@495da2065213:# whereis nginx
nginx: /usr/sbin/nginx /usr/1ib/nginx /etc/nginx /usr/share/nginx
root@495da2065213:/# cd /etc/nginx
root@495da2065213:/etc/nginx# 1s
conf.d fastcgi_params koi-utf koi-win mime.types modules nginx.conf scgi_params uwsgi_paramswin-utf
rootQ495da2065213:/etc/nginx#

```



端口暴露的概念：

![image-20210720113417752](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20210720113417752-2021-10-4-20:23:16.png)

**思考问题**∶我们每次改动nginx配置文件，都需要进入容器内部?十分的麻烦，我要是可以在容器外部提供一个映射路径，达到在容器修改文件名，容器内部就可以自动修改?-v数据卷!



> Tomcat部署

```shell
#官方的使用
docker run -it --rm tomcat:9.0
#我们之前的启动都是后台，停止了容器之后，容器还是可以查到 docker run -it --rm，一般用来测试，用完就删除
#下载在启动
docker pu1l tomcat
#启动运行
docker run -d -p 3355:8080 --name tomcat01 tomcat
#测试访问没有间题
#进入容器
[root@localhost home]# docker exec -it tomcat01 /bin/bash

# 发现问题，
# 1、1inux命令少了，
# 2、没有webapps。阿里云镜像的原因。默认是最小的诡像，所有不必要的都剔除掉。#保证最小可运行的环境!

```



> ES+Kibana部署

```shell
# es暴露的端口很多!
# es十分的耗内存
# es的数据一般需要放置到安全目录!挂载
# --net somenetwork ?网络配置
#启 动elasticsearch
docker run -d --name elasticsearch -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node"elasticsearch:7.6.2

#启动了1inux就卡住了docker stats查看cpu的状态

# es是十分耗内存的，1.xG 1核2G!

#查看docker stats

#测试一下es是够成功了
[root@localhost home]# cur1 localhost:9200
{
"name": "7e2469973535",
"cluster_name": "docker-cluster",
"cluster_uuid": "eJ1FbVtzs9iERQ71EQjoug",
"version": {	
    "number": "7.6.2",	
    "bui1d_flavor": "default",	
    "bui1d_type": "docker ",
    "build_hash": "ef48eb35cf30adf4db14086e8aabd07ef6fb113f",	
    "bui1d_date": "2020-03-26T06:34 : 37.794943z",	
    "bui1d_snapshot": false,	
    "1ucene_version": "8.4.o",	
    "minimum_wire_compatibility_version": "6.8.o",	
    "minimum_index_compatibility_version": "6.0.0-beta1"3,	
    "tagline": "You Know，for Search"
	}
}

#赶紧关闭，增加内存的限制，修改配置文件-e环境配置修改
docker run -d --name elasticsearch02 -p 9200:9200 -p 9300:9300 -e "discovery.typemsingle-node" -e ES_JAVA_OPTS="-xms64m -Xmx512m" elasticsearch:7.6.2

# 再查看docker stats

```

:::tip 

使用Kibana连接ES，思考网络如何才能连接过去

:::

![image-20211004203203088](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20211004203203088-2021-10-4-20:32:03.png)

### 07 | 可视化

Portaniner是Docker的图形化管理工具，类似的工具还有Rancher(CI/CD再用)

下载运行Portaniner镜像并运行，设置本机映射端口为8088

```shell
[root@localhost conf]# docker run -d -p 8088:9000 --restart=always -v /var/run/docker.sock:/var/run/docker.sock --privileged=true portainer/portainer

```

第一次登录设置admin用户的密码

![image-20211004204258765](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20211004204258765-2021-10-4-20:42:59.png)

如果是阿里云服务器记得设置安全组，选择连接本地的Docker,整体界面预览如下图：

![image-20211004204402629](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20211004204402629-2021-10-4-20:44:02.png)

可视化面板一般我们不会用，平时自己玩玩就可以了！



## 四、Docker镜像

### 01 | 镜像是什么

镜像是一种轻量级、可执行的独立软件包，用来打包软件运行环境和基于运行环境开发的软件，它包含运行某个软件所需要的所有内容，包括代码，运行时（一个程序在运行或者在被执行的依赖）、库，环境变量和配置文件。

所有的应用，直接打包docker镜像，就可以直接跑起来!

如何得到镜像:

- 从远程仓库下载
- 朋友拷贝给你
- 自己制作一个镜像DockerFile



### 02 | Docker镜像加载原理

> UnionFS（联合文件系统）

我们下载的时候看到的一层层就是这个!

UnionFS( 联合文件系统） :Union文件系统(UnionFS)是一种分层、轻量级并且高性能的文件系统，它支持对文件系统的修改作为一次提交来一层层的叠加，同时可以将不同目录挂载到同一个虚拟文件系统下(unite several directories into a single virtualfilesystem)。**Union文件系统是Docker镜像的基础**。镜像可以通过分层来进行继承，基于基础镜像（没有父镜像），可以制作各种具体的应用镜像。

**特性:**一次同时加载多个文件系统，但从外面看起来，只能看到一个文件系统，联合加载会把各层文件系统叠加起来，这样最终的文件系统会包含所有底层的文件和目录



> Docker镜像加载原理

docker的镜像实际上由一层一层的文件系统组成，这种层级的文件系统UnionFS。

bootfs(boot file system)主要包含bootloader和kernel, bootloader主要是引导加载kernel, Linux刚启动时会加载bootfs文件系统，在Docker镜像的最底层是bootfs。这一层与我们典型的Linux/Unix系统是一样的，包含boot加载器和内核。当boot加载完成之后整个内核就都在内存中了，此时内存的使用权已由bootfs转交给内核，此时系统也会卸载bootfs。

rootfs (root fle system)，在bootfs之上。包含的就是典型Linux系统中的/dev, /proc, /bin, /etc等标准目录和文件。rootfs就是各种不同的操作系统发行版，比如Ubuntu , dentos等等。

![image-20211004205012965](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20211004205012965-2021-10-4-20:50:13.png)





### 03 | 分层原理

> 分层的镜像

我们可以去下载一个镜像，注意观察下载的日志输出，可以看到是一层层的在下载

![image-20211004205116891](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20211004205116891-2021-10-4-20:51:17.png)

:::tip 思考:为什么Docker镜像要采用这种分层的结构呢?

最大的好处，我觉得莫过于是资源共享了!比如有多个镜像都从相同的Base镜像构建而来，那么宿主机只需在磁盘上保留一份base镜像，同时内存中也只需要加载一份base镜像，这样就可以为所有的容器服务了，而且镜像的每一层都可以被共享。

:::

查看镜像分层的方式可以通过docker image inspect命令!

:::detail docker image inspect命令

```shell
[root@localhost ~]# docker image inspect nginx:latest
[
    {
        "Id": "sha256:ae2feff98a0cc5095d97c6c283dcd33090770c76d63877caa99aefbbe4343bdd",
        "RepoTags": [
            "nginx:latest"
        ],
        "RepoDigests": [
            "nginx@sha256:4cf620a5c81390ee209398ecc18e5fb9dd0f5155cd82adcbae532fec94006fb9"
        ],
        "Parent": "",
        "Comment": "",
        "Created": "2020-12-15T20:21:00.007674532Z",
        "Container": "4cc5da85f27ca0d200407f0593422676a3bab482227daee044d797d1798c96c9",
        "ContainerConfig": {
            "Hostname": "4cc5da85f27c",
            "Domainname": "",
            "User": "",
            "AttachStdin": false,
            "AttachStdout": false,
            "AttachStderr": false,
            "ExposedPorts": {
                "80/tcp": {}
            },
            "Tty": false,
            "OpenStdin": false,
            "StdinOnce": false,
            "Env": [
                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
                "NGINX_VERSION=1.19.6",
                "NJS_VERSION=0.5.0",
                "PKG_RELEASE=1~buster"
            ],
            "Cmd": [
                "/bin/sh",
                "-c",
                "#(nop) ",
                "CMD [\"nginx\" \"-g\" \"daemon off;\"]"
            ],
            "Image": "sha256:13bffe371b56f4aeed88218ec17d0c6f653a83b49bd3e211fc8cfa2ca5d7a3d3",
            "Volumes": null,
            "WorkingDir": "",
            "Entrypoint": [
                "/docker-entrypoint.sh"
            ],
            "OnBuild": null,
            "Labels": {
                "maintainer": "NGINX Docker Maintainers <docker-maint@nginx.com>"
            },
            "StopSignal": "SIGQUIT"
        },
        "DockerVersion": "19.03.12",
        "Author": "",
        "Config": {
            "Hostname": "",
            "Domainname": "",
            "User": "",
            "AttachStdin": false,
            "AttachStdout": false,
            "AttachStderr": false,
            "ExposedPorts": {
                "80/tcp": {}
            },
            "Tty": false,
            "OpenStdin": false,
            "StdinOnce": false,
            "Env": [
                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
                "NGINX_VERSION=1.19.6",
                "NJS_VERSION=0.5.0",
                "PKG_RELEASE=1~buster"
            ],
            "Cmd": [
                "nginx",
                "-g",
                "daemon off;"
            ],
            "Image": "sha256:13bffe371b56f4aeed88218ec17d0c6f653a83b49bd3e211fc8cfa2ca5d7a3d3",
            "Volumes": null,
            "WorkingDir": "",
            "Entrypoint": [
                "/docker-entrypoint.sh"
            ],
            "OnBuild": null,
            "Labels": {
                "maintainer": "NGINX Docker Maintainers <docker-maint@nginx.com>"
            },
            "StopSignal": "SIGQUIT"
        },
        "Architecture": "amd64",
        "Os": "linux",
        "Size": 132935043,
        "VirtualSize": 132935043,
        "GraphDriver": {
            "Data": {
                "LowerDir": "/var/lib/docker/overlay2/cb791e78a08db7091bf2ce1d78603f1758f52199e57f1805156fe30e39067aae/diff:/var/lib/docker/overlay2/1e73a72b25af68ee9abf4eb443f778d31226e12e9af428fcc14c7b044c83b258/diff:/var/lib/docker/overlay2/88c9c01762f2af8327db65d0b0d4a64785e87c9c2ab76c62e7d03619db03a985/diff:/var/lib/docker/overlay2/7304ab112ac4a9cb91fc6f74730be28fecbe19f042e92d321aa9181424cc4b2e/diff",
                "MergedDir": "/var/lib/docker/overlay2/48b288740bbb2b07b41ed43a4d17a005c46b08d3357d2960b5ef7db4b2de6618/merged",
                "UpperDir": "/var/lib/docker/overlay2/48b288740bbb2b07b41ed43a4d17a005c46b08d3357d2960b5ef7db4b2de6618/diff",
                "WorkDir": "/var/lib/docker/overlay2/48b288740bbb2b07b41ed43a4d17a005c46b08d3357d2960b5ef7db4b2de6618/work"
            },
            "Name": "overlay2"
        },
        "RootFS": {
            "Type": "layers",
            "Layers": [
                "sha256:87c8a1d8f54f3aa4e05569e8919397b65056aa71cdf48b7f061432c98475eee9",
                "sha256:5c4e5adc71a82a96f02632433de31c998c5a9e2fccdcbaee780ae83158fac4fa",
                "sha256:7d2b207c26790f693ab1942bbe26af8e2b6a14248969e542416155a912fec30d",
                "sha256:2c7498eef94aef8c40d106f3e42f7da62b3eee8fd36012bf7379becc4cd639a2",
                "sha256:4eaf0ea085df254fd5d2beba4e2c11db70a620dfa411a8ad44149e26428caee4"
            ]
        },
        "Metadata": {
            "LastTagTime": "0001-01-01T00:00:00Z"
        }
    }
]

```

:::

这里指示了分层信息

```shell
        "RootFS": {
            "Type": "layers",
            "Layers": [
                "sha256:87c8a1d8f54f3aa4e05569e8919397b65056aa71cdf48b7f061432c98475eee9",
                "sha256:5c4e5adc71a82a96f02632433de31c998c5a9e2fccdcbaee780ae83158fac4fa",
                "sha256:7d2b207c26790f693ab1942bbe26af8e2b6a14248969e542416155a912fec30d",
                "sha256:2c7498eef94aef8c40d106f3e42f7da62b3eee8fd36012bf7379becc4cd639a2",
                "sha256:4eaf0ea085df254fd5d2beba4e2c11db70a620dfa411a8ad44149e26428caee4"
            ]
        },

```

**理解**

所有的Docker镜像 ==都起始于一个基础镜像层，当进行修改或增加新的内容时，就会在当前镜像层之上，创建新的镜像层==

举一个简单的例子，假如基于Ubuntu Linux16.04创建一个新的镜像，这就是新镜像的第一层；如果在该镜像中添加Python包，就会在基础镜像层之上创建第二个镜像层;如果继续添加一个安全补丁就会创建第三个镜像层。
该镜像当前已经包含3个镜像层，如下图所示（这只是一个用于演示的很简单的例子)。

![image-20211004205605411](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20211004205605411-2021-10-4-20:56:05.png)

在添加额外的镜像层的同时，镜像始终保持是当前所有镜像的组合，理解这一点非常重要。下图中举了一个简单的例子，每个镜像层包含3个文件，而镜像包含了来自两平镜像层的6个文件。

![image-20211004205749932](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20211004205749932-2021-10-4-20:57:50.png)

上图中的镜像层跟之前图中的略有区别，主要目的是便于展示文件。

下图中展示了一个稍微复杂的三层镜像，在外部看来整个镜像只有6个文件，这是因为最上层中的文件7是文件5的一个更新版本。

![image-20211004205850953](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20211004205850953-2021-10-4-20:58:51.png)

Docker在Windows上仅支持windowsfilter一种存储引擎，该引擎基于NTFS文件系统之上实现了分层和CoW[1].下图展示了与系统显示相同的三层镜像。所有镜像层堆叠并合并，对外提供统一的视图。

![image-20211004205932051](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20211004205932051-2021-10-4-20:59:32.png)



> 特点

Docker镜像都是只读的，当容器启动时，一个新的可写层被加载到镜像的顶部!

这一层就是我们通常说的容器层，容器之下的都叫镜像层!

![image-20211004210134104](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20211004210134104-2021-10-4-21:01:34.png)

> 如何提交自己的镜像？？
>

### 04 | commit镜像

```shell
docker commit 提交容器成为一个新的副本
#命令和git原理类似
docker commit -m="提交的描述信息" -a="作者” 容器id 目标镜像名:[TAG]

```

**实战测试**

1. 启动一个默认的tomcat
2. 发现这个默认的tomcat 是没有webapps应用，镜像的原因，官方的镜像默认 webapps下面是没有文件的!
3. 我自己拷贝进去了基本的文件Ⅰ
4. 将我们操作过的容器通过commit提交为一个镜像!我们以后就使用我们修改过的镜像即可，这就是我们自己的一个修改的镜像

![image-20211004210550057](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20211004210550057-2021-10-4-21:05:50.png)



**学习方式说明：**理解概念，但是一定要实践，最后实践和理论相结合一次搞定这个知识

如果你想要保存当前容器的状态，就可以通过commit来提交，获得一个镜像，就好比我们以前学习vM时候，快照!

到了这里才算是入门Dokcer !



## 五、容器数据卷

### 01 | 什么是容器数据卷

docker的理念回顾

将应用和环境打包成一个镜像!

数据？如果数据都在容器中，那么我们容器删除，数据就会丢失! ==需求︰数据可以持久化==

MySQL，容器删了，删库跑路？不存在的 ==需求:MySQL数据可以存储在本地!==

容器之间可以有一个数据共享的技术!Docker容器中产生的数据，同步到本地!

这就是卷技术!目录的挂载，将我们容器内的目录，挂载到Linux上面!

![image-20211004211143887](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20211004211143887-2021-10-4-21:11:44.png)

**总结一句话︰容器的持久化和同步操作!容器间也是可以数据共享的!**

### 02 | 使用数据卷

> 方式一：直接使用命令挂载 -v



```shell
docker run -it -v主机目录，容器内目录
#测试
[root@localhost home]# docker run -it -v/home/ceshi:/home centos /bin/bash
#启动起来时候我们可以通过docker inspect 容器id 查看

```

![image-20211004211220821](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20211004211220821-2021-10-4-21:12:21.png)

测试文件的同步（**双向同步**）

![image-20210720141435890](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20210720141435890-2021-10-4-21:13:56.png)



再来测试!

1、停止容器

2、宿主机上修改文件3、启动容器

4、容器内的数据依旧是同步的!

![image-20211004211501996](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20211004211501996-2021-10-4-21:15:02.png)

好处∶我们以后修改只需要在本地修改即可，容器内会自动同步!



### 03 | 实战：安装MySQL

思考：MySQL的数据持久化的问题

```shell
#获取镜像
[root@localhost home]# docker pu11 mysq1:5.7
#运行容器，需要做数据挂载!#安装启动mysq1 ，需要配置密码的，这是要注意点!
#官方测试:docker run --name some-mysq1 -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysq1:tag
#启动我们的
-d 后台运行
-p 端口映射
-v 卷挂载
-e 环境配置
--name 容器名字
[root@localhost home]# docker run -d -p 3310:3306 -v/home/mysq1/conf :/etc/mysq1/conf.d -v/home/mysq1/data:/var/1ib/mysq1 -e MYSQL_ROOT_PASSWORD=123456--name mysq101 mysq1:5.7

#启动成功之后，我们在本地使用sqlyog来接测试一下
# sqlyog-连接到服务器的3310 --- 3310 和容器内的 3306映射，这个时候我们就可以连接上了!

#在本地测试创建一个数据库，查看一下我们映射的路径是否ok!

```

假如我们将容器删除，发现，我们挂载到本地的数据卷依旧没有丢失，这就实现了容器数据持久化功能!



### 04 | 具名和匿名挂载

```shell
#匿名挂载
-v 容器内路径!
docker run -d -p--name nginx01 -v /ect/nginx nginx

#查看所有的volume的情况
[root@localhost home]# docker volume 1s
loca1 9f38292179faa178afcce54d80be99d4ddd68c91d2a68870bcece72d2b7ed061

#这里发现，这种就是匿名挂载，我们在 -v 只写了容器内的路径，没有写容器外的路径!

#具名挂载
[root@localhost home]# docker run -d -p --name nginx02 -v juming-nginx: /etc/nginx nginx
95b809564484c8ac87d65c69643e7e67447f1c77ff9a91b93edec7003692e3a9
[root@localhost home]# docker volume ls
DRIVER     vOLUME NAME
local      juming-nginx

#通过 -v 卷名:容器内路径
#查看一下这个卷

```

![image-20211004212257358](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20211004212257358-2021-10-4-21:22:57.png)

所有的docker容器内的卷，没有指定目录的情况下都是在”/var/1ib/docker/volumes/xxxx/_data我们通过具名挂载可以方便的找到我们的一个卷，==大多数情况使用的是具名挂载==



### 05 | 初识Dockerfile 

Dockerfile就是用来构建docker镜像的构建文件!命令脚本!先体验一下!

通过这个脚本可以生成镜像，镜像是一层一层的，脚本一个个的命令，每个命令都是一层!

```shell
#创建一个dockerfile文件，名字可以随机建议Dockerfile
#文件中的内容指令(大写)参数
FROM centos
VOLUME ["volume01" , "volume02"]
CMD echo "----end-----"
cMD /bin/bash

#这里的每个命令，就是诡像的一层!|

```

![image-20210720143719079](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20210720143719079-2021-10-4-21:24:41.png)

**启动自己的容器**

![image-20211004212707841](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20211004212707841-2021-10-4-21:27:08.png)



这个卷在宿主机中有同步的目录

![image-20211004212819925](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20211004212819925-2021-10-4-21:28:20.png)

查看一下卷挂载的路径

![image-20211004212922326](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20211004212922326-2021-10-4-21:29:22.png)



### 06 | 数据卷容器

多个MySQL同步数据

![image-20210720144247589](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20210720144247589-2021-10-4-21:29:46.png)

测试：

创建数据卷容器容器docker01

创建容器docker02挂载到docker01上

创建容器docker03挂载到docker01上

删除容器docker01

```shell
# 测试，可以删除docker01，查看一下docker03和docker03是否还可以访问这个文件
# 测试依旧可以访问
```

![image-20211004213134278](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20211004213134278-2021-10-4-21:31:34.png)

多个MySQL实现数据共享

```shell
[root@localhost home]# docker run -d -p 3310:3306 -v /etc/mysq1/conf.d -v /var/1ib/mysq1 -e MYSQL_ROOT_PASSWORD=123456 --name mysql01 mysq1:5.7
[root@localhost home]# docker run -d -p 3310:3306 -e MYSQL_ROOT_PASSWORD-123456 --name mysq102 --volumes-form mysq101 mysql:5.7

#这个时候，可以实现两个容器数据同步!

```



:::tip 结论

容器之间配置信息的传递，数据卷容器的生命周期一直持续到没有容器使用为止。

但是一旦你持久化到了本地，这个时候，本地的数据是不会删除的

:::

## 六、Dockerfile

### 01 | Dockerfile介绍

Dockerfile是用来构建Dokcer镜像的文件!命令参数脚本!

构建步骤∶

1、编写一个Dockerfile 文件

2、docker build构建成为一个镜像

3、docker run运行镜像

4、docker push 发布镜像(DockerHub、阿里云镜像仓库!)



查看一下官方是怎么做的？

![image-20210720145831340](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20210720145831340-2021-10-4-21:35:45.png)

![image-20210720145917664](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20210720145917664-2021-10-4-21:35:58.png)

> 很多官方镜像都是基础包，很多功能没有，我们通常会自己搭建自己的镜像!官方既然可以制作镜像，那我们也可以!
>

### 02 | Dockerfile构建过程

基础知识∶

1、每个保留关键字(指令）都是必须是大写字母

2、执行从上到下顺序执行

3、#表示注释

4、每一个指令都会创建提交一个新的镜像层，并提交!



![image-20210720150221294](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20210720150221294-2021-10-4-21:36:47.png)

**Dockerfile是面向开发的**，我们以后要发布项目，做镜像，就需要编写dockerfile文件，这个文件十分简单!

Docker镜像逐渐成为企业交付的标准，必须要掌握!

步骤:开发，部署，运维。。。缺一不可!

DockerFile :构建文件，定义了一切的步骤，源代码

Dockerlmages:通过 DockerFile构建生成的镜像，最终发布和运行的产品!

Docker容器:容器就是镜像运行起来提供服务器



### 03 | Dockerfile指令

以前的话我们就是使用别人的，现在我们知道了这些指令后，我们来练习自己写一个镜像!

```shell
FROM             # 基础镜镜像，一切从这里开始构建
MAINTAINER       # 镜像是谁写的，姓名+邮箱
RUN              # 镜像构建的时候需要运行的命令
ADD              # 步骤: tomcat镜像，这个tomcat压缩包!添加内容
WORKDIR          # 镜像的工作目录
VOLUME           # 挂载的目录
EXPOSE           # 保留端口配置
CMD              # 指定这个容器启动的时候要运行的命令,只有最后一个会生效，可被替代
ENTRYPOINT       # 指定这个容器启动的时候要运行的命令,可以追加命令
ONBUILD          # 当构建一个被继承 DockerFile这个时候就会运行ONBUILD的指令。触发指令。
COPY             # 类似ADD，将我们文件拷贝到镜像中
ENV              # 构建的时候设置环境变量!

```

![image-20210720150907550](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20210720150907550-2021-10-4-21:38:34.png)

### 04 | 实战测试

Docker Hub中99%镜像都是从这个基础镜像过来的**FROM scratch**，然后配置需要的软件和配置来进行的构建

![image-20211004214229915](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20211004214229915-2021-10-4-21:42:30.png)



> 创建一个自己的CentOS

```shell
#1编写Dockerfile的文件
[root@localhost dockerfile]# cat mydockerfile-centos 
FROM centos
MAINTAINER test<22178862750@qq.com>
ENV MYPATH /usr/ loca1
WORKDIR SMYPATH
RUN yum -y instal1 vim
RUN yum -y insta1l net-too1s
EXPOSE 80
CMD echo SMYPATH
CMD echo "----end----"
CMD /bin/bash

#2、通过这个文件构建镜像
#命令docker build -f dockerfile文件路径 -t 镜像名:[tag]
Successfu1ly built e2bd75cfe070
successfu11y tagged mycentos :0.1
#3、测试运行

```

> 对比

之前原生的centos

![image-20211004214624727](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20211004214624727-2021-10-4-21:46:25.png)

我们添加之后的镜像

![image-20211004214705401](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20211004214705401-2021-10-4-21:47:05.png)

我们可以列出本地进行的**变更历史**

![image-20211004214802059](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20211004214802059-2021-10-4-21:48:02.png)



> CMD和ENTRYPOINT的区别

```shell
CMD            # 指定这个容器启动的时候要运行的命令,只有最后一个会生效，可被替代
ENTRYPOINT     # 指定这个容器启动的时候要运行的命令,可以追加命令

```

**测试CMD**

```shell
#编写dockerfile 文件
[root@localhost dockerfile]# vim dockerfile-cmd-test
FROM centos
CMD ["1s " , "-a"]
#构件镜像
[root@localhost dockerfile]# docker build -f dockerfile-cmd-test -t cmdtest .
# run运行，发现我们的1s -a命令生效
[root@localhost dockerfile]# docker run dd8e4401d72f
.
..
.dockerenv
bin
dev
etc
home
lib
lib64
#想追加一个命令-1 1s -al
[root@localhost dockerfile] # docker run dd8e4401d72f -1
docker: Error response from daemon: 0CI runtime create failed: container_1inux.go:349: startingcontainer process caused "exec: \"-7\": executable file not found in $PATH": unknown.
# cmd的清理下-1替换了CMD ["1s ","-a"]命令，-1 不是命令所以报错!

```

**测试ENTRYPOINT**

```shell
[root@localhost dockerfile]# vim dockerfile-cmd-entrypoint
FROM centos
ENTRYPOINT ["1s" , "-a"]
[root@localhost dockerfile]# docker build -f dockerfile-cmd-entrypoint -t entoryponit-test .
Sending build context to Docker daemon 4.096kB
step 1/2 : FROM centos
--->470671670cac
step 2/2 : ENTRYPOINT ["ls", "-a"]
--->Running in 444b257920ef
Removing intermediate container 444b257920ef
--->3c4c9621ed91
Successfu1ly built 3c4c9621ed91
Successfu1ly tagged entoryponit-test : latest
[root@localhost dockerfile]# docker run 3c4c9621ed91

#我们的追加命令，是直接拼接在我们的 ENTRYPOINT命令的后面!
[root@localhost dockerfile]# docker run 3c4c9621ed91 -1
total 56
drwxr-xr-x   1 root root 4096 May 15  13:15 .
drwxr-xr-x   1 root root 4096 May 15  13:15 ..
-rwXr-Xr-x   1 root root    0 May 15  13:15 .dockerenv
lrwxrwxrwx   1 root root    7 Mav 11   2019 bin -> usr/bin

```



### 05 | 实战:Tomcat镜像

1、准备镜像文件 tomcat压缩包，jdk的压缩包

![image-20210720152703322](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20210720152703322-2021-10-4-21:57:19.png)

2、编写Dockerfile文件，官方命名Dockerfile, build会自动寻找这个文件，就不需要-f指定了!

```shell
FROM centos
MAINTAINET kuangshen<24736743dqq.com>
COPY readme.txt /usr/local/readme.txt
ADD jdk-8u11-7inux-x64.tar.gz /usr/loca1/
ADD apache-tomcat-9.0.22.tar.gz /usr/loca1/
RUN yum -y insta11 vim
ENV MYPATH /usr/loca1wORKDIR SMYPATH
ENV JAVA_HOME /usr/loca1/jdk1.8.0_11
ENV CLASSPATH $JAVA_HOME/1ib/dt.jar:$JAVA_HOME/1ib/too1s.jar
ENV CATALINA_HOME /usr/loca1/apache-tomcat-9.0.22
ENV CATALINA_BASH /usr/loca1/apache-tomcat-9.0.22
ENV PATH $PATH:$JAVA_HOME/bin:$CATALINA_HOME/1ib:$CATALINA_HOME/bin
EXPOSE 8080
CMD /usr/loca1/apache-tomcat-9.0.22/bin/startup.sh && tail -F /ur1/1oca1/apache-tomcat-9.0.22/bin/logs/catalina.out

```

3、构建镜像

```shell
docker build -t diytomcat .
```

4、启动镜像

5、访问测试

6、发布项目（由于做了卷挂载，我们直接在本地编写项目就可以发布了! )



**web.xml**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xm1ns="http://java.sun.com/xm1/ns/javaee"
         xm1ns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://java.sun. com/xm1/ns/javaee
                             http:// java.sun.com/xm1/ns/javaee/web-app_2_5.xsd"
         version="2.5">
</ web-app>

```



**index.jsp**

```jsp
<%page language="java" contentType="text/htm1; charset=UTF-8"
pageEncoding="UTF-8"%>
<! DOCTYPE htm1>
<html>
    <head>
        <meta charset="utf-8">
        <title>he11o，kuangshen</title>
    </head>
    <body>
        He1lo world!<br/>
        <% 
        System.out.print1n("----my test web logs----");
        %>
    </body>
</htm1>

```

发现:项目部署成功，可以直接访问ok !

我们以后开发的步骤:需要掌握Dokcerfile的编写!我们之后的一切都是使用docker镜像来发布运行!



### 06 | 发布自己的镜像

> Dockerhub

1、地址https://hub.docker.com/注册自己的账号!

2、确定这个这账号可以登录

3、在我们服务器上提交自己的镜像

```shell
[root@localhost tomcat]# docker login --help
usage:docker login [oPTIONS] [SERVER]
Log in to a Docker registry.
If no server is specified，the default is defined by the daemon.

options :
-p, --password stringPassword
    --password-stdin Take the password from stdin
-u, --username stringUsername
```

4、登录完毕后就可以提交镜像了，就是一步docker push

```shell
#push自己的镜像到服务器上!
[root@localhost tomcat]# docker push diytomcat
denied : requested access to the resource is denied #拒绝

# push镜像的问题?
[root@localhost tomcat] # docker push kuangshen/diytomcat:1.0

#解决，增加一个tag
[root@localhost tomcat]# docker tag f8559daf1fc2 kuangshen/tomcat:1.0

#docker psuh上去即可!自己发布的镜像尽量带上版本号
[root@localhost tomcat] # docker push kuangshen/tomcat: 1.0


```



![image-20211004220716251](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20211004220716251-2021-10-4-22:07:16.png)

可以看到，提交的时候也是按照镜像的层级来进行提交的

> 阿里云镜像服务

1、登录阿里云

2、找到容器镜像服务

3、创建命名空间

4、创建容器镜像

5、浏览阿里云

阿里云容器镜像就它的参考官方文档，简洁明了



### 07 | 小结

![image-20210720160544573](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20210720160544573-2021-10-4-22:13:56.png)



## 七、Docker 网络

### 01 | 理解Docker0

![image-20210720173837789](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20210720173837789-2021-10-4-22:14:04.png)



> 问题：三个网络 Docker 是如何处理容器网络访问的？

![image-20211004221508039](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20211004221508039-2021-10-4-22:15:08.png)

```shell
[root@localhost/]# docker run -d -p--name tomcat01 tomcat
#查看容器的内部网络地址ip addr ，发现容器启动的时候会得到一个 etho@if262 ip地址，docker分配的!
[root@localhost/]# docker exec -it tomcat01 ip addr

#思考。liunx能不能ping通容器内部!
[rootakuangshen /]# ping 172.18.0.2
PING 172.18.0.2 (172.18.0.2)56(84)bytes of data.
64 bytes from 172.18.0.2: icmp_seq=1 tt1=64 time=0.067 ms
64 bytes from 172.18.0.2: icmp_seq=2 ttl=64 time=0.055 ms

#1inux可以ping通docker容器内部
```



> 原理

1、我们每启动一个docker容器，docker就会给docker容器分配一个ip，我们只要安装了docker，就会有一个网卡docker0桥接模式，

使用的技术是**evih-pair**技术!

再次测试ip addr

![image-20211004221721564](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20211004221721564-2021-10-4-22:17:21.png)

2、再启动一个容器测试，发现又多了一对网卡~

![image-20211004221825916](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20211004221825916-2021-10-4-22:18:26.png)



我们发现这个容器带来网卡，都是一对对的

evth-pair 就是一对的虚拟设备接口，他们都是成对出现的，一段连着协议，一段彼此相连

正因为有这个特性，evth-pair充当一个桥梁，连接各种虚拟网络设备的

openStac，Docker容器之间的连接，OVS的连接，都是使用evth-pair技术



3、我们来测试下 tomcat01 和 tomcat02 是否可以ping通

```shell
[root@localhost /]# docker exec -it tomcat02 ping 172.18.0.2
#结论:容器和容器之间是可以互相ping通的!

```

![image-20210720175117036](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20210720175117036-2021-10-4-22:21:53.png)



结论: tomcat01和tomcat02是公用的一个路由器，docker0。

所有的容器不指定网络的情况下，都是docker0路由的，docker会给我们的容器分配一个默认的可用IP



> 小结

Docker使用的是Linux的桥接，宿主机中是一个Dokcer容器的网桥docker0。

![image-20210720175550907](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20210720175550907-2021-10-4-22:23:01.png)

Docker中的所有的网络接口都是虚拟的。虚拟的转发效率高!(内网传递文件!)只要容器删除，对应网桥一对就没了!



```shell
docker network ls
docker network inspect <NETWORK ID>
```

![image-20210720180128332](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20210720180128332-2021-10-4-22:23:33.png)

### 02 | --link

:::warning 思考一个场景

我们编写了一个微服务，database url=ip:，项目不重启，数据库ip换掉了，我们希望可以处理这个问题，可以名字来进行访问容器?

:::

```shell
[root@localhost /]# docker exec -it tomcat02 ping tomcat01
ping: tomcat01 : Name or service not known

#如何可以解决呢?
#通过--1ink既可以解决了网络连通问题
[root@localhost /]# docker run -d -p --name tomcat03 --1ink tomcat02 tomcat 5ca72d80ebb048d3560df1400af03130f37ece244be2a54884336aace2106884

[root@localhost /]# docker exec -it tomcat03 ping tomcat02
PING tomcat02(172.18.0.3) 56(84) bytes of data.
64 bytes from tomcat02 (172.18.0.3): icmp_seq=1 tt1=64 time=0.100 ms
64 bytes from tomcat02 (172.18.0.3): icmp_seq=2 tt1=64 time=0.066 ms
64 bytes from tomcat02 (172.18.0.3): icmp_seq=3 ttl=64 time=0.067 ms

#反向可以ping通吗?
[root@localhost /]# docker exec -it tomcat02 ping tomcat03
ping: tomcat03: Name or service not known

```



```shell
# 查看docker0 网络配置信息
docker network ls
docker network inspect docker0的网络ID
```

探究inspect！

![image-20210720184633613](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20210720184633613-2021-10-4-23:06:00.png)

其实这个**tomcat03就是在本地配置了tomcat02的配置**

```shell

#查看hosts配置，在这里原理发现!
[root@localhost/]# docker exec -it tomcat03 cat /etc/hosts
127.0.0.1 localhost
::1 localhost ip6-1oca1host ip6-1oopback
fe00::0 ip6-localnet
ff00::0 ip6-mcastprefix
ff02::1 ip6-a11nodes
ff02::2 ip6-allrouters
172.18.0.3 tomcat02 312857784cd4
172.18.0.4 5ca72d80ebb0

```

本质探究:

--link就是我们在hosts配置中增加了一个`172.18.0.3 tomcat02 312857784cd4`

我们现在玩Docker **已经不建议使用--link 了** ,不适用于docker0 !

docker0问题:他不支持容器名连接访问!

### 03 | 自定义网络

> 查看所有的docker网络

![image-20210720200725375](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20210720200725375-2021-10-4-22:31:51.png)

**网络模式**

bridge ：桥接docker(默认，自己床架也使用bridge模式)none :不配置网络

host ：和宿主机共享网络

container ：容器网络连通!(用的少!局限很大)



**测试**

```shell
#我们直接启动的命令 --net bridge，而这个就是我们的docker0
docker run -d -p --name tomcat01 tomcat
docker run -d -p --name tomcat01 --net bridge tomcat
docker0特点:默认，域名不能访间， --link可以打通连接!

# 我们可以自定义一个网络!
# --driver bridge
# --subnet 192.168.0.0/16   192.168.0.2   192.168.255.255
# --gateway 192.168.0.1
[rootkuangshen /]# docker network create --driver bridge --subnet 192.168.0.0/16 --gateway 192.168.0.1 mynet
eb21272b3a35ceaba11b4aa5bbff131c3fb09c4790f0852ed4540707438db052

[root@localhost /]# docker network 1s
NETWORK ID        NAME                        DRIVER     SCOPE
5a008co15cac      bridge                      bridge     local
db44649a9bff      composetest_default         bridge     loca1
ae2b6209c2ab      host                        host       1oca1
eb21272b3a35      mynet                       bridge     loca1



```



这样，我们自己的网络就创建好了

![image-20210720201308559](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20210720201308559-2021-10-4-22:32:09.png)



![image-20210720201448184](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20210720201448184-2021-10-4-22:38:59.png)

```shell
#再次测试ping连接
[root@localhost /]# docker exec -it tomcat-net-01 ping 192.168.0.3
PING192.168.0.3 (192.168.0.3)56(84) bytes of data.
64 bytes from 192.168.0.3: icmp_seq=1 tt1=64 time=0.085 ms
64 bytes from 192.168.0.3: icmp_seq=2 tt1=64 time=0.070 msNC
--- 192.168.0.3 ping statistics ---
2 packets transmitted，2 received，0% packet loss，time 999msrtt min/avg/max/mdev = 0.070/0.077/0.085/0.011 ms

#现在不使用--link也可以ping名字了!
[root@localhost /]# docker exec -it tomcat-net-01 ping tomcat-net-02
PING tomcat-net-02 (192.168.0.3)56(84) bytes of data.
64 bytes from tomcat-net-02.mynet (192.168.0.3): icmp_seq=1 tt1=64 time=0.055 ms
64 bytes from tomcat-net-02.mynet(192.168.0.3): icmp_seq=2 ttl=64 time=0.063 ms

```



我们自定义的网络docker都已经帮我们维护好了对应的关系，推荐我们平时这样使用网络!

**好处︰**

redis-不同的集群使用不同的网络，保证集群是安全和健康的

mysql -不同的集群使用不同的网络，保证集群是安全和健康的



### 04 | 网络联通

![image-20210720201852766](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20210720201852766-2021-10-4-22:41:43.png)

![image-20210720201909113](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20210720201909113-2021-10-4-22:41:52.png)



```shell
#测试打通tomcat01 - mynet
[root@localhost/]# docker network connect mynet tomcat01
#连通之后就是将tomcat01放到了mynet网络下

#—个容器两个ip地址!
#阿里云服务:公网ip私网ip

```



![image-20210720202107718](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20210720202107718-2021-10-4-22:43:23.png)



```shell
#01 连通ok
[root@localhost/]# docker exec -it tomcat01 ping tomcat-net-01
PING tomcat-net-01 (192.168.0.2)56(84) bytes of data.
64 bytes from tomcat-net-01.mynet(192.168.0.2): icmp_seq=1 ttl=64 time=0.072 ms
64 bytes from tomcat-net-01.mynet(192.168.0.2): icmp_seq=2 tt1=64 time=0.070 ms

#02是依旧打不通的
[root@localhost/]# docker exec -it tomcat02 ping tomcat-net-01
ping: tomcat-net-01: Name or service not known

```

> 结论︰假设要跨网络操作别人，就需要使用docker network connect 连通



### 05 | 实战：部署Redis集群

![image-20210720204241664](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20210720204241664-2021-10-4-22:45:24.png)

![image-20210720202327593](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20210720202327593-2021-10-4-22:45:29.png)

shell脚本

```shell
#创建网卡
docker network create redis --subnet 172.38.0.0/16

#通过脚本创建六个redis配置
for port in s(seq 1 6); \
do \
mkdir -p /mydata/redis/node-S{port}/conf
touch /mydata/redis/node-Siport}/conf/redis.conf
cat << EOF >/mydata/redis/node-${port}/conf/redis.conf
port 6379
bind 0.0.0.0
cluster-enab1ed yes
cluster-config-file nodes. confcluster-node-timeout 5000
cluster-announce-ip 172.38.0.1S{port}cluster-announce-port 6379
cluster-announce-bus-port 16379appendonly yes
EOF
done

docker run -p 637S{port}:6379 -p 1637S{port}:16379 --name redis-${port} \
-v/mydata/redis/node-S{port}/data:/data \
-v/mydata/redis/node-S{port}/conf/redis.conf:/etc/redis/redis.conf \
-d --net redis --ip 172.38.0.1S{port} redis:5.0.9-alpine3.11 redis-server /etc/redis/redis.conf;

docker run -p 6371:6379 -p 16371:16379 --name redis-1 \
-v /mydata/redis/node-1/data:/ data \
-v /mydata/redis/node-1/conf/redis.conf:/etc/redis/redis.conf \
-d --net redis --ip 172.38.0.11 redis:5.0.9-alpine3.11 redis-server /etc/redis/redis.conf

docker run -pr 6372:6379 -p 16372:16379 --name redis-2 \
-v /mydata/redis/node-2/data:/data \
-v /mydata/redis/node-2/conf/redis.conf:/etc/redis/redis.conf \
-d --net redis --ip 172.38.0.12 redis:5.0.9-alpine3.11 redis-server /etc/redis/vedis.conf

#创建集群
redis-c1i --cluster create 172.38.0.11:6379 172.38.0.12:6379 172.38.0.13:6379 172.38.0.14:6379 172.38.0.15:6379 172.38.0.16:6379 --cluster-replicas 1
```



![image-20210720202926056](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20210720202926056-2021-10-4-22:47:00.png)

docker搭建redis集群完成

![image-20211004224629714](https://gitee.com/small-universe/file-bed/raw/master/Python/Docker/image-20211004224629714-2021-10-4-22:46:30.png)

我们使用了docker之后，所有的技术都会慢慢的变得简单起来!



## 八、Spring Boot微服务打包成Docker镜像


