import { Plus, Calendar, Users, MapPin, TrendingUp, Filter } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface OrgDashboardProps {
  onNavigate: (page: string) => void;
}

const mockEvents = [
  {
    id: 1,
    name: 'Urban Forest Restoration',
    type: 'Tree Planting',
    date: '2025-10-25',
    location: 'Portland, OR',
    volunteers: 45,
    status: 'upcoming'
  },
  {
    id: 2,
    name: 'Coastal Mangrove Project',
    type: 'Mangrove Restoration',
    date: '2025-11-02',
    location: 'Miami, FL',
    volunteers: 32,
    status: 'upcoming'
  },
  {
    id: 3,
    name: 'Mountain Forest Recovery',
    type: 'Reforestation',
    date: '2025-10-20',
    location: 'Denver, CO',
    volunteers: 28,
    status: 'completed'
  },
];

const mockReports = [
  { id: 1, location: 'Amazon Basin, Brazil', date: '2025-10-15', severity: 'high' },
  { id: 2, location: 'Congo Basin, DRC', date: '2025-10-14', severity: 'medium' },
  { id: 3, location: 'Borneo, Indonesia', date: '2025-10-12', severity: 'high' },
];

export function OrgDashboard({ onNavigate }: OrgDashboardProps) {
  return (
    <div className="min-h-screen bg-[#fafafa] pb-20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-foreground mb-2">Organization Dashboard</h1>
            <p className="text-muted-foreground">Manage your restoration events and view community reports</p>
          </div>
          <Button 
            onClick={() => onNavigate('event-creation')}
            className="bg-primary hover:bg-primary/90 text-white rounded-xl gap-2"
          >
            <Plus size={20} />
            Create New Event
          </Button>
        </div>

        {/* Analytics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-2">
              <p className="text-muted-foreground">Total Events</p>
              <Calendar className="text-primary" size={20} />
            </div>
            <p className="text-3xl text-foreground">24</p>
            <p className="text-sm text-green-600 mt-1">+3 this month</p>
          </Card>

          <Card className="p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-2">
              <p className="text-muted-foreground">Active Volunteers</p>
              <Users className="text-primary" size={20} />
            </div>
            <p className="text-3xl text-foreground">342</p>
            <p className="text-sm text-green-600 mt-1">+28 this month</p>
          </Card>

          <Card className="p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-2">
              <p className="text-muted-foreground">Reports Reviewed</p>
              <MapPin className="text-primary" size={20} />
            </div>
            <p className="text-3xl text-foreground">156</p>
            <p className="text-sm text-green-600 mt-1">+12 this week</p>
          </Card>

          <Card className="p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-2">
              <p className="text-muted-foreground">Area Covered</p>
              <TrendingUp className="text-primary" size={20} />
            </div>
            <p className="text-3xl text-foreground">847</p>
            <p className="text-sm text-muted-foreground mt-1">hectares</p>
          </Card>
        </div>

        {/* Events Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <h2 className="text-foreground">Upcoming Events</h2>
            <div className="flex gap-3 w-full md:w-auto">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px] rounded-xl">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="planting">Tree Planting</SelectItem>
                  <SelectItem value="restoration">Restoration</SelectItem>
                  <SelectItem value="monitoring">Monitoring</SelectItem>
                </SelectContent>
              </Select>
              
              <Select defaultValue="date">
                <SelectTrigger className="w-[180px] rounded-xl">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date">Date</SelectItem>
                  <SelectItem value="volunteers">Volunteers</SelectItem>
                  <SelectItem value="location">Location</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockEvents.map((event) => (
              <Card key={event.id} className="p-6 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <Badge 
                    className={`rounded-lg ${
                      event.status === 'upcoming' 
                        ? 'bg-green-100 text-green-700 hover:bg-green-100' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {event.status}
                  </Badge>
                  <Badge className="rounded-lg bg-primary/20 text-foreground hover:bg-primary/20">
                    {event.type}
                  </Badge>
                </div>
                
                <h3 className="text-foreground mb-3">{event.name}</h3>
                
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} />
                    <span>{event.volunteers} volunteers joined</span>
                  </div>
                </div>
                
                <Button 
                  onClick={() => onNavigate('event-details')}
                  variant="outline" 
                  className="w-full rounded-xl border-secondary text-secondary hover:bg-secondary hover:text-white"
                >
                  View Details
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Reports */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-foreground">Recent Deforestation Reports</h2>
            <Button 
              variant="ghost" 
              className="text-foreground hover:text-foreground/80 rounded-xl"
            >
              View All Reports
            </Button>
          </div>

          <Card className="rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#fafafa] border-b">
                  <tr>
                    <th className="text-left p-4 text-foreground">Location</th>
                    <th className="text-left p-4 text-foreground">Date Reported</th>
                    <th className="text-left p-4 text-foreground">Severity</th>
                    <th className="text-left p-4 text-foreground">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {mockReports.map((report) => (
                    <tr key={report.id} className="border-b last:border-0 hover:bg-[#fafafa] transition-colors">
                      <td className="p-4 text-[#1F1F12]">{report.location}</td>
                      <td className="p-4 text-muted-foreground">
                        {new Date(report.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </td>
                      <td className="p-4">
                        <Badge 
                          className={`rounded-lg ${
                            report.severity === 'high' 
                              ? 'bg-red-100 text-red-700 hover:bg-red-100' 
                              : 'bg-orange-100 text-orange-700 hover:bg-orange-100'
                          }`}
                        >
                          {report.severity}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-[#1F1F12] hover:text-[#1F1F12]/80 rounded-lg"
                        >
                          Review
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
