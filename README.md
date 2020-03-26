# Flow3-Week1

Svar til spørgsmål fra torsdagsopgaven "Forms and Controlled Components":

In a Controlled Component React state is made the "Single source of truth", so how:
Do we ensure that input controls like text, textarea or select always presents the value found in the components state?
Hver gang componentet blive renderet (altså ved hver ændring) bliver inputfelternes value sat til det staten indeholder.

Do we ensure that a controls state, always matches the value found in an input control?
Den state vi har i vores component bliver opbygget continuerligt på baggrund af det der er står i inputfelterne via onChange.
Altså hver gang der bliver ændret et tegn i et input felt kører vi en metode der setter state i componentet til det aktuelle.

What is the purpose of doing event.preventDefault() in an event handler?
event.prevetDefault gør at vi ikke kontakter serveren og får en ny side leveret.

What would be the effect of NOT doing event.preventDefault in a submit handler
Vi ville få en ny side leveret fra serveren og alt skulle så gen-renderes

Why don't we want to submit the traditional way, in a single page application?
Fordi så er componentet ikke "the single source of truth", hvilket vi gerne vil have af følgende årsager som jeg googlede mig frem til (jeg kunne honestly ikke komme på nogen selv):
The state becomes the single source of truth for both the data and the UI.
Makes debugging easier for bug-detection.
Makes it easier to “lift the state up”, which in turn, makes it easier to break your components into functional and presentational components(Pure Components!).
Easier to implement on-the-fly(onChange) validations.
Easier to ensure inputs are in the specific format, like telephone numbers.

Explain in words what it takes to implement the "Controlled Component" pattern for a form
Basically skal du have en onChange på alle dine inputs som kører en metode der opdatere staten hver gang der sker en ændring i inputfelterne.
Så skal du samtiding hver gang componenter re-render sætte value af inputfeltet med det staten indeholder, så state og inputfelt altid er enige.
