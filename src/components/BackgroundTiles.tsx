const BackgroundTiles = (props: { rows: number; columns: number }) => {
  console.log(
    "BackgroundTiles columns: " + props.columns + ", rows: " + props.rows,
  );
  const background: number[] = Array.from(
    new Array(props.rows * props.columns),
    (_, i) => i,
  );
  //grid-rows-3 grid-cols-5
  return (
    <div
      className={`fixed -z-10 grid h-full w-full grid-cols-3 gap-[1px] border-transparent bg-linear-150 from-orange-400/60 from-20% via-yellow-300/60 via-40% to-sky-400/60 to-80% p-[1px]`}
      style={{
        gridTemplateRows: `repeat(${props.rows}, 1fr)`,
        gridTemplateColumns: `repeat(${props.columns}, 1fr)`,
      }}
    >
      {background.map(() => (
        <div className="aspect-square bg-black"></div>
      ))}
    </div>
  );
};
export default BackgroundTiles;
