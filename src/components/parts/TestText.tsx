
const TestText = (props: TestType) => <div>{props.test}{props.hoge}</div>;
// const TestText = (test: string, hoge: string) => <div>{test}{hoge}</div>;

interface TestType {
  test: string
  hoge: string
}

TestText.defaultProps = {
  test: "ccc",
  hoge: "bbb"
}

export default TestText;
