fork [https://github.com/DIYgod/DPlayer](https://github.com/DIYgod/DPlayer)

## 增加如下功能

### 跑马灯

```
{
    "bulletSecret": {
        "enabled": false,
        "text": "内容",
        "color": "颜色",
        "size": "字体大小"
    }
}
```

### 禁止快进

```
{
    "ban_drag": bool
}
```

### 试看

```
{
    "try": bool
}
```

### 定位到上次观看

```
{
    "last_see_pos": {
        "time": "Number",
        "pos": "Number"
    }
}
```

### 编译

```
docker run --rm -v /Users/tengteng/work/meedu/DPlayer:/app -w /app  node:14-slim  npm run build
```
