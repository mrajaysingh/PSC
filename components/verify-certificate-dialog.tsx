'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Award, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { useState, useEffect } from 'react';

export function VerifyCertificateDialog() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState<Date>();
  const [uid, setUid] = useState('');

  // Only render the dialog on the client side
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically make an API call to verify the certificate
    console.log('Verifying certificate:', { uid, date });
    // For now, just close the dialog
    setIsOpen(false);
  };

  if (!mounted) {
    return (
      <Button size="sm" className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
        <Award className="h-4 w-4" />
        Verify Certificate
      </Button>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-full gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
          <Award className="h-4 w-4" />
          Verify Certificate
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md max-w-[95%] rounded-[15px]">
        <DialogHeader>
          <DialogTitle>Verify Certificate</DialogTitle>
          <DialogDescription>
            Enter your certificate details below to verify its authenticity.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="uid">Certificate UID</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/80 font-mono bg-background/30 backdrop-blur-[2px] px-2 rounded-sm border border-border/40 shadow-sm">
                PSCC
              </span>
              <Input
                id="uid"
                placeholder="Enter certificate number"
                value={uid}
                onChange={(e) => setUid(e.target.value)}
                className="font-mono pl-[4.5rem]"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Issue Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  {date ? format(date, "PPP") : "Select issue date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  disabled={(date) => date > new Date()}
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex justify-end">
            <Button type="submit" className="gap-2">
              <Search className="h-4 w-4" />
              Verify
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
} 