# DevKit

DevKit is a background macOS utility that lives at the edge of the screen. It overlays whatever you are already doing and stays out of the way until you need it.

The product is one object: the **Utility Belt**. Brush a screen edge, use a tool for a few seconds, and go back to work. Safari, Xcode, Finder, and games stay full screen. The belt appears over them. It never pushes, resizes, or rearranges other applications.

Current release: **0.33.2** (build 73).

## Who it is for

Someone already working in another Mac application who needs a tool for a moment:

- Save the last few seconds of the screen
- Convert or shrink a file just selected in Finder
- Glance at CPU, memory, GPU, frame rate, temperature, power, ping, network, or storage
- Keep a clipboard slot, a sticky note, or a task list within reach
- Change which tools sit on the belt

They can do this without leaving the current app in any meaningful way.

## How a session feels

1. You are working in another Mac application.
2. You press the cursor against the part of the screen edge where a belt is placed, and hold briefly.
3. That Utility Belt appears.
4. The tools are recognizable from their icons.
5. You click a tool, such as Replay.
6. Its panel expands smoothly from that icon.
7. You use the tool.
8. You press Escape.
9. The panel contracts back toward the icon.
10. You move the cursor away.
11. The Utility Belt disappears.
12. You continue in the original application.

The belt should feel almost instantaneous, like an auto-hidden Dock.

## The Utility Belt

The belt is a compact strip of SF Symbol icons plus quiet chrome for the profile, customization, and settings. More than one belt can be live at once. Each one sits along a screen edge — left, right, bottom, or top — as a fully rounded pill with a small gap from the edge, so the desktop shows behind the outer corners. Studio Layout places them on corners and midpoints and slides them along the edge.

Default behavior:

- Cursor away: belts are hidden.
- Cursor presses against a belt’s edge segment (plus a small buffer past each end) and dwells briefly: that belt slides in.
- Cursor stays over that belt, its trigger, or its attached tool: that belt stays out.
- Cursor leaves: that belt hides after a short delay.
- Other belts stay independent.

Auto-hide is on by default. Turning it off in Settings keeps the belt visible; that is an explicit preference.

Two optional hold-key actions are off until you turn them on. The key is Shift unless you change it.

- **Click through.** Holding the key fades visible belts, closes attached tool panels, and lets the pointer work in the app underneath. Floating tools, minimized chips, sticky notes, and the Stats HUD stay.
- **Show belts.** A hidden belt appears only while the key is held against its edge.

### Opening a tool

A tool is an icon on the belt. Clicking the icon opens it. The panel grows outward from that icon: to the right of a left belt, to the left of a right belt, upward from a bottom belt, and downward from a top belt. The belt stays small. The tool can be larger and extend into the screen.

Attached panels hide when their belt hides. Drag a panel inward past a threshold and it becomes a lightweight floating utility you can park while you work. Some tools can also minimize to a small status chip, or keep running with no visible UI.

Dismiss an attached tool by clicking its icon again, pressing Escape, clicking outside, or using the close control. Converter and Shrinker stay open on an outside click so you can still drop files from Finder. Clicking outside does not steal the previous app.

Right-click an icon for a native macOS menu: Open, Settings, Favorite, Pin, Remove from Belt, and About.

## Profiles and layout

Profiles live behind the belt. Three ship with the app:

| Profile | Starting tools |
|---|---|
| Default | Replay, Converter, Shrinker, Clipboard, Notes, Stats |
| Work | Converter, Shrinker, Clipboard, Stats |
| Gaming | Replay, Stats |

A profile decides which tools appear, their order, and per-tool settings. You can add your own belts. Tools that are not on a belt wait in the Tool Library until you drag them on.

Switch belts from a live belt: the profile icon, a long press, a secondary click, a keyboard shortcut, or a small expansion. Picking another belt occupies that slot.

**Studio** is the secondary customization window, with three sections:

- **Profiles** — rearrange tools on a belt the way you customize the Dock. Drag to reorder, drag off to remove, drag from the library to add.
- **Library** — an icon grid of tools not currently on the belt.
- **Layout** — drag belts onto screen edges, slide them along the edge, rotate in 90° steps, and delete a placement. The same belt can occupy more than one slot. Size is on that belt’s context menu. Layout will not place a belt on an edge where a visible Dock would cover it.

