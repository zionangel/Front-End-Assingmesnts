import { useState } from "react";
import { Button } from "@/components/ui/button";

class CounterClass {
    constructor() {
        this._count = 0;
    }

    get count() {
        return this._count;
    }

    set count(value) {
        if (typeof value === "number" && value >= 0) {
            this._count = value;
        }
    }
}

const counter = new CounterClass();

export default function Counter() {
    const [count, setCount] = useState(counter.count);

    const increment = () => {
        counter.count = counter.count + 1;
        setCount(counter.count);
    };

    return ( <
        div className = "flex flex-col items-center justify-center min-h-screen bg-gray-100" >
        <
        div className = "bg-white p-6 rounded-2xl shadow-lg text-center" >
        <
        h1 className = "text-2xl font-bold mb-4" > Counter < /h1> <
        p className = "text-xl font-semibold mb-4" > Count: { count } < /p> <
        Button onClick = { increment }
        className = "px-4 py-2 text-lg" >
        Count <
        /Button> <
        /div> <
        /div>
    );
}