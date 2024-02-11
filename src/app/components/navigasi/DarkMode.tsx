import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";
import { useState } from "react";

const DarkMode = () => {
  const [temaDarkMode, mengaturDarkMode] = useState(false);

  const tombolDarkMode = () => {
    mengaturDarkMode((modeSebelumnya) => !modeSebelumnya);
  };

  return (
    <div>
      <button onClick={tombolDarkMode}>
        {temaDarkMode ? <IconSunFilled /> : <IconMoonFilled />}
      </button>
    </div>
  );
};

export default DarkMode;
