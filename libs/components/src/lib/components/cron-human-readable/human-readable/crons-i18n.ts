import { PrizmCronHRExpressionDescriptor } from './expression-descriptor';
import { PrizmCronHRAllLocalesLoader } from './i18n/all-locales-loader';

PrizmCronHRExpressionDescriptor.initialize(new PrizmCronHRAllLocalesLoader());
export default PrizmCronHRExpressionDescriptor;

const prizmCronHRToString = PrizmCronHRExpressionDescriptor.toString;
export { prizmCronHRToString };
