1) Проект посвящён видеоигре Duck Hunt.
2) Для создания использовались HTML5, CSS3 и JavaScript.
3) Адаптивность происходит на следующих точках: 0px - 320px, 320px - 480px, 480px - 600px, 600px - 768px. В основом изменяется только размер начального меню, убираются анимированные утки из вкладки "HELP" и незначительно изменяется содержание: +10 points for the blue duck, +50 points for the red duck, -5 points for the black duck.
4) Начальное меню сделано с помощью списка. Переходы осуществляются с помощью псевдокласса target.
5) Анимация (keyframes) была использована на собаке, утках, облаках и на финальных фразах в случае выигрыша либо проигрыша.

К собаке было применено несколько анимаций:
- keyframes dogMove + background-position - для анимирования походки собаки;
- keyframes dogRightMove: from { left: -500px; } to { left: 25vw; } - для движения собаки;
- keyframes dogDuck: 0% { bottom: -100px; } 50% { bottom: 110px; } 100% { bottom: -100px; } - для появления собаки с уткой в лапе после каждого попадания в утку.

Также было применено несколько анимаций и к уткам:
- keyframes с background-position - разное позиционирование для уток с разным цветом для анимирования их полёта;
- keyframes + направление, в котором утки будут лететь (from: left\right; to: left\right;);
- keyframes + направление, в котором утки будут улетать при попадании в них (duckDie { from { top: 0px; } to { top: 5555px; }}).

Была применена банальная анимация к облакам для движения их вправо\влево. @keyframes cloud(Left/Right)Move { from { left/right: -300px; } to { left/right: 2000px; }}

Для финальных фраз в случае выигрыша либо проигрыша была применена анимация (keyframes) с использованием translateX(10px/-10px) - для покачивания фраз из стороны в сторону.

В начальном меню на "START", "ABOUT" и "HELP" использовался псевдокласс hover { color: tomato; text-shadow: 0px 0px 30px rgba(51, 230, 225, 1) } + transition .5s

Также после нажатия "START" и при окончании игры исчезает\появляется тень на заднем фоне: opacity + transition.

6) Работоспособность проекта была проверена в браузерах Chrome, Opera, Firefox и Internet Explorer.
