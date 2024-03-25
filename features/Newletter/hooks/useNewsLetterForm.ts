import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMutation } from 'react-query';
import {addNewsLetter} from "../api/sendNewsLetter";
import showAlert from "../../../utils/showSuccess";

const newsLetterSchema = Yup.object().shape({
    email: Yup.string()
        .email('Wrong email format')
        .min(3, 'Minimum 3 symbols')
        .max(50, 'Maximum 50 symbols')
        .required('Email is required'),
});

const initialValues = {
    email: '',
};
export default function useNewsLetterForm() {
    const { mutateAsync } = useMutation(addNewsLetter, {
        // onError: console.log('error'),
    });

    const formik = useFormik({
        initialValues,
        validationSchema: newsLetterSchema,
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            setSubmitting(true)
            await mutateAsync({
                email: values.email,
            });
            setSubmitting(false);
            showAlert({title: 'Success', message: 'Subscribed Successfully'})
            resetForm()
        },
    });

    return { formik };
}
