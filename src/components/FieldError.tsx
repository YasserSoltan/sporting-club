/* eslint-disable @typescript-eslint/no-explicit-any */

import ErrorDisplay from "./ErrorDisplay";
interface FieldErrorProps {
    errors?: any;
    fieldName: string;
}

export const FieldError: React.FC<FieldErrorProps> = ({
    errors,
    fieldName
}) => {
    if (!errors || !(fieldName in errors) || !Array.isArray(errors[fieldName])) {
        return null;
    }

    return <ErrorDisplay errors={errors[fieldName]} />;
};

export default FieldError;