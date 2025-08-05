import { useEffect, useState, type ReactNode } from "react";
import BackgroundTiles from "./BackgroundTiles";

const PageStyling = (props: { children: ReactNode }) => {
  const tileLength = 50;
  const [userScreenWidth, setUserScreenWidth] = useState(window.innerWidth);
  const [userScreenHeight, setUserScreenHeight] = useState(window.innerHeight);
  const [tileCols, setTileCols] = useState(
    Math.ceil(userScreenWidth / tileLength),
  );
  const [tileRows, setTileRows] = useState(
    Math.ceil(userScreenHeight / tileLength),
  );

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      setUserScreenWidth(newWidth);
      setUserScreenHeight(newHeight);
      setTileCols(Math.ceil(userScreenWidth / tileLength));
      setTileRows(Math.ceil(userScreenHeight / tileLength));
      console.log(
        "Width: " + userScreenWidth + ", Height: " + userScreenHeight,
      );
      console.log("Tile columns: " + tileCols + "," + " rows: " + tileRows);
    };

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
