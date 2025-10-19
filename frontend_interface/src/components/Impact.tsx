import { TrendingUp, MapPin } from 'lucide-react';
import { Card } from './ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ImpactProps {
  onNavigate: (page: string) => void;
}

const reforestationData = [
  { year: '2020', trees: 5000 },
  { year: '2021', trees: 12000 },
  { year: '2022', trees: 25000 },
  { year: '2023', trees: 38000 },
  { year: '2024', trees: 50000 },
];

export function Impact({ onNavigate }: ImpactProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-foreground mb-6">Our Global Impact</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Together, we're making a measurable difference in protecting and restoring the world's forests.
          </p>
        </div>
      </section>

      {/* Three Impact Stats */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Stat 1 */}
          <Card className="p-8 rounded-2xl border-2 border-border text-center">
            <div className="text-destructive mb-4">
              <p className="text-sm opacity-80">Global Loss Yearly</p>
              <div className="text-3xl">10M hectares</div>
            </div>
            <div className="w-full h-px bg-border my-6"></div>
            <div className="text-primary">
              <p className="text-sm opacity-80 mb-2">Releaf Prevented</p>
              <div className="text-3xl">250K hectares</div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Through early detection and rapid response
            </p>
          </Card>

          {/* Stat 2 */}
          <Card className="p-8 rounded-2xl border-2 border-border text-center">
            <div className="text-destructive mb-4">
              <p className="text-sm opacity-80">Species Threatened</p>
              <div className="text-3xl">1M+</div>
            </div>
            <div className="w-full h-px bg-border my-6"></div>
            <div className="text-primary">
              <p className="text-sm opacity-80 mb-2">Habitats Restored</p>
              <div className="text-3xl">500+</div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Critical biodiversity zones protected
            </p>
          </Card>

          {/* Stat 3 */}
          <Card className="p-8 rounded-2xl border-2 border-border text-center">
            <div className="text-destructive mb-4">
              <p className="text-sm opacity-80">CO₂ Needed Yearly</p>
              <div className="text-3xl">2.6B tons</div>
            </div>
            <div className="w-full h-px bg-border my-6"></div>
            <div className="text-primary">
              <p className="text-sm opacity-80 mb-2">Trees Planted</p>
              <div className="text-3xl">50K+</div>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              By our volunteer community
            </p>
          </Card>
        </div>
      </section>

      {/* World Map Section */}
      <section className="py-16 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-foreground mb-12">Where We Work</h2>
          
          <Card className="p-8 rounded-2xl">
            <div className="relative w-full h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl overflow-hidden">
              {/* Simplified World Map Visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full max-w-5xl">
                  {/* Interactive Pins */}
                  <div className="absolute" style={{ left: '25%', top: '30%' }}>
                    <div className="relative group">
                      <div className="w-4 h-4 bg-primary rounded-full animate-ping absolute opacity-30"></div>
                      <MapPin className="text-primary relative z-10" size={24} />
                      <div className="absolute left-full ml-2 top-0 hidden group-hover:block bg-white p-2 rounded shadow-lg whitespace-nowrap text-sm">
                        <p className="text-foreground">Amazon Basin</p>
                        <p className="text-xs text-muted-foreground">15 active projects</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute" style={{ left: '50%', top: '40%' }}>
                    <div className="relative group">
                      <div className="w-4 h-4 bg-primary rounded-full animate-ping absolute opacity-30"></div>
                      <MapPin className="text-primary relative z-10" size={24} />
                      <div className="absolute left-full ml-2 top-0 hidden group-hover:block bg-white p-2 rounded shadow-lg whitespace-nowrap text-sm">
                        <p className="text-foreground">Congo Basin</p>
                        <p className="text-xs text-muted-foreground">12 active projects</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute" style={{ left: '70%', top: '45%' }}>
                    <div className="relative group">
                      <div className="w-4 h-4 bg-primary rounded-full animate-ping absolute opacity-30"></div>
                      <MapPin className="text-primary relative z-10" size={24} />
                      <div className="absolute left-full ml-2 top-0 hidden group-hover:block bg-white p-2 rounded shadow-lg whitespace-nowrap text-sm">
                        <p className="text-foreground">Southeast Asia</p>
                        <p className="text-xs text-muted-foreground">18 active projects</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute" style={{ left: '15%', top: '50%' }}>
                    <div className="relative group">
                      <div className="w-4 h-4 bg-primary rounded-full animate-ping absolute opacity-30"></div>
                      <MapPin className="text-primary relative z-10" size={24} />
                      <div className="absolute left-full ml-2 top-0 hidden group-hover:block bg-white p-2 rounded shadow-lg whitespace-nowrap text-sm">
                        <p className="text-foreground">Central America</p>
                        <p className="text-xs text-muted-foreground">8 active projects</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute" style={{ left: '80%', top: '60%' }}>
                    <div className="relative group">
                      <div className="w-4 h-4 bg-primary rounded-full animate-ping absolute opacity-30"></div>
                      <MapPin className="text-primary relative z-10" size={24} />
                      <div className="absolute left-full ml-2 top-0 hidden group-hover:block bg-white p-2 rounded shadow-lg whitespace-nowrap text-sm">
                        <p className="text-foreground">Madagascar</p>
                        <p className="text-xs text-muted-foreground">6 active projects</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Hover over pins to see regional project details
            </p>
          </Card>
        </div>
      </section>

      {/* Reforestation Growth Timeline */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-12">
            <TrendingUp className="text-primary" size={28} />
            <h2 className="text-foreground">Reforestation Growth</h2>
          </div>
          
          <Card className="p-8 rounded-2xl">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={reforestationData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis 
                  dataKey="year" 
                  stroke="var(--muted-foreground)"
                />
                <YAxis 
                  stroke="var(--muted-foreground)"
                  label={{ value: 'Trees Planted', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="trees" 
                  stroke="var(--primary)" 
                  strokeWidth={3}
                  dot={{ fill: 'var(--primary)', r: 6 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8 pt-8 border-t border-border">
              {reforestationData.map((data) => (
                <div key={data.year} className="text-center">
                  <div className="text-primary">{data.trees.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">{data.year}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-foreground mb-4">Be Part of the Solution</h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of volunteers making a real difference in forest conservation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('volunteer-map')}
              className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-xl transition-colors"
            >
              Find Events Near You
            </button>
            <button
              onClick={() => onNavigate('report-hotspot')}
              className="px-6 py-3 bg-white hover:bg-muted text-foreground border-2 border-border rounded-xl transition-colors"
            >
              Report Deforestation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
