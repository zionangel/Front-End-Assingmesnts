import { useState } from "react";
import { Button } from "@/components/ui/button";

function Counter() {
    let _count = 0;

    Object.defineProperty(this, "count", {
        get: function() {
            return _count;
        },
        set: function(value) {
            if (typeof value === "number" && value >= 0) {
                _count = value;
            }
        },
    });
}

Counter.prototype.increment = function() {
    this.count = this.count + 1;
};

Counter.prototype.decrement = function() {
    if (this.count > 0) {
        this.count--;
    }
};

Counter.prototype.reset = function() {
    this.count = 0;
};

const counter = new Counter();

export default function CounterComponent() {
    const [count, setCount] = useState(counter.count);

    const handleIncrement = () => {
        counter.increment();
        setCount(counter.count);
    };

    const handleDecrement = () => {
        counter.decrement();
        setCount(counter.count);
    };

    const handleReset = () => {
        counter.reset();
        setCount(counter.count);
    };

    return ( <
        div className = "flex flex-col items-center justify-center min-h-screen bg-gray-100" >
        <
        div className = "bg-white p-6 rounded-2xl shadow-lg text-center" >
        <
        h1 className = "text-2xl font-bold mb-4" > Counter < /h1> <
        p className = "text-xl font-semibold mb-4" > Count: { count } < /p> <
        div className = "flex space-x-4" >
        <
        Button onClick = { handleIncrement }
        className = "px-4 py-2 text-lg" >
        Increment <
        /Button> <
        Button onClick = { handleDecrement }
        className = "px-4 py-2 text-lg" >
        Decrement <
        /Button> <
        Button onClick = { handleReset }
        className = "px-4 py-2 text-lg" >
        Reset <
        /Button> <
        /div> <
        /div> <
        /div>
    );
}