import React from "react";
import { markdown, ColorPaletteSpecimen } from "catalog";

import { color } from "../../utils";

const getColors = filter => {
  const colors = [];
  Object.keys(color).forEach(el => {
    if (filter && el.startsWith(filter)) {
      const obj = {};
      obj.name = el;
      obj.value = color[el];
      colors.push(obj);
    } else if (!filter) {
      const obj = {};
      obj.name = el;
      obj.value = color[el];
      colors.push(obj);
    }
    return null;
  });
  return colors;
};

export default () => markdown`

  ## Monochrome palettes

  ${(
    <ColorPaletteSpecimen
      horizontal
      colors={[
        { name: "black", value: color.black },
        { name: "white", value: color.white }
      ]}
    />
  )}
  ${<ColorPaletteSpecimen horizontal colors={getColors("grey")} />}

  ## Rainbow palettes

  ${<ColorPaletteSpecimen horizontal colors={getColors("blue")} />}
  ${<ColorPaletteSpecimen horizontal colors={getColors("red")} />}
  ${<ColorPaletteSpecimen horizontal colors={getColors("green")} />}

  # Semi-transparent palettes (for flares and shadows)
  ${<ColorPaletteSpecimen horizontal colors={getColors("shadow")} />}
  ${<ColorPaletteSpecimen horizontal colors={getColors("flare")} />}

`;
