import React from 'react'

export type SkillsProps = {
    list: string[]
}

export default function Skills(props: SkillsProps) {
  return (
    <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Skills</h2>

        <div className="flex flex-wrap gap-3">
          {props.list.map(
            (skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            )
          )}
        </div>

    </section>
  )
}


