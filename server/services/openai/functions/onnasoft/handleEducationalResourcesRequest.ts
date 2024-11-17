import { OnnaSoftServiceRequest } from "&/types/services";

export async function handleEducationalResourcesRequest(
  request: OnnaSoftServiceRequest
): Promise<string> {
  const educationalResources = `
    We currently do not provide formal educational resources, but here are some platforms and tools that might be helpful for learning:

    **Algorithms and Programming**:
    - [HackerRank](https://www.hackerrank.com)
    - [LeetCode](https://leetcode.com)
    - [GeeksforGeeks](https://www.geeksforgeeks.org)

    **Data Science**:
    - [Kaggle](https://www.kaggle.com)
    - [DataCamp](https://www.datacamp.com)
    - [Coursera Data Science Courses](https://www.coursera.org)

    **English Language Learning**:
    - [Duolingo](https://www.duolingo.com)
    - [BBC Learning English](https://www.bbc.co.uk/learningenglish)

    Additionally, you can use these special links to get discounts on English learning services:
    - [Lingo (US)](https://lingofor.me/lingo-us/try/?user=94386)
    - [Lingo (ES)](https://lingofor.me/lingo-es/conozca/?user=94386)
    - [Lingo (PT)](https://lingofor.me/lingo-pt/conheca/?user=94386)

    Happy learning, and feel free to reach out if you have more questions!
  `;

  return educationalResources.trim();
}
