import { useEffect, useRef } from "react";
import { animate, createScope, Scope, stagger } from "animejs";

const BackgroundTiles = (props: { rows: number; columns: number }) => {
  const root = useRef(null);
  const scope = useRef<Scope>(null);

  console.log(
    "BackgroundTiles columns: " + props.columns + ", rows: " + props.rows,
  );
  const background = [];
  let index = 0;

  useEffect(() => {
    scope.current = createScope({ root }).add(() => {
      animate(".tile-piece", {
        opacity: [
          { to: 0.5, ease: "inOut(3)", duration: 2000 },
          { to: 1.0, ease: "inOut(3)", duration: 2500 },
        ],
        loop: true,
        delay: stagger(250, { from: "random" }),
      });
    });
    return () => scope.current?.revert();
  });

  for (let i = 0; i < props.rows; i++) {
    for (let j = 0; j < props.columns; j++) {
      background.push(
        <div
          className="tile-piece aspect-square bg-slate-950"
          data-index={index}
        ></div>,
      );
      index++;
    }
    console.log({ background });
  }

  return (
    <div
      ref={root}
      className={`fixed -z-10 grid h-full w-full grid-cols-3 border-transparent bg-linear-150 from-orange-400/60 from-20% via-yellow-300/60 via-40% to-sky-400/60 to-80%`}
      style={{
        gridTemplateRows: `repeat(${props.rows}, 1fr)`,
        gridTemplateColumns: `repeat(${props.columns}, 1fr)`,
      }}
    >
      {background}
    </div>
  );
};
export default BackgroundTiles;
