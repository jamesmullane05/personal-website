import { LEETCODE_API_URL, GET_USER_SUBMISSIONS_QUERY } from "./leetcode.graphql";
import type { LeetCodeGraphQLResponse, LeetCodeRecentAcSubmissionsData, LeetCodeRecentAcSubmission } from "@/src/types/LeetCodeApiResponse";

export class LeetcodeService {
  private username: string;

  constructor(username: string) {
    this.username = username;
  }

  async getLeetCodeSubmissions(): Promise<LeetCodeRecentAcSubmission[]> {
    const response: Response = await fetch(LEETCODE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com",
        Origin: "https://leetcode.com",
        "User-Agent": "Mozilla/5.0",
      },
      body: JSON.stringify({
        query: GET_USER_SUBMISSIONS_QUERY,
        variables: { username: this.username, limit: 50 },
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`LeetCode error ${response.status}: ${text}`);
    }

    const json: LeetCodeGraphQLResponse<LeetCodeRecentAcSubmissionsData> = await response.json();

    if (json.errors?.length) {
      throw new Error(json.errors.map((error) => error.message).join("; "));
    }

    const list = json.data?.recentAcSubmissionList;
    if (!list) {
      throw new Error("Invalid LeetCode response");
    }

    return list;
  }
}
