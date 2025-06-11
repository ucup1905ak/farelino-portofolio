// src/App.tsx

import { useState } from "react";
import "./App.css";
import { ThemeToggle, SimpleThemeToggle } from "./components/ThemeToggle";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-200">
      {/* Google Drive-style header */}
      <header className="h-toolbar bg-background-light dark:bg-background-dark border-b border-border-light dark:border-border-darkMode shadow-elevation-1">
        <div className="flex items-center justify-between h-full px-6">
          {/* Left section - Logo and title */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">YD</span>
              </div>
              <h1 className="text-xl font-medium text-text-primary-light dark:text-text-primary-dark">
                YAP Drive
              </h1>
            </div>
          </div>

          {/* Right section - Theme toggle */}
          <div className="flex items-center gap-4">
            <SimpleThemeToggle />
            <ThemeToggle showLabel />
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-64px)]">
        {/* Google Drive-style sidebar */}
        <aside className="w-sidebar bg-background-light dark:bg-background-dark border-r border-border-light dark:border-border-darkMode">
          <div className="p-6">
            {/* New button */}
            <button className="w-full flex items-center gap-3 px-4 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-google transition-colors duration-200 shadow-elevation-1 hover:shadow-elevation-2">
              <span className="text-lg">+</span>
              <span className="font-medium">New</span>
            </button>

            {/* Navigation items */}
            <nav className="mt-6 space-y-1">
              {[
                { name: 'My Drive', icon: '📁', active: true },
                { name: 'Shared with me', icon: '👥' },
                { name: 'Recent', icon: '🕒' },
                { name: 'Starred', icon: '⭐' },
                { name: 'Trash', icon: '🗑️' },
              ].map((item) => (
                <button
                  key={item.name}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-google text-left transition-colors duration-200 ${
                    item.active
                      ? 'bg-primary-50 dark:bg-primary-950 text-primary-600 dark:text-primary-400'
                      : 'text-text-secondary-light dark:text-text-secondary-dark hover:bg-secondary-100 dark:hover:bg-secondary-800'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span className="text-sm font-medium">{item.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main content area */}
        <main className="flex-1 bg-background-surface-light dark:bg-background-surface-dark">
          <div className="p-6">
            {/* Counter demo in Google Drive style card */}
            <div className="bg-background-paper-light dark:bg-background-paper-dark rounded-google border border-border-light dark:border-border-darkMode shadow-card mb-6">
              <div className="p-6">
                <h2 className="text-lg font-medium text-text-primary-light dark:text-text-primary-dark mb-4">
                  Interactive Demo
                </h2>
                <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4">
                  Count: <span className="font-medium text-primary-600 dark:text-primary-400 text-lg">{count}</span>
                </p>
                <button 
                  onClick={() => setCount(count + 1)}
                  className="px-6 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-google transition-all duration-200 font-medium shadow-elevation-1 hover:shadow-elevation-2 active:shadow-elevation-1"
                >
                  Increment
                </button>
              </div>
            </div>

            {/* Google Drive file grid simulation */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {/* File type examples */}
              {[
                { name: 'My Document', type: 'docs', icon: '📄', color: 'bg-fileType-docs' },
                { name: 'Budget 2025', type: 'sheets', icon: '📊', color: 'bg-fileType-sheets' },
                { name: 'Presentation', type: 'slides', icon: '📺', color: 'bg-fileType-slides' },
                { name: 'Project Photos', type: 'folder', icon: '📁', color: 'bg-fileType-folder' },
                { name: 'Report.pdf', type: 'pdf', icon: '📕', color: 'bg-fileType-pdf' },
                { name: 'Video Tutorial', type: 'video', icon: '🎬', color: 'bg-fileType-video' },
              ].map((file, index) => (
                <div
                  key={index}
                  className="bg-background-paper-light dark:bg-background-paper-dark rounded-google border border-border-light dark:border-border-darkMode shadow-card hover:shadow-elevation-2 transition-all duration-200 cursor-pointer group"
                >
                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-8 h-8 ${file.color} rounded flex items-center justify-center text-white text-sm`}>
                        {file.icon}
                      </div>
                      <span className="font-medium text-text-primary-light dark:text-text-primary-dark text-sm truncate">
                        {file.name}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-text-muted-light dark:text-text-muted-dark">
                      <span>Modified today</span>
                      <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-secondary-100 dark:hover:bg-secondary-800 rounded">
                        ⋮
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Drive style action buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-google transition-all duration-200 font-medium shadow-elevation-1 hover:shadow-elevation-2">
                Upload Files
              </button>
              <button className="px-4 py-2 bg-success-500 hover:bg-success-600 text-white rounded-google transition-all duration-200 font-medium shadow-elevation-1 hover:shadow-elevation-2">
                Create Folder
              </button>
              <button className="px-4 py-2 border border-border-light dark:border-border-darkMode text-text-primary-light dark:text-text-primary-dark hover:bg-secondary-50 dark:hover:bg-secondary-900 rounded-google transition-all duration-200 font-medium">
                Share
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