Studio is not required for everyday use. The belt is the product.

## Built-in tools

### Stats

A live reading on the belt icon — CPU by default, or GPU, RAM, frame rate, or temperature, chosen per belt. Open the panel for a row of widgets you pick, then one collapsible section per subsystem: CPU, GPU, Memory, Network, Disk, Sensors, and System. It opens lean, with a few widgets and every section closed. A collapsed section still shows its current value beside its name.

Readings use only what macOS can actually provide. If frame rate, GPU, temperature, power, ping, or network cannot be read, the panel shows an unavailable mark. It never invents a number.

- **Frame rate** is the main display’s measured refresh, shown with the GPU.
- **CPU** covers overall usage, performance and efficiency cores when the hardware exposes them, and the processes using the most CPU.
- **Memory** covers app, wired, and compressed RAM, plus the processes using the most memory.
- **GPU** covers utilization when the system exposes it, plus renderer, tiler, and GPU memory.
- **Disk** shows read and write throughput as two sides of one graph, with volume used and total as a detail.
- **Battery** shows charge, charging state, condition, capacity against design, and cycle count.
- **Sensors** show CPU, GPU, SSD, and battery temperatures, plus power, voltage, and current where this Mac reports them.
- **Network** shows inbound and outbound rates as two sides of one graph, plus the busiest interfaces.
- **Ping** is latency to the public internet.
- **System** is one fact per row: chip, graphics, memory, display, battery, and uptime.

Process and interface usage is shown as the real number — a percent, a size, a rate — rather than a bar you have to interpret. A row that has a history opens its own graph when clicked. Clicking a widget opens the matching section.

Stats is meant to float in a corner while you work. It can also show an optional always-on HUD: one row of the metrics you choose, themed like the belt, parked on the left or right or dragged anywhere on the display, including the menu bar. It is off by default and fades when the pointer is nearby. The HUD does not hide with the belt.

### Replay

Keeps a rolling recording of the screen, from 1 second to 5 minutes. The buffer always holds the last stretch of that length. Filling it does not stop or reset the recording. Closing the panel does not stop the buffer. If macOS ends the capture, Replay starts it again until you pause it.

The attached panel shows recording status, a duration control, a save action, and any error. Settings cover duration, quality, resolution, audio, save location, and file format. A keyboard shortcut can save the buffer without opening the belt.

By default, clicking the Replay icon opens the panel, the same as every other tool. An optional setting makes a click save immediately, with a short “Saved” confirmation beside the belt; in that mode a right-click opens the panel.

### Converter

Drag files from Finder onto the panel, or click the drop area to choose them. Dropped images show as thumbnails. Each file is its own card, with a format and options. Convert, then see progress, success, or an honest error. Quality and the output folder live in the tool’s settings. A finished file is saved under a new name, so the original is left alone.

The panel stays open when you click outside, so a drop from Finder still lands. It hides with the belt unless you have floated it. A conversion already running continues in the background.

### Shrinker

The same drop target as Converter. Each file is a card for its whole life and becomes its result in place. A strength slider runs from the file’s own size to the smallest this tool can make it, with both ends labeled and an estimate under the slider. An options control holds the compression settings, including an opt-in that extends the gentle end of the slider to maximum encoding quality — that end can come out larger than the original, and the panel says so.

A preview sits under its own disclosure, open by default. Results wait in a staging area until you save them. Saving or dragging never replaces the original file.

### Clipboard

Save slots for the system clipboard: text, images, and files. Click a row, or its Copy button, or hover a row and press Command-C, to put that slot on the pasteboard. Then paste with Command-V in the app you are already using. Paste on a row replaces that slot from the current clipboard. An empty row at the end captures whatever is on the clipboard now. Each row can take a title, and text slots can be edited. Remove a slot from the row.

DevKit does not intercept Command-C, Command-V, or Command-X in other apps. Copies that password managers mark as concealed are skipped. Slot contents are remembered across launches under Application Support.

### Notes

Sticky notes that float over your work. The belt panel lists them as a two-column grid of tiles or as one row per note with its first line. Two icons above the list switch between those views. A dashed add control creates a note at the center of the current screen and shows it.

