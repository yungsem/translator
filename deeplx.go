package main

import (
	"fmt"
	"os"
	"os/exec"
	"os/signal"
	"syscall"
)

func startDeeplx() {
	dir, err := os.Getwd()
	if err != nil {
		fmt.Println("获取工作目录失败:", err)
		return
	}
	fmt.Println("当前工作目录:", dir)

	// 创建一个命令，启动 deeplx 服务
	cmd := exec.Command("./deeplx/deeplx_darwin_arm64") // 假设 deeplx 可执行文件已安装在环境路径中
	// 将标准输出和标准错误输出连接到当前进程的输出
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr

	// 启动命令
	err = cmd.Start()
	if err != nil {
		fmt.Printf("启动 deeplx 进程失败: %v\n", err)
		return
	}

	fmt.Printf("deeplx 已启动，PID: %d\n", cmd.Process.Pid)

	// 捕获系统信号，以便可以在接收到终止信号时关闭进程
	sigChan := make(chan os.Signal, 1)
	signal.Notify(sigChan, syscall.SIGINT, syscall.SIGTERM)

	// 等待信号
	<-sigChan

	fmt.Println("收到信号，关闭 deeplx 进程...")

	// 关闭 deeplx 进程
	err = cmd.Process.Signal(syscall.SIGTERM)
	if err != nil {
		fmt.Printf("关闭 deeplx 进程失败: %v\n", err)
	} else {
		fmt.Println("deeplx 进程已关闭")
	}

	// 确保进程已退出
	cmd.Wait()
}
