import { useState } from 'react';
import { Calendar, MapPin, Users, FileText, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card } from './ui/card';

interface EventCreationProps {
  onNavigate: (page: string) => void;
}

export function EventCreation({ onNavigate }: EventCreationProps) {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    date: '',
    time: '',
    location: '',
    description: '',
    roles: [] as string[],
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      onNavigate('org-dashboard');
    }, 2000);
  };

  const availableRoles = [
    'Tree Planter',
    'Site Coordinator',
    'Equipment Manager',
    'Data Collector',
    'Photography/Media',
    'First Aid',
  ];

  const toggleRole = (role: string) => {
    setFormData(prev => ({
      ...prev,
      roles: prev.roles.includes(role)
        ? prev.roles.filter(r => r !== role)
        : [...prev.roles, role]
    }));
  };

  return (
    <div className="min-h-screen bg-[#fafafa] pb-20">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <Button
          variant="ghost"
          onClick={() => onNavigate('org-dashboard')}
          className="mb-6 text-[#1F1F12] hover:text-[#1F1F12]/80 rounded-xl gap-2"
        >
          <ArrowLeft size={20} />
          Back to Dashboard
        </Button>

        <h1 className="text-[#1F1F12] mb-2">Create New Event</h1>
        <p className="text-muted-foreground mb-8">
          Fill in the details below to create a new restoration event
        </p>

        {/* Success Message */}
        {showSuccess && (
          <Card className="p-6 bg-green-50 border-green-200 rounded-2xl mb-6">
            <p className="text-green-800 text-center">
              ✓ Event created successfully! Redirecting to dashboard...
            </p>
          </Card>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <Card className="p-8 rounded-2xl">
            <div className="space-y-6">
              {/* Event Name */}
              <div>
                <Label htmlFor="name" className="flex items-center gap-2 mb-2">
                  <FileText size={18} />
                  Event Name
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g., Urban Forest Restoration"
                  required
                  className="rounded-xl"
                />
              </div>

              {/* Event Type */}
              <div>
                <Label htmlFor="type" className="flex items-center gap-2 mb-2">
                  Event Type
                </Label>
                <Select
                  value={formData.type}
                  onValueChange={(value) => setFormData({ ...formData, type: value })}
                  required
                >
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="planting">Tree Planting</SelectItem>
                    <SelectItem value="restoration">Forest Restoration</SelectItem>
                    <SelectItem value="mangrove">Mangrove Restoration</SelectItem>
                    <SelectItem value="monitoring">Environmental Monitoring</SelectItem>
                    <SelectItem value="cleanup">Site Cleanup</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date" className="flex items-center gap-2 mb-2">
                    <Calendar size={18} />
                    Date
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    required
                    className="rounded-xl"
                  />
                </div>
                <div>
                  <Label htmlFor="time" className="mb-2 block">
                    Time
                  </Label>
                  <Input
                    id="time"
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    required
                    className="rounded-xl"
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <Label htmlFor="location" className="flex items-center gap-2 mb-2">
                  <MapPin size={18} />
                  Location
                </Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g., Portland, OR or coordinates"
                  required
                  className="rounded-xl"
                />
              </div>

              {/* Description */}
              <div>
                <Label htmlFor="description" className="mb-2 block">
                  Description
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe the event, what to expect, what to bring, etc."
                  rows={5}
                  required
                  className="rounded-xl"
                />
              </div>

              {/* Required Roles */}
              <div>
                <Label className="flex items-center gap-2 mb-3">
                  <Users size={18} />
                  Required Volunteer Roles
                </Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {availableRoles.map((role) => (
                    <button
                      key={role}
                      type="button"
                      onClick={() => toggleRole(role)}
                      className={`p-3 rounded-xl border-2 transition-all ${
                        formData.roles.includes(role)
                          ? 'border-[#FFDE59] bg-[#FFDE59]/10 text-[#1F1F12]'
                          : 'border-border hover:border-[#FFDE59]/50'
                      }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => onNavigate('org-dashboard')}
                  className="flex-1 rounded-xl border-[#1F1F12] text-[#1F1F12] hover:bg-[#1F1F12] hover:text-white"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-[#FFDE59] hover:bg-[#FFDE59]/90 text-[#1F1F12] rounded-xl"
                >
                  Publish Event
                </Button>
              </div>
            </div>
          </Card>
        </form>
      </div>
    </div>
  );
}
