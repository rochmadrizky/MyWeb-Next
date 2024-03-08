import React, { useEffect } from "react";

interface LoadingPageProps {
  memuat: boolean;
  pemuatan: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ memuat, pemuatan }) => {
  useEffect(() => {
    const batasWaktuMemuat = setTimeout(() => {
      pemuatan(false);
    }, 200);

    return () => clearTimeout(batasWaktuMemuat);
  }, [pemuatan]);

  return (
    <>
      {memuat && (
        <div className="min-h-screen flex items-center justify-center">
          <div>
            <p>Loading...</p>
          </div>
        </div>
      )}
    </>
  );
};

export default LoadingPage;
