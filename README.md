# Flow3-Week1

## Svar til spørgsmål fra torsdagsopgaven "Forms and Controlled Components":

1) In a Controlled Component React state is made the "Single source of truth", so how:
Do we ensure that input controls like text, textarea or select always presents the value found in the components state?
- Hver gang componentet blive renderet (altså ved hver ændring) bliver inputfelternes value sat til det staten indeholder.

2) Do we ensure that a controls state, always matches the value found in an input control?
- Den state vi har i vores component bliver opbygget continuerligt på baggrund af det der er står i inputfelterne via onChange.
Altså hver gang der bliver ændret et tegn i et input felt kører vi en metode der setter state i componentet til det aktuelle.

3) What is the purpose of doing event.preventDefault() in an event handler?
- event.prevetDefault gør at vi ikke kontakter serveren og får en ny side leveret.

4) What would be the effect of NOT doing event.preventDefault in a submit handler
- Vi ville få en ny side leveret fra serveren og alt skulle så gen-renderes

5) Why don't we want to submit the traditional way, in a single page application?
- Fordi så er componentet ikke "the single source of truth", hvilket vi gerne vil have af følgende årsager som jeg googlede mig frem til (jeg kunne honestly ikke komme på nogen selv):
- The state becomes the single source of truth for both the data and the UI.
- Makes debugging easier for bug-detection.
- Makes it easier to “lift the state up”, which in turn, makes it easier to break your components into functional and presentational components(Pure Components!).
- Easier to implement on-the-fly(onChange) validations.
- Easier to ensure inputs are in the specific format, like telephone numbers.

6) Explain in words what it takes to implement the "Controlled Component" pattern for a form
- Basically skal du have en onChange på alle dine inputs som kører en metode der opdatere staten hver gang der sker en ændring i inputfelterne.
Så skal du samtiding hver gang componenter re-render sætte value af inputfeltet med det staten indeholder, så state og inputfelt altid er enige.

## Svar til spørgsmål fra torsdagsopgaven "Lifting State Up":

1) What is meant by the react term “Lifting State Up”?
- Lifting state up er det du gør når to components der ikke har parent-child relation skal udveksle data. Man sender en metode med fra parent componenten til det ene child component, når det child component kører metoden har parent så adgang til argumenter/output fra metoden, fx kan man bruge det til at sette en state i parent componentet. Dataen kan så sendes ned til det andet child component som skulle bruge dataen.

2) Where do you lift it up to?
- Man lifter data op til parent componentet.

3) Which way does React recommend data to flow: From sibling to sibling, from bottom to top or from top to bottom?
Data flyder normalt fra top to bottom, altså fra parent til child, men man kan også få data fra child til parent, som ved lifting state up. Man kan ikke få data fra siblin til sibling direkte.

4) Lifting state up, involves a great deal of boilerplate code, what’s the benefit we get from doing “things” like this?
Hele ideen ved at have forskellige componenter der tager sig af specifikke ting kender vi også fra Java og andre programeringssprog. Det gør koden lettere at overskue, lettere at tilføje features til og lettere opdatere/redigere i. Og hvis man vil dele sin kode op kommer der tilfælde hvor du får brug for at en sibling kender noget data fra en anden sibling.

## Svar til spørgsmål fra fredagsopgaven:
1) Describe the term Single Page Application and why it has become so popular for modern web-applications
- SPA betyder at alt foregår på en enkelt side og alt på siden foregår dynamisk ved at man udfylder forskellige dele af DOM'en afhængigt af hvordan brugeren klikker rundt på siden el.lign.

2) Explain the “recommended” React way of passing data into Components (at the top, or at the bottom or..)
- Man giver data til components via props. Hvis props er baseret på en components state vil de automatisk blive givet videre hvis sateten(altså props) ændre sig, da det trigger en re-render af componentet og de andre componenter den giver props med til vil blive remounted med de opdaterede props.

3) Explain how JavaScript array methods, like filter, map and (reduce) can be used to generate dynamic HTML structures (tables, ul's etc.)
- Array metoder kan bruges til at gøre en side dynamisk ved at, hvis de bliver kørt på props der ændre sig, så bliver siden opdateret når componentet modtager nye props.

4) Explain about the Observer pattern, and where you have used it, both with Java and JavaScript.
- Observer patternet er hvor en række objekter el.lign. er afhængig af staten i et enkelt objekt. I JS bruger vi det fx hvis et component der skal render en tabel er afhængig af staten i et andet component, fx hvis den skal rendere en liste af personer som er sat some state i et andet component og kan ændre sig afhængig af bruger inputs. I Java er det vel lidt det samme. Fx hvis en Person class har en true/false om de er admin og en række metoder kun skal være tilgængelige for dem og kun skal blive vist hvis Personen der er logget ind er admin.
