import { PrizmCronDefaultObjectValue } from './model';
export function prizmCronConvertToObject(value) {
    const arr = value?.split(' ') ?? [];
    return {
        second: arr[0] ?? PrizmCronDefaultObjectValue.second,
        minute: arr[1] ?? PrizmCronDefaultObjectValue.minute,
        hour: arr[2] ?? PrizmCronDefaultObjectValue.hour,
        dayOfMonth: arr[3] ?? PrizmCronDefaultObjectValue.dayOfMonth,
        month: arr[4] ?? PrizmCronDefaultObjectValue.month,
        dayOfWeek: arr[5] ?? PrizmCronDefaultObjectValue.dayOfWeek,
        year: arr[6] ?? PrizmCronDefaultObjectValue.year,
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvY29tcG9uZW50cy9zcmMvbGliL3NlcnZpY2VzL2Nyb24vdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsMkJBQTJCLEVBQXdCLE1BQU0sU0FBUyxDQUFDO0FBRTVFLE1BQU0sVUFBVSx3QkFBd0IsQ0FBQyxLQUFhO0lBQ3BELE1BQU0sR0FBRyxHQUFHLEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BDLE9BQU87UUFDTCxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLDJCQUEyQixDQUFDLE1BQU07UUFDcEQsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSwyQkFBMkIsQ0FBQyxNQUFNO1FBQ3BELElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksMkJBQTJCLENBQUMsSUFBSTtRQUNoRCxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLDJCQUEyQixDQUFDLFVBQVU7UUFDNUQsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSwyQkFBMkIsQ0FBQyxLQUFLO1FBQ2xELFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksMkJBQTJCLENBQUMsU0FBUztRQUMxRCxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLDJCQUEyQixDQUFDLElBQUk7S0FDakQsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcml6bUNyb25EZWZhdWx0T2JqZWN0VmFsdWUsIFByaXptQ3JvblZhbHVlT2JqZWN0IH0gZnJvbSAnLi9tb2RlbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcml6bUNyb25Db252ZXJ0VG9PYmplY3QodmFsdWU6IHN0cmluZyk6IFByaXptQ3JvblZhbHVlT2JqZWN0IHtcbiAgY29uc3QgYXJyID0gdmFsdWU/LnNwbGl0KCcgJykgPz8gW107XG4gIHJldHVybiB7XG4gICAgc2Vjb25kOiBhcnJbMF0gPz8gUHJpem1Dcm9uRGVmYXVsdE9iamVjdFZhbHVlLnNlY29uZCxcbiAgICBtaW51dGU6IGFyclsxXSA/PyBQcml6bUNyb25EZWZhdWx0T2JqZWN0VmFsdWUubWludXRlLFxuICAgIGhvdXI6IGFyclsyXSA/PyBQcml6bUNyb25EZWZhdWx0T2JqZWN0VmFsdWUuaG91cixcbiAgICBkYXlPZk1vbnRoOiBhcnJbM10gPz8gUHJpem1Dcm9uRGVmYXVsdE9iamVjdFZhbHVlLmRheU9mTW9udGgsXG4gICAgbW9udGg6IGFycls0XSA/PyBQcml6bUNyb25EZWZhdWx0T2JqZWN0VmFsdWUubW9udGgsXG4gICAgZGF5T2ZXZWVrOiBhcnJbNV0gPz8gUHJpem1Dcm9uRGVmYXVsdE9iamVjdFZhbHVlLmRheU9mV2VlayxcbiAgICB5ZWFyOiBhcnJbNl0gPz8gUHJpem1Dcm9uRGVmYXVsdE9iamVjdFZhbHVlLnllYXIsXG4gIH07XG59XG4iXX0=