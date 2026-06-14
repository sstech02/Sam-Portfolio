export function TimelineSection() {
  return (
    <section id="timeline">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-num">04 /</span>
          <h2 className="sec-title">Timeline</h2>
          <span className="sec-sub">// experience and education</span>
        </div>
        <div className="timeline">
          <div className="timeline-side">
            // selected milestones,
            <br />
            most recent first
          </div>
          <div className="timeline-list">
            <div className="tl-item current">
              <div className="tl-date">
                FEB 2026 — PRESENT <span className="tl-badge">Now</span>
              </div>
              <div className="tl-role">Production Cook</div>
              <div className="tl-org">American Dining Creations · Appleton, WI</div>
              <div className="tl-desc">
                Day job while I finish the residency. Building discipline and consistency
                that translates directly to shipping software on tight deadlines.
              </div>
            </div>

            <div className="tl-item">
              <div className="tl-date">SEP 2025 — SEP 2026</div>
              <div className="tl-role">Student · Frontend Engineering Residency</div>
              <div className="tl-org">Frontend Simplified Institute</div>
              <div className="tl-desc">
                12-month structured program. Production projects across React, Next.js,
                TypeScript, Firebase, Stripe, and REST integrations. Five deployed apps
                to date.
              </div>
            </div>

            <div className="tl-item">
              <div className="tl-date">2024 — 2025</div>
              <div className="tl-role">Cook · Line Cook</div>
              <div className="tl-org">HopYard · Denali Brewpub</div>
              <div className="tl-desc">
                Night-shift kitchens. Multitasking, prep, cleaning, and restocking under
                pressure. Honed the operational discipline I now bring to code reviews
                and deploys.
              </div>
            </div>

            <div className="tl-item">
              <div className="tl-date">2020 — 2023</div>
              <div className="tl-role">Associate Degree</div>
              <div className="tl-org">Fox Valley Technical College</div>
              <div className="tl-desc">
                Foundational coursework and early exposure to the engineering mindset
                that pulled me toward software.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
