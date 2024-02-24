import React from "react";
import { IconTrash } from "@tabler/icons-react";

interface ModalDeleteAllProps {
  membuka: boolean;
  konfirmasiHapus: () => void;
  batalHapus: () => void;
}

const ModalDeleteAll: React.FC<ModalDeleteAllProps> = ({
  membuka,
  konfirmasiHapus,
  batalHapus,
}) => {
  return membuka ? (
    <div className="fixed top-0 z-10 left-0 right-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-gray-100 p-6 rounded-lg border-t-2 border-b-2 border-blue-500">
        <div className="p-4">
          <p className="font-description">Do you want to delete all items?</p>
        </div>

        <div className="flex items-center justify-between p-2">
          <button
            onClick={() => {
              konfirmasiHapus();
              batalHapus();
            }}
            className="px-4 py-2 bg-gray-200 rounded-md border-t-2 border-b-2 border-blue-500 font-prefix"
          >
            Yes
          </button>

          <button
            onClick={() => {
              batalHapus();
            }}
            type="button"
            className="px-4 py-2 bg-gray-200 rounded-md border-t-2 border-b-2 border-blue-500 font-prefix"
          >
            No
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default ModalDeleteAll;
