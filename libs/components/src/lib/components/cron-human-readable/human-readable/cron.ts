import { PrizmCronHRExpressionDescriptor } from './expression-descriptor';
import { prizmCronHREnLocaleLoader } from './i18n/en-locale-loader';

PrizmCronHRExpressionDescriptor.initialize(new prizmCronHREnLocaleLoader());
export default PrizmCronHRExpressionDescriptor;

const prizmCronHRToString = PrizmCronHRExpressionDescriptor.toString;
export { prizmCronHRToString };
