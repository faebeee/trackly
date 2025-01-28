'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { EventEntryForm } from './event-entry-form';
import { addEventEntry } from '@/lib/db/event-entry-repository';
import { useUserContext } from './user-provider';
import { useToast } from '@/hooks/use-toast';

interface CreateEventEntryButtonProps {
    eventId: number;
}

export const CreateEventEntryButton = ({ eventId }: CreateEventEntryButtonProps) => {
    const [open, setOpen] = useState(false);
    const { userId } = useUserContext()
    const { toast } = useToast()

    const handleSubmit = async () => {
        await addEventEntry(eventId, userId!)
        setOpen(false);
        toast({
            title: "Success",
            description: "Entry has been added",
        });
    };

    return (
        <>
            <Button onClick={() => setOpen(true)}>
                Track
            </Button>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add Event Entry</DialogTitle>
                    </DialogHeader>
                    <EventEntryForm onSubmit={handleSubmit} />
                </DialogContent>
            </Dialog>
        </>
    );
};
