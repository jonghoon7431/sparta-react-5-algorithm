// 문제 정의:
// 주어진 문자열에서 각 단어를 반전시키시오. 단어의 순서는 그대로 유지되어야 합니다.

// 예시:

// 입력: "the sky is blue"
// 출력: "eht yks si eulb"

// 입력: "hello world"
// 출력: "olleh dlrow"

function reverseEachWord(s) {
  // 문자열 띄어쓰기 기준으로 나눠, 배열화
  // 배열 순회. 각 요소 뒤집어 새 배열 반환/ 합치기
  const Arr = s.split(" ");

  const answer = Arr.map((e) => [...e].reverse().join(""));
  return answer.join(" ");
}
function testReverseEachWord() {
  const testCases = [
    { input: "the sky is blue", expected: "eht yks si eulb" },
    { input: "hello world", expected: "olleh dlrow" },
    { input: "a b c d", expected: "a b c d" },
    { input: "Palindrome", expected: "emordnilaP" },
    { input: "I love coding", expected: "I evol gnidoc" },
  ];

  testCases.forEach(({ input, expected }, index) => {
    try {
      const result = reverseEachWord(input);
      if (result !== expected) throw new Error(`Expected ${expected}, but got ${result}`);
      console.log(`Test ${index + 1}: Passed`);
    } catch (error) {
      console.log(`Test ${index + 1}: Failed - ${error.message}`);
    }
  });
}

// 테스트 함수 호출
testReverseEachWord();
