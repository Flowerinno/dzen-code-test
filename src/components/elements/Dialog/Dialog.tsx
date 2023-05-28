import { useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";

import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { useTranslation } from "react-i18next";

import { closeDialog } from "@redux/slices/dialogSlice";

import { ProductsI } from "@redux/types/productsTypes";

import ListItem from "../ListItem/ListItem";

export default function CustomizedDialogs() {
	const isOpen = useAppSelector((state) => state.dialog.isOpen);

	const product = useAppSelector((state) => state.products.selectedProduct);

	const selectProductHandler = (product: ProductsI) => {
		console.log(product);
	};

	const dispatch = useAppDispatch();

	const { t } = useTranslation("dialog");

	const handleClose = () => {
		dispatch(closeDialog());
	};

	useEffect(() => {}, [isOpen]);

	return (
		<div>
			<Dialog
				sx={{ width: "100%" }}
				maxWidth="md"
				fullWidth
				onClose={handleClose}
				open={isOpen}
			>
				<DialogTitle>{t("firstSection")}</DialogTitle>
				<DialogContent dividers>
					<Typography gutterBottom>
						<ListItem
							product={product}
							selectProduct={selectProductHandler}
							isDialog={true}
						/>
					</Typography>
				</DialogContent>
				<DialogActions sx={{ backgroundColor: "green" }}>
					<Button sx={{ color: "white" }} autoFocus onClick={handleClose}>
						{t("buttons.cancel")}
					</Button>
					<Button
						sx={{ color: "red", backgroundColor: "white" }}
						autoFocus
						onClick={handleClose}
					>
						{t("buttons.delete")}
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