Each note is a small rounded sticky in a belt-theme color, with a format bar — bold, italic, underline, strikethrough, and smaller or larger type for the selected text — and a rich text area with a visible caret. Drag the top bar to move it. Drag any edge or corner to resize it. Click the name on the note to rename it. The note that holds the keyboard is ringed in the system accent color.

Closing and deleting are different. The close control puts the note in a Closed section at the bottom of the panel, collapsed by default, with its text, color, and size kept. Clicking it puts the window back. Delete always asks first, and it is the only action that loses the text.

Note windows do not hide with the belt. They come back after relaunch with their text, color, size, and position. The belt panel itself disappears with the belt.

### Tasks

A task list signed in with Google. You paste an OAuth client ID in Settings → Accounts. DevKit stores the signed-in account’s identity with your preferences and keeps tokens in the Keychain, not in the settings file. While Google’s consent screen is in testing, only listed test users can sign in, and refresh tokens expire after seven days.

## Settings

Application settings open from the belt or from Studio. They use the standard macOS Settings window.

**Utility Belt.** Auto-hide, how long the pointer must stay at the edge before a belt appears, how long a belt stays after the pointer leaves, default size for newly placed belts, trigger sensitivity, animation speed, icon spacing, optional labels (off by default), and the hold-key action.

**Appearance.** System, Light, or Dark. Accent follows your macOS accent color. Transparency is the default a belt on the Clear theme follows. Each belt has its own theme: opacity, corner radius, border width, border opacity, and an accent when the theme is Custom. Icon ink can be automatic, white, or black. Studio can show the running version and build.

**Behavior.** Launch at login, Reduce Motion, an optional menu bar extra that summons the belt, and keyboard shortcuts. Summon defaults to Control-Option-D. Shortcuts for the Stats overlay, starting or pausing the Replay buffer, and saving Replay are unset until you record them. Global shortcuts need Accessibility permission so they reach other apps.

Tool-specific settings — Replay quality, Converter defaults, Shrinker strength, the Stats layout, Clipboard retention, Notes defaults — open in Studio’s inspector for that tool. Compact controls stay on the overlay, such as Replay’s duration and save button, and the Stats HUD chips.

## What stays across launches

Restarting the Mac restores your setup:

- Profiles, tool order, favorites, and per-tool settings
- Belt placements: edge, position along the edge, rotation, and size
- Belt defaults: auto-hide, delays, size, animation, spacing, labels
- Appearance, shortcuts, and the hold-key action
- Floating and minimized tool positions
- The Stats HUD: on or off, which metrics, which side, and where it sits
- Notes: text with mixed sizes, name, icon, color, light or dark ink, closed state, and window frame
- Clipboard slots, when remembering them is on

A cold start leaves belts hidden and no tool panel attached. Floating tools you left out come back. Attached panels do not reopen by themselves.

Preferences live in `~/Library/Application Support/DevKit/`. Notes and clipboard payloads are stored beside that file. Secrets are not written into the preferences file.

## Look and interaction

DevKit uses SwiftUI, SF Symbols, system type, system colors, and native materials. Light Mode, Dark Mode, and the system appearance are all first-class. The user’s accent color marks selection. Charts use their own series colors so two lines stay distinct.

Belt glyphs are solid monochrome icons, with no plate behind them on the live strip. Optional labels are off by default. The active tool is marked with an accent outline on its hit target. Motion is short: the belt slides out from the edge, and a tool panel dissolves in from its icon. Reduce Motion, in the system or in DevKit, drops travel animations.

Clickable icons, buttons, and tiles use a pointing-hand cursor. Text fields keep the I-beam. Every belt icon has a VoiceOver label and a tooltip. Arrow keys move along the belt, Return or Space opens a tool, and Escape dismisses it.

## Platform

| | |
|---|---|
| Platform | macOS 14 or later |
| Kind | Menu-bar-capable utility with an optional Dock icon |
| Bundle ID | `com.hansonfang.DevKit` |
| Interface | SwiftUI hosted in borderless utility panels |

Permissions, when a feature needs them:

- **Screen Recording** for Replay. The grant is tied to the app’s code signature.
- **Accessibility** for global shortcuts and for the Show belts hold-key action while another app is in front.

The first version is not sandboxed, so the overlay, screen capture, and file conversion can work across the system.
