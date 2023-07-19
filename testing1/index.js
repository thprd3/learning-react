function MainContent() {
    return (
        <h1 className="header"> I'm learning React! </h1>
    )
}

// arg 1: what to render, arg 2: where to render it
// OBS: utdatert. Bruk heller createRoot, tror jeg.
ReactDOM.render(
    <div className="root">
        <MainContent />
        <p className="content">Hi, my name is Bob!</p> 
    </div>,
    document.getElementById("root"))

/*
Declarative = tell machine what to do - it fixes
vs imperative = tell machine every step how to do thing
vanilla JS is imperative

Maskinen "oversetter" ReactDOM.render() til noe langt mer komplisert, uten at jeg trenger å forholde meg til det. 


JSX = JavaScript XML = HTML i JS format ig.
Skriv HTML som du kjenner. Små forskjeller, eg className
Produktet blir et JS-objekt med mer informasjon enn et HTML-element, som beskriver et DOM-element. 
*/

const element = <h1 className="header">This is JSX</h1>
console.log(element)

//JSX kan kun returnere ett parent-element. Løsning: wrapping. Children, nesting er null stress. 
// Kan skrive masse JSX, lagre som variabel, rendre variabelen. 

const navbar = (
    <nav>
        <h1>SimSim</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(
    navbar, 
    document.getElementById("root")
)