import React from "react";

function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">
                Welcome to the App
            </h1>
            <img 
                src="/app/hello.jpg" 
                alt="Welcome" 
                height={"200px"}
                width={"200px"}
            />
        </div>
    );
}

export default Home;
