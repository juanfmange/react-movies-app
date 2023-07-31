import React from 'react';
import { FormControlLabel, TextField } from '@mui/material';
import './styles.css'

export interface ITextField {
	id: string;
	name: string;
	label?: string;
	labelComponent?: any;
	value: string | number | '';
	type?: 'password' | 'search' | 'text';
	size?: 'small' | 'medium' | undefined;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur?: (e: any) => void;
	onFocus?: (e: any) => void;
	disabled?: boolean;
	select?: boolean;
	InputProps?: object;
}

const TextInput = (props: ITextField) => {
	const {
		id,
		name,
		label,
		labelComponent,
		value,
		type,
		size,
		onChange,
		onBlur,
		onFocus,
		disabled,
		select,
		InputProps,
	} = props;

	return (
		<div className="input-container">
			<FormControlLabel
				className="input-label"
				label={
					<span>
						{labelComponent ? labelComponent : label}
					</span>
				}
				labelPlacement="top"
				control={
					<TextField
						InputProps={{
							...InputProps,
						}}
						id={id}
						name={name}
						type={type}
						variant="outlined"
						margin="dense"
						size={size || 'small'}
						fullWidth
						value={value}
						onChange={onChange}
						onBlur={onBlur}
						onFocus={onFocus}
						disabled={disabled}
						select={select}
					/>
				}
			/>
		</div>
	);
};

export default TextInput;
