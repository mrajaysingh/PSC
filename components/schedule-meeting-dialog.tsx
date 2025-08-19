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
  DialogClose,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from 'react';

const subjects = [
  { value: 'general', label: 'General Query' },
  { value: 'complaint', label: 'Complaint' },
  { value: 'course', label: 'Course Related' },
];

export function ScheduleMeetingDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    phone: '',
    address: '',
    query: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically make an API call to schedule the meeting
    console.log('Scheduling meeting:', formData);
    // For now, just close the dialog
    setIsOpen(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="w-full sm:w-auto">
          Schedule a Meeting
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader className="py-2">
          <DialogTitle>Schedule a Meeting</DialogTitle>
          <DialogDescription className="text-sm">
            Fill out the form below to schedule a meeting with our founder.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <Label htmlFor="name" className="text-sm">
                Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                required
                className="h-9"
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="subject" className="text-sm">
                Subject <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.subject}
                onValueChange={(value) => handleChange('subject', value)}
                required
              >
                <SelectTrigger className="h-9">
                  <SelectValue placeholder="Select subject" />
                </SelectTrigger>
                <SelectContent>
                  {subjects.map((subject) => (
                    <SelectItem key={subject.value} value={subject.value}>
                      {subject.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-1">
            <Label htmlFor="phone" className="text-sm">
              Phone Number <span className="text-destructive">*</span>
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
                +91
              </span>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="pl-12 h-9"
                required
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit phone number"
              />
            </div>
          </div>

          <div className="space-y-1">
            <Label htmlFor="address" className="text-sm">
              Address <span className="text-destructive">*</span>
            </Label>
            <Input
              id="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={(e) => handleChange('address', e.target.value)}
              required
              className="h-9"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="query" className="text-sm">
              Your Query <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="query"
              placeholder="Please describe your query or purpose for the meeting"
              value={formData.query}
              onChange={(e) => handleChange('query', e.target.value)}
              className="min-h-[80px] resize-none"
              required
            />
          </div>

          <div className="flex justify-between items-center pt-2">
            <DialogClose asChild>
              <Button type="button" variant="outline" className="gap-2">
                <X className="h-4 w-4" />
                Back
              </Button>
            </DialogClose>
            <Button type="submit" className="gap-2">
              <Calendar className="h-4 w-4" />
              Schedule Meeting
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
} 