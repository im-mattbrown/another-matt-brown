export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5-columns font-bold mb-8">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          {/* Contact form goes here */}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          {/* Contact details (address, phone, email) go here */}
        </section>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Location</h2>
        {/* Map or location details go here */}
      </section>
    </div>
  );
}
