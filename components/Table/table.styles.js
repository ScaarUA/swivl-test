import {StyleSheet} from 'react-native';

export default StyleSheet.create({
	table: {
		flexDirection: 'column'
	},
	tableRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 5,
		paddingBottom: 5,
		marginLeft: 10,
		marginRight: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#4e4e4e'
	},
	tableCell: {
		justifyContent: 'center'
	},
	tableHeading: {
		fontWeight: 'bold'
	}
});