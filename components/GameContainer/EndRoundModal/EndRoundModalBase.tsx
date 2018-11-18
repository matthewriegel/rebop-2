import { Modal } from "@material-ui/core";
import React from "react";

interface Props {
  open: boolean;
}
const EndRoundModalBase: React.SFC<Props> = ({ open }) => <Modal open={open} />;

export default EndRoundModalBase;
