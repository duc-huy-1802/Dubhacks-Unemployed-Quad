import { useState } from "react";

const Volunteer = () => {
  const [form, setForm] = useState({ name: "", email: "", locationPreference: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => { e.preventDefault(); alert('Volunteer registered (frontend demo): ' + JSON.stringify(form)); };

  return (
    <section id="volunteer" className="c-space section-spacing">
      <h2 className="text-heading">Volunteer</h2>
      <p className="subtext">Register as a volunteer and choose areas where you'd like to help.</p>

      <form onSubmit={onSubmit} className="mt-6 max-w-md">
        <label className="block mb-2">Name<input name="name" value={form.name} onChange={onChange} className="w-full p-2 rounded bg-neutral-900" /></label>
        <label className="block mb-2">Email<input name="email" value={form.email} onChange={onChange} className="w-full p-2 rounded bg-neutral-900" /></label>
        <label className="block mb-2">Location preference (city, county, or coords)<input name="locationPreference" value={form.locationPreference} onChange={onChange} className="w-full p-2 rounded bg-neutral-900" /></label>
        <div className="mt-4"><button className="px-4 py-2 rounded bg-royal">Register</button></div>
      </form>
    </section>
  );
};

export default Volunteer;
