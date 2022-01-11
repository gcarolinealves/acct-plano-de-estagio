import './App.css';

function Helloworld (props){

    return (
        <div className="card">
            <p className={props.textClass}>{props.setConfig("Hello world!")}</p>
        </div>
    )
}

function App() {
    

    function normalText (string) {
        return string;
    }

    function upperCase (string) {
        return string.toUpperCase();
    }

    function lowerCase (string) {
        return string.toLowerCase();
    }

    function textReplace (string) {
        return string.replace("Hello", "HELLO");
    }

    function textReverse (string) {
        return string.split("").reverse();
    }

    return (
        <div className="App">
            <Helloworld setConfig={normalText}/>
            <Helloworld setConfig={normalText} textClass="text-shadow"/>
            <Helloworld setConfig={textReplace}/>
            <Helloworld setConfig={normalText} textClass="transparent"/>
            <Helloworld setConfig={upperCase}/>
            <Helloworld setConfig={normalText} textClass="text-bold"/>
            <Helloworld setConfig={lowerCase}/>
            <Helloworld setConfig={normalText} textClass="text-gradient"/>
            <Helloworld setConfig={textReverse}/>
            <Helloworld setConfig={normalText} textClass="background-gradient"/>
        </div>
    );
}

export default App;
