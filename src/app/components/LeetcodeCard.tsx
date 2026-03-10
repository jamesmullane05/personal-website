import React from 'react'

export type LeetcodeProps = {
  problemName: string
  programmingLanguage: string
}

function LeetcodeCard({ problemName, programmingLanguage }: LeetcodeProps) {
  return (
    <article
      className="
        group
        mx-4
        max-w-sm
        rounded-lg
        border border-gray-200
        bg-white
        p-4
        shadow-sm
        transition-all
        duration-300
        hover:shadow-md
        hover:-translate-y-0.5
      "
    >
      <h2 className="text-base font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
        {problemName}
      </h2>

      <div className="mt-2 flex items-center justify-between">
        <span className="text-xs text-gray-500">
          Solved with
        </span>

        <span
          className="
            rounded-full
            bg-indigo-100
            px-2.5
            py-0.5
            text-xs
            font-medium
            text-indigo-700
          "
        >
          {programmingLanguage}
        </span>
      </div>
    </article>
  )
}

export default LeetcodeCard