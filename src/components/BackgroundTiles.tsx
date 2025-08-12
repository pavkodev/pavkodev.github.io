import { useEffect, useRef, useState } from "react";
import { animate, createScope, Scope, stagger, createTimeline } from "animejs";

const BackgroundTiles = (props: { rows: number; columns: number }) => {
  const root = useRef(null);
  const scope = useRef<Scope>(null);
  const prefersReducedMotion = window.matchMedia(
    `(prefers-reduced-motion: reduce)`,
  );

  console.log(
    "BackgroundTiles columns: " + props.columns + ", rows: " + props.rows,
  );
  const background = [];
  let index = 0;
  const initialAnimationOpacity = 1.0;
  const peakAnimationOpacity = 0;
  const peakIntroOpacity = 0.75;
  const timeline = createTimeline();
  const [introAnimationPlayed, setIntroAnimationPlayed] = useState(
    localStorage.getItem("introAnimationPlayed") === "true",
  );

  useEffect(() => {
    if (!prefersReducedMotion.matches) {
      if (!introAnimationPlayed) {
        scope.current = createScope({ root }).add(() => {
          timeline
            .label("start")
            .add(".tile-piece", {
              opacity: [
                { to: peakIntroOpacity, ease: "inOut(3)", duration: 1000 },
                {
                  to: initialAnimationOpacity,
                  ease: "inOut(3)",
                  duration: 2500,
                },
              ],
              delay: stagger(0.1, { from: "last" }),
            })
            .add(".tile-piece", {
              opacity: [
                { to: peakAnimationOpacity, ease: "inOut(3)", duration: 2000 },
                {
                  to: initialAnimationOpacity,
                  ease: "inOut(3)",
                  duration: 2500,
                },
              ],
              loop: true,
              delay: stagger(250, { from: "random" }),
            });
          setIntroAnimationPlayed(true);
          localStorage.setItem("introAnimationPlayed", "true");
        });
      } else {
        scope.current = createScope({ root }).add(() => {
          animate(".tile-piece", {
            opacity: [
              { to: peakAnimationOpacity, ease: "inOut(3)", duration: 2000 },
              { to: initialAnimationOpacity, ease: "inOut(3)", duration: 2500 },
            ],
            loop: true,
            delay: stagger(250, { from: "random" }),
          });
        });
      }
      // animate(".tile-piece", {
      //   opacity: [
      //     { to: 0.5, ease: "inOut(3)", duration: 2000 },
      //     { to: 1.0, ease: "inOut(3)", duration: 2500 },
      //   ],
      //   loop: true,
      //   delay: stagger(250, { from: "random" }),
      // });
    }
    return () => scope.current?.revert();
  }, []);

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
      className={`fixed -z-10 grid h-full w-full bg-linear-150 from-orange-400/60 from-20% via-yellow-300/60 via-40% to-sky-400/60 to-80%`}
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
