Chaos game czyli nauka panowania nad chaosem, dla programistów, w ramach spędzania wolnego czasu
------------------------------------------------------------------------------------------------

*Chaos game* (gra w chaos) dla niewtajemniczonego brzmi dość złowrogo i przywodzi na myśl gry typu FPP,
gdzie do tłumów kosmicznych najeźdźców strzela się z różnych strzelających urządzeń, najczęściej dość dużego kalibru.

Prawda nie jest aż tak atrakcyjna dla fanów e-sportu, aczkolwiek może sprawić, że przez chwilę opuścimy broń
i zastanowimy się nad istotą chaosu (oczywiście tego policzalnego). Bo prawdą jest, że wiele rzeczy, które
nazywamy *chaosem* oznacza coś czego nie rozumiemy i nie potrafimy wykorzystać, tak było ze statystyką,
medycyną czy pogodą, jednak po latach badań nauczyliśmy się wydobywać z chaosu wiedzę.

*Chaos game* może nie jest aż tak użytecznym elementem teorii chaosu jak Atraktor Lorenza, czy bifurkacja,
ale pozwoli w sposób widoczny, łatwy i przyjemny dotknąć natury zagadnienia.



O co chodzi z tym całym chaosem
===============================

Termin *Chaos game* został pierwszy raz podany przez Michaela F. Barnsleya (tak, tego od paprotki) w 1988 r. w słynnej publikacji *Fractals Everywhere*
i dotyczył prostego algorytmu, który można opisać następująco:

Warunki początkowe

    * W układzie współrzędnych wyznaczyć zbiór :math:`n` wierzchołków wielokąta (najlepiej foremnego, Barnsley użył trójkąta równobocznego) .
    * Losowo wybrać pierwszy *punkt aktywny* (może być dowolnym punktem na płaszczyźnie, wewnątrz lub na zewnątrz wielokąta, może być nawet jednym z jego wierzchołków, Barnsley użył punktu wewnątrz).

Algorytm

    * Narysuj *punkt aktywny*.
    * Wylosuj *wierzchołek wielokąta* z uwzględnieniem tabeli ograniczeń :math:`q` (w pierwotnej wersji nie było ograniczeń).
    * Wyznacz *nowy punkt* należący do odcinka łączącego *punkt aktywny* z wylosowanym wierzchołkiem wielokąta znajdący się odległości :math:`r` od wylosowanego wierzchołka wielokąta, gdzie :math:`0 < r < 1` (w pierwotnej wersji :math:`r = 0.5`).
    * Oznacz *nowy punkt* jako *punkt aktywny*.

Algorytm powtarzamy wyznaczoną ilość powtórzeń :math:`times`. W literaturze stosuje się zazwyczaj :math:`times \approx 10000`, jako dość wydajny kompromis pomiędzy efektem wizualnym a łącznym czasem wykonania algorytmu.

W wyniku manipulacji parameterami :math:`n, r, q` oraz :math:`times`, podobno, można osiągnąć interesujące wizualnie wyniki, co mam nadzieję udowodnić w dalszej części.

Dla wygody zakładamy, że

    * wszytkie wielokąty będą foremne,
    * pierwszy wierzchołek każdego wielokąta będzie umiejscowiony na górze i będzie posiadał takie same współrzędne,
    * pierwszy *punkt aktywny* będzie miał współrzędne :math:`(0, 0)`,
    * wartości współrzędnych wierzchołków, będą większe od zera (jak to w grafice komputerowej),
    * zaś domyślna ilość powtórzeń :math:`times = 100000`.

Oczywiście zachęcam do eksperymentowania z wartościami tych ustawień, jednak uprzedzam, nie mają zbyt dużego wpływu na osiągane wyniki.

Do dzieła
=========

Zabawę zaczniemy od *trójkąta równobocznego*, a wyznaczone przez nas parametry będą przedstawiały się następująco:

.. math::

    n = 3, r = 0.5, q = ()

Co oznacza:

    * wielokąt będzie miał trzy wierzchołki,
    * nowy punkt pojawi się w połowie odległości między *punktem aktywnym* a *wylosowanym wierzchołkiem*,
    * ponieważ tabela ograniczeń :math:`q` jest pusta, wierzchołki losowane są bez żadnych dodatkowych ograniczeń.

Oto co otrzymujemy.

.. image:: ../images/fractals/triangle.*
    :alt: n = 3, r = 0.5, q = ()
    :align: center

Pojawił się Trójkąt Sierpińskiego, całkiem atrakcyjny wizualnie układ, mimo losowości wybierania wierzchołków.
Świetnie, spróbujmy teraz z większą ilością wierzchołków, następny w kolejce *kwadrat*, opisujemy go następująco:

.. math::

    n = 4, r = 0.5, q = ()

