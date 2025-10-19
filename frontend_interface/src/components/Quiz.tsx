import { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Progress } from './ui/progress';

interface QuizProps {
  onNavigate: (page: string) => void;
}

const questions = [
  {
    id: 1,
    question: "What interests you most?",
    options: [
      { value: 'planting', label: 'Hands-on tree planting' },
      { value: 'coordination', label: 'Event coordination and leadership' },
      { value: 'education', label: 'Environmental education' },
      { value: 'data', label: 'Data collection and analysis' },
    ]
  },
  {
    id: 2,
    question: "What skills do you have?",
    options: [
      { value: 'physical', label: 'Physical labor and outdoor work' },
      { value: 'management', label: 'Project management' },
      { value: 'communication', label: 'Communication and teaching' },
      { value: 'technical', label: 'Technical/scientific skills' },
    ]
  },
  {
    id: 3,
    question: "How much time can you commit?",
    options: [
      { value: 'oneday', label: 'One-day events only' },
      { value: 'weekly', label: 'Weekly commitments' },
      { value: 'monthly', label: 'Monthly projects' },
      { value: 'flexible', label: 'Flexible availability' },
    ]
  },
  {
    id: 4,
    question: "Where would you like to volunteer?",
    options: [
      { value: 'urban', label: 'Urban areas' },
      { value: 'rural', label: 'Rural/wilderness areas' },
      { value: 'coastal', label: 'Coastal regions' },
      { value: 'anywhere', label: 'Anywhere needed' },
    ]
  },
];

const mockRecommendations = [
  {
    id: 1,
    name: 'Urban Forest Restoration',
    type: 'Tree Planting',
    date: 'Oct 25, 2025',
    location: 'Portland, OR',
    match: 95,
  },
  {
    id: 2,
    name: 'Community Garden Project',
    type: 'Education & Planting',
    date: 'Nov 5, 2025',
    location: 'Seattle, WA',
    match: 88,
  },
  {
    id: 3,
    name: 'Coastal Restoration Initiative',
    type: 'Mangrove Restoration',
    date: 'Nov 12, 2025',
    location: 'San Diego, CA',
    match: 82,
  },
];

export function Quiz({ onNavigate }: QuizProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const progress = ((currentStep + 1) / questions.length) * 100;

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [questions[currentStep].id]: value });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-[#fafafa] pb-20">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Button
            variant="ghost"
            onClick={() => onNavigate('volunteer-map')}
            className="mb-6 text-[#1F1F12] hover:text-[#1F1F12]/80 rounded-xl gap-2"
          >
            <ArrowLeft size={20} />
            Back to Map
          </Button>

          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-[#FFDE59] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={40} className="text-[#1F1F12]" />
            </div>
            <h1 className="text-[#1F1F12] mb-2">Your Recommendations</h1>
            <p className="text-muted-foreground">
              Based on your answers, here are the best volunteer opportunities for you
            </p>
          </div>

          <div className="space-y-4 mb-8">
            {mockRecommendations.map((event) => (
              <Card key={event.id} className="p-6 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-[#1F1F12]">{event.name}</h3>
                      <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                        {event.match}% match
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{event.type}</p>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span>📅 {event.date}</span>
                      <span>📍 {event.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button
                    onClick={() => onNavigate('event-details')}
                    className="flex-1 bg-[#FFDE59] hover:bg-[#FFDE59]/90 text-[#1F1F12] rounded-xl"
                  >
                    View Details
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 rounded-xl border-[#1F1F12] text-[#1F1F12] hover:bg-[#1F1F12] hover:text-white"
                  >
                    Join Event
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex gap-4">
            <Button
              onClick={() => {
                setCurrentStep(0);
                setAnswers({});
                setShowResults(false);
              }}
              variant="outline"
              className="flex-1 rounded-xl border-[#1F1F12] text-[#1F1F12] hover:bg-[#1F1F12] hover:text-white"
            >
              Retake Quiz
            </Button>
            <Button
              onClick={() => onNavigate('volunteer-map')}
              className="flex-1 bg-[#FFDE59] hover:bg-[#FFDE59]/90 text-[#1F1F12] rounded-xl"
            >
              Explore All Events
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa] pb-20">
      <div className="max-w-3xl mx-auto px-6 py-8">
        <Button
          variant="ghost"
          onClick={() => onNavigate('volunteer-map')}
          className="mb-6 text-[#1F1F12] hover:text-[#1F1F12]/80 rounded-xl gap-2"
        >
          <ArrowLeft size={20} />
          Back to Map
        </Button>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-[#1F1F12]">Find Your Perfect Role</h1>
            <span className="text-muted-foreground">
              {currentStep + 1} of {questions.length}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card className="p-8 rounded-2xl">
          <h2 className="text-[#1F1F12] mb-6">{questions[currentStep].question}</h2>

          <div className="space-y-3 mb-8">
            {questions[currentStep].options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(option.value)}
                className={`w-full p-4 text-left rounded-xl border-2 transition-all ${
                  answers[questions[currentStep].id] === option.value
                    ? 'border-[#FFDE59] bg-[#FFDE59]/10'
                    : 'border-border hover:border-[#FFDE59]/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      answers[questions[currentStep].id] === option.value
                        ? 'border-[#FFDE59] bg-[#FFDE59]'
                        : 'border-border'
                    }`}
                  >
                    {answers[questions[currentStep].id] === option.value && (
                      <div className="w-2 h-2 bg-[#1F1F12] rounded-full" />
                    )}
                  </div>
                  <span className="text-[#1F1F12]">{option.label}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="flex gap-4">
            <Button
              onClick={handleBack}
              disabled={currentStep === 0}
              variant="outline"
              className="flex-1 rounded-xl border-[#1F1F12] text-[#1F1F12] hover:bg-[#1F1F12] hover:text-white disabled:opacity-50"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back
            </Button>
            <Button
              onClick={handleNext}
              disabled={!answers[questions[currentStep].id]}
              className="flex-1 bg-[#FFDE59] hover:bg-[#FFDE59]/90 text-[#1F1F12] rounded-xl disabled:opacity-50"
            >
              {currentStep === questions.length - 1 ? 'See Results' : 'Next'}
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
