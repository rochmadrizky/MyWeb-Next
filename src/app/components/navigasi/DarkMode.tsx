import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";
import { useState } from "react";

const DarkMode = () => {
  const [temaDarkMode, mengaturDarkMode] = useState(false);
  const [memutarIcon, mengaturMemutarIcon] = useState(false);

  const tombolDarkMode = () => {
    mengaturDarkMode((modeSebelumnya) => !modeSebelumnya);
    mengaturMemutarIcon(!memutarIcon);
  };

  return (
    <div>
      <button
        onClick={tombolDarkMode}
        className={`transform ${
          memutarIcon ? "rotate-90" : ""
        } transition duration-300`}
      >
        {temaDarkMode ? <IconSunFilled /> : <IconMoonFilled />}
      </button>
    </div>
  );
};

export default DarkMode;
