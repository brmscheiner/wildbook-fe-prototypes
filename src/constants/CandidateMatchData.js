function getSampleItem() {
  const name = `IND-${String(Math.random()).substr(3, 6)}`;
  const a1 = 2 * Math.random();
  const a2 = 2 * Math.random();
  const a3 = 2 * Math.random();
  const a4 = 2 * Math.random();
  const avg = 0.25 * (a1 + a2 + a3 + a4);
  console.log({
    a1,
    a2,
    a3,
    a4,
    avg,
    name
  });
  return {
    a1,
    a2,
    a3,
    a4,
    avg,
    name
  };
}

const candidateMatchData = Array(10)
  .fill(0)
  .map(() => getSampleItem());

export default candidateMatchData;
