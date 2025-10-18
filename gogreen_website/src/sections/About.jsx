const About = () => {
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">goGreen — Community Forest Reporting</h2>

      <div className="mt-8 prose max-w-none">
        <p>
          goGreen is a community-driven platform to report forest disturbances, collect data for
          researchers, and connect volunteers to local restoration and monitoring efforts.
        </p>

        <p>Roles:</p>
        <ul>
          <li>
            <strong>Reporter</strong> — a verified human who files on-site reports (photos, location,
            description). We recommend adding CAPTCHA and optional phone/email verification to reduce
            spam and ensure report quality.
          </li>
          <li>
            <strong>Volunteer</strong> — register and choose locations you want to help. Volunteers can
            receive task assignments from researchers and local organizers.
          </li>
        </ul>

        <p>Planned features:</p>
        <ul>
          <li>Interactive U.S. map with NASA imagery/tile layers for context.</li>
          <li>Report ingestion and an urgency classifier (urgent / medium / good) to help triage.</li>
          <li>Volunteer matching by geography and availability.</li>
        </ul>

        <div className="mt-6 flex gap-3">
          <a href="#report" className="px-4 py-2 rounded-md bg-royal hover:bg-lavender text-white">Report an incident</a>
          <a href="#volunteer" className="px-4 py-2 rounded-md bg-royal hover:bg-lavender text-white">Become a volunteer</a>
          <a href="#map" className="px-4 py-2 rounded-md border border-white/10 text-white">View map</a>
        </div>

        <p className="mt-6 text-sm text-neutral-300">
          Note: This is an initial UI and architecture draft. Backend, authentication, CAPTCHA (e.g.
          reCAPTCHA), and map integrations will be added in follow-ups.
        </p>
      </div>
    </section>
  );
};

export default About;
