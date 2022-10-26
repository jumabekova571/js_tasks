# Показать файлы в текушей папке
```bash
ls
```
# Переход по папкам
```bash
# cd [путь]
# Пример
# Зайти в папку 23-10
cd ./23-10/
# Выти на 1 папку назад
cd ../
# Выти на 2 папки назад
cd ../../
# Выти на 2 папки внутрь
cd ./folder-a/folder-b
```
# Шпаргалка по Github

## Инициализация
Вызывается один раз в проекте чтобы инициализировать git
```bash
git init
```

## Привязка к удалённому репозиторию
```bash
git remote add [название подключения] [ссылка на git]
```
пример:
```bash
git remote add origin git@github.com:jumabekova571/js_tasks.git
```

## Удалить привязанный репозиторий
```bash
git remote remove [название подключения]
```
пример:
```bash
git remote remove origin
```

## Посмотреть привязанные репозитории
```bash
git remote -v
>> origin  git@github.com:jumabekova571/js_tasks.git (fetch)
>> origin  git@github.com:jumabekova571/js_tasks.git (push)
```

## Посмотреть изменения
```bash
git status
```
## Индексация
```bash
git add [файлы которые нужно индексировать]
```
примеры:
```bash
# Индексирование всех файлов
git add -A
```
```bash
# Индексирование всей теущей папки
git add .
# или
git add ./
```
```bash
# Индексирование определённого файла
git add ./styles/styles.css
```

## Коммит (Фиксация)
```bash
git commit -m "[сообщение]"
```
пример:
```bash
git commit -m "My first commit"
```

## Push (Публикация)
```bash
git push [название подключения] [название ветки]
```
пример:
```bash
git push origin master
```
