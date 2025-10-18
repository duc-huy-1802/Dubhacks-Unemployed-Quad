// Very small heuristic classifier for report urgency.
// Input: { title, description, photos }
export default function classify({ title = "", description = "", photos = null }) {
  const text = (title + " " + description).toLowerCase();
  // keywords for urgent situations
  const urgentKeywords = ["fire", "smoke", "burning", "clearcut", "illegal logging", "sinkhole"];
  const mediumKeywords = ["injured", "downed tree", "erosion", "flood", "flooding", "pest"];

  if (photos && photos.length > 0) {
    // presence of photos increases confidence; but still check keywords
    if (urgentKeywords.some(k => text.includes(k))) return 'urgent';
    if (mediumKeywords.some(k => text.includes(k))) return 'medium';
    return 'medium';
  }

  if (urgentKeywords.some(k => text.includes(k))) return 'urgent';
  if (mediumKeywords.some(k => text.includes(k))) return 'medium';
  return 'good';
}
