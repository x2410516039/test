# Git 分支练习小项目

这是一个不需要安装依赖的静态 Todo 小项目，用来练习 Git 分支的常见操作：创建分支、切换分支、提交、合并、删除分支，以及制造和解决一次简单冲突。

## 如何运行

直接用浏览器打开：

```powershell
start .\index.html
```

如果你使用 VS Code，也可以右键 `index.html` 选择在浏览器中打开。

## 项目结构

```text
.
├── index.html
├── styles.css
├── app.js
├── exercises
│   └── branch-practice.md
└── README.md
```

## 推荐练习顺序

先确认当前分支：

```powershell
git branch
git status
```

然后按 [exercises/branch-practice.md](exercises/branch-practice.md) 里的步骤练习。

最适合从这几个分支开始：

```powershell
git switch -c feature/dark-theme
git switch -c feature/local-storage
git switch -c feature/task-priority
```

每个分支只做一个小功能。做完后提交，再切回 `main` 合并。

