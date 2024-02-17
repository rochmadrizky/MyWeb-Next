import { useState, useEffect } from "react";
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

  const shortcutMembukaModal = (klik: KeyboardEvent) => {
    if ((klik.metaKey || klik.ctrlKey) && klik.key === "k") {
      membukaModal();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", shortcutMembukaModal);
    return () => {
      window.removeEventListener("keydown", shortcutMembukaModal);
    };
  }, []);

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
