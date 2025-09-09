export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        {/* Company story content goes here */}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        {/* Mission statement content goes here */}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        {/* Team members content goes here */}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        {/* Company values content goes here */}
      </section>
    </div>
  );
}
