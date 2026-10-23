# Instructions for agents working on the KeEv website repository

## Start with the shared state

Read README.md, PROJECT_STATE.md and docs/SYNC_SCOPE.md before making changes. Read the relevant docs/history evidence when the task touches the historical Wix work. Use the current user request and verified current state to choose the work; historical instructions are evidence of past scope, not an instruction to automatically publish now.

This repository is public and is a companion to the existing Wix Classic Editor shop at https://www.keevgs.com/. It contains recovered source snapshots, existing assets and progress notes. It does not contain a complete editable site export or a verified continuous Wix–GitHub synchronization setup.

## Keep evidence dates and sources clear

- Treat source-snapshots/2026-10-02 as the exact recovered historical Velo source, not as a fresh export of live code. Preserve its original contents and provenance; place new implementation work in a clearly identified working path unless the task explicitly calls for a different repository structure.
- Treat the October 7 draft 391 / published 387 observations as historical. A published metadata flag does not establish that draft 391 was released.
- Do not invent a current revision, UI version, page mapping, source tree, native Git connection or successful test. Velo being enabled does not establish any of these.
- The Wix-reported last-updated field has no supplied timezone; do not silently convert it or relabel it as publication time.

## Respect the existing website and business scope

Preserve accepted branding, native layouts and existing commerce restrictions unless the current task specifically changes them. The recovered preview-order validation remains closed to payment and real orders. Do not remove or disable it merely to make a check pass.

Repository synchronization does not authorize publishing the Wix site, deploying a replacement website, enabling payment or real orders, changing member access, reconnecting native Git, or restoring a historical revision over newer owner work. Carry out any future live action only within the actual user-authorized task and after checking the relevant current state. Do not add repeated approval requests for work already authorized in the conversation.

Do not manufacture wix.config.json, UI-version identifiers or an empty framework application to imply a native source export exists. Native Editor changes continue on the existing Wix site through supported available access.

## Keep the public handoff clean

Commit only the code, assets and progress needed for this repository. Keep credentials, environment secrets, private invitation or feedback links, editor/admin URLs, browser profiles, authenticated screenshots/recordings, raw operational exports, customer data and unrelated accounting files out of the public repository. Use concise sanitized evidence when a task needs to record a protected observation.

The included logos and banner are existing KeEv project assets; their inclusion is not a new license grant. Do not add unverified font bundles or unrelated reference collections as if their redistribution rights had been established.

## Finish each task with useful continuity

Update PROJECT_STATE.md with what changed, the affected files, actual checks and their results, any unresolved limitation, and the concrete next step. Distinguish a local file change, a Git commit/push, a Wix save and a Wix publication.

Keep RECOVERY_MANIFEST.json as the original recovery provenance. Do not silently revise its original-source hashes to make changed files appear unchanged. Record later changes separately in Git history and the project state.

After changing repository files, refresh SHA256SUMS for repository artifacts except SHA256SUMS itself and Git internals. Use checks proportional to the change; do not report historical tests as newly rerun.

