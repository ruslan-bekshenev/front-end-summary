# Callback

Функция, которая будет вызвана по завершению асинхронного действия. Т.е в функции, где выполняются какие-либо асинхронные действия, передаются в виде аргументов функции `callback`'и.

## Callback в callback'е

Для того чтобы выполнить асинхронные действия друг за другом, ранее вызывались `callback`'и внутри других callback'ов. Это называлось **Callback hell**.

## Перехват ошибок

Подход «**error-first callback**» очень распространен в простых приложениях на express. Это когда мы в качестве первого аргумента передаем ошибку (если она есть).