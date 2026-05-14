# Git 分支练习

下面的练习都基于当前小项目。每个练习建议单独创建一个分支，做完后提交，再合并回 `main`。

## 练习 1：创建并合并一个功能分支

查看当前状态：

```powershell
git status
git branch
```

创建分支：

```powershell
git switch -c feature/dark-theme
```

修改 `styles.css`，尝试把页面改成深色主题。完成后提交：

```powershell
git add styles.css
git commit -m "Add dark theme"
```

切回主分支并合并：

```powershell
git switch main
git merge feature/dark-theme
```

合并成功后删除已合并分支：

```powershell
git branch -d feature/dark-theme
```

## 练习 2：保存任务到浏览器本地存储

创建分支：

```powershell
git switch -c feature/local-storage
```

修改 `app.js`，目标是刷新页面后任务仍然存在。可以尝试这几个方向：

- 页面加载时从 `localStorage` 读取任务。
- 每次添加、删除、切换完成状态后写入 `localStorage`。
- 如果本地没有数据，就使用现在的默认任务。

提交并合并：

```powershell
git add app.js
git commit -m "Persist tasks in local storage"
git switch main
git merge feature/local-storage
```

## 练习 3：添加任务优先级

创建分支：

```powershell
git switch -c feature/task-priority
```

修改 `index.html`、`styles.css` 和 `app.js`，给任务增加“普通 / 重要”优先级。建议先做最小版本：

- 在表单里加一个下拉框。
- 新任务保存优先级字段。
- 任务列表里显示优先级标签。

提交并合并：

```powershell
git add index.html styles.css app.js
git commit -m "Add task priority"
git switch main
git merge feature/task-priority
```

## 练习 4：制造并解决一次冲突

这个练习专门用来理解冲突。

先在 `main` 上创建第一个分支：

```powershell
git switch main
git switch -c feature/title-a
```

修改 `index.html` 里的标题文字，比如把 `分支练习 Todo` 改成 `Git 分支实验室`，然后提交：

```powershell
git add index.html
git commit -m "Update title copy A"
```

再回到 `main` 创建第二个分支：

```powershell
git switch main
git switch -c feature/title-b
```

修改同一行标题文字，比如改成 `Todo 分支训练场`，然后提交：

```powershell
git add index.html
git commit -m "Update title copy B"
```

合并第一个分支：

```powershell
git switch main
git merge feature/title-a
```

再合并第二个分支，此时大概率会出现冲突：

```powershell
git merge feature/title-b
```

打开 `index.html`，你会看到类似这样的冲突标记：

```text
<<<<<<< HEAD
Git 分支实验室
=======
Todo 分支训练场
>>>>>>> feature/title-b
```

保留你想要的最终文字，删除冲突标记，然后提交解决结果：

```powershell
git add index.html
git commit -m "Resolve title conflict"
```

## 常用命令速查

```powershell
git branch
git branch -a
git switch main
git switch -c feature/name
git status
git diff
git add .
git commit -m "Message"
git merge feature/name
git branch -d feature/name
```

