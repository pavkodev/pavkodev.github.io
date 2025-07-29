import { useEffect, useRef, useState, type ReactNode } from "react";
import { animate, createScope, Scope } from "animejs";
import BackgroundTiles from "./BackgroundTiles";

const PageStyling = (props: { children: ReactNode }) => {
  const tileLength = 50;
  const [userScreenWidth, setUserScreenWidth] = useState(window.innerWidth);
  const [userScreenHeight, setUserScreenHeight] = useState(window.innerHeight);
  const [tileCols, setTileCols] = useState(
    Math.floor(userScreenWidth / tileLength),
  );
  const [tileRows, setTileRows] = useState(
    Math.floor(userScreenHeight / tileLength),
  );

  // const root = useRef(null);
  // const scope = useRef<Scope>(null);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      setUserScreenWidth(newWidth);
      setUserScreenHeight(newHeight);
      setTileCols(Math.floor(userScreenWidth / tileLength));
      setTileRows(Math.floor(userScreenHeight / tileLength));
      console.log(
        "Width: " + userScreenWidth + ", Height: " + userScreenHeight,
      );
      console.log("Tile columns: " + tileCols + "," + " rows: " + tileRows);
    };
    //   scope.current = createScope({ root }).add(() => {
    //     setInterval(() => {
    //       animate("", {
    //         x: "+=100",
    //       });
    //     }, 100);
    //   });
    //   return () => scope.current?.revert();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [userScreenWidth, userScreenHeight]);

  return (
    <div className="h-fit">
      <BackgroundTiles rows={tileRows} columns={tileCols} />
      <div className="mx-auto max-w-2xl p-4 text-stone-200 sm:px-0">
        {props.children}
      </div>
    </div>
  );
};
export default PageStyling;
