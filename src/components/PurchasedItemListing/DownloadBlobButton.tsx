import { Button } from "@chakra-ui/react";
import React from "react";
import { AudioDataFileExtensions } from "../../types/fileExtensions";
import downloadFileAsBlob from "../../utils/downloadFileAsBlob";

interface DownloadBlobButtonProps {
  link: string;
  compositionName: string;
  fileExtension: AudioDataFileExtensions;
  //If not provided, file extension will be used as the innerHTML of this button
  buttonInner?: string;
}

const DownloadBlobButton: React.FC<DownloadBlobButtonProps> = ({
  link,
  compositionName,
  fileExtension,
  buttonInner,
}) => {
  return (
    <Button
      shadow="md"
      onClick={async () => {
        await downloadFileAsBlob(link, compositionName, fileExtension);
      }}
    >
      {buttonInner || fileExtension.toUpperCase()}
    </Button>
  );
};

export default DownloadBlobButton;
