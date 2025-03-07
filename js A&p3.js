import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Counter() {
    const [count, setCount] = useState(0);

    return ( <
        div className = "flex flex-col items-center justify-center min-h-screen bg-gray-100" >
        <
        div className = "bg-white p-6 rounded-2xl shadow-lg text-center" >
        <
        h1 className = "text-2xl font-bold mb-4" > Counter < /h1> <
        p className = "text-xl font-semibold mb-4" > Count: { count } < /p> <
        Button onClick = {
            () => setCount(count + 1) }
        className = "px-4 py-2 text-lg" >
        Count <
        /Button> <
        /div> <
        /div>
    );
}