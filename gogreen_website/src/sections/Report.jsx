import { useState } from "react";
import classify from "../utils/classify";

const Report = () => {
  const [form, setForm] = useState({ title: "", description: "", lat: "", lng: "", photos: null });
  const [result, setResult] = useState(null);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // Very small local classifier demo based on keywords + presence of photo
    const urgency = classify({ title: form.title, description: form.description, photos: form.photos });
    setResult(urgency);
  };

  return (
    <section id="report" className="c-space section-spacing">
      <h2 className="text-heading">Report an Incident</h2>
      <p className="subtext">Report observed forest issues. Reporters should verify they are real people (CAPTCHA/backend verification will be added later).</p>

      <form onSubmit={onSubmit} className="mt-6 max-w-xl">
        <label className="block mb-2">Title<input name="title" value={form.title} onChange={onChange} className="w-full p-2 rounded bg-neutral-900" /></label>
        <label className="block mb-2">Description<textarea name="description" value={form.description} onChange={onChange} className="w-full p-2 rounded bg-neutral-900" /></label>
        <label className="block mb-2">Latitude<input name="lat" value={form.lat} onChange={onChange} className="w-full p-2 rounded bg-neutral-900" /></label>
        <label className="block mb-2">Longitude<input name="lng" value={form.lng} onChange={onChange} className="w-full p-2 rounded bg-neutral-900" /></label>
        <label className="block mb-2">Photos (optional)<input type="file" accept="image/*" name="photos" onChange={(e)=>setForm({...form, photos: e.target.files})} className="w-full p-2" /></label>
        <div className="mt-4">
          <button className="px-4 py-2 rounded bg-royal">Submit report</button>
        </div>
      </form>

      {result && (
        <div className="mt-4 p-4 rounded bg-neutral-900">
          <p>Predicted urgency: <strong>{result}</strong></p>
        </div>
      )}
    </section>
  );
};

export default Report;
