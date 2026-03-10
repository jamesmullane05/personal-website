import React from 'react'

function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col items-center justify-between gap-4 text-sm text-gray-500 sm:flex-row">
        
        <p>
          © {new Date().getFullYear()} James Mullane. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a
            href="https://github.com/jamesmullane05"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition-colors"
          >
            GitHub
          </a>

          <a
            href="https://leetcode.com/jamesmullane05"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition-colors"
          >
            LeetCode
          </a>

          <a
            href="mailto:jamesmullane05@gmail.com"
            className="hover:text-indigo-600 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer