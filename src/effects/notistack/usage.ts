export const usage = {
  install: "bun add notistack",
  tsx: `"use client";

import { SnackbarProvider, enqueueSnackbar } from "notistack";

function App() {
  return (
    <SnackbarProvider maxSnack={5} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
      <NotificationButtons />
    </SnackbarProvider>
  );
}

function NotificationButtons() {
  return (
    <div style={{ display: "flex", gap: 12, padding: 24 }}>
      <button onClick={() => enqueueSnackbar("Success!", { variant: "success" })}>
        Success
      </button>
      <button onClick={() => enqueueSnackbar("Error!", { variant: "error" })}>
        Error
      </button>
      <button onClick={() => enqueueSnackbar("Warning!", { variant: "warning" })}>
        Warning
      </button>
      <button onClick={() => enqueueSnackbar("Info!", { variant: "info" })}>
        Info
      </button>
    </div>
  );
}

export default App;`,
};
