export default function AssignmentsLayout({ children }) {
  return (
    <div>
      {/* <header>
        <h1>display area</h1>
      </header> */}

      <main className="flex justify-center" id="assignments-section">
        {children}
      </main>
    </div>
  );
}
