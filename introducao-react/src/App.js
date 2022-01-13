import './App.css';
import {format} from "date-fns";

function Helloworld (props){
    const date = new Date();
    

    return (
        <div className="card">
            <p className={props.textClass}>{props.method("Hello world!")}</p>
            <span className="date">{format(date, "dd-MMMM-yyyy")}</span>
        </div>
    )
}

function App() {
    const settings = [
        {
            id: 1,
            method: (string) => {
                return string;
            }
        },
        {
            id: 2,
            method: (string) => {
                return string;
            },
            textClass: "text-shadow"
        },
        {
            id: 3,
            method: (string) => {
                return string.replace("Hello", "HELLO")
            }
        },
        {
            id: 4,
            method: (string) => {
                return string;
            },
            textClass: "transparent"
        },
        {
            id: 5,
            method: (string) => {
                return string.toUpperCase();
            }
        },
        {
            id: 6,
            method: (string) => {
                return string;
            },
            textClass: "text-bold"
        },
        {
            id: 7,
            method: (string) => {
                return string.toLowerCase();
            }
        },
        {
            id: 8,
            method: (string) => {
                return string;
            },
            textClass: "text-gradient"
        },
        {
            id: 9,
            method: (string) => {
                return string.split("").reverse();
            }
        },
        {
            id: 10,
            method: (string) => {
                return string;
            },
            textClass: "background-gradient"
        }
    ]


    return (
        <div className="App">
            {
                settings.map(setting => {
                    return <Helloworld key={setting.id} {...setting}/>
                })
            }
        </div>
    );
}

export default App;