.. image:: ../images/fractals/square.*
    :alt: n = 4, r = 0.5, q = ()
    :align: center

Rezultat niestety nie zachwyca. Spróbujmy dla większej ilości wierzchołków, np. użyjmy *pięciokąta i sześciokąta foremnego*.

.. math::

    n = 5, r = 0.5, q = ()

.. image:: ../images/fractals/pentagon.*
    :alt: n = 5, r = 0.5, q = ()
    :align: center

.. math::

    n = 6, r = 0.5, q = ()

.. image:: ../images/fractals/hexagon.*
    :alt: n = 6, r = 0.5, q = ()
    :align: center

Chyba nie tędy droga, chaos jak to chaos rządzi się swoimi prawami, bardzo ładnie zadziałał na trójkącie, ale zmiana ilości wierzchołków
daje wyniki na poziomie szumu, jedno co widzimy, to to, że pomimo wyboru punktu startowego na zewnątrz figury, prawie wszystkie punkty
wylądowały wewnątrz.

Ponieważ zmiana ilości boków bez zmiany innych parametrów nie przyniosła zbyt spektakularnych efektów wracamy do `kwadratu`,
ale zmienimy parametr :math:`r` o połowę.

.. math::

    n = 4, r = 0.25, q = ()

.. image:: ../images/fractals/square_r0_25.*
    :alt: n = 4, r = 0.25, q = ()
    :align: center

No to wygląda znacznie lepiej, duże uporządkowanie, aczkolwiek dużo punktów trafiło na niewielką powierzchnię.
Ciekawe co stanie się jeżeli pozmieniamy nieco parametr :math:`r`, np. nadając mu wartości odpowiednio 0.4, 0.6, 0.75 i 0.9.


.. math::

    n = 4, r = 0.4, q = ()

.. image:: ../images/fractals/square_r0_4.*
    :alt: n = 4, r = 0.4, q = ()
    :align: center



.. math::

    n = 4, r = 0.6, q = ()

.. image:: ../images/fractals/square_r0_6.*
    :alt: n = 4, r = 0.6, q = ()
    :align: center



.. math::

    n = 4, r = 0.75, q = ()

.. image:: ../images/fractals/square_r0_75.*
    :alt: n = 4, r = 0.75, q = ()
    :align: center



.. math::

    n = 4, r = 0.9, q = ()

.. image:: ../images/fractals/square_r0_9.*
    :alt: n = 4, r = 0.9, q = ()
    :align: center


Widać, że uporządkowanie chaosu przebiega nieregularnie i o ile dla wartości 0.25 i 0.4 wygląda obiecująco, przy 0.5 zanika,
zaś dla 0.6 zdaje się wprowadzać jakieś "nitkowate" uporządkowanie o tyle dla > 0.75 wszystko zaczyna być wchłaniane przez
"czarną dziurę". Chciałoby się powiedzieć jak to w chaosie, biorąc pod uwagę pierwotne znaczenie tego słowa,
jako kosmicznej pramaterii.


Więcej o tabeli ograniczeń
==========================

Dotychczas korzystaliśmy wyłącznie z pustej tabeli ograniczeń :math:`q`, zanim zaczniemy tam umieszczać wartości,
należy się kilka słów wyjaśnienia, z czym to się je, to znaczy, co zawiera ta tablica i jak z niej korzystać.

Wyjdziemy jednak od sposobu w jaki losowane są wierzchołki, otóż wierzchołki
figury użytej do gry przechowywane są w tablicy i w wyniku losowania wybierany jest jeden z indeksów tej tablicy, liczba całkowita
z przedziału :math:`[0, n - 1]`. W tabeli :math:`q` umieszczone będą *odległości* wylosowanego indeksu w stosunku do zbioru ostatnich
losowań. Odległość oznacza ilość pozycji od danego indeksu. Weźmy pod uwagę zbiór czterech punktów:


.. math::

    points = { (0, 0), (200, 0), (200, 200), (0, 200) }


jeżeli wylosowano wierzchołek o indeksie 0 :math:`(0, 0)` to w odległości 0 znajduje się ten sam punkt, więc ograniczenie :math:`q = (0)`
oznacza, ni mniej ni więcej, tylko nowo wylosowany punkt, nie może być użyty, jeżeli został wylosowany poprzednim kroku.

Odległość 1 oznacza wierzchołki znajdujące się w odległości 1 (oczywiście w pierścieniu modulo :math:`n`) od wybranego wierzchołka,
czyli dla podanego punktu :math:`(0, 0)` będzie to :math:`(200, 0)`. Analogicznie odległość 2 oznacza dla tego przypadku
:math:`(200, 200)` a 3 :math:`(0, 200)`.

Powyższe nakłada podstawowe ograniczenie na dopuszczalne wartości:

