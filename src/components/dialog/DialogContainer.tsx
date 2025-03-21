import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Iconify from "components/iconify/Iconify";
import { SxProps } from "@mui/material/styles";

interface DialogContainerProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  sx?: SxProps;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
  fullWidth?: boolean;
}

export default function DialogContainer(props: DialogContainerProps) {
  return (
    <Dialog
      open={props.open}
      maxWidth={props.maxWidth || "sm"}
      fullWidth={props.fullWidth || true}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <DialogTitle>{props.title}</DialogTitle>
        <IconButton
          sx={{ width: 50, height: 50, borderRadius: "8px", mr: 0.5 }}
          onClick={props.onClose}
        >
          <Iconify icon="iconamoon:close-bold" />
        </IconButton>
      </Stack>
      <Divider />
      <DialogContent>{props.children}</DialogContent>
    </Dialog>
  );
}
