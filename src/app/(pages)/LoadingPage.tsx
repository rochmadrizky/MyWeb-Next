import { IconLoader2 } from "@tabler/icons-react";
import React, { useEffect } from "react";

interface LoadingPageProps {
  memuat: boolean;
  pemuatan: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ memuat, pemuatan }) => {
  useEffect(() => {
    const batasWaktuMemuat = setTimeout(() => {
      pemuatan(false);
    }, 400);

    return () => clearTimeout(batasWaktuMemuat);
  }, [pemuatan]);

  return (
    <>
      {memuat && (
        <div className="min-h-screen flex flex-col items-center justify-center">
          <div className="p-2 text-center">
            <h1 className="font-prefix">Loading</h1>
          </div>

          <div className="animate-spin p-1">
            <IconLoader2 className=" w-12 h-12" />
          </div>
        </div>
      )}
    </>
  );
};

export default LoadingPage;