Każda wartość tablicy :math:`q` musi być liczbą całkowitą i należeć do zbioru :math:`{0, 1, ..., n - 1, n}`


Ciekawiej zaczyna się robić gdy tabela ograniczeń ma więcej niż jeden element, działa to mniej więcej tak, że na pozycji

    * 0 jest odległość dotycząca ostatniego udanego losowania
    * 1 jest odległość dotycząca przedostatniego udanego losowania
    * 2 jest odległość dotycząca przedprzed ostatniego udanego losowania
    * i tak dalej, i tak dalej.

Uwaga! losowanie jest uznane za udane, wtedy i tylko wtedy, gdy wylosowany indeks nie spełnia tych odległości.

W tym celu wewnątrz aplikacji wspierającej *grę w chaos* musi być przechowywana lista ostatnio dokonanych udanych losowań
o rozmiarze przynajmniej takim jak tabela ograniczeń :math:`q`. Przykład więcej niż jednej wartości w tabeli ograniczeń:

Ostatnie 2 losowania wyglądały następująco:

.. math::

    log = (0, 1)

Tabla ograniczeń:

.. math::

    q = (2, 1)

Wylosowano indeks 0 odległość od indeksu z ostatniego udanego losowania wynosi 2, warunek nie spełniony, ponawiamy losowanie.
Wylosowano indeks 1 odległość od indeksu z ostatniego udanego losowania wynosi 1, ale odległość od przedostatniego wynosi 1 warunek nie spełniony, ponawiamy losowanie.
Wylosowano indeks 3 odległość od indeksu z ostatniego udanego losowania wynosi 1, odległość od przedostatniego wynosi 2 warunek spełniony, losowanie udane.

Trochę to zakręcone, ale łatwiej będzie zrozumieć gdy zobaczymy wyniki.
W bieżącej publikacji zajmować się będziemy tabelami ograniczeń zawierającymi nie więcej niż 2 elementy.


Gra z tabelą ograniczeń
=======================

Postaramy się teraz założyć ograniczeni przy pomocy niepustej tablicy :math:`q`.

Pozostaniemy przy kwadracie :math:`n = 4`, wartości :math:`r = 0.5` i spróbujemy wykonać ćwiczenie
z jednoelementową tabelą ograniczeń o wartościach, odpowiednio 0, 1, 2 i 3.


.. math::

    n = 4, r = 0.5, q = (0)

.. image:: ../images/fractals/square_r0_5_q0.*
    :alt: n = 4, r = 0.5, q = (0)
    :align: center



No, to można nazwać sukcesem, elegancki fraktal przypominający mapę albo jakieś mury obronne. Próbujemy kolejnych wartości.



.. math::

    n = 4, r = 0.5, q = (1)

.. image:: ../images/fractals/square_r0_5_q1.*
    :alt: n = 4, r = 0.5, q = (1)
    :align: center




.. math::

    n = 4, r = 0.5, q = (2)

.. image:: ../images/fractals/square_r0_5_q2.*
    :alt: n = 4, r = 0.5, q = (2)
    :align: center




.. math::

    n = 4, r = 0.5, q = (3)

.. image:: ../images/fractals/square_r0_5_q3.*
    :alt: n = 4, r = 0.5, q = (3)
    :align: center


Jak widać, poza :math:`q = (1)` i :math:`q = (3)`, gdzie jedno jest odbiciem lustrzanym drugiego, pozostałe fraktale są od siebie bardzo różne.

Teraz spróbujemy użyć tabeli ograniczeń nakładanych na przedostatnie i przedprzedostatnie udane losowanie.

.. math::

    n = 4, r = 0.5, q = (1,3)

.. image:: ../images/fractals/square_r0_5_q1_3.*
    :alt: n = 4, r = 0.5, q = (1,3)
    :align: center



.. math::

    n = 4, r = 0.5, q = (2,2)

.. image:: ../images/fractals/square_r0_5_q2_2.*
    :alt: n = 4, r = 0.5, q = (2,2)
    :align: center


.. math::

    n = 4, r = 0.5, q = (3,1)

.. image:: ../images/fractals/square_r0_5_q3_1.*
    :alt: n = 4, r = 0.5, q = (3,1)
    :align: center



Jak widać w obu przypadkach :math:`q = (1, 3)` i  :math:`q = (3, 1)`, o dziwo, otrzymaliśmy taki sam wynik
bardzo różniący się od :math:`q = (2, 2)`. Kolejna dziwna cecha chaosu, tak na parawdę nie wiadomo kiedy pojawi się jakiś niespodziewany porządek.


Bardziej złożone wielokąty
==========================

Pozwolę sobie zaprezentować tylko, kilka, bardziej złożonych wariantów dla pięcio i sześciokąta foremnego, na początek z pustą tabelą ograniczeń.

