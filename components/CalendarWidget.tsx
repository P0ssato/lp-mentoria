"use client";

/* ─────────────────────────────────────────
   CalendarWidget

   Placeholder container for Google Calendar
   integration. Replace the inner content with
   your Google Calendar scheduling embed.

   To integrate Google Calendar:
   1. Go to calendar.google.com → Settings → [Your Calendar]
   2. In "Integrate calendar", copy the embed code
   3. Or use Google Calendar Appointment Scheduling (Workspace)
   4. Replace the placeholder below with the <iframe> embed code

   Example:
   <iframe
     src="https://calendar.google.com/calendar/appointments/schedules/YOUR_SCHEDULE_ID?gv=true"
     style={{ border: 0, width: "100%", height: "600px" }}
     frameBorder="0"
   />
───────────────────────────────────────── */

export default function CalendarWidget() {
  return (
    <div
      id="calendar-widget"
      style={{
        width: "100%",
        minHeight: "500px",
        border: "1px solid var(--color-border)",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 24px",
        marginTop: "8px",
      }}
    >
      {/*
        ══════════════════════════════════════════
        INTEGRAÇÃO GOOGLE CALENDAR

        Substitua este bloco pelo iframe do Google Calendar:

        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/SEU_ID_AQUI?gv=true"
          style={{ border: 0, width: '100%', height: '600px' }}
          frameBorder="0"
        />
        ══════════════════════════════════════════
      */}
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          alignItems: "center",
        }}
      >
        {/* Decorative calendar icon — minimal geometric, no generic icons */}
        <div
          aria-hidden="true"
          style={{
            width: "48px",
            height: "48px",
            border: "1.5px solid var(--color-border)",
            borderRadius: "6px",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            marginBottom: "8px",
          }}
        >
          <div
            style={{
              height: "14px",
              background: "var(--color-primary)",
              opacity: 0.9,
            }}
          />
          <div
            style={{
              flex: 1,
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2px",
              padding: "4px",
            }}
          >
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                style={{
                  background: "var(--color-border)",
                  borderRadius: "1px",
                }}
              />
            ))}
          </div>
        </div>

        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "15px",
            color: "var(--color-text-secondary)",
            maxWidth: "320px",
            lineHeight: 1.6,
          }}
        >
          Agenda integrada em breve.
          <br />
          <span style={{ fontSize: "13px" }}>
            Integre seu Google Calendar aqui conforme as instruções no README.
          </span>
        </p>
      </div>
    </div>
  );
}
