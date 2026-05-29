import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import { SvgIconComponent } from '@mui/icons-material';

export interface ServiceDataType {
	id: string; // اضافه کردن شناسه
	icon: SvgIconComponent;
	title: string;
	subtitle: string;
	bg: string;
}

const serviceData: ServiceDataType[] = [
	{
		id: '1', // شناسه منحصر به فرد
		icon: LocalShippingOutlinedIcon,
		title: 'Free Shipping',
		subtitle: 'Lorem ipsum dolor sit amet.',
		bg: '#fdefe6',
	},
	{
		id: '2',
		icon: LoopOutlinedIcon,
		title: 'Easy Returns',
		subtitle: 'Lorem ipsum dolor sit amet.',
		bg: '#ceebe9',
	},
	{
		id: '3',
		icon: ShoppingCartOutlinedIcon,
		title: 'Secure Payment',
		subtitle: 'Lorem ipsum dolor sit amet.',
		bg: '#e2f2b2',
	},
	{
		id: '4',
		icon: CurrencyExchangeOutlinedIcon,
		title: 'Back Guarantee', // فضای اضافی حذف شد
		subtitle: 'Lorem ipsum dolor sit amet.',
		bg: '#d6e5fb',
	},
];

export default serviceData;