W przypadku pięciokąta mam małą uwagę, mimo że na stronie *Wolfram*, proponują użyć :math:`r = 3/8`, lepszy rezultat (segmenty fraktala bardziej się ze sobą stykają) daje :math:`r = \frac{ 1 }{ 1 + \varphi }`, gdzie :math:`\varphi` oznacza słynną formułę *złotego podziału* (golden ratio)

.. math::

    \varphi = \frac{1 + {\sqrt {5}}}{2} \approx 1,6180339887

Przykłady z pustą tabelą ograniczeń dla pięciokąta foremnego:

.. math::

    n = 5, r = \frac{ 1 }{ 3 }, q = ()

.. image:: ../images/fractals/pentagon_r0_333333.*
    :alt: n = 5, r = 0.333333, q = ()
    :align: center



.. math::

    n = 5, r = \frac{ 1 }{ 1 + \varphi }, q = ()

.. image:: ../images/fractals/pentagon_rPHI.*
    :alt: n = 5, r = 0.333333, q = ()
    :align: center

i sześciokąta foremnego:

.. math::

    n = 6, r = \frac{ 1 }{ 3 }, q = ()

.. image:: ../images/fractals/hexagon_r0_333333.*
    :alt: n = 5, r = 1/3, q = ()
    :align: center


Przykłady z niepustą tabelą ograniczeń, jednoelementową:


.. math::

    n = 5, r = 0.5, q = (0)

.. image:: ../images/fractals/pentagon_r0_5_q0.*
    :alt: n = 5, r = 0.5, q = (0)
    :align: center

i dwuelementową:

.. math::

    n = 6, r = 0.5, q = (1,4)

.. image:: ../images/fractals/pentagon_r0_5_q1_4.*
    :alt: n = 5, r = 0.5, q = (1, 4)
    :align: center


Jak widać świat *gry w chaos* jest w stanie dostarczyć całkiem miłych wrażeń estetycznych, dać namiastkę
torzenia dzieł plastycznych bez chodzenia na kółko plastyczne. Główne założenia, które urzekają swoją prostotą, pozwalają
eksperymentować zarówno przez zmiany wartości parametrów :math:`n,r,q` jak i generować trójwymiarowe fraktale w przestrzeni.
Tu ograniczyłem się do najczęściej publikowanych obiektów.

Przed nami część praktyczna, czyli, jak takie wyrosłe z chaosu fraktale wygenerować na swoim ekranie.


Zrób to sam
===========

Tytuł niniejszego rozdziału pewnie niewiele mówi młodszym czytelnikom ale dla wielu, kojarzy się on z popularnym
niegdyś programem promującym majsterkowanie. Co było charakterystyczne w tym programie, otóż prowadzący, Pan Adam Słodowy
pokazywał różne czynności na ekranie i wiele z nich faktycznie sam wykonywał, natomiast jeżeli dana czynność
była długotrwała np. wycinanie dość skomplikowanych kształtów z puszki po konserwie, przeważnie zaczynał tylko, po czym
przerywał i mówił "ale ja już tutaj sobie przygotowałem" i wyciągał z pod stołu elegancko wykończony element.

Tak też i ja zrobię. Najpierw jednak o tym jak się do tego zabrałem.

Ponieważ algorytmy powinny być niezależne od technologii postanowiłem ograniczyć zestaw użytych narzędzi wg zasad:

    * użyte technologie muszą być dostępne każdemu, za darmo na dowolnej platformie
    * w obrębie użytych technologii nie będzie korzystane z dodatkowych bibliotek
    * prezentacja ograniczy się do dwóch kolorów białego (tło) i czarnego (pisak)

Wybór padł na HTML5 i JavaScript. HTML5 bo ma dostępny element <canvas> wręcz idealny do tego typu operacji,
javascript bo naturalnie się komponuje z HTML5 i może być użyty zarówno do opisania logiki problemu jak i do sterowania warstwą prezentacji.

Zgrubny podział na częśći:

    * logiczną (logika biznesowa gry w chaos) skrypt ``chaos-game.js``
    * prezentacyjną (logika generowania fraktala i obsługi części wizualnej) skrypt ``fractal.js``
    * część spajająca (punkt wejścia ap likacji i kontener elementów graficznych) plik ``index.html``

Logika gry w chaos
~~~~~~~~~~~~~~~~~~

.. literalinclude:: ../../web/chaos-game.js
    :language: javascript


Generowanie fraktala
~~~~~~~~~~~~~~~~~~~~

.. literalinclude:: ../../web/fractal.js
    :language: javascript


Entry point aplikacji
~~~~~~~~~~~~~~~~~~~~~

.. literalinclude:: ../../web/index.html
    :language: html


Podsumowanie
============


