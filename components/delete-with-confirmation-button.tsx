'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';

interface DeleteWithConfirmationButtonProps {
    onClick: () => void;
}

export const DeleteWithConfirmationButton = ({ onClick }: DeleteWithConfirmationButtonProps) => {
    const [open, setOpen] = useState(false);

    const handleConfirm = () => {
        onClick();
        setOpen(false);
    };

    return (
        <>
            <Button variant="destructive" onClick={() => setOpen(true)}>
                Delete
            </Button>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Are you sure?</DialogTitle>
                        <DialogDescription>
                            This action cannot be undone.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-end gap-4">
                        <Button variant="outline" onClick={() => setOpen(false)}>
                            Cancel
                        </Button>
                        <Button variant="destructive" onClick={handleConfirm}>
                            Delete
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};
