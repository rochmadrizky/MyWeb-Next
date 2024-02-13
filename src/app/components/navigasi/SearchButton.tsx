import { useState } from "react";
import SearchModal from "./SearchModal";
import { IconSearch } from "@tabler/icons-react";

const SearchButton: React.FC = () => {
  const [modalTerbuka, mengaturModalTerbuka] = useState(false);

  const membukaModal = () => {
    mengaturModalTerbuka(true);
  };

  const menutupModal = () => {
    mengaturModalTerbuka(false);
  };

  return (
    <div>
      <button onClick={membukaModal}>
        <IconSearch />
      </button>
      <SearchModal membuka={modalTerbuka} menutup={menutupModal} />
    </div>
  );
};

export default SearchButton;
