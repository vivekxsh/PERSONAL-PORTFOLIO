import resumePdf from "../assets/Vivek_Kumar_Resume.pdf";

const Resume = () => {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-16 border-b border-neutral-900">
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-10">Resume</h2>

      {/* Action Buttons */}
      <div className="flex gap-4 mb-8">
        <a
          href={resumePdf}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-500 transition"
        >
          Open Full View
        </a>

        <a
          href={resumePdf}
          download
          className="px-5 py-2 rounded-lg border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition"
        >
          Download PDF
        </a>
      </div>

      {/* Viewer Container */}
      <div className="w-full max-w-5xl h-[85vh] rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900">
        <object
          data={resumePdf}
          type="application/pdf"
          className="w-full h-full"
        >
          {/* Fallback */}
          <div className="flex flex-col items-center justify-center h-full text-center p-6 text-neutral-400">
            <p className="mb-4">
              PDF preview is not supported in this browser.
            </p>

            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-500 transition"
            >
              Open Resume
            </a>
          </div>
        </object>
      </div>
    </div>
  );
};

export default Resume;