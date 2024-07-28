import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { Button } from "@/components/ui/button"

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <header className="py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">NeetCode</h1>
        <Button
          onClick={toggleDarkMode}
          variant="outline"
          size="icon"
          className="rounded-full"
        >
          {darkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
        </Button>
      </header>

      <main className="container mx-auto px-4">
        <section className="hero py-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Master Coding Interviews</h2>
          <p className="text-xl mb-8">Efficient algorithms. Clear explanations. Your path to success.</p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </Button>
        </section>

        <section className="flowchart py-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Your Learning Path</h3>
          <div className="flex flex-col items-center space-y-4">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg w-64 text-center">
              1. Choose Your Track
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg w-64 text-center">
              2. Study Algorithms
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg w-64 text-center">
              3. Solve Problems
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg w-64 text-center">
              4. Review Solutions
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg w-64 text-center">
              5. Practice Mock Interviews
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
