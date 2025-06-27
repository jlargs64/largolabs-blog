interface PdfViewerProps {
  path: string;
}
export default function PdfViewer(props: Readonly<PdfViewerProps>) {
  return (
    <div className="max-w-4xl mx-auto my-8 p-4 border border-gray-300 rounded-lg shadow-sm">
      {/* Inner container */}
      <div className="w-full h-[80vh]">
        <iframe
          title="Resume"
          src={props.path}
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </div>
  );
}
