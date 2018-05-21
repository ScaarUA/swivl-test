import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';

import tableStyles from './table.styles';

export const Table = ({children}) => (
	<View style={tableStyles.table}>
		{children}
	</View>
);

export const TableCell = ({children}) => (
	<View style={tableStyles.tableCell}>
		{children}
	</View>
);

export const TableRow = ({children}) => (
	<View style={tableStyles.tableRow}>
		{children}
	</View>
);

export const TableHeading = ({text}) => (
	<View style={tableStyles.tableCell}>
		<Text style={tableStyles.tableHeading}>{text}</Text>
	</View>
);

TableHeading.propTypes = {
	text: PropTypes.string.isRequired
};