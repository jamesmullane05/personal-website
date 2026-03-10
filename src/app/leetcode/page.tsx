import React from 'react'
import { LeetCodeUserProfile } from '@/src/types/LeetCodeApiResponse'
import { safeFetch, SafeFetchResult } from '@/src/lib/safeFetch'
import { LeetcodeProblem } from '@/src/services/repo';

import LeetcodeCard from '../components/LeetcodeCard'

export default async function LeetcodePage() {
  const problems: LeetcodeProblem[] | null = await loadProblems();

  if (!problems) {
    return <p>Failed to load LeetCode profile.</p>;
  }

  return (
    <div>
      {problems.map(p => (
          <LeetcodeCard key={p.title} problemName={p.title} programmingLanguage={p.lang}/>
      ))}
    </div>
  );
}

async function loadProblems(): Promise<LeetcodeProblem[] | null>  {
  const { data, error }: SafeFetchResult<LeetcodeProblem[]> = await safeFetch<LeetcodeProblem[]>(
    "http://localhost:3000/api/leetcode/problems",
    { cache: "no-store" }
  );
  if (error) {
    console.log(data)
    console.log(error)
    return null;
  }
  return data;
}
