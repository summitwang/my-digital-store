// app/contact/page.tsx  ← Shown at http://localhost:3000/contact

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-white mb-3">Get in Touch</h1>
        <p className="text-gray-400 text-lg">
          Have a question? We&apos;re here to help. Send us a message and we&apos;ll respond within 24 hours.
        </p>
      </div>

      {/* Contact info cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {[
          { icon: "📧", label: "Email", value: "support@softwarehub.com" },
          { icon: "⏰", label: "Hours", value: "Mon–Fri, 9am–6pm" },
          { icon: "⚡", label: "Response", value: "Within 24 hours" },
        ].map((item) => (
          <div key={item.label} className="bg-gray-900 border border-gray-800 rounded-2xl p-5 text-center">
            <div className="text-2xl mb-2">{item.icon}</div>
            <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">{item.label}</p>
            <p className="text-white text-sm font-medium">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      {/* NOTE for beginners: This form shows the UI but doesn't send emails yet.
          To make it work, you'd need a service like Resend, Formspree, or EmailJS. */}
      <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">
        <h2 className="text-xl font-semibold text-white mb-6">Send a Message</h2>

        <div className="space-y-5">
          {/* Name & Email in a row on larger screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Smith"
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm text-gray-400 mb-2">
              Subject
            </label>
            <select
              id="subject"
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
            >
              <option value="">Select a topic...</option>
              <option>Order & Delivery</option>
              <option>License Activation Help</option>
              <option>Refund Request</option>
              <option>Product Question</option>
              <option>Other</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Describe your question or issue..."
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="button"
            className="w-full py-3.5 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white transition-all shadow-lg"
          >
            Send Message →
          </button>
        </div>
      </div>

      {/* FAQ teaser */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        💡 Looking for quick answers?{" "}
        <span className="text-blue-400 cursor-pointer hover:text-blue-300">
          Check our FAQ
        </span>
      </div>
    </div>
  );
}
