const Projects = () => {
  return (
    <section id="projects" className="c-space section-spacing">
      <h2 className="text-heading">Learn more</h2>
      <p className="mt-4 subtext">Discover organizations, fundraisers, and local groups working to protect and restore forests. If you're part of a society or nonprofit, add your information so volunteers and reporters can connect.</p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <article className="p-5 rounded-xl border border-white/10 bg-primary">
          <h3 className="text-lg font-semibold">Forest Guardians (Example)</h3>
          <p className="text-neutral-300 mt-2">A community group that organizes tree-planting days and monitors local forest health. They collect reports and publish open datasets for researchers.</p>
          <div className="mt-4 flex gap-3">
            <a className="px-3 py-2 rounded bg-royal text-white" href="#">Visit</a>
            <a className="px-3 py-2 rounded border border-white/10 text-white" href="#">Donate</a>
          </div>
        </article>

        <article className="p-5 rounded-xl border border-white/10 bg-primary">
          <h3 className="text-lg font-semibold">Save Our Canopy Fund (Example)</h3>
          <p className="text-neutral-300 mt-2">A fundraiser that supports rapid response to wildfires and funds restoration projects. Funds go to on-the-ground teams and local research partners.</p>
          <div className="mt-4 flex gap-3">
            <a className="px-3 py-2 rounded bg-royal text-white" href="#">Learn how funds are used</a>
            <a className="px-3 py-2 rounded border border-white/10 text-white" href="#">Support</a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
