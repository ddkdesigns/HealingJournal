# Project rules
- Keep the marketing landing page in the index route and its visual rules scoped under `.journal-site`; this keeps legal page styling independent.
- Use the shared PhotoPlaceholder component for unprovided photography; this makes intended image positions explicit without inventing user assets.
- Keep landing-page photo loading and error state local to its photo wrapper, using the shared placeholder on failure; this avoids affecting legal routes.
- Use the shared Button component for landing-page controls and CSS semantic palette tokens for their styling; this keeps controls accessible and colors consistent.
- Build landing-page phone mockups as JSX/CSS screens, not screenshots, and keep decorative clouds as transparent bundled webp images; this keeps previews editable and matching app copy.
