import { Button } from "@chakra-ui/react";
import React from "react";
import downloadFileAsBlob from "../../utils/downloadFileAsBlob";

interface DownloadBlobButtonProps {
  link: string;
  compositionName: string;
  fileExtension: "flac" | "wav" | "pdf" | "midi";
}

const DownloadBlobButton: React.FC<DownloadBlobButtonProps> = ({
  link,
  compositionName,
  fileExtension,
}) => {
  return (
    <Button
      shadow="md"
      onClick={async () => {
        await downloadFileAsBlob(link, compositionName, fileExtension);
      }}
    >
      {fileExtension.toUpperCase()}
    </Button>
  );
};

export default DownloadBlobButton;
