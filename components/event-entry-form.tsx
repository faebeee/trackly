'use client';

import { Formik, Form } from 'formik';
import { Button } from './ui/button';

interface EventEntryFormProps {
    onSubmit: () => void;
}

export const EventEntryForm = ({ onSubmit }: EventEntryFormProps) => {
    return (
        <Formik
            initialValues={{}}
            onSubmit={onSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Button 
                        type="submit"
                        disabled={isSubmitting}
                    >
                        Save
                    </Button>
                </Form>
            )}
        </Formik>
    );
};
