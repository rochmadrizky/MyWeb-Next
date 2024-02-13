import { useState } from "react";
import SearchModal from "./SearchModal";
import { IconSearch, IconZoomOutArea } from "@tabler/icons-react";

const SearchButton: React.FC = () => {
  const [modalTerbuka, mengaturModalTerbuka] = useState(false);
  const [putarIcon, mengaturPutarIcon] = useState(false);

  const membukaModal = () => {
    mengaturModalTerbuka(true);
    mengaturPutarIcon(!putarIcon);
  };

  const menutupModal = () => {
    mengaturModalTerbuka(false);
    mengaturPutarIcon(!putarIcon);
  };

  return (
    <div>
      <button
        onClick={membukaModal}
        className={`transform ${
          putarIcon ? "rotate-90" : ""
        } transition duration-300`}
      >
        {modalTerbuka ? <IconZoomOutArea /> : <IconSearch />}
      </button>
      <SearchModal membuka={modalTerbuka} menutup={menutupModal} />
    </div>
  );
};

export default SearchButton;
