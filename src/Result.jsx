export default function Result({ result }) {
  let count = 0;
  const answers = [3, 2, 2, 3, 1, 2, 2, 2, 2, 3];
  for (let x = 0; x < result.length; x++) {
    if (answers[x] === result[x]) {
      count++;
    }
  }

  return (
    <div id="resultcard">
      <div>
        {" "}
        <h1> your score </h1>{" "}
      </div>
      <div>
        {" "}
        <h2>{`${count}/10`}</h2> <button id="donebutton"> Done </button>
      </div>
    </div>
  );
}
